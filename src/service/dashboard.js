export const dashboard = {
	drawer_navs: [
		{name: 'Asosiy', link: '/', id: 1},
		{name: 'Kurslar', link: '/', id: 2},
		{name: 'Bog’lanish', link: '/', id: 3},
		{name: 'Mening profilm', link: '/', id: 4},
	],
	user_name: "Sardorbek",
	user_courses: [
		{
			id: 1,
			course_name: 'Data Science (AI/ML)',
			course_image: '/mock-images/courses/course-ai.svg',
			user_progress: 30,
			lessons: '2/20',
			practice: '4/28',
			link: '/online/dashboard/course/1'
		},

		{
			id: 2,
			course_name: 'Python Backend',
			course_image: '/mock-images/courses/course-python.svg',
			user_progress: 82,
			lessons: '2/20',
			practice: '4/28',
			link: '/online/dashboard/course/2'
		},
		{
			id: 3,
			course_name: 'Programming',
			course_image: '/mock-images/courses/course-programming.svg',
			user_progress: 100,
			lessons: '20/20',
			practice: '28/28',
			link: '/online/dashboard/course/3'
		},
	]
}

export const dashboard_detail = {
	course: {
		name: 'Python Backend',
		image: '/mock-images/courses/course-python.svg',
		progress: 35,
		lessons: '2/20',
		practice: '4/28'
	},
	course_all: [
		{
			id: 1,
			title: '1.   Ma’lumotlar  muhandisligi - “Data  Science” va AI asoslari',
			lessons: [
				{
					id: 1,
					name: '1.1 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true
				},
				{
					id: 2,
					name: '1.2 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true,
					access: true
				},
				{
					id: 3,
					name: '1.3 “Data  Science” va AI asoslari',
					type: 'lesson',
				}
			]
		},
		{
			id: 2,
			title: '2.   Ma’lumotlar  muhandisligi - “Data  Science” va AI asoslari',
			lessons: [
				{
					id: 1,
					name: '2.1 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true
				},
				{
					id: 2,
					name: '2.2 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true,
					access: true
				},
				{
					id: 3,
					name: '2.3 “Data  Science” va AI asoslari',
					type: 'lesson',
				}
			]
		},
		{
			id: 3,
			title: '3.   Ma’lumotlar  muhandisligi - “Data  Science” va AI asoslari',
			lessons: [
				{
					id: 1,
					name: '3.1 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true
				},
				{
					id: 2,
					name: '3.2 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true,
					access: true
				},
				{
					id: 3,
					name: '3.3 “Data  Science” va AI asoslari',
					type: 'lesson',
				}
			]
		},
		{
			id: 4,
			title: '4.   Ma’lumotlar  muhandisligi - “Data  Science” va AI asoslari',
			lessons: [
				{
					id: 1,
					name: '4.1 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true
				},
				{
					id: 2,
					name: '4.2 “Data  Science” va AI asoslari',
					type: 'lesson',
					length: '9 daqiqa',
					wached: true,
					access: true
				},
				{
					id: 3,
					name: '4.3 “Data  Science” va AI asoslari',
					type: 'lesson',
				}
			]
		}
	]
}