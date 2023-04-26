import React from 'react';
import Head from "next/head";
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import {
    Box,
    Container,
    Link as MuiLink,
    Typography
} from "@mui/material";
import {ArrowBack as ArrowBackIcon} from "@mui/icons-material";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import CourseEditForm from "@/components/online/admin/course/course-edit-form";
import {useAuth} from "@/hooks/use-auth";
import {useMutation, useQuery} from "react-query";
import {useRouter} from "next/router";
import {getCourse} from "@/api-functions/course/get-course";
import {editCourse} from "@/api-functions/course/edit-course";
import toast from "react-hot-toast";

function AdminCourseEdit() {
    const router = useRouter();

    const {id} = router.query;

    const {user} = useAuth();

    const {data} = useQuery({
        queryKey: ["admin", "courses", "offline", id],
        queryFn: () => getCourse({
            token: user?.access_token,
            id
        }),
        onError: (err) => {
            toast.error(err.message);
            router.push(user_paths.admin +  "/courses/offline")
        }
    })

    const {
        mutate: handleEditCourse,
        isLoading: editCourseLoading
    } = useMutation({
        mutationKey: ["admin", "courses", "offline", id],
        mutationFn: (data) => editCourse({
            token: user?.access_token,
            id,
            data
        }),
        onSuccess: () => {
            toast.success("Course has been edited");
            router.push(user_paths.admin + "/courses/offline")
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return (
        <>
            <Head>
                <title>Edit course | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
            </Head>
            <Box
                component="main"
                sx={{
                    py: 8
                }}
            >
                <Container>
                    <Box
                        sx={{
                            mb: 4
                        }}
                    >
                        <MuiLink
                            component={Link}
                            href={user_paths.admin + "/courses/offline"}
                            color="secondary"
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <ArrowBackIcon
                                fontSize="small"
                                sx={{mr: 1}}
                            />
                            <Typography variant="subtitle2">Courses</Typography>
                        </MuiLink>
                    </Box>
                    {data && (
                        <CourseEditForm
                            isLoading={editCourseLoading}
                            course={data?.result}
                            onSubmit={handleEditCourse}
                        />
                    )}
                </Container>
            </Box>
        </>
    );
}

AdminCourseEdit.getLayout = (page) => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default AdminCourseEdit;