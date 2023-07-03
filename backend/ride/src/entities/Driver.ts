import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("drivers")
export class Driver {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    document: string;

    @Column("car_plate")
    carPlate: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}