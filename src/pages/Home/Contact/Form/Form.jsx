import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./Form.module.css";
import ClippedButton from '../../../../components/ClippedButton/ClippedButton';
import { Box, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

// EmailJS Configuration
const SERVICE_ID = "service_maopls6";
const TEMPLATE_ID = "template_o201gdi";
const USER_ID = "7v6TONgExYxxQrVIM";

// Email validation function
const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const isEmailValid = (email) => emailRegex.test(email);

const Form = ({ className }) => {
    const classes = useStyles();
    const [formStates, setFormStates] = useState({
        email: "",
        message: "",
        loading: false,
    });

    const submitForm = async (event) => {
        event.preventDefault();

        if (formStates.loading) return;
        if (!formStates.email || !formStates.message) {
            alert("Please fill all the fields");
            return;
        }
        if (!isEmailValid(formStates.email)) {
            alert("Please enter a valid email");
            return;
        }

        setFormStates((prev) => ({ ...prev, loading: true }));

        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            email: formStates.email,
            message: formStates.message
        }, USER_ID)
        .then(() => {
            alert("Message sent successfully!");
            setFormStates({ email: "", message: "", loading: false });
        })
        .catch((error) => {
            alert("Error sending message. Please try again.");
            setFormStates((prev) => ({ ...prev, loading: false }));
        });
    };

    return (
        <div className={[className, styles.form, classes.form].join(" ")}>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                <EmailSvg />
                <TextField
                    label="Your Email"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    value={formStates.email}
                    onChange={(e) => setFormStates((prev) => ({ ...prev, email: e.target.value }))}
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                <MessageSvg />
                <TextField
                    label="Message"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    multiline
                    rows={6}
                    value={formStates.message}
                    onChange={(e) => setFormStates((prev) => ({ ...prev, message: e.target.value }))}
                />
            </Box>
            <SendButton submitForm={submitForm} loading={formStates.loading} />
            
        </div>
    );
};

const useStyles = makeStyles(() => ({
    form: {
        '& .MuiInputBase-input': { color: 'white' },
        '& .MuiFormLabel-root': { color: 'white' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgb(255 255 255 / 0.5)' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: '#ed6c02' },
        },
        '& .MuiSvgIcon-root': { color: 'rgb(255 255 255 / 0.7)', mr: 1, my: 0.5 },
    }
}));

const SendButton = ({ loading, submitForm }) => (
    <ClippedButton onClick={submitForm} color="skyblue" className={[styles.clippedButton, loading ? styles.disabled : ""].join(" ")}>
        {loading ? "Sending..." : "Send Message"}
    </ClippedButton>
);

const EmailSvg = () => <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>;

const MessageSvg = () => <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2z"></path></svg>;

export default Form;
