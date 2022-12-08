import { Optional } from "sequelize";
import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Applications } from "./applications.model";

interface UsersAttributes {
  id: number;
  password: string;
  last_login: Date;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  application_id: number;
}

export interface UsersInput extends Optional<UsersAttributes, "id"> {}

export interface UsersOutput extends Required<UsersAttributes> {}

@Table({
  timestamps: true,
  tableName: "Users",
})
export class Users extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  last_login!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @ForeignKey(() => Applications)
  @Column({
    type: DataType.INTEGER,
  })
  application_id!: number;
}
