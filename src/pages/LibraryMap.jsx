import { seats } from "../data/seats";
import SeatCard from "../components/SeatCard";

export default function LibraryMap() {
  return (
    <div>
      <h1>Library Map</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {seats.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>
    </div>
  );
}
