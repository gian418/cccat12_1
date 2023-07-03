// @ts-nocheck
import "reflect-metadata";
import express from "express";
import Ride from "./Ride";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
	const app = express();

	app.use(express.json());

	app.use(routes);

	app.post("/calculate_ride", function (req, res) {
		try {
			const ride = new Ride();
			for (const segment of req.body.segments) {
				ride.addSegment(segment.distance, new Date(segment.date));
			}
			const price = ride.calculate();
			res.json({ price });
		} catch (e) {
			res.status(422).send(e.message);
		}
	});
	
	return app.listen(process.env.PORT, () => console.log("Servidor esta rodando..."));
});