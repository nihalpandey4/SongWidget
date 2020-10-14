import React from "react";
import SongList from "./songList"
import SongDetail from "./songDetail"

const App = ()=>{
    return (
        <div className="App ui grid">
            <div className="row">
                <div className="column" style={{textAlign:"center"}}>
                    <h1>Songs Widget</h1>
                </div>
            </div>
            <div className="ui two column row">
                <SongList />
                <SongDetail />
            </div>
        </div>
    )
}
export default App;