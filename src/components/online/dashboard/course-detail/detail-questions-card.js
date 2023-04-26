import React from 'react';
import {Box, Typography} from "@mui/material";
import {Telegram} from "@/icons/telegram";

const DetailQuestionsCard = (props) => {
	const {...others} = props

	return (
		<Box {...others}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					px: 2,
					py: 2,
					borderRadius: 1,
					backgroundColor: 'background.paper'
				}}
			>
				<Typography>
					Kurs mavzular va topshiriqlari boyicha savollaringizni berishingiz mumkin
				</Typography>
				<Telegram sx={{width: '50px'}}/>
			</Box>
		</Box>
	);
};

export default DetailQuestionsCard;