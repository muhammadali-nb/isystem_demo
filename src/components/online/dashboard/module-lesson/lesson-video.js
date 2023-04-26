import React from 'react';
import {Box, Container} from "@mui/material";

const LessonVideo = (props) => {
	const {...others} = props

	return (
		<Box {...others}>
			<Box>
				<Container maxWidth='md'>
						<Box sx={{width: '100%', py: {xs: 4, md: 6}}}>
							<Box
								sx={{
									width: '100%',
									pt: '56%',
									backgroundColor: 'black',
									borderRadius: 2
								}} //video
							/>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default LessonVideo;