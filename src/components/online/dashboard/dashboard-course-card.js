import React from 'react';
import {Box, LinearProgress, Typography} from "@mui/material";
import Image from "next/image";

const DashboardCourseCard = (props) => {

	const {name, image, practice, lessons, progress} = props

	return (
		<Box sx={{
			width: '100%',
			py: {xs: '20px', sm: '30px'},
			px: {xs: '15px', sm: '25px'},
			backgroundColor: 'background.paper',
			borderRadius: 1
		}}>
			<Box
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<Typography sx={{maxWidth: '180px', width: '100%'}} variant='h5'>
					{name}
				</Typography>
				<Box sx={{ml: 2}}>
					<Image src={image} width={112} height={112} alt={name}/>
				</Box>
			</Box>
			<Box>
				<Box sx={{display: 'flex', mb: 1}}>
					<Typography sx={{fontSize: '14px'}}>
						<Box component='span' sx={{fontWeight: 800}}>{lessons}</Box> darslar
					</Typography>
					<Typography sx={{fontSize: '14px', ml: 1}}>
						<Box component='span' sx={{fontWeight: 800}}>{practice}</Box> amaliy topshiriq
					</Typography>
				</Box>
				<LinearProgress
					variant="determinate"
					sx={{height: '12px', borderRadius: 1, backgroundColor: 'divider'}}
					value={progress}
				/>
			</Box>
		</Box>
	);
};

export default DashboardCourseCard;