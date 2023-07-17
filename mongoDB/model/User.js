import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    neme: {type: String, require: true},
    emal: {type: String, required: true},
    avatar: {type: String, required: true},
    allProperties: [{type: mongoose.Schema.Types.ObjectId, ref: 'Property'}],
});

const userModel = mongoose.model('User', UserSchema);

export default UserSchema;