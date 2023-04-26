import React, {useState} from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box, Grid
} from "@mui/material";
import {Plus} from "@/icons/plus";
import Link from "next/link";
import LessonCard from "@/components/global/lesson-card";

const OnlineCourseDetailsProgramAccordion = (props) => {
    const {items, ...others} = props;
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const AccordionStyle = {
        backgroundColor: "background.default",
        borderRadius: "none",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(45deg)",
        },
    };
    return (
        <Box {...others}>
            {items?.map((item, index) => (
                <Accordion
                    key={item.id}
                    elevation={0}
                    sx={AccordionStyle}
                    expanded={expanded === index}
                    onChange={handleChange(index)}>
                    <AccordionSummary expandIcon={<Plus/>}>
                        <Typography
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical"
                            }}
                        >
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid columnSpacing={1} rowSpacing={1} container>
                            <Grid xs={6} sm={4} item>
                                <Link
                                    href={`/online/dashboard/module/1`}
                                    style={{
                                        textDecoration: "none",
                                        color: "initial"
                                    }}
                                >
                                    <LessonCard name={"1.2 “Data  Science” va AI asoslari"}/>
                                </Link>
                            </Grid>
                            <Grid xs={6} sm={4} item>
                                <Link
                                    href={`/online/dashboard/module/1`}
                                    style={{
                                        textDecoration: "none",
                                        color: "initial"
                                    }}
                                >
                                    <LessonCard name={"1.1 “Data  Science” va AI asoslari"}/>
                                </Link>
                            </Grid>
                            <Grid xs={6} sm={4} item>
                                <Link
                                    href={`/online/dashboard/module/1`}
                                    style={{
                                        textDecoration: "none",
                                        color: "initial"
                                    }}
                                >
                                    <LessonCard name={"1.3 “Data  Science” va AI asoslari"}/>
                                </Link>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default OnlineCourseDetailsProgramAccordion;
