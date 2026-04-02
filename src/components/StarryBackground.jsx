import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarryBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = {
        background: {
            color: {
                value: "#0a0a0f", // Very deep navy/black
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "parallax",
                },
                onClick: {
                    enable: false,
                },
                resize: true,
            },
            modes: {
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 0.5, // Slow floating
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100, // Medium density
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 1, // Twinkling effect
                    minimumValue: 0.1,
                    sync: false,
                },
                value: { min: 0.1, max: 0.8 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 }, // Stars of different sizes
            },
            shadow: {
                enable: true,
                color: "#ffffff",
                blur: 5,
            },
        },
        detectRetina: true,
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={particlesOptions}
            />
        );
    }

    return null;
};

export default StarryBackground;
