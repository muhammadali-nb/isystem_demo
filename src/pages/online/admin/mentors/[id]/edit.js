import React from 'react';
import {useAuth} from "@/hooks/use-auth";
import {useRouter} from "next/router";
import Head from "next/head";
import {Box, Container, Link as MuiLink, Typography} from "@mui/material";
import {useMutation, useQuery} from "react-query";
import {getMentor} from "@/api-functions/mentor/get-mentor";
import MentorForm from "@/components/online/admin/mentor/mentor-form";
import {editMentor} from "@/api-functions/mentor/edit-mentor";
import toast from "react-hot-toast";
import {user_paths} from "@/consts/user-paths";
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Link from "next/link";
import {ArrowBack as ArrowBackIcon} from "@mui/icons-material";

function MentorEdit() {
    const {user} = useAuth();
    const router = useRouter();
    const {id} = router.query

    const {data} = useQuery({
        queryKey: ["admin", "mentors", id],
        queryFn: () => getMentor({
            token: user?.access_token,
            id
        })
    })

    const {
        mutateAsync: handleEditMentor,
        isLoading: mentorEditLoading
    } = useMutation({
        mutationKey: ["admin", "mentors", id],
        mutationFn: (data) => editMentor({
            token: user?.access_token,
            id,
            data
        }),
        onSuccess: () => {
            toast.success("Mentor has been edited");
            router.push(user_paths.admin + "/mentors");
        },
        onError: (error) => toast.error(error.message)
    })

    return (
        <>
            <Head>
                <title>Edit mentor | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
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
                    {data && (
                        <MentorForm
                            values={data?.result}
                            onSubmit={handleEditMentor}
                            isLoading={mentorEditLoading}
                        />
                    )}
                </Container>
            </Box>
        </>
    );
}

MentorEdit.getLayout = (page) => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default MentorEdit;