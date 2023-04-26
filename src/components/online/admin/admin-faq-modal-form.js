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

function AdminFaqModalForm(props) {
    const {
        isOpen,
        onClose,
        initialValues,
        onChange
    } = props;

    const formik = useFormik({
        initialValues: {
            question: initialValues?.question || "",
            answer: initialValues?.answer || ""
        },
        validationSchema: Yup.object({
            question: Yup
                .string()
                .required("Question is required"),
            answer: Yup
                .string()
                .required("Answer is required")
        }),
        onSubmit: async (values, helpers) => {
            await onChange?.({
                question: values.question,
                answer: values.answer
            });

            helpers.resetForm();
            onClose?.();
        }
    })

    useEffect(() => {
        formik.setFieldValue("question", initialValues?.question || "");
        formik.setFieldValue("answer", initialValues?.answer || "");
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
                        label="Question"
                        name="question"
                        value={formik.values.question}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.question && formik.errors.question)}
                        helperText={formik.touched.question && formik.errors.question}
                    />
                    <TextField
                        fullWidth
                        color="secondary"
                        sx={{mt: 3}}
                        multiline
                        rows={4}
                        label="Answer"
                        name="answer"
                        value={formik.values.answer}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.answer && formik.errors.answer)}
                        helperText={formik.touched.answer && formik.errors.answer}
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

AdminFaqModalForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    initialValues: PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string
    })
}

export default AdminFaqModalForm;