import React, { useState } from "react";
import './SearchBar.scss'
import fire from '../../../fire';
import lupa from './lupa.svg'

/*
- NEXT TRACK 
- PLAY/PAUSE
- MUTE
- UP VOLUME
- DOWN VOLUME
- REPEAT
- STOP

*/

//const youtube = new YouTubeAPI('AIzaSyDgxhJeWomzXEmK91uHEK7kHXwsZLMDHik');



const SearchBar = ({ handdleLogout }) => {

  const [search, setSearch] = useState('');

  const handdleAddMusicFirebase = () =>  {



    var taskKey = fire.database().ref().child('task').push().key;

    fire.database().ref('task/' + taskKey).set({
      type: "addMusic",
      command: "play",
      discordIDbot: "776670484560478228",
      title: search,
    });


    fire.database().ref('user/').update({
      discordID: "544256783410135042",
    });


    /*
    fire.database().ref('queue/' + taskKey).set({
      discordID: "413324893757636609",
      title: search,
      duration: "ALOALO ALO ALO ALO",
      likes: "38123818282302013",
      dislikes: search,
      url: "https://www.youtube.com/watch?v=_DjE4gbIVZk&feature=youtu.be",
      viewCount: "123321",
      thumbnail: "https://www.google.com/imagem.jpg"
    });*/


    /*
    fire.database().ref('queue/' + taskKey).set({
      music: search
    });*/

  
  }


  return (
    
    <>
    <div className="SearchBox" >
    <div class="searchbox__group field">
      <input type="input" class="form__field" autoFocus required value={search} onChange={e => setSearch(e.target.value)} />
      <label for="name" class="form__label">Search for the name of the song or add the link.</label>
    </div>

    <div onClick={handdleAddMusicFirebase} class="add_music">
      <img className="lupa" src={lupa} style={{width: "70px", height: "70px"}}/>
    </div>
   

    </div>


    </>

  );
}

export default SearchBar
