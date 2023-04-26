import React from 'react';
import {Box, Container, Typography} from "@mui/material";

const LessonDescription = () => {
	return (
		<Box>
			<Box sx={{py: {xs: 2, md: 4} }}>
				<Container maxWidth='md'>
					<Typography variant='h5' sx={{fontWeight: 500,mb: 2}}>
						“Data  Science” va AI asoslari
					</Typography>
					<Typography>
						Ma’lumotlar bilan ishlash - bu har bir jamoa a’zosi o’z vazifasini bajaradigan jarayon. Tahlilchi biznes qarorlarini qabul qilishga yordam beradi, ML-muhandisi modellarni o’rganib chiqadi va Data-muhandisi barchasin to’g’ri ishlashini nazorat qiladi.

						Ular o’z orinlaridan qatiy nazar Python-da  dasturshdi , matematika, statistikani tushushi va ma’lumotlar tilida gapira olishadi. Shuning uchun, ba’zida bunday mutaxassislarni oddiygina Data Sciencechi deb ataladi.
						Ma’lumotlar bilan ishlash - bu har bir jamoa a’zosi o’z vazifasini bajaradigan jarayon. Tahlilchi biznes qarorlarini qabul qilishga yordam beradi, ML-muhandisi modellarni o’rganib chiqadi va Data-muhandisi barchasin to’g’ri ishlashini nazorat qiladi.

						Ular o’z orinlaridan qatiy nazar Python-da  dasturshdi , matematika, statistikani tushushi va ma’lumotlar tilida gapira olishadi. Shuning uchun, ba’zida bunday mutaxassislarni oddiygina Data Sciencechi deb ataladi.
					</Typography>
				</Container>
			</Box>
		</Box>
	);
};

export default LessonDescription;