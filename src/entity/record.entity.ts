import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {UserEntity} from "./user.entity";
import {CategoryEntity} from "./category.entity";

/** Сущность записи. */
@Entity({name: 'records'})
export class RecordEntity extends BaseEntity{
    /** Пользователь. */
    @ManyToOne(() => UserEntity, {onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    public user: UserEntity

    /** Категория. */
    @ManyToOne(() => CategoryEntity, {onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'category_id'})
    public category: CategoryEntity

    /** Название записи. */
    @Column({type: 'text', nullable: true})
    public title: string;

    /** Описание записи. */
    @Column({type: 'text', nullable: true})
    public description: string;

    /** Дата создания записи. */
    @Column({name: 'create_at', type: 'date', default: Date.now()})
    public createAt: Date;
}