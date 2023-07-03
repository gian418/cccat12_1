import { Request, Response } from "express";
import { passengerRepository } from "../repositories/passengerRepository";

export class PassengerController {
    async create(req: Request, res: Response) {
        const { name, email, document } = req.body;

        if(!name || !email || !document){
            return res.status(400).json({message: 'Todos os campos sao obrigatorios.'});
        }

        try {
            const newPassenger = passengerRepository.create({ name, email, document })
            await passengerRepository.save(newPassenger)
            return res.status(201).json(newPassenger.id)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal server error'})
        }
    }
}