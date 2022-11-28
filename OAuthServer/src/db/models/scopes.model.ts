import { Optional } from "sequelize";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { AccessTokens } from "./accesstokens.model";
import { Applications } from "./applications.model";
import { ScopeAccessTokens } from "./scope-accesstokens.model";
import { ScopeApplications } from "./scope-applications.model";

export interface ScopesAttributes {
  id: number;
  label: string;
}

export interface ScopesInput extends Optional<ScopesAttributes, "id"> {}

export interface ScopesOutput extends Required<ScopesAttributes> {}

@Table({
  timestamps: true,
  tableName: "Scopes",
})
export class Scopes extends Model<ScopesAttributes, ScopesInput> {
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
  label!: string;

  @BelongsToMany(() => AccessTokens, () => ScopeAccessTokens)
  accesstokens!: AccessTokens[];

  @BelongsToMany(() => Applications, () => ScopeApplications)
  applications!: Applications[];
}
