import React from 'react';
import {Box, Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Logo} from "@/components/global/logo";

const OnlineFooter = () => {
	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={{
			minHeight: '80px',
			backgroundColor: theme.palette.primary.main
		}}>
			<Container>
				<Grid container sx={{py: '20px'}}>
					<Grid xs={12} sm={10} item>
						<Box sx={{display: {xs: 'block', sm: 'flex'}, alignItems: 'center'}}>
							<Logo
								color="white-black"
								sx={{
									width: "100%",
									maxWidth: "164px",
									mb: {xs: 1, sm: 0}
								}}
							/>
							<Typography
								sx={{
									display: {xs: 'block', sm: 'inline'},
									fontSize: {xs: '12px', sm: '14px'},
									mx: {sm: 6},
									mr: {sm: 2, xs: 0}
								}}>
								Oferta shartnomasi
							</Typography>
							<Typography
								sx={{
									display: {
										xs: 'block',
										md: 'inline'
									},
									fontSize: {
										xs: '12px',
										sm: '14px'
									}
								}}
							>
								Maxfiylik siyosati
							</Typography>
						</Box>
					</Grid>
					<Grid xs={12} sm={2} sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'start', sm: 'end'} }} item>
						<Typography sx={{width: '110px', color: '#808080', fontSize: '9px', mt: {xs: 2, sm: 0}}}>
							© 2022, isystem.
							Barcha huquqlar himoyalangan.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default OnlineFooter;