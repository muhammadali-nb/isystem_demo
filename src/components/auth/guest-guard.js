import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {useAuth} from "@/hooks/use-auth";
import {useRouter} from "next/router";
import {user_paths} from "@/consts/user-paths";
import toast from "react-hot-toast";

function GuestGuard(props) {
    const {children} = props;
    const auth = useAuth();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        if (auth.isAuthenticated) {
            const path = user_paths[auth?.user?.user_type];
            if (!path) {
                toast.error("Something went wrong!")
                setChecked(true);
                return;
            }
            router.push(path).catch(console.error);
        } else {
            setChecked(true);
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.isReady]);

    if (!checked) {
        return null;
    }

    return <>{children}</>;
}

GuestGuard.propTypes = {
    children: PropTypes.node
}

export default GuestGuard;