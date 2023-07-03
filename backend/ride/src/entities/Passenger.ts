import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("passengers")
export class Passenger {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    document: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}