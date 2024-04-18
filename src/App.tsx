import React, { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import Login from './components/Login';
import { getTokenFromUrl } from "./components/spotify";
import { useQuery } from "react-query"
import { getUserDetails, getMyRecentlyPlayedTracks } from "./UserDetails";
import Home from "./components/Home";


// const getUserDetails = async () => {
//   try {
//     const response = await spotify.getMe();
//     console.log("User details:", response);
//     return(response);
//   } catch (error) {
//     console.error("Error fetching user details:", error);

//   }

// };
// const getMyRecentlyPlayedTracks = async () => {
//   try {
//     const response = await spotify.getMyRecentlyPlayedTracks();
//     console.log("User RecentlyPlayedTracks:", response);
//     return(response);
//   } catch (error) {
//     console.error("Error fetching user details:", error);

//   }

// };
const spotify = new SpotifyWebApi(); // Créer une instance de SpotifyWebApi
function App() {
  const [token, setToken] = useState<string | null>();
  useEffect(() => {
    const hash = getTokenFromUrl();
    const token = hash.access_token ;

    if (token) {
      setToken(token);
      spotify.setAccessToken(token);
    }

    console.log("token", token);
  }, []);

     // Fonction pour obtenir les détails de l'utilisateur depuis Spotify
  
  // useEffect(() => {
  //   console.log("token", token);
  //   getUserDetails();
  // }, [token]); // Exécuter cet effet à chaque fois que token change



 

//   const { data: UserDetails} = useQuery(
//     ['userDetails', token],
//     () => getUserDetails(),
//     {
//       enabled: !!token,
//     }
//   );

//   const { data: recentlyPlayedTracks} = useQuery(
//     ['getMyRecentlyPlayedTracks', token],
//     () => getMyRecentlyPlayedTracks(),
//     {
//       enabled: !!token,
//     }
//   );


  
//  console.log('UserDetails',UserDetails);
//  console.log('recentlyPlayedTracks',recentlyPlayedTracks);

  return (
    <div className="App">
      {token ? <Home/> : <Login />}
    </div>
  );
}

export default App;
