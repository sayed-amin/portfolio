import React, { useRef, useState } from 'react'
import classes from './ClippedButton.module.css'
import { Link } from 'react-router-dom'

const ClippedButton = ({ onClick, to, color, className, children }) => {
    const btnRef = useRef(null);
    const [magTransform, setMagTransform] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;
        setMagTransform({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setMagTransform({ x: 0, y: 0 });
    };

    const handler = onClick ? onClick : () => { };

    const magneticStyle = {
        transform: `translate(${magTransform.x}px, ${magTransform.y}px)`,
        transition: magTransform.x === 0 && magTransform.y === 0
            ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : 'none',
        willChange: 'transform',
    };

    return (
        <Link
            ref={btnRef}
            onClick={handler}
            to={to}
            className={[classes.btn, classes[color], className].join(" ")}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={magneticStyle}
        >
            <span>{children}</span>
        </Link >
    )
}

export default ClippedButton;