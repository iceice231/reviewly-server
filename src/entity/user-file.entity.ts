import {Entity} from "typeorm";
import {BaseFileEntity} from "./base/base-file.entity";

/** Сущность уровня пользователя. */
@Entity({name: 'userfiles'})
export class UserFileEntity extends BaseFileEntity{}