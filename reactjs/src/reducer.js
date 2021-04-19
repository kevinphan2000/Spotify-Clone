//import { findAllByDisplayValue } from "@testing-library/react";



export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after we finish it
    token: 'BQBJ1vmCZSrwFUkBUM8X1O7zP_93b05mvnYppEoxUSz_KnESMdzPzagIUsY3LdRV76xXKruuXQKiNZ191qxwwC3pOTKdw2XqA2bLn-UeT2hTNZ8MHY4Jsf0MYhBEAXzSWlm2H0gGVow84pjfs0qvT5UHbJZg9G0pQyVeYGczuwHsFMOP',
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_ITEM':
            return {
                ...state,
                item: action.item,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case 'SET_TOP_ARTISTS':
            return {
                ...state,
                top_artists: action.top_artists,
            }
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;