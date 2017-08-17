import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        return (
            <div className="row">
                <h1>Song List</h1>
                <table className="unstriped hover small-12 medium-10 medium-offset-1 large-8 large-offset-2">
                    <tbody>
                        {this.props.songs.map((song, i)=>{
                            return (
                                <tr>
                                    <td className="tableColImg">
                                        <Link to={"songs/" + song.id}>
                                            <img src={song.image}/>
                                        </Link>
                                    </td>
                                    <td className="tableCol">
                                        <Link to={"songs/" + song.id}>{song.title}</Link>
                                    </td>
                                    <td className="tableColButton">
                                        <button onClick={() => {this.props.playNew(song.id)}} className="hollow button play_song align-right">
                                            {(this.props.playState && song.id == this.props.playingSongId) ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SongsList;