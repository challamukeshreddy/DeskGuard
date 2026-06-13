export default function SeatCard({ seat }) {
  const handleClick = () => {
    alert(
      `Seat ${seat.id}\nStatus: ${seat.status}\n\nReservation Successful`
    );
  };

  return (
    <div
      onClick={handleClick}
      className={`seat ${seat.status}`}
    >
      <h2>{seat.id}</h2>

      <p>{seat.status.toUpperCase()}</p>
    </div>
  );
}