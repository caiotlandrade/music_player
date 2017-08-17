import React, { Component } from 'react';

class App_Player extends Component {
  constructor(){
    super()
    this.state = {
      id: 0,
      playState: false, // true means playing
    }
    this.playPause = this.playPause.bind(this);
    this.playNew = this.playNew.bind(this);
    this.changeSong = this.changeSong.bind(this);
  }

  playPause() {
    if (this.state.playState) {
      document.getElementById("myPlayer").pause();
      this.setState ({playState: false});
    } else {
      document.getElementById("myPlayer").play();
      this.setState ({playState: true});
    }
  }

  playNew(newId) {
    if ( newId != this.state.id ) {
      this.setState ({id: newId, playState: true});
      document.getElementById("myPlayer").play()
    } else if (this.state.playState) {
      document.getElementById("myPlayer").pause();
      this.setState ({playState: false});
    } else {
      document.getElementById("myPlayer").play();
      this.setState ({playState: true});
    }
  }

	changeSong (counter) {
    this.setState ({id: this.state.id + counter})
  }

  componentDidUpdate() {
    if (this.state.playState) {
      document.getElementById("myPlayer").play()
    }
  }

  render() {
    const songs = this.props.route.songs
    const chosenSong = songs.find((song) => {return song.id === this.state.id})    

    return (
      <div className="App">
        {React.cloneElement(this.props.children, 
          {songs: songs, 
          playingSongId: this.state.id, 
          playState: this.state.playState, 
          playNew: this.playNew}
        )}
          <div className="row player">
            <audio id="myPlayer" src={chosenSong.source} duration>
              Your browser does not support HTML5 video.
            </audio>
            <div className="small-12 medium-4 columns">
              <button onClick={() => {this.changeSong(-1)}} className="hollow button change_button" disabled={this.state.id<=0}>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
              </button>

              <button onClick={() => {this.playPause()}} className="hollow button play_button">
                {this.state.playState ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i> }
              </button>
              
              <button onClick={() => {this.changeSong(1)}} className="hollow button change_button" disabled={this.state.id>=(songs.length-1)}>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
              </button>
            </div>

            <div className="small-12 medium-8 columns">
              <p>Now Playing:</p>
              <h3>{chosenSong.title}</h3><br />
              <p>{this.state.id +1} / {songs.length}</p>
            </div>
          </div>
      </div>
    );
  }
}

export default App_Player;
