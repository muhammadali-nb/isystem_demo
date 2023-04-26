import React from 'react';
import {Box, Typography} from "@mui/material";
import {Success} from "@/icons/success";
import {Warning} from "@/icons/warning";

const NotificationCard = (props) => {
	const {title, description, date, type, ...others} = props
	return (
		<Box {...others}>
			<Box sx={{
				width: '100%',
				px: 2,
				py: 1,
				borderRadius: 1,
				backgroundColor: type === 'warning' ? 'rgba(255, 240, 185, 0.4)' : 'neutral.200'
			}}>
				<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					<Box sx={{display: 'flex', alignItems: 'center', mr: 3 }}>
						<Typography sx={{mr: 1}}>
							{title}
						</Typography>
						{type === 'warning' ? <Warning/> : <Success/>}
					</Box>
					<Typography sx={{fontSize: '12px'}}>
						{date}
					</Typography>
				</Box>
				<Typography sx={{mt: 1, fontSize: '12px'}}>
					{description}
				</Typography>
			</Box>
		</Box>
	);
};

export default NotificationCard;