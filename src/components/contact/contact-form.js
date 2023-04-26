import React, {useState} from 'react';
import {Box, Button, Checkbox, FormHelperText, MenuItem, TextField, Typography} from "@mui/material";
import {Logo} from "@/components/global/logo";
import {PatternFormat} from "react-number-format";

const courses = [
    {
        label: "Java Backend",
        value: "java",
    },
    {
        label: "Python",
        value: "python"
    },
    {
        label: "Data Science AI",
        value: "ai"
    },
    {
        label: "Frontend",
        value: "frontend"
    }
]

function ContactForm() {
    const [course, setCourse] = useState("")
    const handleCourseChange = (event) => {
        setCourse(event.target.value)
        console.log(event.target.value)
    }

    return (
        <form>
            <Box
                sx={{
                    padding: 4,
                    borderRadius: 1,
                    backgroundColor: "background.paperPrimary",
                }}
            >
                <Box
                    sx={{
                        mb: 3
                    }}
                >
                    <Logo
                        height={42}
                    />
                </Box>
                <TextField
                    color="secondary"
                    fullWidth
                    label="Ismingiz"
                    sx={{
                        backgroundColor: "background.default"
                    }}
                />
                <PatternFormat
                    label="Telefon raqamingiz"
                    format="+998 ## ### ## ##"
                    customInput={TextField}
                    fullWidth
                    color="secondary"
                    sx={{
                        mt: 2,
                        backgroundColor: "background.default"
                    }}
                    name="phone"
                />
                <TextField
                    color="secondary"
                    label="Kurs"
                    onChange={handleCourseChange}
                    value={course}
                    fullWidth
                    select
                    sx={{
                        backgroundColor: "background.default",
                        mt: 2
                    }}
                >
                    {courses.map(_course => (
                        <MenuItem
                            key={_course.value}
                            value={_course.value}
                        >
                            {_course.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    color="secondary"
                    fullWidth
                    label="Xabar"
                    multiline
                    rows={5}
                    sx={{
                        backgroundColor: "background.default",
                        mt: 2
                    }}
                />
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        mt: 3,
                        ml: -1
                    }}
                >
                    <Checkbox
                        name="policy"
                        color="secondary"
                    />
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        Shaxsiy ma&apos;luotlarni qayta ishlash va foydalanish shartlariga roziman
                    </Typography>
                </Box>
                {/*{Boolean(formik.touched.policy && formik.errors.policy) && (
                    <FormHelperText error>
                        {formik.errors.policy}
                    </FormHelperText>
                )}*/}
                <Button
                    size="large"
                    color="secondary"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 3
                    }}
                >
                    Ariza yuborish
                </Button>
            </Box>
        </form>
    );
}

export default ContactForm;