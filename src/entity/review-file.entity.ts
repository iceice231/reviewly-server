import {Entity, JoinColumn, ManyToOne} from "typeorm";
import {BaseFileEntity} from "./base/base-file.entity";
import {ReviewEntity} from "./review.entity";

/** Сущность файла отзыва. */
@Entity({name: 'reviewfiles'})
export class ReviewFileEntity extends BaseFileEntity{
    /** Отзыв. */
    @ManyToOne(() => ReviewEntity, {onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'review_id'})
    public review: ReviewEntity
}