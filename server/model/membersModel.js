import mongoose from "mongoose";

const membersSchema = mongoose.Schema({
    names: [String],
    hashes: [String]
});

const membersModel = mongoose.model('member', membersSchema);

export default membersModel;