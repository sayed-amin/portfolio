import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className, style }) => {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState('');
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseLeave = () => {
        setTransform('');
        setGlowPos({ x: 50, y: 50 });
    };

    return (
        <div
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                transform: transform,
                transition: transform ? 'none' : 'transform 0.5s ease',
                willChange: 'transform',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Spotlight overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(96, 165, 250, 0.12), transparent 50%)`,
                    opacity: transform ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2,
                    borderRadius: 'inherit',
                }}
            />
            {children}
        </div>
    );
};

export default TiltCard;
