import React, { useState } from "react";
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
    
  fire.database().ref('user/').update({
    discordID: discordID,
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
          </div>
        
        <a className="buttonHeaderLogout" onClick={handdleLogout}>LOGOUT</a>

        


    </div>

  );
}

export default Header
