import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import Error from "./components/Error.jsx";

import { updatePlaces, fetchUserPlaces } from "./http.js";

function App() {
  const selectedPlace = useRef();

  const [isFetching, setIsFetching] = useState(false);
  const [userPlaces, setUserPlaces] = useState([]);
  const [error, setError] = useState();
  const [fetchUserPlacesError, setFetchUserPlacesError] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchSelectedPlaces() {
      setIsFetching(true);
      try {
        const selectedUserPlaces = await fetchUserPlaces();
        setUserPlaces(selectedUserPlaces);
      } catch (error) {
        setFetchUserPlacesError({
          message: error.message || "Failed to fetch selected places.",
        });
      }

      setIsFetching(false);
    }

    fetchSelectedPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updatePlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setError({ message: error.message || "Failed to update places." });
    }
  }

  function handleError() {
    setError(null);
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updatePlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setError({ message: error.message || "Failed to delete place." });
    }

    setModalIsOpen(false);
  }, []);

  return (
    <>
      <Modal open={error} onClose={handleError}>
        {error && (
          <Error
            title="An error occured!"
            message={error.message}
            onConfirm={handleError}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {fetchUserPlacesError && (
          <Error title="An error occured!" message={fetchUserPlacesError.message} />
        )}
        {!fetchUserPlacesError && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
