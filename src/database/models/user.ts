import {
  Table,
  Model,
  Column,
  AutoIncrement,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';

import { DataTypes } from 'sequelize';

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false,
})

export class User extends Model {
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
    field: 'google_id'
  })
  googleId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  name: string;
}