import React from 'react';
import {AdminAuthGuard} from "@/components/online/admin/auth/admin-auth-guard";
import AdminLayout from "@/components/online/admin/admin-layout";
import Head from "next/head";

function AdminAnalytics() {
    return (
        <>
            <Head>
                <title>Analytics | {process.env.NEXT_PUBLIC_COMPANY_NAME}</title>
            </Head>
        </>
    );
}

AdminAnalytics.getLayout = page => (
    <AdminAuthGuard>
        <AdminLayout>
            {page}
        </AdminLayout>
    </AdminAuthGuard>
)

export default AdminAnalytics;