import type { Booking } from "../domain/booking.ts";
export interface BookingRepository {
  save(booking: Booking): Promise<void>;
  fetchById(id: string): Promise<Booking | null>;
  fetchAll(): Promise<Booking[] | null>;
}
