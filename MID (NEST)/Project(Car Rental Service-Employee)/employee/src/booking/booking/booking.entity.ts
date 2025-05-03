import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  carId: number;

  @Column({ nullable: true })
  customerName: string;

  @Column({ nullable: true })
  customerEmail: string;



  @Column()
  pickupLocation: string;

  @Column()
  destinationLocation: string; 

  @Column({ nullable: true })
  distance: number; 

  @Column({ nullable: true })
  price: number; 



  @Column({ default: 'pending' }) 
  status: string; 
}
