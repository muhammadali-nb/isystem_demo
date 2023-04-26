import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography} from "@mui/material";
import {Plus} from "@/icons/plus";
import LessonCard from "@/components/global/lesson-card";
import Link from "next/link";

const DetailLessonAccordion = (props) => {
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
			{items.map(module => (
				<Accordion
					key={module.id}
					elevation={0}
					sx={AccordionStyle}
					expanded={expanded === module.id}
					onChange={handleChange(module.id)}
				>
					<AccordionSummary expandIcon={<Plus/>}>
						<Typography variant='h6' sx={{fontWeight: 500}}>{module.title}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid columnSpacing={1} rowSpacing={1} container>
							{module.lessons.map(lesson => (
								<Grid key={lesson.id} xs={6} sm={4} item>
									<Link
										href={`/online/dashboard/module/${lesson.id}`}
										style={{
											textDecoration: "none",
											color: "initial"
										}}
									>
										<LessonCard name={lesson.name} />
									</Link>
								</Grid>
							))}
						</Grid>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export default DetailLessonAccordion;