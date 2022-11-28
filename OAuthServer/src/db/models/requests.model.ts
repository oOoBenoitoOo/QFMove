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
import { Applications, ApplicationsOuput } from "./applications.model";

interface RequestsAttributes {
  id: number;
  requestId: string;
  content: any;
  application_id: number;
}

export interface RequestsInput extends Optional<RequestsAttributes, "id"> {}

export interface RequestsOutput extends Required<RequestsAttributes> {}

@Table({
  timestamps: true,
  tableName: "Requests",
})
export class Requests extends Model {
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
  requestId!: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  content!: any;

  @ForeignKey(() => Applications)
  @Column({
    type: DataType.INTEGER,
  })
  application_id!: number;

  @BelongsTo(() => Applications)
  application!: Applications;
}
