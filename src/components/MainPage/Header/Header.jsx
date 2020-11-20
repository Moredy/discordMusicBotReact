import React, { useState, useEffect } from "react";
import './Header.scss'
import MainMenu from './MainMenu/MainMenu'
import fire from '../../../fire';

/*
- NEXT TRACK 
- PLAY/PAUSE
- MUTE
- UP VOLUME
- DOWN VOLUME
- REPEAT
- STOP

*/
const Header = ({ handdleLogout }) => {

  const [discordID, setDiscordID] = useState('');
  const [discordIDAtual, setDiscordIDAtual] = useState('');
   
  const gravarDiscordID = () => {


  var taskKey = fire.database().ref().child('task').push().key;

  fire.database().ref('task/' + taskKey).set({
    type: "verificarID",
    verificarID: discordID
  });


  }

  var User = fire.database().ref('user/');
  User.on('value', async function (snapshot) {
    if (await snapshot.val() != null) {
    setDiscordIDAtual(await snapshot.val().discordID)
    }
  });



  return (
    <div className="Header">

        <input type='checkbox' id='toggle' style={{display: "none"}} />
          <label class='toggle-btn toggle-btn__cross' for='toggle'>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </label>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact me</a></li>
            </ul>
          </nav>




          <div class="discordid__group field">
            <input type="input" class="form__field_discorid" onChange={e => setDiscordID(e.target.value)}/>
            <label for="name" class="form__label_discordid">Insira seu ID do Discord.</label>
            <p style={{color: "#fff"}} >Atual: {discordIDAtual}</p>
            <button onClick={gravarDiscordID}>Salvar</button>
          </div>
        
        <a className="buttonHeaderLogout" onClick={handdleLogout}>LOGOUT</a>

        


    </div>

  );
}

export default Header
