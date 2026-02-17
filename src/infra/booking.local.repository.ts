import type { BookingRepository } from "../application/booking.repository";
import { Booking } from "../domain/booking";
import { BookingStatus } from "../domain/booking";

let bookingDB = [
  new Booking( "1", "abc", "1abcqwe1", 12, 14, BookingStatus.CONFIRMED ),
  new Booking( "2", "abc", "1abcqwe1", 1771363196, 1871330794, BookingStatus.CANCELLED),
  new Booking( "3", "abc", "1abcqwe1", 1771363197, 1971330794, BookingStatus.CANCELLED),
  new Booking( "4", "abc", "1abcqwe1", 1771363198, 1981330794, BookingStatus.CONFIRMED )
]

export class LocalBookingRepository implements BookingRepository {
  async save(booking: Booking): Promise<void> {
    bookingDB.push(booking);
    console.log(`Booking with ID: ${booking.getId} stored!`);
  }

  async fetchById(id: string): Promise<Booking | null> {
    const book = bookingDB.find(b => b.getId() == id) ?? null
    return Promise.resolve(book);
  }

  async fetchAll(): Promise<Booking[] | null> {
    return Promise.resolve(bookingDB);
  }	
}
