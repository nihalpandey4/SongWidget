import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions"

const SongList =({songs,selectSong})=>{
    
    const songrender =(song)=>{
        return (
            <div className="item">
                <div className="right floated content">
                    <div className="ui button primary" onClick={()=>selectSong(song)}>Select</div>
                </div>
                <div className = "content header">{song.title}</div>
            </div>
        )
    }    

    const songsRender = songs.map(songrender);

    return (
        <div className = "column">
            <div className = "ui middle aligned divided list" >
                {songsRender}
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {songs : state.songs};
}

export default connect(mapStateToProps,{selectSong})(SongList);