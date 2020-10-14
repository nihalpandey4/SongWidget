import {combineReducers} from "redux";

//reducers

const songsListReducer =()=>{
    return [
        {
            title : "Lalkaar",
            duration : "3.20"
        },
        {
            title : "Yu hi chala chal",
            duration : "6.30"
        },
        {
            title : "Chalte Chalte",
            duration : "3.42"
        },
        {
            title : "Bairaagi",
            duration : "4.21"
        }
    ]
};

const selectSongReducer = (selectedSong = null,action)=>{
    if(action.type === "Song_Selected"){
        return action.payload;
    }
    return selectedSong;
};


//combining Reducers (looks similar to forming a store)
export default combineReducers ({
    songs : songsListReducer,
    selectedSong : selectSongReducer
});