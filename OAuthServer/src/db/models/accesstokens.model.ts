import { Optional } from "sequelize";
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript";
import { ScopeAccessTokens } from "./scope-accesstokens.model";
import { Scopes } from "./scopes.model";
import { Users } from "./users.model";

interface AccessTokensAttributes {
  id: number;
  token: string;
  expires: Date;
  user_id: number;
}

export interface AccessTokensInput
  extends Optional<AccessTokensAttributes, "id"> {}

export interface AccessTokensOutput extends Required<AccessTokensAttributes> {}

@Table({
  timestamps: true,
  tableName: "AccessTokens",
})
export class AccessTokens extends Model<
  AccessTokensAttributes,
  AccessTokensInput
> {
  @Column({
    type: DataType.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  token!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expires!: Date;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.NUMBER,
  })
  user_id!: number;

  @BelongsToMany(() => Scopes, () => ScopeAccessTokens)
  scopes!: Scopes[];
}
