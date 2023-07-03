import { AppDataSource } from "../data-source";
import { Driver } from "../entities/Driver";

export const driverRepository = AppDataSource.getRepository(Driver)