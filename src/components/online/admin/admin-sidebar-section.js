import React from 'react';
import {List, ListSubheader} from "@mui/material";
import {AdminSidebarItem} from "@/components/online/admin/admin-sidebar-item";
import PropTypes from "prop-types";
import {user_paths} from "@/consts/user-paths";

const index_page = user_paths.admin

const renderNavItems = ({ depth = 0, items, path }) => (
    <List disablePadding>
        {items.reduce((acc, item) => reduceChildRoutes({ acc, depth, item, path }), [])}
    </List>
);

const reduceChildRoutes = ({ acc, depth, item, path }) => {
    const key = `${item.title}-${depth}`;
    const partialMatch = item.path ? path.includes(item.path) : false;
    const exactMatch = path.split('?')[0] === item.path; // We don't compare query params
    const routeMatch = item.path === index_page ? exactMatch : partialMatch

    if (item.children) {
        acc.push(
            <AdminSidebarItem
                active={routeMatch}
                chip={item.chip}
                depth={depth}
                icon={item.icon}
                info={item.info}
                key={key}
                open={routeMatch}
                path={item.path}
                title={item.title}
            >
                {renderNavItems({
                    depth: depth + 1,
                    items: item.children,
                    path
                })}
            </AdminSidebarItem>
        );
    } else {
        acc.push(
            <AdminSidebarItem
                active={routeMatch}
                chip={item.chip}
                depth={depth}
                icon={item.icon}
                info={item.info}
                key={key}
                path={item.path}
                title={item.title}
            />
        );
    }

    return acc;
};

function AdminSidebarSection(props) {
    const { items, path, title, ...other } = props;


    return (
        <List
            subheader={(
                <ListSubheader
                    disableGutters
                    disableSticky
                    sx={{
                        color: 'neutral.500',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        lineHeight: 2.5,
                        ml: 4,
                        textTransform: 'uppercase'
                    }}
                >
                    {title}
                </ListSubheader>
            )}
            {...other}>
            {renderNavItems({
                items,
                path
            })}
        </List>
    );
}

AdminSidebarSection.propTypes = {
    items: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default AdminSidebarSection;