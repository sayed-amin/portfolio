import React, { useEffect, useRef, useState, useCallback } from 'react';

const SpotlightCursor = () => {
    const overlayRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const mousePos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePosition = useCallback(() => {
        const el = overlayRef.current;
        if (!el) return;

        currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.15);
        currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.15);

        el.style.setProperty('--mouse-x', `${currentPos.current.x}px`);
        el.style.setProperty('--mouse-y', `${currentPos.current.y}px`);

        rafId.current = requestAnimationFrame(updatePosition);
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);
        rafId.current = requestAnimationFrame(updatePosition);

        const fadeTimer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
            clearTimeout(fadeTimer);
        };
    }, [isMobile, updatePosition]);

    if (isMobile) return null;

    return (
        <div
            ref={overlayRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1,
                pointerEvents: 'none',
                background:
                    'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(96, 165, 250, 0.06), transparent 40%)',
                willChange: 'background',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                '--mouse-x': '50%',
                '--mouse-y': '50%',
            }}
        />
    );
};

export default SpotlightCursor;
