import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {Pause} from "@/icons/pause";

const DetailCourseResume = (props) => {
	const {...others} = props

	return (
		<Box {...others}>
			<Box sx={{width: '100%',height: '100%', borderRadius: 1, overflow: 'hidden', position: 'relative'}}>
				<Box
					sx={{
						width: '100%',
						pt: '56.25%',
						backgroundColor: 'black',
						position: 'relative'
					}}
				>
					{/*<Image*/}
					{/*	style={{position: 'absolute', top: '58px', left: '72px', objectFit: 'cover', objectPosition: 'center'}}*/}
					{/*	src={'/logo.png'}*/}
					{/*	width={236}*/}
					{/*	height={112}*/}
					{/*	alt='lesson resume'/>*/}
				</Box>
				<Box sx={{
					display: 'flex', alignItems: 'center', position: 'absolute',
					left: '14px',
					bottom: '14px',
				}}>
					<Box sx={{
						width: '32px',
						height: '32px',
						backgroundColor: 'primary.main',
						borderRadius: '100vh',
						py: '7px',
						px: '8px'
					}}>
						<Pause/>
					</Box>
					<Typography sx={{color: '#fff', ml: 1}}>
						Davom ettirish
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default DetailCourseResume;