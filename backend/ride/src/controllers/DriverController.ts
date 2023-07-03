import { Request, Response } from "express";
import { driverRepository } from "../repositories/driverRepository";
import { validate } from "../cpf";

export class DriverController {
    async create(req: Request, res: Response) {
        const { name, email, document, carPlate } = req.body;

        if(!name || !email || !document || !carPlate){
            return res.status(400).json({message: 'Todos os campos sao obrigatorios.'});
        }

        if(!validate(document)) {
            return res.status(400).json({message: 'CPF é inválido'})
        }


        try {
            const newDriver = driverRepository.create({ name, email, document, carPlate })
            await driverRepository.save(newDriver)
            return res.status(201).json(newDriver.id)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Internal server error'})
        }
    }
}