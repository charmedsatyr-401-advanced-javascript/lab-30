import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Yelp from './components/yelp/yelp';
import Form from './components/form/form';
import DarkSky from './components/darksky/darksky';
import Meetups from './components/meetups/meetups';

import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  fetchCityData = e => {
    e.preventDefault();
    const searchQuery = 'Seattle, WA';
    const APP_URL = 'https://city-explorer-backend.herokuapp.com';

    const displayMap = location => {
      console.log(`displayMap for ${location}`);
    };
    const getResource = (resource, location) => {
      superagent
        .get(`${APP_URL}/${resource}`)
        .query({ data: location })
        .then(result => {
          this.setState({ [resource]: result });
          console.log(`Result for ${resource}, ${location}:`, result);
        })
        .catch(console.error);
    };

    superagent
      .get(`${APP_URL}/location`)
      .query({ data: searchQuery })
      .then(location => {
        this.setState({ location: location.body.formatted_query });

        displayMap(location);
        getResource('weather', location);
        getResource('movies', location);
        getResource('yelp', location);
        getResource('meetups', location);
        getResource('trails', location);
      })
      .catch(console.error);
  };

  render() {
    return (
      <>
        <Header />
        <main>
          {/*** NEEDS ON-USBMIT ***/}
          <Form handleSubmit={this.fetchCityData} />

          <img id="map" className="hide" src="" alt="Map of search query" />

          {/*** NEEDS TO DISPLAY RESULTS ***/}
          <h2 className="query-placeholder">
            {this.state.location && `Here are the results for ${this.state.location}`}
          </h2>
          {/* Section for error message */}
          <section className="error-container" />

          <div className="column-container">
            {/* Section for weather data */}
            <section>
              <h3>Results from the Dark Sky API</h3>
              <DarkSky content={this.state.weather} />
            </section>

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
              <ul className="movies-results" />
            </section>

            {/* Section for trails data */}
            <section>
              <h3>Results from the Hiking Project API</h3>
              <ul className="trails-results" />
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
