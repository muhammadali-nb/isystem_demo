export const baseThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                sizeSmall: {
                    padding: '4px 24px'
                },
                sizeMedium: {
                    padding: '10px 22px'
                },
                sizeLarge: {
                    padding: '12px 24px'
                },
                textSizeSmall: {
                    padding: '7px 12px'
                },
                textSizeMedium: {
                    padding: '9px 16px'
                },
                textSizeLarge: {
                    padding: '12px 16px'
                },
                outlined: {
                    borderRadius: "100vh"
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '32px 24px',
                    '&:last-child': {
                        paddingBottom: '32px'
                    }
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px'
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                },
                '#nprogress': {
                    pointerEvents: 'none'
                },
                '#nprogress .bar': {
                    backgroundColor: '#ffcf23',
                    height: 3,
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 2000
                }
            }
        },
        MuiDrawer: {},
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8
                },
                sizeSmall: {
                    padding: 4
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    overflow: 'hidden'
                }
            }
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    marginRight: '16px',
                    '&.MuiListItemIcon-root': {
                        minWidth: 'unset'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    fontWeight: 500
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        },
        MuiPopover: {
            defaultProps: {
                elevation: 16
            }
        },
        MuiRadio: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiSwitch: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 500,
                    lineHeight: 1.71,
                    minWidth: 'auto',
                    paddingLeft: 0,
                    paddingRight: 0,
                    textTransform: 'none',
                    '& + &': {
                        marginLeft: 24
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '15px 16px'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        }
    },
    direction: 'ltr',
    shape: {
        borderRadius: 8
    },
    typography: {
        button: {
            fontWeight: 500,
            fontFamily: '"MarkPro-Medium", sans-serif'
        },
        fontFamily: '"MarkPro-Regular", sans-serif',
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.57
        },
        subtitle1: {
            fontFamily: '"MarkPro-Medium", sans-serif',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75
        },
        subtitle2: {
            fontFamily: '"MarkPro-Medium", sans-serif',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontFamily: '"MarkPro-Medium", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontFamily: '"MarkPro-Heavy", sans-serif',
            fontWeight: 800,
            fontSize: '3.5rem',
            lineHeight: 1.2
        },
        h2: {
            fontFamily: '"MarkPro-Heavy", sans-serif',
            fontWeight: 800,
            fontSize: '2.5rem',
            lineHeight: 1.375
        },
        h3: {
            fontFamily: '"MarkPro-Heavy", sans-serif',
            fontWeight: 800,
            fontSize: '2.25rem',
            lineHeight: 1.375
        },
        h4: {
            fontFamily: '"MarkPro-Heavy", sans-serif',
            fontWeight: 800,
            fontSize: '2rem',
            lineHeight: 1.375
        },
        h5: {
            fontFamily: '"MarkPro-Bold", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.375
        },
        h6: {
            fontFamily: '"MarkPro-Bold", sans-serif',
            fontWeight: 700,
            fontSize: '1.125rem',
            lineHeight: 1.375
        }
    },
    zIndex: {
        appBar: 1200,
        drawer: 1100
    }
};
