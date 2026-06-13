import { seats } from "../data/seats";
import SeatCard from "../components/SeatCard";

export default function LibraryMap() {
  return (
    <div className="map-container">

      <h1 className="map-title">
        Library Live Seat Map
      </h1>

      <div className="seat-grid">
        {seats.map((seat) => (
          <SeatCard
            key={seat.id}
            seat={seat}
          />
        ))}
      </div>

    </div>
  );
}