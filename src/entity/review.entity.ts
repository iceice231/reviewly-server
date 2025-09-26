import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {UserEntity} from "./user.entity";
import {RecordEntity} from "./record.entity";

/** Сущность отзыва. */
@Entity({name: 'reviews'})
export class ReviewEntity extends BaseEntity {
    /** Пользователь. */
    @ManyToOne(() => UserEntity, {onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    public user: UserEntity

    /** Запись. */
    @ManyToOne(() => RecordEntity, {onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'record_id'})
    public record: RecordEntity

    /** Текст отзыва. */
    @Column({type: 'text', nullable: true})
    public text: string;

    /** Текст преимущества. */
    @Column({name: 'advantage_text', type: 'text', nullable: true})
    public advantageText: string;

    /** Текст недостатков. */
    @Column({name: 'disadvantage_text', type: 'text', nullable: true})
    public disadvantageText: string;

    /** Оценка. */
    @Column({type: 'int4'})
    public estimation: number;

    /** Дата создания. */
    @Column({name: 'create_at', default: Date.now()})
    public createAt: Date;
}