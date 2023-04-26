import React from 'react';
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Head from "next/head";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {PlusAlt as PlusAltIcon} from "@/icons/plus-alt";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import {useQuery} from "react-query";
import {getCourseList} from "@/api-functions/course/get-course-list";
import {useAuth} from "@/hooks/use-auth";
import CourseListTable from "@/components/online/admin/course/course-list-table";

function AdminCourses() {
    const {user} = useAuth();

    const {data} = useQuery({
        queryKey: ["admin", "courses", "offline"],
        queryFn: () => getCourseList({
            token: user?.access_token
        })
    })

    return (
        <>
            <Head>
                <title>Offline Courses | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                        <Grid
                            container
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Grid item>
                                <Typography variant="h4">
                                    Offline Courses
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    component={Link}
                                    href={user_paths.admin + "/courses/offline/create"}
                                    color="secondary"
                                    startIcon={<PlusAltIcon fontSize="small" />}
                                    variant="contained"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <CourseListTable
                        courses={data?.results}
                    />
                </Container>
            </Box>
        </>
    );
}

AdminCourses.getLayout = page => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default AdminCourses;