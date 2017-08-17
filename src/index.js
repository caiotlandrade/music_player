import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App_Player from './App_Player';
import SongsList from './SongsList';
import SongDetails from './SongDetails';
import './css/foundation.css';
import './index.css';



function Song(source, image, title, artist, description, originalLink, artistWebsite, bpm, id) {
  this.source = source;
  this.image = image;
  this.title = title;
  this.artist = artist;
  this.description = description;
  this.originalLink = originalLink;
  this.artistWebsite = artistWebsite;
  this.bpm = bpm;
  this.id = id;
}

const songs = [
  new Song('/tracks/UCP_Berlin-Prove_yourself.mp3', 'artwork/UCP_Berlin-Prove_Yourself.jpg', 'Prove yourself', 'Urban City Productions Berlin (UCP Berlin)', 'Description', 'https://soundcloud.com/ucpberlin/prove-yourself-original-version-free-download', 'http://www.ucpberlin.de/', 140, 0),
  new Song('/tracks/KVDS-Afrika.mp3', 'artwork/KVDS-Afrika.jpg', 'Afrika', 'KVDS', 'Description', 'https://soundcloud.com/wearefuturehousesounds/kvds-afrika', 'https://soundcloud.com/kvds', 140, 1),
  new Song('/tracks/Yannik_Fischer-Views.mp3', 'artwork/Yannik_Fischer-Views.jpg', 'Views', 'Yannik Fischer', 'Description', 'https://soundcloud.com/wearefuturehousesounds/views', 'https://www.facebook.com/yannikfischerofficial', 140, 2),
  new Song('/tracks/Cravins-Mirage.mp3', 'artwork/Cravins-Mirage.jpg', 'Mirage', 'Cravins', 'Description', 'https://soundcloud.com/wearefuturehousesounds/cravins-mirage', 'https://soundcloud.com/cravins', 140, 3),
  new Song('/tracks/Martin_Luzuriaga-Elm_Street.mp3', 'artwork/Martin_Luzuriaga-Elm_Street.jpg', 'Elm Street', 'Martin Luzuriaga', 'Description', 'https://soundcloud.com/wearefuturehousesounds/elmstreet', 'https://martinluzuriaga.bandcamp.com/', 140, 4),
  new Song('/tracks/Ethan_Locke-The_Time.mp3', 'artwork/Ethan_Locke-The_Time.jpg', 'The Time', 'Ethan Locke', 'Description', 'https://soundcloud.com/wearefuturehousesounds/ethan-locke-the-time', 'https://soundcloud.com/ethanlocke', 140, 5),
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App_Player}>
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));
