import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Sourabh';

export const lastName = 'Kale';

export const description =
	'I am a software engineer with 9 years of experience, specializing in developing and architecting solutions using Java, Spring Boot, and front-end technologies like React and Next.js. My expertise spans across cloud infrastructure with AWS, containerization using Docker, and orchestrating microservices with Kubernetes. I have a strong track record of delivering scalable and robust applications.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/sourabhkale' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/sourabh-kale-b68084a0/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'kalesourabh01@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('java','js','reactjs', 'html', 'reactjs', 'sass', 'svelte', 'ts','docker');
