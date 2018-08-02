import React from "react";
import Counter from "./Counter";
import { addLocaleData, IntlProvider } from "react-intl";
let frLocaleData = require("react-intl/locale-data/fr");
addLocaleData(frLocaleData);

class LanguageContainer extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <IntlProvider locale={language[0].locale} messages={language[0].messages}>
        <Counter futureDate={"2018-11-23"} />
      </IntlProvider>
    );
  }
}

export default LanguageContainer;
