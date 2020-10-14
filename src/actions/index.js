//action creator
export const selectSong=(song)=>{
    //return an action always have type property and payload is optional
    return {
        type:"Song_Selected",
        payload  : song
    };
};