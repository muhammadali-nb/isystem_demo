import React, {useState} from 'react';
import {Box, styled} from "@mui/material";
import AdminNavbar from "@/components/online/admin/admin-navbar";
import AdminSidebar from "@/components/online/admin/admin-sidebar";

const DashboardLayoutRoot = styled
('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

function AdminLayout(props) {
    const { children } = props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </DashboardLayoutRoot>
            <AdminNavbar onOpenSidebar={() => setIsSidebarOpen(true)}/>
            <AdminSidebar
                onClose={() => setIsSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
}

export default AdminLayout;