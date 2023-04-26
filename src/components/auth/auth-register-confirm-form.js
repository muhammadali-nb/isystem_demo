import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Box, Button, Chip, FormHelperText, InputAdornment, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useMounted} from "@/hooks/use-mounted";
import {PatternFormat} from "react-number-format";

function formatTime(secs) {
    const minutes = Math.trunc(secs / 60);
    const seconds = secs - minutes * 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function AuthRegisterConfirmForm(props) {
    const {
        values
    } = props;

    const isMounted = useMounted();
    const [timeLeft, setTimeLeft] = useState(120);



    const formik = useFormik({
        initialValues: {
            code: "",
            submit: null,
        },
        validationSchema: Yup.object({
            code: Yup
                .string()
                .matches(/^\d{5}$/, "Tasdiqlash kodini to'liq kiriting")
                .required("Tasdiqlash kodini kiriting")
        }),
        onSubmit: async (vals, helpers) => {
            console.log(vals, values);

            try {

            } catch (err) {
                if (isMounted()) {
                    helpers.setStatus({success: false});
                    helpers.setErrors({submit: err.message});
                    helpers.setSubmitting(false);
                }
            }
        }
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(seconds => {
                if (seconds === 0) {
                    clearInterval(intervalId);
                    return seconds;
                }
                return seconds - 1
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <Typography
                variant="h5"
            >
                Tasdiqlash kodini kiriting
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mt: 2,
                    color: "text.secondary"
                }}
            >
                Telefon raqmingizga tasdiqlash kodi yuborildi
            </Typography>
            <form
                noValidate
                onSubmit={formik.handleSubmit}
            >
                <PatternFormat
                    customInput={TextField}
                    format="#####"
                    sx={{
                        mt: 3
                    }}
                    fullWidth
                    variant="standard"
                    color="secondary"
                    name="code"
                    error={Boolean(formik.touched.code && formik.errors.code)}
                    helperText={formik.touched.code && formik.errors.code}
                    onBlur={formik.handleBlur}
                    onValueChange={values => formik.setFieldValue("code", values.formattedValue)}
                    InputProps={{
                        endAdornment: timeLeft !== 0 && (
                            <InputAdornment position="end">
                                <Chip label={formatTime(timeLeft)}/>
                            </InputAdornment>
                        )
                    }}
                />
                {formik.errors.submit && (
                    <Box sx={{mt: 3}}>
                        <FormHelperText error>
                            {formik.errors?.submit}
                        </FormHelperText>
                    </Box>
                )}
                <Button
                    disabled={formik.isSubmitting}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                        width: "100%",
                        mt: 3
                    }}
                >
                    Tasdiqlash
                </Button>
            </form>
        </>
    );
}

AuthRegisterConfirmForm.propTypes = {
    values: PropTypes.shape({
        phone: PropTypes.string
    })
}

export default AuthRegisterConfirmForm;