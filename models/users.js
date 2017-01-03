import {Mongo} from 'meteor/mongo';
export const Users = new Mongo.Collection('users');
// Users.schema = new SimpleSchema({
	// name		: {type:String},
	// username	: {type:String},
	// email		: {type:String},
	// password	: {type:String},
	// rank		: {type:Number},
	// bio			: {type:String},
	// avatarAlbum	: {type:String},
	// following	: {type:[String]}
// });
// export Users;