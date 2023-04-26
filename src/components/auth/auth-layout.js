import React from 'react';
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import Link from "next/link";
import {Logo} from "@/components/global/logo";
import PropTypes from "prop-types";

function AuthLayout(props) {
    const {children} = props;

    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: 'background.default',
                    color: 'text.secondary'
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: {
                                md: 96,
                                xs: 72
                            }
                        }}
                    >
                        <Link
                            href="/"
                        >
                            <Logo
                                sx={{
                                    height: {
                                        md: 40,
                                        xs: 32
                                    }
                                }}
                            />
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box
                sx={{
                    pt: {
                        md: "96px",
                        xs: "72px"
                    }
                }}
            >
                {children}
            </Box>
        </>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node
}

export default AuthLayout;