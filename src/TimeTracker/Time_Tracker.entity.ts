import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class TimeTrackerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  StarTime: string;

  @Column()
  EndTime: string;

  @Column()
  PeriodTime: string;
}