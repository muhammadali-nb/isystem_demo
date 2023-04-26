import React from 'react';
import {styled} from "@mui/material";
import Image from "next/image";

const ProfileAvatar = (props) => {
	const {...others} = props

	const AvatarRoot = styled('div')(() => ({
		height: '40px',
		width: '40px',
		borderRadius: '100vh',
		overflow: 'hidden'
	}));

	return (
		<AvatarRoot
			{...others}
		>
			<Image
				src='/mock-images/mentors/azimjon_nemadaliev.png'
				style={{width: '100%', objectFit: 'cover', objectPosition: 'center'}}
				width={40}
				height={40}
				alt='avatar'
			/>
		</AvatarRoot>
	);
};

export default ProfileAvatar;