import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails, fetchTopHeadlines } from "../store/sourcesSlice";

const Source = () => {
  const { id } = useParams(); // Get the source ID from the URL
  const dispatch = useDispatch();
  const { selectedSource, sources, selectedHead } = useSelector((state) => state.sources);

  useEffect(() => {
    // Check if the source details are already available in the Redux store
    if (sources.length > 0) {
      dispatch(fetchDetails(id));
      dispatch(fetchTopHeadlines(id))// Fetch details for the selected source by ID
    }
  }, [id, sources, dispatch]);

  return (
    <div>
      {selectedSource ? (
        <div>
          <h1>{selectedSource.name}</h1>
          <p>{selectedSource.description}</p>
          {
            selectedHead.map((head) => {
              return (
                <li>{head.author}</li>
              )
            })
          }
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Source;
