import React, {Component} from 'react';
import {Link} from 'react-router';
 
class SongDetails extends Component {
    render() {
        const displaySong = this.props.songs.find((song) => {return this.props.params.id == song.id})
        return (
            <div className="row">
                <div className="small-12 medium-10 medium-offset-1 large-8 large-offset-2">
                    <button onClick={() => {this.props.playNew(displaySong.id)}} className="hollow button play_song">
                            {(this.props.playState && displaySong.id == this.props.playingSongId) ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i> }
                    </button><h1>{displaySong.title}</h1>
                    <img src={"../" + displaySong.image} className="list_thumbnail"/>
                    <h3>{displaySong.description}</h3>
                </div>
            </div>
        )
    }
}

export default SongDetails;