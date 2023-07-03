import { Router } from "express";
import { PassengerController } from "./controllers/PassengerController";
import { DriverController } from "./controllers/DriverController";

const routes = Router();

routes.post('/passengers', new PassengerController().create)
routes.post('/drivers', new DriverController().create)

export default routes;