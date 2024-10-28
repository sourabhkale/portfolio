import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Science in computer science',
		description: '',
		location: 'Kolhapur',
		logo: Assets.Unknown,
		name: '',
		organization: 'Shivaji university',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java']
	},
	{
		degree: 'Bachelor of Science in computer science',
		description: '',
		location: 'Kolhapur',
		logo: Assets.Unknown,
		name: '',
		organization: 'Shivaji university',
		period: { from: new Date(2016, 0, 1), to: new Date(2020, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-1',
		subjects: ['C', 'Algorithm']
	},
];

export const title = 'Education';
