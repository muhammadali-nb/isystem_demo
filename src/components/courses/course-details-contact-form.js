import React from 'react';
import * as Yup from "yup";
import {Box, Button, Checkbox, FormHelperText, TextField, Typography} from "@mui/material";
import {PatternFormat} from "react-number-format";
import {useFormik} from "formik";

function CourseDetailsContactForm() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "",
            policy: false,
            submit: null
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Iltimos ismingizni kiriting!"),
            phone: Yup
                .string()
                .matches(/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/, "Notog'ri raqam kiritdingiz!",)
                .required("Telefon raqamingizni kiriting!"),
            policy: Yup
                .boolean()
                .oneOf([true], "This field must be checked")
        }),
        onSubmit: (values, helpers)=> {
            console.log(values);
            helpers.setStatus({ success: true });
            helpers.setSubmitting(false);
        }
    })

    return (
        <form
            noValidate
            onSubmit={formik.handleSubmit}
        >
            <TextField
                fullWidth
                label="Ismingiz"
                color="secondary"
                name="firstName"
                error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <PatternFormat
                label="Telefon raqamingiz"
                format="+998 ## ### ## ##"
                customInput={TextField}
                fullWidth
                color="secondary"
                sx={{
                    mt: 2
                }}
                name="phone"
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                onBlur={formik.handleBlur}
                onValueChange={values => formik.setFieldValue("phone", values.formattedValue)}
            />
            <Button
                disabled={formik.isSubmitting}
                type="submit"
                color="secondary"
                variant="contained"
                sx={{
                    mt: 3,
                    width: "100%"
                }}
            >
                Jo&apos;natish
            </Button>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    mt: 1,
                }}
            >
                <Checkbox
                    checked={formik.values.policy}
                    name="policy"
                    onChange={formik.handleChange}
                    color="secondary"
                />
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    Shaxsiy ma&apos;luotlarni qayta ishlash va foydalanish shartlariga roziman
                </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                    {formik.errors.policy}
                </FormHelperText>
            )}
            {formik.errors.submit && (
                <Box
                    sx={{
                        mt: 3
                    }}
                >
                    <FormHelperText error>
                        {formik.errors.submit}
                    </FormHelperText>
                </Box>
            )}
        </form>
    );
}

export default CourseDetailsContactForm;