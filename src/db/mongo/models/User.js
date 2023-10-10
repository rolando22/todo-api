import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	password: String,
	image: String,
});

userSchema.set('toJSON', { 
	transform: (_document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
		delete returnedObject.password;
	}
});

userSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};
  
userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

export const User = model('User', userSchema);
