import React from 'react';
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Head from "next/head";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import {user_paths} from "@/consts/user-paths";
import {PlusAlt as PlusAltIcon} from "@/icons/plus-alt";
import {useQuery} from "react-query";
import {useAuth} from "@/hooks/use-auth";
import {getMentorList} from "@/api-functions/mentor/get-mentor-list";
import toast from "react-hot-toast";
import MentorListTable from "@/components/online/admin/mentor/mentor-list-table";

function Mentors() {
    const {user} = useAuth();

    const {data} = useQuery({
        queryKey: ["admin", "mentors"],
        queryFn: () => getMentorList({
            token: user?.access_token
        }),
        onError: err => toast.error(err.message)
    })

    return (
        <>
            <Head>
                <title>Mentors | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                                    Mentors
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    component={Link}
                                    href={user_paths.admin + "/mentors/create"}
                                    color="secondary"
                                    startIcon={<PlusAltIcon fontSize="small"/>}
                                    variant="contained"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <MentorListTable
                        mentors={data?.results}
                    />
                </Container>
            </Box>
        </>
    );
}

Mentors.getLayout = (page) => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default Mentors;