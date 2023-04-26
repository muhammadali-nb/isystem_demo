import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useAuth} from "@/hooks/use-auth";
import PropTypes from "prop-types";

export const AdminAuthGuard = (props) => {
    const { children } = props;
    const auth = useAuth();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
            if (!router.isReady) {
                return;
            }

            if (!auth.isAuthenticated || auth?.user?.user_type !== "admin") {
                router.push({
                    pathname: '/authentication/login',
                    query: { returnUrl: router.asPath }
                }).catch(console.error);
            } else {
                setChecked(true);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.isReady]);

    if (!checked) {
        return null;
    }

    // If got here, it means that the redirect did not occur, and that tells us that the user is
    // authenticated / authorized.

    return <>{children}</>;
};

AdminAuthGuard.propTypes = {
    children: PropTypes.node
};