export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error("Failed to fetch places");
      throw error;
    }

    return responseData.places;
}

export async function getUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const responseData = await response.json();

  if (!response) {
    const error = new Error("Failed to fetch user places");
    throw error;
  }

  return responseData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const responseData = await response.json();

  if (!response.ok) {
    const error = new Error("Failed to update user places");
    throw error;
  }

  return responseData.message;

}