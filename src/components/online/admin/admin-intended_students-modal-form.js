import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {Button, Card, CardContent, Modal, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "calc(100% - 48px)",
    maxWidth: 560
};

function AdminIntendedStudentsModalForm(props) {
    const {
        isOpen,
        onClose,
        initialValues,
        onChange
    } = props;

    const formik = useFormik({
        initialValues: {
            title: initialValues?.title || "",
            description: initialValues?.description || ""
        },
        validationSchema: Yup.object({
            title: Yup
                .string()
                .required("Title is required"),
            description: Yup
                .string()
                .required("Description is required")
        }),
        onSubmit: async (values, helpers) => {
            await onChange?.({
                title: values.title,
                description: values.description
            });

            helpers.resetForm();
            onClose?.();
        }
    })

    useEffect(() => {
        formik.setFieldValue("title", initialValues?.title || "");
        formik.setFieldValue("description", initialValues?.description || "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialValues])

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <Card
                component="form"
                sx={style}
                onSubmit={formik.handleSubmit}
            >
                <CardContent>
                    <TextField
                        fullWidth
                        color="secondary"
                        label="Title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.title && formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                    />
                    <TextField
                        fullWidth
                        color="secondary"
                        sx={{mt: 3}}
                        multiline
                        rows={4}
                        label="Description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.description && formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        sx={{mt: 3}}
                        type="submit"
                    >
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </Modal>
    );
}

AdminIntendedStudentsModalForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    initialValues: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
}

export default AdminIntendedStudentsModalForm;