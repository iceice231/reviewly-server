import {Entity} from "typeorm";
import {BaseCodeNameEntity} from "./base/base-code-name.entity";

/** Сущность категории записи. */
@Entity({name: 'categories'})
export class CategoryEntity extends BaseCodeNameEntity {}