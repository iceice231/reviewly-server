import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {BaseEntity} from "./base/base.entity";
import {UserLevelEntity} from "./user-level.entity";
import {UserFileEntity} from "./user-file.entity";

/** Сущность пользователя. */
@Entity({name: 'users'})
export class UserEntity extends BaseEntity{
    /**  Имя. */
    @Column({type: 'varchar', length: 15, nullable: true})
    public name: string;

    /**  Фамилия. */
    @Column({type: 'varchar', length: 30, nullable: true})
    public surname: string;

    /**  Отчество. */
    @Column({type: 'varchar', length: 40, nullable: true})
    public patronymic: string;

    /**  Псевданим. */
    @Column({type: 'varchar', length: 25})
    public username: string;

    /**  Электронная почта. */
    @Column({type: 'varchar', length: 25})
    public email: string;

    /**  Пароль. */
    @Column({type: 'text'})
    public password: string;

    /**  Уровень. */
    @OneToOne(() => UserLevelEntity)
    @JoinColumn({name: 'user_level_id'})
    public userLevel: UserLevelEntity

    /** Фотография пользователя. */
    @OneToOne(() => UserFileEntity)
    @JoinColumn({name: 'user_file_id'})
    public userFile: UserFileEntity
}