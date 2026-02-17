export enum BookingStatus {
  CONFIRMED, CANCELLED
}

export class Booking {
  public constructor(
    private readonly bookingId: string,
    private readonly spotId: string,
    private readonly userId: string,
    private readonly startAt: number,
    private readonly endAt: number,
    private readonly status: BookingStatus,
  ) {
    if(this.endAt < this.startAt) {
      throw new Error("End at time cannot be lower than start at time");
    }
  }

  public getId(): string {
    return this.bookingId;
  }

  public getStatus(): BookingStatus {
    return this.status;
  }

}
