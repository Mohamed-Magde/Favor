const navContent = {
	navBtn: 'fas fa-user',
	logo: 'Favor',
	navSearch: 'fas fa-search'
};

const heroContent = {
	heroImg: require('../assets/img/hero/chicken/h-800.jpeg'),
	heroTitle: 'Enter Your Address',
	heroIcon: 'fas fa-map-marker-alt',
	heroBtn: 'FIND FOOD',
	heroApps: [ 'fab fa-apple', 'fab fa-android' ],
	heroEnding: "P. Terry's | Austin, TX"
};

const slide = {
	slideImg: require('../assets/img/slide/app-on-phone.png'),
	slideItems: [
		{
			id: 1,
			title: 'What is Favor?',
			desc: 'Use Favor to get anything delivered in under an hour.'
		},
		{
			id: 2,
			title: 'Anything Delivered',
			desc: 'Whether you want food delivery from Whataburger or a quick errand from Target, we can help!'
		},
		{
			id: 3,
			title: 'Endless Options',
			desc:
				"Order restaurant delivery from all your favorites... from Starbucks and Chick-fil-A to Torchy's Tacos."
		},
		{
			id: 4,
			title: 'Personal Service',
			desc: 'Our delivery assistants, we call them Runners, keep you updated every step of the way.'
		},
		{
			id: 5,
			title: 'Low Pricing',
			desc: 'Delivery fees as low as $1 from select stores and restaurants.'
		}
	]
};

const features = [
	{
		id: 1,
		title: 'Become a Runner',
		desc: 'Apply Today, Run Tomorrow.',
		btn: 'LEARN MORE',
		img: require('../assets/img/runner/lg.2')
	},
	{
		id: 2,
		title: 'Partner',
		desc: 'Grow your business with Favor.',
		btn: 'LEARN MORE',
		img: require('../assets/img/partner/lg.2')
	},
	{
		id: 3,
		title: 'Careers',
		desc: 'Start your next chapter.',
		btn: 'LEARN MORE',
		img: require('../assets/img/carrer/lg.3')
	}
];

const footer = {
	list: [
		{
			id: 1,
			name: 'Careers',
			link: '/careers'
		},
		{
			id: 2,
			name: 'Merchants',
			link: '/merchants'
		},
		{
			id: 3,
			name: 'Blog',
			link: '/blog'
		},
		{
			id: 4,
			name: 'Press',
			link: '/press'
		},
		{
			id: 5,
			name: 'Gift Cards',
			link: '/gifts'
		},
		{
			id: 6,
			name: 'Get Help',
			link: '/help'
		}
	],
	action: {
		btn: 'BECOME A RUNNER'
	},
	address: [],
	social: [
		{
			id: 1,
			icon: 'fab fa-facebook-f'
		},
		{
			id: 2,
			icon: 'fab fa-twitter'
		},
		{
			id: 3,
			icon: 'fab fa-instagram'
		}
	],
	copyRights: {
		title: '© Copyright 2020 NeighborFavor, Inc.',
		terms: 'Terms of Service',
		policy: ' Privacy Policy',
		accessibility: ' Accessibility Statement'
	}
};

export { navContent, heroContent, slide, features, footer };
