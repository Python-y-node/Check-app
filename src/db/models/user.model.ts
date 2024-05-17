import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'users'})
export class UserModel {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        name: 'first_name',
        type: 'varchar',
        length: 15,
        nullable: false
    })
    firstName: string

    @Column({
        name: 'last_name',
        type: 'varchar',
        length: 15,
        nullable: false
    })
    lastName: string

    @Column({
        type: 'varchar',
        nullable: false,
        unique: true
    })
    email: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    password: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    recoveryToken: string

    @Column({
        type: 'boolean',
        default: false
    })
    google: boolean

}