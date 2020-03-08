import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "frrb - Highschool memories", duration: "2:37" },
        { title: "that guitar sound we all like pt.4", duration: "21:24" },
        { title: "Tenno - Memories", duration: "3:34" },
        { title: "Kudasai - dream of her", duration: "3:25" },
        { title: "Spencer Hunt - you'll be okay, i promise", duration: "3:17" },
        { title: "frrb - it's just a phase", duration: "2:45" },
        { title: "taiko - leaves", duration: "3:40" },
        { title: "frrb - soulmates", duration: "2:46" },
        { title: "the girl next door - for the best", duration: "4:04" },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});