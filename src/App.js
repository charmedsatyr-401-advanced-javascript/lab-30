import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events, restaurants, movies filmed
          there, and more!
        </p>
      </header>
      <main>
        <form id="url-form">
          <label>
            Enter the URL to your deployed back end, making sure to remove the trailing forward
            slash
          </label>
          <input type="text" id="back-end-url" />
        </form>
        <form id="search-form" class="hide">
          <label for="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
          <button type="submit">Explore!</button>
        </form>
        <img id="map" class="hide" src="" alt="Map of search query" />
        <h2 class="query-placeholder">query</h2>
        {/* Section for error message */}
        <section class="error-container" />

        <div class="column-container hide">
          {/* Section for weather data */}
          <section>
            <h3>Results from the Dark Sky API</h3>
            <ul class="weather-results" />
          </section>

          {/* Section for Yelp data */}
          <section class="yelp-container">
            <h3>Results from the Yelp API</h3>
            <ul class="yelp-results" />
          </section>

          {/* Section for Meetup data */}
          <section>
            <h3>Results from the Meetup API</h3>
            <ul class="meetups-results" />
          </section>

          {/* Section for movie data */}
          <section class="movie-container">
            <h3>Results from The Movie DB API</h3>
            <ul class="movies-results" />
          </section>

          {/* Section for trails data */}
          <section>
            <h3>Results from the Hiking Project API</h3>
            <ul class="trails-results" />
          </section>
        </div>
      </main>
      <footer>DONE</footer>
    </>
  );
}

export default App;
