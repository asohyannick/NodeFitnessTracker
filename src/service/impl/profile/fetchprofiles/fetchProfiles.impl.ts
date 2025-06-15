import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Profile from "../../../../model/profile/profile.model";
const fetchProfiles = async(_req: Request, res: Response): Promise<Response> => {
try {
    const profiles = await Profile.find();
    return res.status(StatusCodes.OK).json({message: "Profiles have been fetched successfully!", profiles});
} catch (error) {
    console.error(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: "Something went wrong!", error});
}
}
export {
    fetchProfiles
}