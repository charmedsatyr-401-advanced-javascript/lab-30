import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import DarkSky from './components/darksky/darksky';
import Form from './components/form/form';
import Map from './components/map/map';
import Meetups from './components/meetups/meetups';
import Movies from './components/movies/movies';
import Trails from './components/trails/trails';
import Yelp from './components/yelp/yelp';

import fetchCityData from './fetchCityData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = async e => {
    e.preventDefault();
    const searchQuery = document.getElementById('input-search').value;
    if (searchQuery) {
      const results = await fetchCityData(searchQuery);
      if (results) {
        this.setState(Object.assign({}, ...results));
      }
    }
  };
  render() {
    return (
      <>
        <Header />
        <main>
          <Form handleSubmit={this.handleSubmit} />

          {/* Map of location */}
          <Map location={this.state.location} />

          {/* Show location */}
          <h2 className="query-placeholder">
            {this.state.location &&
              `Here are the results for ${this.state.location.formatted_query}`}
          </h2>

          {/* Section for error message */}
          <section className="error-container">
            <p>{this.state.error}</p>
          </section>

          {/* Rendering static sections with dynamic content, rather than dynamic sections, in case
           * some section content fails to load. The CSS expects the following sections in order. */}
          <div className={`column-container ${!this.state.location && 'hide'}`}>
            {/* Section for weather data */}
            <section>
              <h3>Results from the Dark Sky API</h3>
              <DarkSky content={this.state.weather} />
            </section>

            {/* Section for Yelp data */}
            <section className="yelp-container">
              <h3>Results from the Yelp API</h3>
              <Yelp content={this.state.yelp} />
            </section>

            {/* Section for Meetup data */}
            <section>
              <h3>Results from the Meetup API</h3>
              <Meetups content={this.state.meetups} />
            </section>

            {/* Section for movie data */}
            <section className="movie-container">
              <h3>Results from The Movie DB API</h3>
              <Movies content={this.state.movies} />
            </section>

            {/* Section for trails data */}
            <section>
              <h3>Results from the Hiking Project API</h3>
              <Trails content={this.state.trails} />
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
