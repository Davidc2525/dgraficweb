import React, { Component } from 'react';
import logo from './logo_.png';
import './App.css';

import { Grommet } from 'grommet';

var intRan = _ => Math.floor(Math.random() * 255);

var toHex = int => (int).toString(16)

var ranColor = _ => "#" + toHex(intRan()) + toHex(intRan()) + toHex(intRan())

class Ret extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cur_color: "#282c34"
    }

    var index_c = 0;
    let colors = []
    for (let x = 0; x < 100; x++) {
      colors[x] = ranColor();
    }
    setInterval(x => {
      this.setState({ cur_color: colors[index_c] });

      index_c++;
      if (index_c > colors.length - 1) { index_c = 0; }
    }, Math.floor(Math.random()*1000))
  }

  render() {
    return (<div className={"ret"} style={{ backgroundColor: this.state.cur_color }}>
      
    </div>)
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "publicidad",
      cur_color: "#282c34"
    }

    this.rets = [];
    for (let x = 0; x < 10; x++) {
      this.rets[x] = x;;
    }

    var index = 0;
    let msgs = ["publicidad", "diseño web", "software", "avisos", "pendones"]
    var index_c = 0;
    let colors = []
    for (let x = 0; x < 1000; x++) {
      colors[x] = ranColor();
    }
    setInterval(_ => {
      this.setState({ msg: msgs[index] });

      index++;
      if (index > msgs.length - 1) { index = 0; }
    }, 2000)

    setInterval(x => { 
      this.setState({ cur_color: colors[index_c] });

      index_c++
      if (index_c > colors.length - 1) { index_c = 0; }
    }, 2500)
  }

  render() {
    return (
      <div className="App">
         {/* <div className="grid">
          {this.rets.map(x => <Ret x={x} />)}
        </div> */}
        <header className="App-header" style={{ backgroundColor: this.state.cur_color }}>
          {/* <p>
            <strong>DGRAFIC</strong>
          </p> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Tu mejor opcion en <strong>{this.state.msg}</strong>.
          </p>
          Estamos mejorando nuestra imagen para ti!
        </header>
      
      </div>
    );
  }
}

export default App;
