import React, { useState, useEffect } from 'react';

const butterflies = [
    { id: 1, size: 16, color: '#fbbf24', delay: 0, duration: 25, path: 'path1', opacity: 0.2 },
    { id: 2, size: 12, color: '#34d399', delay: 8, duration: 30, path: 'path2', opacity: 0.15 },
    { id: 3, size: 14, color: '#fbbf24', delay: 15, duration: 28, path: 'path3', opacity: 0.18 },
    { id: 4, size: 10, color: '#34d399', delay: 5, duration: 35, path: 'path4', opacity: 0.12 },
];

const Butterfly = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (isMobile) return null;

    return (
        <>
            <style>{`
                @keyframes flapWings {
                    0%, 100% { transform: rotateY(0deg) rotateZ(-15deg); }
                    50% { transform: rotateY(70deg) rotateZ(-15deg); }
                }
                @keyframes flapWingsRight {
                    0%, 100% { transform: rotateY(0deg) rotateZ(15deg); }
                    50% { transform: rotateY(-70deg) rotateZ(15deg); }
                }
                @keyframes floatPath1 {
                    0% { transform: translate(-5vw, 30vh) rotate(20deg); }
                    15% { transform: translate(15vw, 20vh) rotate(-10deg); }
                    30% { transform: translate(35vw, 40vh) rotate(15deg); }
                    50% { transform: translate(55vw, 25vh) rotate(-5deg); }
                    70% { transform: translate(75vw, 45vh) rotate(10deg); }
                    85% { transform: translate(90vw, 30vh) rotate(-15deg); }
                    100% { transform: translate(105vw, 35vh) rotate(20deg); }
                }
                @keyframes floatPath2 {
                    0% { transform: translate(105vw, 60vh) rotate(-10deg); }
                    20% { transform: translate(80vw, 50vh) rotate(15deg); }
                    40% { transform: translate(55vw, 70vh) rotate(-20deg); }
                    60% { transform: translate(30vw, 55vh) rotate(10deg); }
                    80% { transform: translate(10vw, 65vh) rotate(-5deg); }
                    100% { transform: translate(-5vw, 50vh) rotate(-10deg); }
                }
                @keyframes floatPath3 {
                    0% { transform: translate(-5vw, 70vh) rotate(5deg); }
                    25% { transform: translate(25vw, 55vh) rotate(-15deg); }
                    50% { transform: translate(50vw, 80vh) rotate(10deg); }
                    75% { transform: translate(75vw, 60vh) rotate(-10deg); }
                    100% { transform: translate(105vw, 75vh) rotate(5deg); }
                }
                @keyframes floatPath4 {
                    0% { transform: translate(105vw, 15vh) rotate(-5deg); }
                    30% { transform: translate(70vw, 25vh) rotate(15deg); }
                    60% { transform: translate(35vw, 10vh) rotate(-10deg); }
                    100% { transform: translate(-5vw, 20vh) rotate(-5deg); }
                }
            `}</style>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden',
            }}>
                {butterflies.map((b) => (
                    <div
                        key={b.id}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            animation: `float${b.path.charAt(0).toUpperCase() + b.path.slice(1)} ${b.duration}s ease-in-out ${b.delay}s infinite alternate`,
                            opacity: b.opacity,
                        }}
                    >
                        {/* Butterfly body */}
                        <div style={{
                            position: 'relative',
                            width: `${b.size}px`,
                            height: `${b.size * 0.3}px`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            perspective: '100px',
                        }}>
                            {/* Left wing */}
                            <div style={{
                                position: 'absolute',
                                right: '50%',
                                width: `${b.size}px`,
                                height: `${b.size * 0.7}px`,
                                background: `linear-gradient(135deg, ${b.color}, ${b.color}88)`,
                                borderRadius: '50% 50% 50% 0%',
                                transformOrigin: 'right center',
                                animation: `flapWings 0.4s ease-in-out infinite`,
                            }} />
                            {/* Right wing */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                width: `${b.size}px`,
                                height: `${b.size * 0.7}px`,
                                background: `linear-gradient(225deg, ${b.color}, ${b.color}88)`,
                                borderRadius: '50% 50% 0% 50%',
                                transformOrigin: 'left center',
                                animation: `flapWingsRight 0.4s ease-in-out infinite`,
                            }} />
                            {/* Body */}
                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                width: '2px',
                                height: `${b.size * 0.5}px`,
                                background: b.color,
                                borderRadius: '1px',
                                opacity: 0.6,
                            }} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Butterfly;
