import React from "react";
import { Tab } from "semantic-ui-react";
import CounterContainer from "./CounterContainer";
import App from "./App";

const panes = [
  {
    menuItem: "Tab 1",
    render: () => (
      <Tab.Pane>
        <CounterContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Tab 2",
    render: () => (
      <Tab.Pane>
        <App />
      </Tab.Pane>
    )
  }
];

class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">Tourradar</div>
        </header>
        <Tab panes={panes} menu={{ pointing: true }} />
      </div>
    );
  }
}

export default Main;
