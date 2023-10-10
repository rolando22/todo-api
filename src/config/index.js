import 'dotenv/config';

export const config = {
	port: process.env.PORT,
	jwtSecret: process.env.JWT_SECRET,
	mongoUser: process.env.MONGO_USERNAME,
	mongoPassword: process.env.MONGO_PASSWORD,
	host: process.env.HOST,
	database: process.env.DATABASE,
	portDb: process.env.PORT_DB,
};
