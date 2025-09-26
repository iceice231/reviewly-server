import {Column, PrimaryGeneratedColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

/** Базовая сущность. */
export class BaseEntity {
    /** Идентификатор. */
    @PrimaryGeneratedColumn()
    public id: number;

    /** Глобальный уникальный идентификатор. */
    @Column({type: 'uuid', nullable: false, default: () => uuidv4()})
    public guid: string;
}