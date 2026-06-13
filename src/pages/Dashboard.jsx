import { seats } from "../data/seats";

export default function Dashboard() {

  const free = seats.filter(s => s.status === "free").length;
  const occupied = seats.filter(s => s.status === "occupied").length;
  const away = seats.filter(s => s.status === "away").length;

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h3>Total Seats: {seats.length}</h3>
      <h3>Available: {free}</h3>
      <h3>Occupied: {occupied}</h3>
      <h3>Away: {away}</h3>
    </div>
  );
}