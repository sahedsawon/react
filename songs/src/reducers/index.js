import {combineReducers} from 'redux';

const songListReducer = () => {
    return [
        {title : 'Morar Kokile - Baby Naznin Music Video - Megher Kajol',duration : '3:45'},
        {title : 'Fuad ft Mila | Hit Bangla Song | Baburam Sapure | Lyrical Video | ☢☢ EXCLUSIVE ☢☢',duration : '4:38'},
        {title : 'Nisha Lagilo Re | by Mila | Album Re-Defined | Music Video | ☢☢Official☢☢',duration : '4:45'},
        {title : 'Mere nasib meen to...',duration : '3:55'},
        {title : 'Faguneri e mohonay ',duration : '8:00'},
    ];
}

const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SELECTE_SONG') {
        return action.payload;
    }
    return selectedSong;
} 

export default combineReducers({
    songs :songListReducer,
    selectedSong :selectedSongReducer
})