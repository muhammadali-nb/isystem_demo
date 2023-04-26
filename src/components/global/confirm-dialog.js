import React from 'react';
import PropTypes from "prop-types";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

function ConfirmDialog(props) {
    const {
        isOpen,
        title,
        description,
        onClose,
        onConfirm,
        isLoading
    } = props;

    const handleConfirm = async () => {
        await onConfirm?.();
        onClose?.();
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => onClose?.()}
            fullWidth
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    disabled={isLoading}
                    color="secondary"
                    onClick={() => onClose?.()}
                >
                    Cancel
                </Button>
                <Button
                    autoFocus
                    disabled={isLoading}
                    color="secondary"
                    variant="contained"
                    onClick={handleConfirm}
                >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmDialog.defaultProps = {
    title: "Confirm dialog title",
    description: "Confirm dialog description"
}

ConfirmDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func,
    isLoading: PropTypes.bool
}

export default ConfirmDialog;