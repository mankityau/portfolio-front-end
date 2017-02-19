import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';


class MainContent extends Component{
    render(){
        return(
            <Grid className="MainContent">
                {this.props.selectedPage}
            </Grid>
        )
    }
}

export default MainContent;