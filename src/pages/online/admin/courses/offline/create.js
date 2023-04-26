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
import CourseCreateForm from "@/components/online/admin/course/course-create-form";
import {useMutation} from "react-query";
import {createCourse} from "@/api-functions/course/create-course";
import {useAuth} from "@/hooks/use-auth";
import toast from "react-hot-toast";
import {useRouter} from "next/router";



function AdminCourseCreate() {
    const {user} = useAuth();
    const router = useRouter();

    const {
        isLoading,
        mutate
    } = useMutation({
        mutationKey: ["admin", "courses"],
        mutationFn: (vars) => createCourse({
            token: user?.access_token,
            body: vars
        }),
        onSuccess: () => {
            toast.success("Course created");
            router.push(user_paths.admin + "/courses/offline")
        },
        onError: error => toast.error(error.message)
    })

    return (
        <>
            <Head>
                <title>Create course | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                    <CourseCreateForm
                        isLoading={isLoading}
                        onSubmit={mutate}
                    />
                </Container>
            </Box>
        </>
    );
}

AdminCourseCreate.getLayout = (page) => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default AdminCourseCreate;