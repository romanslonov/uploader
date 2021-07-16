import { Board } from 'src/board/board.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Board, (board) => board.owner)
  boards: Board[];

  @ManyToMany(() => Board, (board) => board.users)
  sharedBoards: Board[];
}
