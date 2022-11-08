import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    DOB: { type: String },
   country:{type: String },
   resume:{type: String},

}, { timestamps: true });


export default mongoose.models.Data || mongoose.model("Data", UserSchema);
