import React from 'react';
import {Box, Typography} from "@mui/material";
import {PrevSecondary} from "@/icons/prev-secondary";
import Link from "next/link";

const PrevPage = (props) => {
	const {link} = props

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				p: 0,
				color: 'secondary.main',
				textDecoration: 'none'
			}}
			component={Link}
			href={link}>
			<Box
				sx={{
					width: {xs: '25px', sm: '40px'},
					height: {xs: '25px', sm: '40px'},
					backgroundColor: 'primary.light',
					borderRadius: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mr: 1,
				}}
			>
				<PrevSecondary sx={{width: '12px'}} />
			</Box>
			<Typography>Ortga</Typography>
		</Box>
	);
};

export default PrevPage;