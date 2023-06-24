import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email : {
        type: String,
        required:[true,"Email is Required"],
        unique:[true,'Email already exist']
    },
    username: {
        type: String,
        required:[true,"Email is Required"],
    },
    image:{
        type : String
    }
})
const User = models.User || model("User", UserSchema);
export default User;