import React from 'react';
import {Box, Container, FormControlLabel, Grid, Switch} from "@mui/material";
import PrevPage from "@/components/global/prev-page";
import DashboardCourseCard from "@/components/online/dashboard/dashboard-course-card";
import {dashboard_detail} from "@/service/dashboard";
import DetailCourseResume from "@/components/online/dashboard/course-detail/detail-course-resume";
import DetailLessonAccordion from "@/components/online/dashboard/course-detail/detail-lesson-accordion";
import DetailQuestionsCard from "@/components/online/dashboard/course-detail/detail-questions-card";

const DetailScreen = () => {

	return (
		<Box>
			<Container>
				<PrevPage link='/online/dashboard'/>
				<FormControlLabel
					value="off"
					control={<Switch inputProps={{'aria-label': 'test'}} size="small"/>}
					label="O’tib bo’lingan modullarni berkitish"
					labelPlacement="end"
					sx={{
						mt: 6,
						mb: 2
					}}
				/>
				<Grid sx={{py: 3, flexDirection: {xs: 'column-reverse', md: 'row'}}} columnSpacing={4} rowSpacing={2} container>
					<Grid md={8} xs={12} item>
						<DetailLessonAccordion items={dashboard_detail.course_all}/>
					</Grid>
					<Grid md={4} xs={12} item>
						<Grid columnSpacing={2} rowSpacing={3} container>
							<Grid xs={12} sm={6} md={12} item>
								<DashboardCourseCard
									name={dashboard_detail.course.name}
									lessons={dashboard_detail.course.lessons}
									practice={dashboard_detail.course.practice}
									image={dashboard_detail.course.image}
									progress={dashboard_detail.course.progress}
								/>
							</Grid>
							<Grid xs={12} sm={6} md={12} item>
								<DetailCourseResume/>
							</Grid>
							<Grid xs={12} sm={8} md={12} item>
								<DetailQuestionsCard/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default DetailScreen;