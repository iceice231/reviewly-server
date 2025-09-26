import {Column, Entity} from "typeorm";
import {BaseCodeNameEntity} from "./base/base-code-name.entity";

/** Сущность уровня пользователя. */
@Entity({name: 'userlevels'})
export class UserLevelEntity extends BaseCodeNameEntity{
    /** Количество необходимых к проверке ревью */
   @Column({name: 'required_reviews_count', type: 'int4', nullable: true, default: 0})
   public requiredReviewsCount: number;
}