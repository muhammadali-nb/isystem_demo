import React, {useState} from 'react';
import {styled, useTheme} from "@mui/material";
import MainNavbar from "@/components/global/main-navbar";
import MainDrawer from "@/components/global/main-drawer";
import Footer from "@/components/global/footer";

const MainLayoutRoot = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
}));

function MainLayout(props) {
    const {children} = props;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <MainLayoutRoot
            sx={{
                paddingTop: {
                    md: "96px",
                    xs: "72px"
                }
            }}
        >
            <MainNavbar
                onOpenSidebar={() => setIsSidebarOpen(true)}
            />
            <MainDrawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            {children}
            <Footer/>
        </MainLayoutRoot>
    );
}

export default MainLayout;