import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import React from 'react';
import Modal from '@mui/material/Modal';
type Props = {
    isOpen: boolean;
};

const style = {
    p: 4,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    outline: 'none',
};
const SpinModal = ({ isOpen = false }: Props) => {
    return (
        <Modal
            open={isOpen}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 'maxContent' }}>
                <CircularProgress />
            </Box>
        </Modal>
    );
};

export default SpinModal;
