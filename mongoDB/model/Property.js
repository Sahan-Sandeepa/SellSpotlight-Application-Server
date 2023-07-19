import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    propertyType: {type: String, require: true},

})

const propertyModel = mongoose.model('property', PropertySchema);

export default propertyModel;