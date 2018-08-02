import React from "react";
import SelectBox from "./SelectBox";
import ResultContainer from "./ResultContainer";

const sortByOptions = [
  {
    key: "Lowest price first",
    text: "Lowest price first",
    value: "Lowest price first"
  },
  {
    key: "Highest price first",
    text: "Highest price first",
    value: "Highest price first"
  },
  {
    key: "Longest tour first",
    text: "Longest tour first",
    value: "Longest tour first"
  },
  {
    key: "Shortest tour first",
    text: "Shortest tour first",
    value: "Shortest tour first"
  }
];
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", filteredData: [] };
    this.onDropDownChange = this.onDropDownChange.bind(this);
    this.filterSearchData = this.filterSearchData.bind(this);
  }
  onDropDownChange(data) {
    this.setState({
      value: data.value
    });

    switch (data.value) {
      case "Lowest price first": {
        this.filterSearchData("price", "asc");
        break;
      }
      case "Highest price first": {
        this.filterSearchData("price", "desc");
        break;
      }
      case "Longest tour first": {
        this.filterSearchData("length", "desc");
        break;
      }
      case "Shortest tour first": {
        this.filterSearchData("length", "asc");
        break;
      }
      default: {
        break;
      }
    }
  }

  componentDidMount() {
    this.setState({
      filteredData: this.props.data
    });
  }

  filterSearchData(filterBy, type) {
    const { data } = this.props;
    if (type === "asc") {
      data.sort((a, b) => a[filterBy] - b[filterBy]);
    } else {
      data.sort((a, b) => b[filterBy] - a[filterBy]);
    }
    this.setState({
      filteredData: data
    });
  }

  render() {
    const { value, filteredData } = this.state;
    return (
      <div>
        <SelectBox
          label={"Sort By"}
          options={sortByOptions}
          onDropDownChange={this.onDropDownChange}
          value={value}
        />
        <ResultContainer filteredData={filteredData} />
      </div>
    );
  }
}

export default SearchContainer;
