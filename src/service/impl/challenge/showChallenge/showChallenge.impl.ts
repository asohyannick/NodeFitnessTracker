import { Request, Response } from "express";
import Challenge from "../../../../model/challenge/challenge.model";
import { StatusCodes } from "http-status-codes";
const showChallenge = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const challenge = await Challenge.findById(id);
        if (!challenge) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Challenge doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            message: "Challenge has been retrieved from the database successfully!",
            challenge
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong!', error });
    }
}

export {
    showChallenge
}