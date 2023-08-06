import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link_short: string;

  @Column()
  link_long: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
