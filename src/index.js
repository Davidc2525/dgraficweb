import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

//limpiar ads de 000webhost
    var clear_ads_000WebHost = _=>{
        console.log("limpiando ads 000webhost")
        var inter = setInterval(_=>{

            var intr = document.querySelector("body>div:not([id^='root'])")
            if (intr) {
                console.log("limpiado 000WebHost ads")
                document.body.removeChild(intr)
                console.log("limpiando interval")
                clearInterval(inter)
            }

        }
        , 500)

    }
    
   clear_ads_000WebHost();
