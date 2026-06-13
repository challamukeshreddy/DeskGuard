export default function SeatCard({ seat }) {

  const handleClick = () => {
    alert(
      `Seat: ${seat.id}\nStatus: ${seat.status}\n\nReservation Successful`
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "20px",
        margin: "10px"
      }}
    >
      {seat.id}
    </button>
  );
}