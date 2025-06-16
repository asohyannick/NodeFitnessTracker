import { Request, Response } from "express";
import Challenge from "../../../../model/challenge/challenge.model";
import { ChallengeStatus } from "../../../interfac/challenge/challenge.interfac";
import { StatusCodes } from "http-status-codes";
const createChallenge = async (req: Request, res: Response): Promise<Response> => {
    const {
        title,
        description,
        goals,
        rewards,
    } = req.body;
    try {
        const newChallenge = new Challenge({
            title,
            description,
            startDate: Date.now(),
            endDate: Date.now(),
            status: ChallengeStatus.COMPLETED,
            goals,
            rewards
        });
        await newChallenge.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new challenge has been created successfully!",
            newChallenge
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong!', error });
    }
}

export {
    createChallenge
}