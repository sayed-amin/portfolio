import React, { useRef, useEffect, useState, useCallback } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const [mounted, setMounted] = useState(false);

    const getParticleCount = useCallback(() => {
        if (typeof window === 'undefined') return 40;
        return window.innerWidth < 768 ? 30 : 60;
    }, []);

    const createParticle = useCallback((width, height) => {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.5,
            baseX: 0,
            baseY: 0,
        };
    }, []);

    const initParticles = useCallback((width, height) => {
        const count = getParticleCount();
        const particles = [];
        for (let i = 0; i < count; i++) {
            const p = createParticle(width, height);
            p.baseX = p.x;
            p.baseY = p.y;
            particles.push(p);
        }
        return particles;
    }, [getParticleCount, createParticle]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        setCanvasSize();
        particlesRef.current = initParticles(width, height);

        // Mouse tracking
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = -9999;
            mouseRef.current.y = -9999;
        };

        // Resize handling
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setCanvasSize();
                particlesRef.current = initParticles(width, height);
            }, 200);
        };

        // Visibility handling for performance
        let isVisible = true;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isVisible = false;
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                    animationFrameRef.current = null;
                }
            } else {
                isVisible = true;
                if (!animationFrameRef.current) {
                    animate();
                }
            }
        };

        const CONNECTION_DISTANCE = 120;
        const MOUSE_RADIUS = 150;
        const MOUSE_FORCE = 0.8;

        const animate = () => {
            if (!isVisible) return;

            ctx.clearRect(0, 0, width, height);
            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Mouse repulsion
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_RADIUS && dist > 0) {
                    const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    p.x += Math.cos(angle) * force * MOUSE_FORCE;
                    p.y += Math.sin(angle) * force * MOUSE_FORCE;
                }

                // Gentle floating movement
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges with padding
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(100, 255, 218, 0.15)';
                ctx.fill();
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = 0.05 * (1 - dist / CONNECTION_DISTANCE);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw lines from mouse to nearby particles
            if (mouse.x > -9000) {
                for (let i = 0; i < particles.length; i++) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MOUSE_RADIUS) {
                        const opacity = 0.08 * (1 - dist / MOUSE_RADIUS);
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Fade in
        const fadeTimer = setTimeout(() => setMounted(true), 100);

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            clearTimeout(fadeTimer);
            clearTimeout(resizeTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent',
                opacity: mounted ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out',
            }}
            aria-hidden="true"
        />
    );
};

export default ParticleBackground;
