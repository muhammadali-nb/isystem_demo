import React, {useState} from 'react';
import AuthLayout from "@/components/auth/auth-layout";
import Head from "next/head";
import {Box, Container, Grid} from "@mui/material";
import Image from "next/image";
import GuestGuard from "@/components/auth/guest-guard";
import AuthResetPasswordForm from "@/components/auth/auth-reset-password-form";
import AuthResetPasswordConfirmForm from "@/components/auth/auth-reset-password-confirm-form";

function ResetPassword() {
    const [confirmForm, setConfirmForm] = useState(false);
    const [registerValues, setRegisterValues] = useState(null);

    const handelRegisterSuccess = payload => {
        setConfirmForm(true);
        setRegisterValues(payload);
    }

    return (
        <>
            <Head>
                <title>Reset Password | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
            </Head>
            <Box
                sx={{
                    py: {
                        xs: 2,
                        sm: 3
                    }
                }}
            >
                <Container>
                    <Grid
                        container
                        columnSpacing={4}
                        alignItems="center"
                    >
                        <Grid
                            item
                            xs={12}
                            md={6}
                            order={{
                                xs: 2,
                                md: 1
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: {
                                        xs: 480,
                                        md: "unset"
                                    },
                                    mx: "auto"
                                }}
                            >
                                <Image
                                    src="/static/authentication.svg"
                                    alt="contact"
                                    width={500}
                                    height={500}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                    priority
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            order={{
                                xs: 1,
                                md: 2
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "background.paper",
                                    borderRadius: 1,
                                    py: {
                                        xs: 3,
                                        sm: 4,
                                    },
                                    px: {
                                        xs: 3,
                                        sm: 4,
                                        md: 5
                                    },
                                    maxWidth: {
                                        xs: 520,
                                        md: "unset"
                                    },
                                    mx: "auto"
                                }}
                            >
                                {!confirmForm && (
                                    <AuthResetPasswordForm
                                        onSubmit={handelRegisterSuccess}
                                    />
                                )}
                                {confirmForm && (
                                    <AuthResetPasswordConfirmForm
                                        values={registerValues}
                                    />
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

ResetPassword.getLayout = page => (
    <AuthLayout>
        <GuestGuard>
            {page}
        </GuestGuard>
    </AuthLayout>
)

export default ResetPassword;