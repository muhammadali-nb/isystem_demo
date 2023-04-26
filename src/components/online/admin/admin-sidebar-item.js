import {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Collapse, ListItem} from '@mui/material';
import {ChevronDown as ChevronDownIcon} from "@/icons/chevron-down";
import {ChevronRight as ChevronRightIcon} from "@/icons/chevron-right";
import Link from "next/link";

export const AdminSidebarItem = (props) => {
    const {
        active,
        children,
        chip,
        depth,
        icon,
        info,
        open: openProp,
        path,
        title,
        ...other
    } = props;
    const [open, setOpen] = useState(!!openProp);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    let paddingLeft = 24;

    if (depth > 0) {
        paddingLeft = 32 + 8 * depth;
    }

    // Branch
    if (children) {
        return (
            <ListItem
                disableGutters
                sx={{
                    display: 'block',
                    mb: 0.5,
                    py: 0,
                    px: 2
                }}
                {...other}>
                <Button
                    endIcon={!open
                        ? <ChevronRightIcon fontSize="small"/>
                        : <ChevronDownIcon fontSize="small"/>}
                    disableRipple
                    onClick={handleToggle}
                    startIcon={icon}
                    sx={{
                        color: 'neutral.400',
                        justifyContent: 'flex-start',
                        pl: `${paddingLeft}px`,
                        pr: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: 'neutral.700',
                        },
                        '& .MuiButton-startIcon': {
                            color: 'neutral.400'
                        },
                        '& .MuiButton-endIcon': {
                            color: 'neutral.400'
                        },
                        ...(active && {
                            color: 'neutral.100',
                            '& .MuiButton-startIcon': {
                                color: 'neutral.100'
                            },
                        }),
                    }}
                >
                    <Box sx={{flexGrow: 1}}>
                        {title}
                    </Box>
                    {info}
                </Button>
                <Collapse
                    in={open}
                    sx={{mt: 0.5}}
                >
                    {children}
                </Collapse>
            </ListItem>
        );
    }

    // Leaf
    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
            }}
        >
            <Button
                component={Link}
                href={path}
                startIcon={icon}
                endIcon={chip}
                disableRipple
                sx={{
                    borderRadius: 1,
                    color: 'neutral.400',
                    justifyContent: 'flex-start',
                    pl: `${paddingLeft}px`,
                    pr: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    ...(active && {
                        backgroundColor: 'neutral.800',
                        color: 'neutral.100',
                    }),
                    '& .MuiButton-startIcon': {
                        color: active ? 'neutral.100' : 'neutral.500'
                    },
                    '&:hover': {
                        backgroundColor: 'neutral.700'
                    }
                }}
            >
                <Box sx={{flexGrow: 1}}>
                    {title}
                </Box>
                {info}
            </Button>
        </ListItem>
    );
};

AdminSidebarItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    depth: PropTypes.number.isRequired,
    icon: PropTypes.node,
    info: PropTypes.node,
    open: PropTypes.bool,
    path: PropTypes.string,
    title: PropTypes.string.isRequired
};

AdminSidebarItem.defaultProps = {
    active: false,
    open: false
};
