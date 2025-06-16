import { Request, Response } from "express";
import Challenge from "../../../../model/challenge/challenge.model";
import { StatusCodes } from "http-status-codes";
import { ChallengeStatus } from "../../../interfac/challenge/challenge.interfac";
const editAndUpdateChallenge = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            title,
            description,
            goals,
            rewards
        } = req.body;
        const challenge = await Challenge.findByIdAndUpdate(id, {
            title,
            description,
            startDate: Date.now(),
            endDate: Date.now(),
            status: ChallengeStatus.COMPLETED,
            goals,
            rewards
        }, { new: true, runValidators: true });
        if (!challenge) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Challenge doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            message: "Challenge has been updated from the database successfully!",
            challenge
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong!', error });
    }
}

export {
    editAndUpdateChallenge
}