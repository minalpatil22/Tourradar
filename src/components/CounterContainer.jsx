import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import SelectBox from "./SelectBox";
import LanguageContainer from "./LanguageContainer";
let frLocaleData = require("react-intl/locale-data/fr");
addLocaleData(frLocaleData);

const langualeOptions = [
  {
    key: "en",
    text: "English",
    value: "en"
  },
  {
    key: "fr",
    text: "French",
    value: "fr"
  }
];

/* Define your translations */
let languageList = [
  {
    locale: "en",
    messages: {
      Days: "Days",
      Minutes: "Minutes",
      Hours: "Hours",
      Seconds: "Seconds"
    }
  },
  {
    locale: "fr",
    messages: {
      Days: "Journées",
      Minutes: "Minutes",
      Hours: "Heures",
      Seconds: "Secondes"
    }
  }
];
class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en",
      language: languageList.filter(d => d.locale === "en")
    };

    this.onDropDownChange = this.onDropDownChange.bind(this);
  }

  onDropDownChange(data) {
    this.setState({
      value: data.value,
      language: languageList.filter(d => d.locale === data.value)
    });
  }
  render() {
    const { language } = this.state;
    console.log(language, "language");
    return (
      <div>
        <SelectBox
          label={"Sort By"}
          options={langualeOptions}
          onDropDownChange={this.onDropDownChange}
          value={this.state.value}
        />
        {language && <LanguageContainer language={language} />}
      </div>
    );
  }
}

export default CounterContainer;
