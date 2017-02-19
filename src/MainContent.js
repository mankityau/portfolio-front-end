import React, { Component } from 'react';

class MainContent extends Component{
    render(){
        return <div className="MainContent">
            {this.props.selectedPage}
        </div>
    }
}

export default MainContent;