import { AppDataSource } from "../data-source";
import { Passenger } from "../entities/Passenger";

export const passengerRepository = AppDataSource.getRepository(Passenger)