import React, {useState} from 'react';
import {Plus as PlusIcon} from "@/icons/plus";
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";
import PropTypes from "prop-types";

function CourseDetailsFaq(props) {
    const {faq} = props;

    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

    return (
        <Box
            sx={{
                pb: {
                    md: 12,
                    xs: 8
                }
            }}
        >
            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 3
                    }}
                >
                    Ko&apos;p beriladigan savollar
                </Typography>
                {faq && faq.map(_item => (
                    <Accordion
                        key={_item.id}
                        expanded={expanded === _item.id}
                        onChange={handleChange(_item.id)}
                        elevation={0}
                        square={true}
                        sx={{
                            backgroundColor: "transparent",
                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                                transform: "rotate(45deg)",
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<PlusIcon/>}
                        >
                            <Typography>
                                {_item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{_item.response}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}

CourseDetailsFaq.propTypes = {
    faq: PropTypes
        .arrayOf(PropTypes.shape({
            id: PropTypes.any,
            question: PropTypes.string,
            response: PropTypes.string
    }))
}

export default CourseDetailsFaq;