import React, {useState} from 'react';
import {Plus as PlusIcon} from "@/icons/plus";
import {Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography} from "@mui/material";

const faq = [
    {
        id: 1,
        title: "What transport services software can you integrate?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 2,
        title: "What business management tools do you offer?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 3,
        title: "What business management tools do you offer?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 4,
        title: "What is inside White label business model?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 5,
        title: "What is inside KIWIRide-franchise business model?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 6,
        title: "What types of vehicles can be integrated with the software?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 7,
        title: "What types of transport services does the mobile application of the integrated solution include?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 8,
        title: "How long does the business integration take?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 9,
        title: "What do you need to do to cooperate with us?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 10,
        title: "Can you provide the commercial offer for White label business model on the integration to vehicle?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    },
    {
        id: 11,
        title: "How can I contact you?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid beatae deserunt doloribus eveniet, hic labore laborum libero necessitatibus odio praesentium quaerat quisquam quo sed totam ullam unde, veritatis voluptas. Debitis et fuga impedit ipsam molestiae nemo, non odio sapiente!",
    }
]

function OnlineCourseDetailsFaq() {
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
                {faq.map(_item => (
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
                                {_item.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{_item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}

export default OnlineCourseDetailsFaq;