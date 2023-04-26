import {Box} from "@mui/material";
import {Logo} from "@/components/global/logo";

export const SplashScreen = () => {
    return (
        <Box
            sx={{
                alignItems: 'center',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                left: 0,
                p: 3,
                position: 'fixed',
                top: 0,
                width: '100vw',
                zIndex: 2000
            }}
        >
            <Logo
                height={48}
            />
        </Box>
    )
}