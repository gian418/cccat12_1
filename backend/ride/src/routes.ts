import { Router } from "express";
import { PassengerController } from "./controllers/PassengerController";

const routes = Router();

routes.post('/passengers', new PassengerController().create)

export default routes;