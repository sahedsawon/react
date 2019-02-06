import {combineReducers} from 'redux';

const songListReducer = () => {
    return [
        {title : 'Sono ho Dokhino hawa',duration : '4:55'},
        {title : 'Dar dari na pra porisir, dar dari na karo',duration : '5:00'},
        {title : 'Tomi poro kale hoyo rada',duration : '6:55'},
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