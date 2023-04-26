import React, {useState} from 'react';
import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    Chip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import {PencilAlt as PencilAltIcon} from "@/icons/pencil-alt";
import {Delete as DeleteIcon} from "@mui/icons-material";
import {useMutation, useQueryClient} from "react-query";
import {deleteCourse} from "@/api-functions/course/delete-course";
import {useAuth} from "@/hooks/use-auth";
import toast from "react-hot-toast";
import ConfirmDialog from "@/components/global/confirm-dialog";

function CourseListTable(props) {
    const {
        courses
    } = props;

    const queryClient = useQueryClient()

    const {user} = useAuth();

    const [isDeleteConfirmDialogOpen, setIsDeleteConfirmDialogOpen] = useState(false);
    const [deleteCourseId, setDeleteCourseId] = useState(null);

    const {
        mutateAsync: handleDeleteCourse,
        isLoading
    } = useMutation({
        mutationKey: ["admin", "courses", "offline", deleteCourseId],
        mutationFn: () => deleteCourse({
            token: user?.access_token,
            id: deleteCourseId
        }),
        onSuccess: () => {
            toast.success("Course has been deleted");
            queryClient.invalidateQueries({queryKey: ["admin", "courses", "offline"]}).catch(console.error)
        },
        onError: error => toast.error(error.message)
    })

    const openDeleteConfirmDialog = (courseId) => {
        setDeleteCourseId(courseId);
        setIsDeleteConfirmDialogOpen(true)
    }

    const closeDeleteConfirmDialog = () => {
        setDeleteCourseId(null);
        setIsDeleteConfirmDialogOpen(false);
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Table sx={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Duration</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses && courses.map(_course => (
                                <TableRow
                                    key={_course?.id}
                                >
                                    <TableCell>{_course?.name}</TableCell>
                                    <TableCell>{_course?.duration} Months</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={_course?.status}
                                            color={_course?.status === "active" ? "primary" : "default"}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            component={Link}
                                            href={user_paths.admin + "/courses/offline/" + _course?.id + "/edit"}
                                        >
                                            <PencilAltIcon fontSize="small"/>
                                        </IconButton>
                                        <IconButton
                                            onClick={() => openDeleteConfirmDialog(_course?.id)}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <ConfirmDialog
                isOpen={isDeleteConfirmDialogOpen}
                onClose={closeDeleteConfirmDialog}
                onConfirm={handleDeleteCourse}
                isLoading={isLoading}
                title="Are you sure to delete a course?"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae eligendi in maiores repellendus totam."
            />
        </>

    );
}

CourseListTable.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        image: PropTypes.string,
        name: PropTypes.string,
        duration: PropTypes.number,
        status: PropTypes.string
    }))
}

export default CourseListTable;