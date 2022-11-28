import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  HasOne,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Users } from "./users.model";

interface CodesAttributes {
  id: number;
  code: string;
  content: Date;
  user_id: number;
  user: Users;
}

export interface CodesInput extends Optional<CodesAttributes, "id" | "user"> {}

export interface CodesOutput extends Required<CodesAttributes> {}

@Table({
  timestamps: true,
  tableName: "Codes",
})
export class Codes extends Model<CodesAttributes, CodesInput> {
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
  code!: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  content: any;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.NUMBER,
  })
  user_id!: number;

  @BelongsTo(() => Users)
  user!: Users;
}
