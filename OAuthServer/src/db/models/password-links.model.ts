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

interface PasswordLinksAttributes {
  id: number;
  uuid: string;
  user_id: number;
  user: Users;
}

export interface PasswordLinksInput
  extends Optional<PasswordLinksAttributes, "id" | "user"> {}

export interface PasswordLinksOutput
  extends Required<PasswordLinksAttributes> {}

@Table({
  timestamps: true,
  tableName: "PasswordLinks",
})
export class PasswordLinks extends Model<
  PasswordLinksAttributes,
  PasswordLinksInput
> {
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
  uuid!: string;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.NUMBER,
  })
  user_id!: number;

  @BelongsTo(() => Users)
  user!: Users;
}
