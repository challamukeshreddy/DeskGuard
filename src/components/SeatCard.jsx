export default function SeatCard({ seat }) {
  const colors = {
    free: "green",
    occupied: "red",
    away: "orange"
  };

  return (
    <div
      style={{
        background: colors[seat.status],
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      {seat.id}
    </div>
  );
}