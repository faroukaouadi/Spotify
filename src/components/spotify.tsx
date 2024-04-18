export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "0985fea5f0d14bffae01b236551ee7d5";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
interface TokenResponse {
  [key: string]: string; // Index signature pour permettre l'indexation par une chaîne de caractères
}
export const getTokenFromUrl = (): TokenResponse => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: TokenResponse, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {} as TokenResponse);
};


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;