import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value, isCurrency = false, isPercent = false }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let start = 0;
                const end = parseFloat(value) || 0;
                if (start === end) { setDisplayValue(end); return; }
                const duration = 1500;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const current = start + (end - start) * progress;
                    setDisplayValue(current);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, [value]);

    const formatValue = () => {
        if (isCurrency) return `₹${displayValue.toFixed(0)}M`;
        if (isPercent) return `${displayValue.toFixed(1)}%`;
        if (Number.isInteger(value)) return displayValue.toFixed(0);
        return displayValue.toFixed(1);
    };

    return <span ref={ref}>{formatValue()}</span>;
};

export default AnimatedNumber;
