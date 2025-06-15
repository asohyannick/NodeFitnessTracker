import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
const deleteProfile = async(req: Request, res: Response): Promise<Response> => {
try {
    const { id } = req.params;
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) {
        return res.status(StatusCodes.NOT_FOUND).json({message: "Profile doesn't exist!"});
    }
    return res.status(StatusCodes.OK).json({message: "Profile has been deleted successfully!", profile});
} catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
}
}
export {
    deleteProfile
}