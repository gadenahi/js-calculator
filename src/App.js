import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      subdisplay: "0",
      calStatus: false
    }
    this.displayClear = this.displayClear.bind(this)
    this.handleNumbers = this.handleNumbers.bind(this)
    this.handleOperators = this.handleOperators.bind(this)
    this.handleDecimals = this.handleDecimals.bind(this)
  }

  handleOperators(e) {
    if (this.state.calStatus) {
      switch (e.target.value) {
        case "/":
        case "x":
        case "-":
        case "+":
          this.setState({
            display: e.target.value,
            subdisplay: this.state.display + e.target.value,
            calStatus: false
          });
          break;
        default:
          var totalVal = this.state.display
          if (this.state.subdisplay.match(/x/g)) {
            totalVal = this.state.display.replace(/x/g, "*")
          }
          let answer = Math.round(1000000000000 * eval(totalVal)) / 1000000000000;
          this.setState({
            display: answer.toString(),
            calStatus: true
          });
          break;
      }
    } else if (this.state.display.match(/\d/)) {
      switch (e.target.value) {
        case "/":
        case "x":
        case "-":
        case "+":
          this.setState({
            display: e.target.value,
            subdisplay: this.state.subdisplay + e.target.value
          });
          break;
        default:
          totalVal = this.state.subdisplay
          if (this.state.subdisplay.match(/x/g)) {
            totalVal = this.state.subdisplay.replace(/x/g, "*")
          }
          let answer = Math.round(1000000000000 * eval(totalVal)) / 1000000000000;
          this.setState({
            display: answer.toString(),
            calStatus: true
          });
          break;
      }
    } else if (this.state.display.match(/\D$/)) {
      switch (e.target.value) {
        case "/":
        case "x":
        case "-":
        case "+":
          this.setState({
            display: e.target.value,
            subdisplay: this.state.subdisplay.slice(0, -1) + e.target.value
          });
          break;
        default:
          this.setState({
            subdisplay: this.state.subdisplay.slice(0, -1) + e.target.value,
            display: this.state.subdisplay.slice(0, -1),
            calStatus: true
          });
          break;
      }
    }
  }

  handleNumbers(e) {
    if (this.state.calStatus) {
      this.setState({
        display: String(e.target.value),
        subdisplay: String(e.target.value),
        calStatus: false
      })
    } else {
      if (this.state.display.length > 19 || this.state.subdisplay.length > 19) {
        return
      }
      if (this.state.display === "0") {
        this.setState({
          display: String(Number(this.state.display + e.target.value)),
          subdisplay: String(Number(this.state.subdisplay + e.target.value))
        })
      }
      else {
        this.setState({
          display: this.state.display + e.target.value,
          subdisplay: this.state.subdisplay + e.target.value
        })
      }
    }
  }

  handleDecimals() {
    if (this.state.display.indexOf('.') === -1 && this.state.display.match(/\d/)) {
      if (this.state.display === "0") {
        this.setState({
          display: "0.",
          subdisplay: "0."
        })
      }
      else {
        this.setState({
          display: String(this.state.display + "."),
          subdisplay: String(this.state.subdisplay + ".")
        })
      }
    }
  }

  displayClear() {
    this.setState({
      display: "0",
      subdisplay: "0",
      calStatus: false
    });
  }
  render() {
    return (
      <div id='cal_main'>
        <div id="subdisplay">{this.state.subdisplay}</div>
        <div id="display">{this.state.display}</div>
        <button id="clear" value="AC" onClick={this.displayClear}>AC</button>
        <button className="symbol" value="/" onClick={this.handleOperators} id="divide">/</button>
        <button className="symbol" value="x" onClick={this.handleOperators} id="multiply">x</button>
        <button className="number" value="7" onClick={this.handleNumbers} id="seven">7</button>
        <button className="number" value="8" onClick={this.handleNumbers} id="eight">8</button>
        <button className="number" value="9" onClick={this.handleNumbers} id="nine">9</button>
        <button className="symbol" value="-" onClick={this.handleOperators} id="subtract">-</button>
        <button className="number" value="4" onClick={this.handleNumbers} id="four">4</button>
        <button className="number" value="5" onClick={this.handleNumbers} id="five">5</button>
        <button className="number" value="6" onClick={this.handleNumbers} id="six">6</button>
        <button className="symbol" value="+" onClick={this.handleOperators} id="add">+</button>
        <button className="number" value="1" onClick={this.handleNumbers} id="one">1</button>
        <button className="number" value="2" onClick={this.handleNumbers} id="two">2</button>
        <button className="number" value="3" onClick={this.handleNumbers} id="three">3</button>
        <button className="zero" value="0" onClick={this.handleNumbers} id="zero">0</button>
        <button className="decimal" value="." onClick={this.handleDecimals} id="decimal">.</button>
        <button className="equals" value="=" onClick={this.handleOperators} id="equals">=</button>
      </div>
    )
  }
}

export default App;
