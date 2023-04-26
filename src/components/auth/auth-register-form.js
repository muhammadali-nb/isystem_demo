import React from 'react';
import {InputAdornment, Typography, Button, Checkbox, Box, TextField, IconButton} from "@mui/material";
import {PatternFormat} from "react-number-format";
import PropTypes from "prop-types";
import {useFormik} from "formik";
import * as Yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from "next/link";

function AuthRegisterForm(props) {
    const {
        onSuccess
    } = props;

    const formik = useFormik({
        initialValues: {
            firstName: "",
            phone: "",
            password: "",
            confirmPassword: "",
            policy: false,
            submit: null,
        },
        validationSchema: Yup.object({
            firstName: Yup
                .string()
                .max(255)
                .required("Iltimos ismingizni kiriting"),
            phone: Yup
                .string()
                .matches(/^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/, "Enter valid number",)
                .required("Phone number is required"),
            password: Yup
                .string()
                .min(8, 'Password must be at least 8 characters long')
                .max(20, 'Password can be at most 20 characters long')
                .matches(/^[A-Z]/, "Password must starts with capital letter")
                .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, "Password must contain at least one special character")
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Password confirmation is required'),
            policy: Yup
                .boolean()
                .oneOf([true], "This field must be checked")
        }),
        onSubmit: (values) => {
            console.log(values);
            onSuccess?.({
                firstName: values.firstName,
                phone: values.phone.replace(/[+\s]/g, ""),
                password: values.password
            })
        }
    })

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Typography
                variant="h5"
            >
                Ro&apos;yxatdan o&apos;tish
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mt: 2,
                    color: "text.secondary"
                }}
            >
                Telefon raqmingizni kiriting va tasdiqlash kodini oling
            </Typography>
            <Box
                sx={{
                    mt: 3
                }}
            >
                <form
                    noValidate
                    onSubmit={formik.handleSubmit}
                >
                    <TextField
                        variant="standard"
                        color="secondary"
                        fullWidth
                        label="Ismingiz"
                        name="firstName"
                        error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    <PatternFormat
                        format="+998 ## ### ## ##"
                        label="Telefon"
                        customInput={TextField}
                        fullWidth
                        variant="standard"
                        color="secondary"
                        name="phone"
                        error={Boolean(formik.touched.phone && formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        onBlur={formik.handleBlur}
                        onValueChange={values => formik.setFieldValue("phone", values.formattedValue)}
                        sx={{
                            mt: 2
                        }}
                    />
                    <TextField
                        label="Parol"
                        variant="standard"
                        color="secondary"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                            mt: 2
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        label="Parolni tasdiqlang"
                        variant="standard"
                        color="secondary"
                        fullWidth
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                            mt: 2
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            mt: 3,
                            ml: -1.5
                        }}
                    >
                        <Checkbox
                            checked={formik.values.policy}
                            name="policy"
                            onChange={formik.handleChange}
                            color="secondary"
                            sx={{
                                color: Boolean(formik.touched.policy && formik.errors.policy) && "error.main",
                            }}
                        />
                        <Typography
                            color={Boolean(formik.touched.policy && formik.errors.policy) && "error.main"}
                            variant="body2"
                        >
                            Shaxsiy ma&apos;luotlarni qayta ishlash va foydalanish shartlariga roziman
                        </Typography>
                    </Box>
                    <Button
                        disabled={formik.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{
                            mt: 3
                        }}
                    >
                        Kodni yuborish
                    </Button>
                </form>
                <Typography
                    sx={{
                        mt: 3,
                        textAlign: "center",
                        color: "text.secondary"
                    }}
                >
                    Allaqachon akkauntingiz bormi?
                </Typography>
                <Typography
                    component={Link}
                    href="/authentication/login"
                    sx={{
                        display: "block",
                        textDecoration: "none",
                        fontWeight: 600,
                        mt: 1,
                        textAlign: "center",
                        color: "secondary.main"
                    }}
                >
                    Kirish
                </Typography>
            </Box>
        </>
    )
}

AuthRegisterForm.propTypes = {
    onSuccess: PropTypes.func
}

export default AuthRegisterForm;