import { Optional } from "sequelize";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Applications } from "./applications.model";
import { Scopes } from "./scopes.model";

interface ScopeApplicationsAttributes {
  id: number;
  scope_id: number;
  application_id: number;
}

export interface ScopeApplicationsInput
  extends Optional<ScopeApplicationsAttributes, "id"> {}

export interface ScopeApplicationsOuput
  extends Required<ScopeApplicationsAttributes> {}

@Table({
  timestamps: true,
  tableName: "ScopeApplications",
})
export class ScopeApplications extends Model<
  ScopeApplicationsAttributes,
  ScopeApplicationsInput
> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;
  @ForeignKey(() => Scopes)
  @Column({
    type: DataType.INTEGER,
  })
  scope_id!: number;

  @ForeignKey(() => Applications)
  @Column({
    type: DataType.INTEGER,
  })
  application_id!: number;
}
