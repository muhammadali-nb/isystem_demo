import {createContext, useEffect, useReducer} from "react";
import {authLogin} from "@/api-functions/auth/auth-login";
import {decode} from "@/utils/jwt";
import {authRefresh} from "@/api-functions/auth/auth-refresh";
import {authRegister} from "@/api-functions/auth/auth-register";
import PropTypes from "prop-types";
import {authRegisterConfirm} from "@/api-functions/auth/auth-register-confirm";

const actions = {
    INITIALIZE: "INITIALIZE",
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    LOGOUT: "LOGOUT",
}

const initialState = {
    isAuthenticated: true,
    isInitialized: false,
    user: null
};

const handlers = {
    INITIALIZE: (state, action) => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null
    }),
    REGISTER: (state, action) => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export const AuthContext = createContext({
    initialState,
    login: () => Promise.resolve(),
    loginConfirm: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
    registerConfirm: () => Promise.resolve(),
})

export const AuthProvider = (props) => {
    const {children} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    const initialize = async () => {
        const refresh_token = globalThis.localStorage.getItem("refreshToken");

        try {
            if (refresh_token) {
                const {access_token} = await authRefresh(refresh_token);
                const user = decode(access_token);

                dispatch({
                    type: actions.INITIALIZE,
                    payload: {
                        isAuthenticated: true,
                        user: {
                            ...user,
                            access_token,
                        }
                    }
                })
            } else {
                dispatch({
                    type: actions.INITIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    }
                })
            }
        } catch (err) {
            dispatch({
                type: actions.INITIALIZE,
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            })
        }
    }
    const login = async (phone, password) => {
        const {
            access_token,
            refresh_token
        } = await authLogin({phone, password});

        const user = decode(access_token);
        localStorage.setItem("refreshToken", refresh_token);
        dispatch({
            type: actions.LOGIN,
            payload: {
                user: {
                    ...user,
                    access_token
                }
            }
        })
        return user
    }

    const logout = async () => {
        localStorage.removeItem("refreshToken");
        dispatch({type: actions.LOGOUT});
    }
    const register = async (name, phone, password) => {
        return  await authRegister({name, phone, password});
    }

    const registerConfirm = async (phone, code) => {
        const {
            access_token,
            refresh_token
        } = await authRegisterConfirm({phone, code})

        const user = decode(access_token);

        localStorage.setItem("refreshToken", refresh_token);

        dispatch({
            type: actions.REGISTER,
            payload: {
                user: {
                    ...user,
                    access_token
                }
            }
        })
    }

    useEffect(() => {
        initialize().catch(console.error)
    }, [])

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                register,
                registerConfirm,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const AuthConsumer = AuthContext.Consumer