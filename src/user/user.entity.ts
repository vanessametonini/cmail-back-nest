import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, Min } from "class-validator";

@Entity()
export class User {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true, nullable: false})
  @IsEmail()
  email: string;

  @Column({nullable: false, default: '123456'})
  @Min(4)
  password: string;

  @Column({nullable: false})
  @Min(2)
  name: string;

  @Column({unique: true, nullable: false})
  @Min(2)
  username: string;

  @Column({nullable: false})
  @Min(8)
  phone: string;

  @Column()
  avatar_url: string;

}