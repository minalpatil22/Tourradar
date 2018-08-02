import React from "react";
import { Grid, Container } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      seconds: "",
      minutes: "",
      hours: "",
      days: ""
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const endDate = this.props.futureDate;
    var timeDifference = Date.parse(endDate) - Date.parse(new Date());
    if (timeDifference) {
      var seconds = Math.floor((timeDifference / 1000) % 60);
      var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  render() {
    const { seconds, minutes, hours, days } = this.state;
    return (
      <div>
        <div className="counter-container">
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <div className="timer-container">
                  <p className="timer"> {days}</p>
                  <FormattedMessage id="Days" />
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="timer-container">
                  <p className="timer">{hours}</p>
                  <FormattedMessage id="Hours" />
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="timer-container">
                  <p className="timer">{minutes}</p>
                  <FormattedMessage id="Minutes" />
                </div>
              </Grid.Column>
              <Grid.Column width={4}>
                <div className="timer-container">
                  <p className="timer"> {seconds}</p>
                  <FormattedMessage id="Seconds" />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Counter;
