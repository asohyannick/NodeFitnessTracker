import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
import { MaritalStatus } from '../../../interfac/profile/profile.interfac';
const createProfile = async(req: Request, res: Response): Promise<Response> => {
    const { firstName, lastName, email, password, bio, profilePicture,  profession, country } = req.body;
try {
    const newProfile = new Profile({
        firstName,
        lastName,
        email,
        password,
        bio,
        profilePicture,
        maritalStatus: MaritalStatus.MARRIED,
        profession,
        country
    });
    await newProfile.save();
    return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Profile has been created successfully!",
        newProfile
    });
} catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
}
}
export {
    createProfile
}