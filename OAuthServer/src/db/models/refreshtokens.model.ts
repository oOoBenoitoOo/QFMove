import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "RefreshTokens",
})
export class RefreshTokens extends Model {
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
  revoked!: Date;
}
