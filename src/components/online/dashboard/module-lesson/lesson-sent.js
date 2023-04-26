import React from 'react';
import {Box, Button, Container, TextareaAutosize, Typography} from "@mui/material";
import {Plus} from "@/icons/plus";

const LessonSent = (props) => {
	const {...others} = props
	return (
		<Box {...others} >
			<Box sx={{pt: {xs: 6, md: 12}, pb: {xs: 12, sm: 8}}}>
				<Container maxWidth='md'>
					<Typography variant='h3' sx={{fontWeight: 500}}>
						Uy vazifani jonatish
					</Typography>
					<Box sx={{mt: {xs: 2, md: 4, position: 'relative'}}}>
						<TextareaAutosize
							placeholder='Xabar jo’natish'
							minRows={10}
							style={{
								width: '100%',
								borderRadius: '16px',
								paddingTop: '22px',
								paddingLeft: '28px',
								border: '1px solid black',
								fontSize: '16px',
								resize: 'none'
							}}
						/>
						<Box sx={{display: 'flex', position: 'absolute', bottom: 26, left: 24}}>
							<Plus/>
							<Typography sx={{ml: 1}}>
								Fayil qo’shish
							</Typography>
						</Box>
						<Button
							sx={{
								minWidth: {xs: '100%', sm: '200px'},
								position: 'absolute',
								bottom: {xs: -48, sm: 22},
								right: {xs: 0, sm: 24}
							}}
							color='secondary'
							variant="contained"
						>
							Jo’natish
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default LessonSent;