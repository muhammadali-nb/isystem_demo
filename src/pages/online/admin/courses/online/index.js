import React from 'react';
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Head from "next/head";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {PlusAlt as PlusAltIcon} from "@/icons/plus-alt";

function AdminCourses() {
    return (
        <>
            <Head>
                <title>Online Courses | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                                    Online Courses
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    color="secondary"
                                    startIcon={<PlusAltIcon fontSize="small" />}
                                    variant="contained"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
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