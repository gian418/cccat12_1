// @ts-nocheck
import "reflect-metadata";
import express from "express";
import Ride from "./Ride";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
	const app = express();

	app.use(express.json());

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
	
	app.post("/passengers", function (req, res) {
		const {name, email, document} = req.body;
	
		console.log(name);
		console.log(email);
		console.log(document);
	
		return res.json({ passenger_id: "123123123" });
	});
	
	return app.listen(process.env.PORT, () => console.log("Servidor esta rodando..."));
});