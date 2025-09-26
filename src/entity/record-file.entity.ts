import {Entity} from "typeorm";
import {BaseFileEntity} from "./base/base-file.entity";

/** Сущность файла записи. */
@Entity({name: 'recordfiles'})
export class RecordFileEntity extends BaseFileEntity{}