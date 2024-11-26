import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import VerificationInput from 'react-verification-input';
import logo from '../../../assets/image1.png';

type Props = {
    isOpen: boolean;
    handleChange: (otp: string) => void;
    hanldeClose: () => void;
};

const style = {
    p: 4,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
};

const VerificationModal = ({
    isOpen = false,
    handleChange,
    hanldeClose,
}: Props) => {
    return (
        <Modal
            open={isOpen}
            onClose={hanldeClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box sx={{ ...style, width: 350 }}>
                <img style={{ width: '100px' }} src={logo} alt="logo" />
                <h3>OTP Verification</h3>
                <VerificationInput
                    onChange={(value) => {
                        handleChange(value);
                    }}
                />
            </Box>
        </Modal>
    );
};

export default VerificationModal;
