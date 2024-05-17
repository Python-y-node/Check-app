import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "earning_categories" })
export class EarningCategory {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column("varchar",{
        name: "category_name",
        length: 20,
        nullable: false
    })
    categoryName: string

    @Column("varchar", {

        nullable: false
    })
    comment: string

    @Column("timestamp", { 
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date

} 