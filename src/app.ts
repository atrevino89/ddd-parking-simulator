import express from 'express';
import { BookingController } from './infra/booking.controller';
import { BookingService } from './application/booking.service';
import { LocalBookingRepository } from './infra/booking.local.repository';

const app = express();

app.use(express.json());

// inject all deps
const bookController = new BookingController(
  new BookingService(
    new LocalBookingRepository()
  )
);

// Routes
app.get("/booking", async (req, res, next) => {
  try {
    const bookings = await bookController.findAll();
    res.json(bookings);
  } catch (err) {
    next(err);
  }
});

export default app;
