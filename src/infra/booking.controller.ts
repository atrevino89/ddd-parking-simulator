import { BookingService } from "../application/booking.service";
import { Booking } from "../domain/booking";
export class BookingController {
	constructor(private readonly bookingService: BookingService) {}
	async findAll(): Promise<Booking[] | null>  {
		return await this.bookingService.fetchAll();
	}
}
