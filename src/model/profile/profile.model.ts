import mongoose, { Schema } from "mongoose";
import { IProfileInterfac, MaritalStatus } from "../../service/interfac/profile/profile.interfac";
import bcrypt from 'bcryptjs';
const profileSchema: Schema = new Schema<IProfileInterfac>({
firstName:{
    type: String,
    trim: true,
},
lastName:{
    type: String,
    trim: true,
},
email:{
    type: String,
    trim: true,
    unique: true,
},
password:{
    type: String,
    trim: true,
},
bio:{
    type: String,
    trim: true,
},
profilePicture:{
    type: String,
    trim: true,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO8GPm0phbELvMAA6QsEOYilHs0Fnmq3k2w&s"
},
maritalStatus:{
    type: String,
    enum: Object.values(MaritalStatus),
    trim: true,
    default: MaritalStatus.SINGLE,
},
profession:{
    type: String,
    trim: true,
},
country:{
    type: String,
    trim: true,
},
}, {timestamps: true});
profileSchema.pre<IProfileInterfac>('save', async function(next) {
    if(!this.isModified("password")) return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
});
const Profile = mongoose.model<IProfileInterfac>('Profile', profileSchema);
export default Profile;