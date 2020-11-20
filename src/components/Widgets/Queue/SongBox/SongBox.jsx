import React, { useState, useEffect } from "react";
import './SongBox.scss'
import fire from '../../../../fire';

const Queue = fire.database().ref('queue/');
const userRef = fire.database().ref('user/');

const SongBox = ({ handdleLogout }) => {

  const [musicsData, setMusicsData] = useState({});
  const [firstMusic, setFirstMusic] = useState();




  useEffect(() => {


    const musics = {};

    Queue.on('value', function (snapshot) {

      snapshot.forEach((result) => {

        if (result.val()) {
          musics[result.key] = result.val();
        }

      });

      setMusicsData(musics);

    });



    userRef.on('value', function (snapshot) {

      if (snapshot.val() != null) {

        if (snapshot.val().loop == true) {

          setFirstMusic('LOOP ON, FIRST MUSIC: ' + snapshot.val().firstMusicLoop);


        } else {
          setFirstMusic(null);
        }
      }
    });




  }, []);







  console.log(musicsData);
  return (


    <div className="SongBox">


      <div className="SongBoxHeader" >
        <h1>NEXT SONGS</h1>
      </div>

      <div className="queueBox">

        {Object.entries(musicsData).map(([key, music]) => {
          return (
            <>

              <div key={key} class="card" style={{ backgroundImage: "url(" + music.thumbnail + ")" }} >
                <p class="title">{music.title} </p>
                <p class="text">Duration: {music.duration}</p>
                <p class="text">Likes: {music.likes}</p>
                <p class="text">Dislikes: {music.dislikes}</p>
                <p class="text">viewCount: {music.viewCount}</p>
              </div>




            </>


          );
        })}



      </div>



      <div className="SongBoxHeader" >
        <h1 style={{ fontSize: "10px", color: "#fff", backgroundColor: "#000" }}>{firstMusic}</h1>
      </div>


    </div>

  );
}

export default SongBox
