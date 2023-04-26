import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {Smile10} from "@/icons/smiles/smile-10";
import {Smile20} from "@/icons/smiles/smile-20";
import {Smile30} from "@/icons/smiles/smile-30";
import {Smile40} from "@/icons/smiles/smile-40";
import {Smile50} from "@/icons/smiles/smile-50";

const LessonRate = (props) => {
	const {...others} = props
	return (
		<Box {...others}>
			<Box>
				<Container maxWidth='md'>
					<Box sx={{
						display: 'flex',
						flexDirection: {xs: 'column', sm: 'row'},
						justifyContent: 'space-between',
						alignItems: 'center',
						py: '20px',
						px: 2,
						borderRadius: 2,
						backgroundColor: '#FFF0B9'
					}}>
						<Typography variant='h5' sx={{fontWeight: 500, mb: {xs: 1, sm: 0}}}>
							Darsga baxo bering
						</Typography>
						<Box>
							<Button sx={{p: 0, height: {xs: '34px', md: '40px'}, minWidth: {xs: '34px', md: '40px'}}}>
								<Smile10 sx={{width: '100%', height: '100%'}}/>
							</Button>
							<Button sx={{p: 0, height: {xs: '34px', md: '40px'}, minWidth: {xs: '34px', md: '40px'}, ml: 2}}>
								<Smile20 sx={{width: '100%', height: '100%'}}/>
							</Button>
							<Button sx={{p: 0, height: {xs: '34px', md: '40px'}, minWidth: {xs: '34px', md: '40px'}, ml: 2}}>
								<Smile30 sx={{width: '100%', height: '100%'}}/>
							</Button>
							<Button sx={{p: 0, height: {xs: '34px', md: '40px'}, minWidth: {xs: '34px', md: '40px'}, ml: 2}}>
								<Smile40 sx={{width: '100%', height: '100%'}}/>
							</Button>
							<Button sx={{p: 0, height: {xs: '34px', md: '40px'}, minWidth: {xs: '34px', md: '40px'}, ml: 2}}>
								<Smile50 sx={{width: '100%', height: '100%'}}/>
							</Button>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default LessonRate;