import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();
export const getUserDetails = async () => {
    try {
      const response = await spotify.getMe();
      console.log("User details:", response);
      return(response);
    } catch (error) {
      console.error("Error fetching user details:", error);
  
    }
  
  };
 export const getMyRecentlyPlayedTracks = async () => {
    try {
      const response = await spotify.getMyRecentlyPlayedTracks();
      console.log("User RecentlyPlayedTracks:", response);
      return(response);
    } catch (error) {
      console.error("Error fetching user details:", error);
  
    }
};
