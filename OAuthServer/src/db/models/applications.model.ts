import { Optional } from "sequelize";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ScopeApplications } from "./scope-applications.model";
import { Scopes, ScopesOutput } from "./scopes.model";
import { Users } from "./users.model";

interface ApplicationsAttributes {
  id: number;
  client_id: string;
  redirect_uri: string;
  client_secret: string;
  name: string;
  scopes: ScopesOutput[];
}

export interface ApplicationsInput
  extends Optional<ApplicationsAttributes, "id" | "scopes"> {}

export interface ApplicationsOuput extends Required<ApplicationsAttributes> {}

@Table({
  timestamps: true,
  tableName: "Applications",
})
export class Applications extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  client_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  redirect_uri!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  client_secret!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @BelongsToMany(() => Scopes, () => ScopeApplications)
  scopes!: Scopes[];

  @HasMany(() => Users)
  users!: Users[];
}
