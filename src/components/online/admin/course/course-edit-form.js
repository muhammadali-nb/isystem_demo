import React, {useMemo, useState} from 'react';
import PropTypes from "prop-types";
import {useFormik} from "formik";
import * as Yup from "yup";
import {validateColor} from "@/utils/validate-color";
import {deepCopy} from "@/utils/deep-copy";
import {createResourceId} from "@/utils/create-resource-id";
import {
    Accordion, AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardContent,
    Grid, IconButton, List, ListItem, ListItemText,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import CourseCardPreview from "@/components/global/course-card-preview";
import {Plus as PlusIcon} from "@/icons/plus";
import AdminFaqModalForm from "@/components/online/admin/admin-faq-modal-form";
import CourseMentorCardPreview from "@/components/online/admin/course-mentor-card-preview";
import AutocompleteMentors from "@/components/global/autocomplete-mentors";
import AdminIntendedStudentsModalForm from "@/components/online/admin/admin-intended_students-modal-form";
import DeleteIcon from "@mui/icons-material/Delete";
import {fileToUrl} from "@/utils/file-to-url";

const statusOptions = [
    {label: "Draft", value: "draft"},
    {label: "Active", value: "active"},
]

function CourseEditForm(props) {
    const {
        isLoading,
        course,
        onSubmit
    } = props;

    const formik = useFormik({
        initialValues: {
            name: course?.name || "",
            description: course?.description || "",
            color: course?.color || "",
            image: course?.image || "",
            status: course?.status || "draft",
            module_count: course?.module_count || "",
            lesson_count: course?.lesson_count || "",
            duration: course?.duration || "",
            faq: course?.faq || [],
            mentors: course?.mentors || [],
            intended_students: course?.intended_students || [],
            course_benefits: course?.course_benefits || []
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .required("Course name is required"),
            description: Yup
                .string()
                .required("Course description is required"),
            color: Yup
                .string()
                .test("color", "Invalid color code", validateColor)
                .required("Color is required"),
            status: Yup
                .string()
                .required("Course status is required"),
            module_count: Yup
                .number()
                .typeError("Lessons count must be a number")
                .required("Modules count is required"),
            lesson_count: Yup
                .number()
                .typeError("Lessons count must be a number")
                .required("Lessons count is required"),
            duration: Yup
                .number()
                .typeError("Duration must be a number")
                .required("Course duration is required"),
            faq: Yup
                .array().of(Yup.object().shape({
                    id: Yup.mixed().test(
                        "is-numeric",
                        "Id must a number or string",
                        value => (typeof value === "number" || typeof value === "string")
                    ).required("FAQ is is required"),
                    question: Yup.string().required("Faq question is required"),
                    answer: Yup.string().required("Faq answer is required")
                })),
            mentors: Yup
                .array().of(Yup.object().shape({
                    id: Yup.mixed().test(
                        "is-numeric",
                        "Id must a number or string",
                        value => (typeof value === "number" || typeof value === "string")
                    ).required("FAQ is is required"),
                    first_name: Yup.string().required("First name is required"),
                    last_name: Yup.string().required("Last name is required"),
                    description: Yup.string().required("Description is required")
                })),
            intended_students: Yup
                .array().of(Yup.object().shape({
                    id: Yup.mixed().test(
                        "is-numeric",
                        "Id must a number or string",
                        value => (typeof value === "number" || typeof value === "string")
                    ).required("FAQ is is required"),
                    title: Yup.string().required("Title is required"),
                    description: Yup.string().required("Description is required")
                }))
        }),
        onSubmit: (values) => {
            onSubmit?.(values);
        }
    })

    const courseImageUrl = useMemo(
        () => fileToUrl(formik.values.image),
        [formik.values.image]
    )

    const [expandedFaq, setExpandedFaq] = useState(false);

    const handleFaqChange = panel => (event, isExpanded) => setExpandedFaq(isExpanded ? panel : false);

    const [isOpenCreateFaqModal, setIsOpenCreateFaqModal] = useState(false);
    const [isOpenEditFaqModal, setIsOpenEditFaqModal] = useState(false);

    const [editableFaq, setEditableFaq] = useState(null);

    const [mentor, setMentor] = useState(null);

    const [isOpenCreateIntendedStudentsModal, setIsOpenCreateIntendedStudentsModal] = useState(false);
    const [isOpenEditIntendedStudentsModal, setIsOpenEditIntendedStudentsModal] = useState(false);

    const [editableIntendedStudent, setEditableIntendedStudent] = useState(null);

    const [courseBenefit, setCourseBenefit] = useState("");

    function addFaqItem(value) {
        if (!value) return;

        const item = deepCopy(value);
        item.id = createResourceId();

        const res = deepCopy(formik.values.faq);
        res.push(item);

        formik.setFieldValue("faq", res);
    }

    function removeFaqItem(id) {
        if (!id) return;

        const faq = deepCopy(formik.values.faq);
        const res = faq.filter(item => item.id !== id);

        formik.setFieldValue("faq", res)
    }

    function openFaqEditForm(id) {
        if (!id) return;

        const item = formik.values.faq.find(_item => _item.id === id);
        if (!item) return;

        setEditableFaq(item);
        setIsOpenEditFaqModal(true);
    }

    function editFaq(id, item) {
        if (!id || !item) return;
        const faq = deepCopy(formik.values.faq);
        const index = faq.findIndex(_item => _item.id === id);
        if (index === -1) return;
        faq[index] = {id, ...item};
        formik.setFieldValue("faq", faq);
        setEditableFaq(null);
    }

    function addMentor(val) {
        if (!val) return;
        const mentors = deepCopy(formik.values.mentors);
        mentors.push(val);
        formik.setFieldValue("mentors", mentors).then(() => setMentor(null));
    }

    function removeMentor(id) {
        if (!id) return;
        const mentors = deepCopy(formik.values.mentors);
        const res = mentors.filter(item => item.id !== id);
        formik.setFieldValue("mentors", res);
    }

    function addIntendedStudent(value) {
        if (!value) return;

        const item = deepCopy(value);
        item.id = createResourceId();

        const res = deepCopy(formik.values.intended_students);
        res.push(item);

        formik.setFieldValue("intended_students", res);
    }

    function removeIntendedStudent(id) {
        if (!id) return;

        const faq = deepCopy(formik.values.intended_students);
        const res = faq.filter(item => item.id !== id);

        formik.setFieldValue("intended_students", res)
    }

    function openIntendedStudentsEditForm(id) {
        if (!id) return;

        const item = formik.values.intended_students.find(_item => _item.id === id);
        if (!item) return;

        setEditableIntendedStudent(item);
        setIsOpenEditIntendedStudentsModal(true);
    }

    function editIntendedStudent(id, item) {
        if (!id || !item) return;
        const intended_students = deepCopy(formik.values.intended_students);
        const index = intended_students.findIndex(_item => _item.id === id);
        if (index === -1) return;
        intended_students[index] = {id, ...item};
        formik.setFieldValue("intended_students", intended_students);
        setEditableIntendedStudent(null);
    }

    function addCourseBenefit(val) {
        if (!val) return;
        const item = {
            id: createResourceId(),
            name: val
        };
        const course_benefits = deepCopy(formik.values.course_benefits);
        course_benefits.push(item);
        formik.setFieldValue("course_benefits", course_benefits).then(() => setCourseBenefit(""));
    }

    function removeCourseBenefit(id) {
        if (!id) return;
        const course_benefits = deepCopy(formik.values.course_benefits);
        const res = course_benefits.filter(item => item.id !== id);
        formik.setFieldValue("course_benefits", res);
    }

    return (
        <Box>
            <CourseCardPreview
                title={formik.values.name}
                description={formik.values.description}
                color={formik.values.color}
                image={courseImageUrl}
            />
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">
                                Basic
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            <TextField
                                fullWidth
                                color="secondary"
                                label="Display name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
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
                            <TextField
                                fullWidth
                                color="secondary"
                                sx={{mt: 3}}
                                label="Color"
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
                                label="Status"
                                select
                                sx={{mt: 3}}
                                name="status"
                                value={formik.values.status}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.status && formik.errors.status)}
                                helperText={formik.touched.status && formik.errors.status}
                            >
                                {statusOptions.map(_item => (
                                    <MenuItem
                                        key={_item.value}
                                        value={_item.value}
                                    >
                                        {_item.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">
                                Stats
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            <TextField
                                fullWidth
                                color="secondary"
                                label="Modules count"
                                name="module_count"
                                value={formik.values.module_count}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.module_count && formik.errors.module_count)}
                                helperText={formik.touched.module_count && formik.errors.module_count}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                label="Lessons count"
                                sx={{
                                    mt: 3
                                }}
                                name="lesson_count"
                                value={formik.values.lesson_count}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.lesson_count && formik.errors.lesson_count)}
                                helperText={formik.touched.lesson_count && formik.errors.lesson_count}
                            />
                            <TextField
                                fullWidth
                                color="secondary"
                                label="Course Duration"
                                sx={{
                                    mt: 3
                                }}
                                name="duration"
                                value={formik.values.duration}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={Boolean(formik.touched.duration && formik.errors.duration)}
                                helperText={formik.touched.duration && formik.errors.duration}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">
                                FAQ
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            {!formik.values.faq.length && (<>
                                <Typography variant="h6">No FAQ</Typography>
                                <Typography
                                    sx={{mt: 1}}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim et
                                    eveniet facere harum, ipsum modi optio quaerat quisquam voluptatem.
                                </Typography>
                            </>)}
                            {formik.values.faq.map(_item => (
                                <Accordion
                                    key={_item.id}
                                    expanded={expandedFaq === _item.id}
                                    onChange={handleFaqChange(_item.id)}
                                    sx={{
                                        backgroundColor: "background.default",
                                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                            transform: "rotate(45deg)",
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                    >
                                        <Typography>
                                            {_item.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{_item.answer}</Typography>
                                        <Box
                                            sx={{mt: 3}}
                                        >
                                            <Button
                                                color="secondary"
                                                variant="outlined"
                                                sx={{borderRadius: 1}}
                                                onClick={() => removeFaqItem(_item.id)}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                color="secondary"
                                                sx={{ml: 2}}
                                                onClick={() => openFaqEditForm(_item.id)}
                                            >
                                                Edit
                                            </Button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{mt: 3}}
                                onClick={() => setIsOpenCreateFaqModal(true)}
                            >
                                Add
                            </Button>

                            <AdminFaqModalForm
                                isOpen={isOpenCreateFaqModal}
                                onClose={() => setIsOpenCreateFaqModal(false)}
                                onChange={addFaqItem}
                            />

                            <AdminFaqModalForm
                                isOpen={isOpenEditFaqModal}
                                onClose={() => setIsOpenEditFaqModal(false)}
                                initialValues={editableFaq}
                                onChange={(val) => editFaq(editableFaq?.id, val)}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">
                                Mentors
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            {!formik.values.mentors.length && (
                                <Box sx={{mb: 4}}>
                                    <Typography variant="h6">No Mentors</Typography>
                                    <Typography
                                        sx={{mt: 1}}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim
                                        et
                                        eveniet facere harum, ipsum modi optio quaerat quisquam voluptatem.
                                    </Typography>
                                </Box>
                            )}
                            {formik.values.mentors.map(_mentor => (
                                <CourseMentorCardPreview
                                    key={_mentor?.id}
                                    mentor={_mentor}
                                    onDelete={() => removeMentor(_mentor?.id)}
                                    sx={{
                                        backgroundColor: formik.values.color || "background.default",
                                        mb: 4
                                    }}
                                />
                            ))}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <AutocompleteMentors
                                    fullWidth
                                    value={mentor}
                                    onChange={setMentor}
                                />
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    sx={{ml: 2}}
                                    onClick={() => addMentor(mentor)}
                                >
                                    Add
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">Intended students</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            {!formik.values.intended_students.length && (
                                <>
                                    <Typography variant="h6">No intended students</Typography>
                                    <Typography sx={{mt: 1}}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                                        doloribus expedita ipsum nam numquam voluptas!
                                    </Typography>
                                </>
                            )}
                            {formik.values.intended_students.map(_item => (
                                <Accordion
                                    key={_item.id}
                                    expanded={expandedFaq === _item.id}
                                    onChange={handleFaqChange(_item.id)}
                                    sx={{
                                        backgroundColor: "background.default",
                                        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                            transform: "rotate(45deg)",
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<PlusIcon/>}
                                    >
                                        <Typography>
                                            {_item.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{_item.description}</Typography>
                                        <Box
                                            sx={{mt: 3}}
                                        >
                                            <Button
                                                color="secondary"
                                                variant="outlined"
                                                sx={{borderRadius: 1}}
                                                onClick={() => removeIntendedStudent(_item.id)}
                                            >
                                                Delete
                                            </Button>
                                            <Button
                                                color="secondary"
                                                sx={{ml: 2}}
                                                onClick={() => openIntendedStudentsEditForm(_item.id)}
                                            >
                                                Edit
                                            </Button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={{mt: 4}}
                                onClick={() => setIsOpenCreateIntendedStudentsModal(true)}
                            >
                                Add
                            </Button>

                            <AdminIntendedStudentsModalForm
                                isOpen={isOpenCreateIntendedStudentsModal}
                                onClose={() => setIsOpenCreateIntendedStudentsModal(false)}
                                onChange={addIntendedStudent}
                            />

                            <AdminIntendedStudentsModalForm
                                isOpen={isOpenEditIntendedStudentsModal}
                                onClose={() => setIsOpenEditIntendedStudentsModal(false)}
                                initialValues={editableIntendedStudent}
                                onChange={(val) => editIntendedStudent(editableIntendedStudent?.id, val)}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card
                sx={{
                    mt: 4
                }}
            >
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
                            <Typography variant="h6">Course benefits</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={8}
                        >
                            {!formik.values.course_benefits.length && (
                                <>
                                    <Typography variant="h6">No course benefits</Typography>
                                    <Typography sx={{mt: 1}}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum
                                        dolorum numquam quisquam voluptate voluptatibus?
                                    </Typography>
                                </>
                            )}
                            {!!formik.values.course_benefits.length && (
                                <Card
                                    sx={{
                                        backgroundColor: "background.default"
                                    }}
                                >
                                    <List>
                                        {formik.values.course_benefits.map(_item => (
                                            <ListItem
                                                key={_item?.id}
                                                secondaryAction={
                                                    <IconButton
                                                        edge="end"
                                                        onClick={() => removeCourseBenefit(_item?.id)}
                                                    >
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemText
                                                    primary={_item?.name}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Card>
                            )}
                            <Box
                                component="form"
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    addCourseBenefit(courseBenefit)
                                }
                                }
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mt: 4
                                }}
                            >
                                <TextField
                                    fullWidth
                                    color="secondary"
                                    label="Course benefit"
                                    value={courseBenefit}
                                    name="course_benefit"
                                    onChange={e => setCourseBenefit(e.target.value)}
                                />
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    type="submit"
                                    sx={{ml: 2}}
                                >
                                    Add
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Button
                color="secondary"
                variant="contained"
                onClick={formik.submitForm}
                disabled={isLoading}
                sx={{mt: 4}}
            >
                Save changes
            </Button>
        </Box>
    );
}

CourseEditForm.propTypes = {
    isLoading: PropTypes.bool,
    course: PropTypes.object,
    onSubmit: PropTypes.func
}

export default CourseEditForm;