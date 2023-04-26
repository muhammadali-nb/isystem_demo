import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";


const LessonCard = (props) => {
	const {name} = props

	return (
		<Box>
			<Box sx={{
				backgroundColor: 'background.paper',
				width: '100%',
				borderRadius: 1,
				pt: '50%',
				position: 'relative'
			}}>
				<Image
					src={'/lesson-type.png'}
					width={30}
					height={30}
					style={{position: 'absolute', top: '33%', left: '45%'}}
					alt='lesson'
				/>
			</Box>
			<Typography sx={{mt: 1, fontWeight: '600', fontSize:{xs: '14px',sm: '16px'} }}>{name}</Typography>
		</Box>
	);
};

export default LessonCard;