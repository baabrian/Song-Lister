import { printHelloWorld } from './test';

export const selectSong = (song) => {
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};



export const printHelloWorldConsole = printHelloWorld;
