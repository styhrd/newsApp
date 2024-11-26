import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../store/sourcesSlice";

const Source = () => {
  const { id } = useParams(); // Get the source ID from the URL
  const dispatch = useDispatch();
  const { selectedSource, sources } = useSelector((state) => state.sources);

  useEffect(() => {
    // Check if the source details are already available in the Redux store
    if (sources.length > 0) {
      dispatch(fetchDetails(id)); // Fetch details for the selected source by ID
    }
  }, [id, sources, dispatch]);

  return (
    <div>
      {selectedSource ? (
        <div>
          <h1>{selectedSource.name}</h1>
          <p>{selectedSource.description}</p>
          {/* Add more details if needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Source;
