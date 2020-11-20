
import React, { useState } from "react";
import './Player.css';
import fire from '../../../fire';
import VolumeBar from './VolumeBar/VolumeBar'

/*
- NEXT TRACK 
- PLAY/PAUSE
- MUTE
- UP VOLUME
- DOWN VOLUME
- REPEAT
- STOP

*/





const Player = ({ handdleLogout }) => {


 

  const [nowPlaying, setNowPlaying] = useState('');

  const [booleanLoadingScreen, setBooleanLoadingScreen] = useState(true);


  var NowPlaying = fire.database().ref('nowPlaying/');
  NowPlaying.on('value', async function (snapshot) {
    if (await snapshot.val() != null) {
    setNowPlaying("Now Playing: " + await snapshot.val().title)
    }
  });


  const handdleSkipMusic = () => {

  

    var taskKey = fire.database().ref().child('task').push().key;

    fire.database().ref('task/' + taskKey).set({
      type: "nextTrack",
    });


  }

  const handdleMute = () => {


    var taskKey = fire.database().ref().child('task').push().key;

    fire.database().ref('task/' + taskKey).set({
      type: "mute",
    });


  }

  const handdlePlayPause = () => {

    var taskKey = fire.database().ref().child('task').push().key;

    fire.database().ref('task/' + taskKey).set({
      type: "play/pause",
    });


  }

  
  const handdleLeave = () => {

    var taskKey = fire.database().ref().child('task').push().key;
    
   
    fire.database().ref('task/' + taskKey).set({
      type: "leave",
    });


  }


  function handdleReapet () {
    var userRef = fire.database().ref('user/');
    var nowPlaying = fire.database().ref('nowPlaying/');


    userRef.once('value', function (snapshot) {


      userRef.update({
        loop: !snapshot.val().loop,
      })


      if (!snapshot.val().loop == true) {
        nowPlaying.once('value', function (snapshot) {
          userRef.update ({
            firstMusicLoop : snapshot.val().title,
          });
        })
      } else {
        nowPlaying.once('value', function (snapshot) {
          userRef.update ({
            firstMusicLoop : null,
          });
        })
      }

    });



    var taskKey = fire.database().ref().child('task').push().key;

    fire.database().ref('task/' + taskKey).set({
      type: "reapet",
    });
  





  }


  return (
    <>
      
    

    <div className="Player">


           
    <h3 className="nowPlayingText">{nowPlaying}</h3>




      <div className="container">
        <a className="buttonPlayer" onClick={handdlePlayPause}>PLAY/PAUSE</a>
      </div>



      <div className="container">
        <a className="buttonPlayer" onClick={handdleMute}>MUTE/UNMUTE</a>
      </div>

      <div className="container">
        <a className="buttonPlayer" onClick={handdleReapet}>REPEAT</a>
      </div>

      <div className="container">
        <a className="buttonPlayer" onClick={handdleSkipMusic}>NEXT TRACK</a>
      </div>

      <div className="container">
      <VolumeBar></VolumeBar>
      </div>
      <div className="container">
        <a className="buttonPlayer" onClick={handdleLeave}>LEAVE</a>
      </div>


    

    </div>
    </>
  );
}

export default Player
