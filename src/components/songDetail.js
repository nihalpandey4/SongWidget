import React from "react";
import "./SongDetail.css"
import {connect} from "react-redux";

const conditionalRender =(song)=>{
    let content;
    if(song===null){
        content="No music selected";
    }
    else{
        content= String(song.title)+" : "+String(song.duration);
    }
    return (
        <>
        <span className = "ui sub header">{content}</span>
        </>
    )
}

const SongDetail = ({song}) =>{
    return (
        <div className="column SongDetail" style={{textAlign:"center"}}>
            <div className="ui card">
                <div className="content">
                    <div className = "header">Song Selected</div>
                </div>
                <div className = "content">
                    {conditionalRender(song)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {song:state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);

