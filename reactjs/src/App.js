import React, { useEffect} from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useStateValue} from "./StateProvider";


const s = new SpotifyWebApi(); // Create am instance to connect with Spotify



function App() {
  // Run code based on a given condition
  const [{token}, dispatch] = useStateValue();
  //const [token, setToken] = useState(null);

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
