import React from 'react';

type OverlayProps = {
    handleClick: () => void;
};

const Overlay = ({ handleClick }: OverlayProps) => {
    return (
        <div
            onClick={handleClick}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 15,
                transition: 'opacity 0.5s ease',
                cursor: 'pointer',
            }}
        />
    );
};

export default Overlay;
