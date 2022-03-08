import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=16`;
    let pexelsApiKey = `563492ad6f9170000100000107339764aa0f480d93a10ab53da634d5`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <h1>What word do you want to look up?</h1>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              onChange={updateKeyword}
            />
          </form>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return load();
  }
}
