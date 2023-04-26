import React from 'react';
import {
    Typography,
    Button,
    Box,
    TextField,
    FormHelperText,
    InputAdornment,
    IconButton,
    Divider
} from "@mui/material";
import {PatternFormat} from "react-number-format";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useMounted} from "@/hooks/use-mounted";
import {useAuth} from "@/hooks/use-auth";
import {useRouter} from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

function AuthLoginForm() {
    const isMounted = useMounted();
    const {
        login,
    } = useAuth();

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
            submit: null
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: async (values, helpers) => {
            helpers.setSubmitting(true);

            const phone = values.phone.replace(/[+\s]/g, "");
            const dashboards = {
                user: "/online/dashboard",
                mentor: "/online/mentor",
                admin: "/online/admin"
            }

            try {
                const res = await login(phone, values.password);

                if (isMounted()) {
                    const returnUrl = router.query.returnUrl || dashboards[res.user_type];
                    router.push(returnUrl).catch(console.error);
                }
            } catch (err) {
                if (isMounted()) {
                    helpers.setStatus({success: false});
                    helpers.setErrors({submit: err.message});
                    helpers.setSubmitting(false);
                }
            }
        }
    })

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Typography
                variant="h5"
            >
                Tizimga kirish
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
                    <PatternFormat
                        format="+998 ## ### ## ##"
                        customInput={TextField}
                        color="secondary"
                        fullWidth
                        variant="standard"
                        mask=" "
                        allowEmptyFormatting
                        name="phone"
                        error={Boolean(formik.touched.phone && formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        onBlur={formik.handleBlur}
                        onValueChange={values => formik.setFieldValue("phone", values.formattedValue)}
                    />
                    <TextField
                        placeholder="Parolingizni kiriting"
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
                            mt: 3
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
                    <Button
                        disabled={formik.isSubmitting}
                        variant="contained"
                        color="secondary"
                        type="submit"
                        fullWidth
                        sx={{
                            mt: 3
                        }}
                    >
                        Kirish
                    </Button>
                    {formik.errors.submit && (
                        <Box sx={{mt: 3}}>
                            <FormHelperText error>
                                {formik.errors.submit}
                            </FormHelperText>
                        </Box>
                    )}
                </form>
                <Typography
                    component={Link}
                    href="/authentication/reset-password"
                    sx={{
                        display: "block",
                        textDecoration: "none",
                        mt: 2,
                        textAlign: "center",
                        color: "text.primary"
                    }}
                >
                    Parolingizni unutib qo’ydingizmi?
                </Typography>
                <Divider
                    sx={{
                        mt: 3,
                        borderColor: "neutral.300"
                    }}
                />
                <Typography
                    sx={{
                        mt: 2,
                        textAlign: "center",
                        color: "text.secondary"
                    }}
                >
                    Akkauntingiz yo&apos;qmi?
                </Typography>
                <Typography
                    component={Link}
                    href="/authentication/register"
                    sx={{
                        display: "block",
                        textDecoration: "none",
                        mt: 1,
                        textAlign: "center",
                        color: "text.primary"
                    }}
                >
                    Ro&apos;yxatdan o&apos;tish
                </Typography>
            </Box>
        </>


    );
}

AuthLoginForm.propTypes = {
    onSuccess: PropTypes.func
}

export default AuthLoginForm;