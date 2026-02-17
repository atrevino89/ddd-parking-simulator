import type { Booking } from "../domain/booking.ts";
import { BookingRepository } from "./booking.repository";

export class BookingService {
  constructor(private readonly bookingRepository: BookingRepository) { }

  async fetchAll(): Promise<Booking[] | null> {
    const booking = await this.bookingRepository.fetchAll();
    return booking;
  }
}
