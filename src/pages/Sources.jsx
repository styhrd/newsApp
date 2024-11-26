import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSources, fetchSourcesCount } from "../store/sourcesSlice";
import { Link } from "react-router";

const Sources = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(""); // Default: All categories
  const [country, setCountry] = useState(""); // Default: All countries
  const { sources } = useSelector((state) => state.sources);
  
  // State to control filter dropdown visibility with transition
  const [showCategory, setShowCategory] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    dispatch(fetchSources(category));
  }, [category]);

  useEffect(() => {
    dispatch(fetchSourcesCount(country));
  }, [country]);

  return (
      <div className="flex flex-col items-start">
          <div className="flex space-x-3 fixed top-0 right-0 p-4 items-start">
               <div className="flex flex-col bg-stone-200 px-4 py-2 rounded-xl">
        <div className="flex items-center cursor-pointer" onClick={() => setShowCategory(!showCategory)}>
          <i className="bi bi-filter icon"></i>
          <p>Category</p>
        </div>

        {/* Animated Dropdown for Category */}
        <div
          className={`transition-all duration-300 ease-in-out ${showCategory ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          {showCategory && (
            <select onChange={(e) => setCategory(e.target.value)} value={category} className="bg-stone-50 rounded-xl p-1">
              <option value={""}>All Categories</option>
              <option value={"business"}>Business</option>
              <option value={"entertainment"}>Entertainment</option>
              <option value={"general"}>General</option>
              <option value={"health"}>Health</option>
              <option value={"science"}>Science</option>
              <option value={"sports"}>Sports</option>
              <option value={"technology"}>Technology</option>
            </select>
          )}
        </div>
      </div>

      {/* Country Filter Section */}
      <div className="flex flex-col bg-stone-200 px-4 py-2 rounded-xl">
        <div className="flex items-center cursor-pointer" onClick={() => setShowCountry(!showCountry)}>
          <i className="bi bi-filter icon"></i>
          <p>Country</p>
        </div>

        {/* Animated Dropdown for Country */}
        <div
          className={`transition-all duration-300 ease-in-out ${showCountry ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          {showCountry && (
            <select onChange={(e) => setCountry(e.target.value)} value={country} className="bg-stone-50 rounded-xl p-1">
              <option value={""}>All Countries</option>
              <option value={"ru"}>Russia</option>
              <option value={"us"}>United States</option>
              <option value={"gb"}>United Kingdom</option>
              <option value={"de"}>Germany</option>
              <option value={"fr"}>France</option>
              <option value={"ca"}>Canada</option>
              <option value={"au"}>Australia</option>
              <option value={"jp"}>Japan</option>
              <option value={"in"}>India</option>
              <option value={"br"}>Brazil</option>
            </select>
          )}
        </div>
      </div>

          </div>
     
      {/* Sources List */}
      <div className="flex flex-col mt-4 w-full">
        <p>News Sources:</p>
        <div className="grid grid-cols-1 gap-4 w-full">
          {sources.length > 0 ? (
            sources.map((source) => (
              <div key={source.id} className="border p-4 w-full">
                {/* Link to the Source Details Page */}
                <Link to={`/sources/${source.id}`}>
                  <p>{source.name}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No sources available for selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sources;
