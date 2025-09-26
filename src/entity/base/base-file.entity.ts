import {Column, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "./base.entity";

/** Базовая сущность для сущностей файлов. */
export class BaseFileEntity{
    /** Идентификатор. */
    @PrimaryGeneratedColumn()
    public id: number;

    /** Наименование файла. */
    @Column({type: 'text'})
    public filename: string;

    /** Дата загрузки. */
    @Column({name: 'uploaded_at', type: 'date', default: Date.now()})
    public uploadedAt: Date;

    /** Файл. */
    @Column({type: 'text'})
    public file: string;
}