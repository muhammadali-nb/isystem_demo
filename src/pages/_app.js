import MuiThemeProvider from "@/theme/mui-theme-provider";
import "../theme/global.css";
import {Router} from "next/router";
import nProgress from "nprogress";
import {AuthConsumer, AuthProvider} from "@/contexts/jwt-context";
import {SplashScreen} from "@/components/global/splash-screen";
import {Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "react-query";

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({Component, pageProps}) {
    const queryClient = new QueryClient();
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <MuiThemeProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Toaster position="top-center"/>
                    <AuthConsumer>
                        {(auth) => !auth.isInitialized
                            ? <SplashScreen/>
                            : getLayout(
                                <Component {...pageProps} />
                            )}
                    </AuthConsumer>
                </AuthProvider>
            </QueryClientProvider>
        </MuiThemeProvider>
    )
}
