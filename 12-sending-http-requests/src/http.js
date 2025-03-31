export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");

  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  const resData = await response.json();

  return resData.places;
}

export async function updatePlaces(pickedPlaces) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "put",
    body: JSON.stringify({ places: pickedPlaces }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");

  if (!response.ok) {
    throw new Error("Failed to fetch places.");
  }

  const resData = await response.json();

  return resData.places;
}
