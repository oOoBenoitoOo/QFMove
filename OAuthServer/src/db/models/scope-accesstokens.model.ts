import { Optional } from "sequelize";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { AccessTokens } from "./accesstokens.model";
import { Scopes } from "./scopes.model";

interface ScopeAccessTokensAttributes {
  id: number;
  scope_id: number;
  accesstoken_id: number;
}

export interface ScopeAccessTokensInput
  extends Optional<ScopeAccessTokensAttributes, "id"> {}

export interface ScopeAccessTokensOuput
  extends Required<ScopeAccessTokensAttributes> {}

@Table({
  timestamps: true,
  tableName: "ScopeAccessTokens",
})
export class ScopeAccessTokens extends Model<
  ScopeAccessTokensAttributes,
  ScopeAccessTokensInput
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

  @ForeignKey(() => AccessTokens)
  @Column({
    type: DataType.INTEGER,
  })
  accesstoken_id!: number;
}
