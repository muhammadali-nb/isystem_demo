import React from 'react';
import {useQuery} from "react-query";
import {getMentorList} from "@/api-functions/mentor/get-mentor-list";
import {Autocomplete, Box, TextField} from "@mui/material";
import PropTypes from "prop-types";
import {useAuth} from "@/hooks/use-auth";

function AutocompleteMentors(props) {
    const {
        error,
        helperText,
        label,
        value,
        onChange,
        ...other
    } = props;

    const {user} = useAuth();

    const {data} = useQuery({
        queryKey: ["mentors"],
        queryFn: () => getMentorList({
            token: user?.access_token
        })
    })

    return (
        <Autocomplete
            {...other}
            value={value}
            onChange={(event, val) => onChange?.(val)}
            options={data?.results || []}
            getOptionLabel={option => `${option?.first_name} ${option?.last_name}`}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            renderInput={params => (
                <TextField
                    {...params}
                    label={label || "Mentors"}
                    error={error}
                    helperText={helperText}
                    color="secondary"
                />
            )}
            renderOption={(renderProps, renderOption) => (
                <Box
                    {...renderProps}
                    key={renderOption?.id}
                >
                    {renderOption?.first_name} {renderOption?.last_name}
                </Box>
            )}
        />
    );
}

AutocompleteMentors.propTypes = {
    error: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        first_name: PropTypes.string,
        last_name: PropTypes.string
    }),
    onChange: PropTypes.func
}

export default AutocompleteMentors;