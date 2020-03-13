import { DateTime } from "luxon";

const searchFlights = async (origin = "PRG", destination = "STN") => {
  const when = DateTime.local()
    .plus({ days: 1 })
    .toFormat("dd/MM/yyyy");
  const query = new URLSearchParams({
    partner: "picky",
    date_from: when,
    date_to: when,
    fly_from: origin,
    fly_to: destination
  });

  const url = new URL(`?${query}`, "https://api.skypicker.com/flights");

  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

export default searchFlights;
