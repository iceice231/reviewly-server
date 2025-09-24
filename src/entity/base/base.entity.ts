import {Column, PrimaryGeneratedColumn} from "typeorm";

/** Базовая сущность. */
export class BaseEntity {
    /** Идентификатор. */
    @PrimaryGeneratedColumn()
    public id: number;

    /** Глобальный уникальный идентификатор. */
    @Column({type: 'uuid', nullable: false})
    public guid: string;
}