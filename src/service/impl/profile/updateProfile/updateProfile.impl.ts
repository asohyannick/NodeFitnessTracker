import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
import { MaritalStatus } from '../../../interfac/profile/profile.interfac';
const updateProfile = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { firstName,
            lastName,
            email,
            password,
            bio,
            profilePicture,
            profession,
            country } = req.body;
        const profile = await Profile.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            password,
            bio,
            profilePicture,
            maritalStatus: MaritalStatus.MARRIED,
            profession,
            country
        }, { new: true, runValidators: true });
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Profile doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({ message: "Profile has been updated successfully!", profile });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}
export {
    updateProfile
}