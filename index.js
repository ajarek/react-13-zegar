
class Clock extends React.Component {
 state = {
    date:new Date(),
    secondsDegrees:0,
    minsDegrees:0,
    hourDegrees:0
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
    const now = this.state.date;
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    this.setState({secondsDegrees});
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90
    this.setState({minsDegrees});
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90+((mins/60)*30);
    this.setState({hourDegrees});
  }
  render() {

    return (   
      <div className="container">
        <div className="clock">
        <div className="clock-face">
            <div
             className="hand hour-hand"
              style={{
                transform: `rotate(${this.state.hourDegrees}deg)`}}
             >
             </div>
            <div
             className="hand mins-hand"
              style={{transform: `rotate(${this.state.minsDegrees}deg)`}}
            >
            </div>
            <div 
            className={"hand second-hand"}
            style={{transform: `rotate(${this.state.secondsDegrees}deg)`}}

            ></div>
            <div className="dot"></div>
        </div>
    </div>
      </div>
    );
  }
     
}
ReactDOM.render(<Clock />, document.getElementById("root"));
