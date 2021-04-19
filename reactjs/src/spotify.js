// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "f725a4e0e25845cab3ec0feab7f1c389";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromResponse = () => {
    return window.location.hash
     .substring(1)
     .split('&')
     .reduce((initial, item) => {
         // accessToken=mysupersecretkey&name=sonny
         var parts = item.split('=');
         initial[parts[0]] = decodeURIComponent(parts[1]);
         return initial;
     }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


