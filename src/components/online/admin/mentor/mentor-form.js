import React from 'react';
import MentorCardPreview from "@/components/global/mentor-card-preview";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";
import {validateColor} from "@/utils/validate-color";
import PropTypes from "prop-types";

function MentorForm(props) {
    const {
        values,
        isLoading,
        onSubmit
    } = props;

    const formik = useFormik({
        initialValues: {
            image: values?.image?.square || null,
            first_name: values?.first_name || "",
            last_name: values?.last_name || "",
            profession: values?.profession || "",
            description: values?.description || "",
            color: ""
        },
        validationSchema: Yup.object({
            image: Yup.mixed().required("Mentor image is required"),
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            profession: Yup.string().required("Description is required"),
            description: Yup.string().required("Description is required"),
            color: Yup.string().test("color", "Invalid color", validateColor)
        }),
        onSubmit: (values) => {
            onSubmit?.({
                image: values.image,
                first_name: values.first_name,
                last_name: values.last_name,
                profession: values.profession,
                description: values.description
            })
        }
    })

    return (
        <>
            <MentorCardPreview
                image={formik.values.image}
                first_name={formik.values.first_name}
                last_name={formik.values.last_name}
                profession={formik.values.profession}
                description={formik.values.description}
                color={formik.values.color}
            />
            <Card sx={{mt: 4}}>
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xs={12}
                            lg={4}
                        >
                            <Typography variant='h6'>Mentor details</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            <TextField
                                fullWidth
                                color="secondary"
                                label="Color (Testing purpose only)"
                                name="color"
                                value={formik.values.color}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.color && formik.errors.color)}
                                helperText={formik.touched.color && formik.errors.color}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                sx={{mt: 3}}
                                label="First name"
                                name="first_name"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.first_name && formik.errors.first_name)}
                                helperText={formik.touched.first_name && formik.errors.first_name}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                sx={{mt: 3}}
                                label="Last name"
                                name="last_name"
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                                helperText={formik.touched.last_name && formik.errors.last_name}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                sx={{mt: 3}}
                                label="Profession"
                                name="profession"
                                value={formik.values.profession}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.profession && formik.errors.profession)}
                                helperText={formik.touched.profession && formik.errors.profession}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                multiline
                                rows={4}
                                sx={{mt: 3}}
                                label="Description"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.description && formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                            <Button
                                component="label"
                                sx={{mt: 3}}
                                color="secondary"
                                variant="contained"
                            >
                                Upload image
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    name="image"
                                    onChange={event => formik.setFieldValue("image", event.target.files[0])}
                                />
                            </Button>
                            {formik.errors.image && (
                                <Typography
                                    sx={{
                                        color: "error.main",
                                        mt: 1
                                    }}
                                >
                                    {formik.errors.image}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Button
                color="secondary"
                variant="contained"
                sx={{mt: 4}}
                disabled={isLoading}
                onClick={formik.submitForm}
            >
                Submit
            </Button>
        </>
    );
}

MentorForm.propTypes = {
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func,
    values: PropTypes.object
}

export default MentorForm;