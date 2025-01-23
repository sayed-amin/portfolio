import React from 'react';

const Logo = () => {
    return (
        <div 
            className="navbar-logo"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img 
                src="/bluelogo.png"  
                alt="Custom Logo"
                style={{
                    height: 'auto',   // Allows dynamic resizing
                    width: '100%',    // Takes full width of container
                    maxWidth: '150px', // Prevents it from getting too large
                    maxHeight: '50px', // Keeps it within navbar height
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};


export default Logo;
