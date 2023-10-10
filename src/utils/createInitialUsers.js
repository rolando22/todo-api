import { UsersService } from '../services/mongo/users.service.js';

export const createInitialUsers = async () => {
	const user1 = {
		firstName: 'Terry',
		lastName: 'Medhurst',
		email: 'atuny0@sohu.com',
		username: 'atuny0',
		password: '9uQFF1Lh',
		image: 'https://robohash.org/hicveldicta.png',
	};
	await UsersService.create({ data: user1 });

	const user2 = {
		firstName: 'Sheldon',
		lastName: 'Quigley',
		email: 'hbingley1@plala.or.jp',
		username: 'hbingley1',
		password: 'CQutx25i8r',
		image: 'https://robohash.org/doloremquesintcorrupti.png',
	};
	await UsersService.create({ data: user2 });

	const user3 = {
		firstName: 'Terrill',
		lastName: 'Hills',
		email: 'rshawe2@51.la',
		username: 'rshawe2',
		password: 'OWsTbMUgFc',
		image: 'https://robohash.org/consequunturautconsequatur.png',
	};
	await UsersService.create({ data: user3 });
};
