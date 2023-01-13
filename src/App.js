import './App.css';
import $ from "jquery";
import React, { Component} from 'react';
import Transactions from './Components/Transactions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {}
    };
  }

  getPageData = () => {
    console.log(this.state)
    $.ajax({
      url: "./pageData.json",
      dataType: "json",
      cache: false,
      success: function (resData) {
        this.setState({ pageData: resData });
      }.bind(this),
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getPageData();
  }

  render() {
    return (
      <div className="App">
        <Transactions data={this.state.pageData.main} />
      </div>
    )
  }
}

export default App;