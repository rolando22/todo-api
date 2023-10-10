import mongoose from 'mongoose';
import { User } from './models/User.js';
import { createInitialUsers } from '../../utils/createInitialUsers.js';
import { config } from '../../config/index.js';

const { mongoUser, mongoPassword, host, database, portDb } = config;

const connectionString = `mongodb://${mongoUser}:${mongoPassword}@${host}/${database}?authSource=admin`;

(async () => {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`Database connected at: ${portDb}`);
		const users = await User.find({});
		if (users.length === 0) await createInitialUsers();
	} catch (error) {
		console.log(error);
	}
})();
