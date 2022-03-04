import { Request, Response } from "express";

const OK = 200;


class DogController {
    async getVariableName(req: Request, res: Response, next) {
        const { description } = req.body;
        const variableName = description + ' by server...';
        res.status(OK).send({ variableName : variableName });
    }
}

export default new DogController();