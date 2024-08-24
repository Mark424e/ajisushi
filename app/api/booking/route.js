import mysql from "mysql2/promise";

// Utility function to check if the selected date is within one week
const isWithinOneWeek = (selectedDate) => {
  const now = new Date();
  const oneWeekLater = new Date(now);
  oneWeekLater.setDate(now.getDate() + 7);

  // The selected date should be either today or within the next 7 days
  return (
    selectedDate >= now.setHours(0, 0, 0, 0) && selectedDate <= oneWeekLater
  );
};

// Utility function to check if the selected time is between 12:00 and 22:00
const isValidTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours >= 12 && (hours < 22 || (hours === 22 && minutes === 0));
};

// Utility function to check if the reservation is not made within 1-3 hours of the current time
const isFarEnoughInFuture = (selectedDate, selectedTime) => {
  const now = new Date();
  const reservationDateTime = new Date(selectedDate);

  // Parse selectedTime (e.g., '14:00') and set it on the reservation date
  const [hours, minutes] = selectedTime.split(":").map(Number);
  reservationDateTime.setHours(hours, minutes, 0, 0);

  // Calculate the time difference in hours between now and the reservation
  const timeDifference = (reservationDateTime - now) / (1000 * 60 * 60); // convert ms to hours

  // Reservation must be at least 3 hours in the future
  return timeDifference >= 3;
};

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, guests, reservationDate, reservationTime } = body;

  const selectedDate = new Date(reservationDate);

  // Check if the selected date is within one week (including today)
  if (!isWithinOneWeek(selectedDate)) {
    return new Response(
      JSON.stringify({
        message:
          "Du kan kun lave en reservation for i dag eller op til en uge i forvejen.",
      }),
      {
        status: 400,
      }
    );
  }

  // Check if the selected time is valid (between 12:00 and 22:00)
  if (!isValidTime(reservationTime)) {
    return new Response(
      JSON.stringify({
        message: "Reservationstidspunktet skal være mellem 12:00 og 22:00.",
      }),
      {
        status: 400,
      }
    );
  }

  // Check if the booking is at least 3 hours in the future
  if (!isFarEnoughInFuture(reservationDate, reservationTime)) {
    return new Response(
      JSON.stringify({
        message: "Reservationen skal foretages mindst 3 timer i forvejen.",
      }),
      {
        status: 400,
      }
    );
  }

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // Update your MySQL password
      database: "ajisushi",
    });

    const query = `
      INSERT INTO bookings (name, email, phone, guests, reservation_date, reservation_time)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
      name,
      email,
      phone,
      guests,
      reservationDate,
      reservationTime,
    ];
    await connection.execute(query, values);

    await connection.end();
    return new Response(
      JSON.stringify({ message: "Reservationen blev foretaget med succes!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ message: "Reservationen mislykkedes." }),
      {
        status: 500,
      }
    );
  }
}
