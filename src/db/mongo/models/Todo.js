import { model, Schema } from 'mongoose';

const todoSchema = new Schema({
	text: String,
	completed: Boolean,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

todoSchema.set('toJSON', { 
	transform: (_document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	}
});

export const Todo = model('Todo', todoSchema);
