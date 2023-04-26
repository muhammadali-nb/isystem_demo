import React from 'react';
import PropTypes from "prop-types";

function Mentors(props) {
    const {
        mentors,
        ...other
    } = props;

    return (
        <div></div>
    );
}

Mentors.propTypes = {
    mentors: PropTypes.arrayOf(PropTypes.shape({
    }))
}

export default Mentors;