import { Request, Response } from "express";
import Challenge from "../../../../model/challenge/challenge.model";
import { StatusCodes } from "http-status-codes";
const showChallenges = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const challenges = await Challenge.find();
        return res.status(StatusCodes.OK).json({message: "Challenges have been retrieved from the database successfully!", challenges});
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong!', error });
    }
}

export {
    showChallenges
}