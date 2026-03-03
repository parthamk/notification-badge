import React from 'react';
import PropTypes from 'prop-types';
import AnimationCounter from './AnimationCounter';

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    badge: {
        WebkitTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        MozTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        msTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        display: 'inline-block',
        position: 'absolute',
        minWidth: '10px',
        padding: '3px 7px',
        fontSize: '12px',
        fontWeight: '700',
        lineHeight: '1',
        color: '#fff',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        backgroundColor: 'rgba(212, 19, 13, 1)',
        borderRadius: '10px',
        top: '-2px',
        right: '-2px',
    },
};

const NotificationBadge = ({
    count = 0,
    label,
    style = {},
    containerStyle = {},
    className,
    effect,
    fps,
    frameLength,
}) => {
    const badgeStyle = { ...styles.badge, ...style };
    const mergedContainerStyle = { ...styles.container, ...containerStyle };

    const value = count > 0 ? (
        <AnimationCounter
            key="badgekey"
            style={badgeStyle}
            className={className}
            count={count}
            label={label}
            effect={effect}
            fps={fps}
            frameLength={frameLength}
        />
    ) : undefined;

    return (
        <div style={mergedContainerStyle}>
            {value}
        </div>
    );
};

NotificationBadge.propTypes = {
    containerStyle: PropTypes.object,
    count: PropTypes.number,
    label: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    effect: PropTypes.array,
    fps: PropTypes.number,
    frameLength: PropTypes.number,
};

export default NotificationBadge;
