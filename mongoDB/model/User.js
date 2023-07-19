import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, required: true },
    avatar: { type: String },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'property' }],
});


const userModel = mongoose.model("user", UserSchema);

export default userModel;