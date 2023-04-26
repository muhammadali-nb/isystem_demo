import React from 'react';
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Head from "next/head";
import {Box, Container, Link as MuiLink, Typography} from "@mui/material";
import MentorForm from "@/components/online/admin/mentor/mentor-form";
import {useMutation} from "react-query";
import {createMentor} from "@/api-functions/mentor/create-mentor";
import {useAuth} from "@/hooks/use-auth";
import toast from "react-hot-toast";
import {useRouter} from "next/router";
import {user_paths} from "@/consts/user-paths";
import Link from "next/link";
import {ArrowBack as ArrowBackIcon} from "@mui/icons-material";

function MentorCreate() {
    const {user} = useAuth();
    const router = useRouter();

    const {
        isLoading,
        mutateAsync: handleCreateMentor
    } = useMutation({
        mutationKey: ["admin", "mentors"],
        mutationFn: (data) => createMentor({
            token: user?.access_token,
            data
        }),
        onSuccess: () => {
            toast.success("Mentor has been created");
            router.push(user_paths.admin + "/mentors").catch(console.error);
        },
        onError: (error) => toast.error(error.message)
    })

    return (
        <>
            <Head>
                <title>Create mentor | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                            href={user_paths.admin + "/mentors"}
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
                            <Typography variant="subtitle2">Mentors</Typography>
                        </MuiLink>
                    </Box>
                    <MentorForm
                        onSubmit={handleCreateMentor}
                        isLoading={isLoading}
                    />
                </Container>
            </Box>
        </>
    );
}

MentorCreate.getLayout = (page) => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default MentorCreate;