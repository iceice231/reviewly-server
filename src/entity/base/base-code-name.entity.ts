import {Column} from "typeorm";
import {BaseEntity} from "./base.entity";

/** Базовая сущность с полями "Наименование" и "Код". */
export class BaseCodeNameEntity extends BaseEntity{
    /** Наименование. */
    @Column({type: 'text', nullable: false})
    public name: string;

    /** Код. */
    @Column({type: 'varchar', length: 1, nullable: false})
    public code: string;
}