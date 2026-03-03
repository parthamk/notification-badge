import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Effect from './Effect';

const AnimationCounter = ({
    count = 1,
    label = null,
    style = {},
    effect = Effect.SCALE,
    frameLength = 30.0,
    className,
}) => {
    const badgeRef = useRef(null);

    const attachStyle = (targetStyle) => {
        if (badgeRef.current) {
            for (const key in targetStyle) {
                if (Object.prototype.hasOwnProperty.call(targetStyle, key)) {
                    badgeRef.current.style[key] = targetStyle[key];
                }
            }
        }
    };

    useEffect(() => {
        if (count > 0 && badgeRef.current) {
            let timer;
            let startTime;

            const animate = () => {
                const style0 = {
                    '-moz-transform': effect[0],
                    '-webkit-transform': effect[0],
                    '-o-transform': effect[0],
                    transform: effect[0],
                };
                attachStyle(style0);
                if (effect[2]) {
                    attachStyle(effect[2]);
                }

                startTime = performance.now();

                const waitOrFinish = (timestamp) => {
                    const frame = Math.floor(((timestamp - startTime) / (1000.0 / 60.0)) % frameLength);

                    if (frame >= frameLength - 1) {
                        cancelAnimationFrame(timer);
                        const style1 = {
                            '-moz-transform': effect[1],
                            '-webkit-transform': effect[1],
                            '-o-transform': effect[1],
                            transform: effect[1],
                        };
                        attachStyle(style1);
                        if (effect[3]) {
                            attachStyle(effect[3]);
                        }
                    } else {
                        timer = requestAnimationFrame(waitOrFinish);
                    }
                };

                timer = requestAnimationFrame(waitOrFinish);
            };

            animate();

            return () => {
                if (timer) {
                    cancelAnimationFrame(timer);
                }
            };
        }
    }, [count, effect, frameLength]);

    const value = label || count;

    return (
        <span ref={badgeRef} style={style} className={className}>
            {value}
        </span>
    );
};

AnimationCounter.propTypes = {
    count: PropTypes.number,
    label: PropTypes.string,
    style: PropTypes.object,
    effect: PropTypes.array,
    frameLength: PropTypes.number,
    className: PropTypes.string,
};

export default AnimationCounter;
