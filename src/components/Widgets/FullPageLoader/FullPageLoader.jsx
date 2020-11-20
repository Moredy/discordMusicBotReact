import React from 'react';
import './FullPageLoader.css'
//import LoaderGif from ''

const FullPageLoader = (props) => {

    return (
      <>
      <div class="loader-container">
        <div class="loader">
            <h1 style={{color: "#fff"}}>Loading...</h1>
            <p style={{color: "#fff"}}> Caso o loading não desaparecer, vá no chat do servidor e verifique se você está sincronizado com o site digitando "-verificarID"</p>
        </div>
      </div>
      </>
    );

  
  
}

export default FullPageLoader;