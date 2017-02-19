import React, { Component } from 'react';
import Header from "./Header";
import MainContent from "./MainContent"

class App extends Component {
  updateSelectedPage(selectedPage){
    this.setState({
        selectedPage: selectedPage
    })
  }

  constructor(props){
    super(props);
    this.state = {
        selectedPage: props.selectedPage,
    };

    this.updateSelectedPage = this.updateSelectedPage.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Header selectedPage={this.state.selectedPage} updateSelectedPageFunc={this.updateSelectedPage}/>
        <MainContent selectedPage={this.state.selectedPage}/>
      </div>
    );
  }
}

export default App;
