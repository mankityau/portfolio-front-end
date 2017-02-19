import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class Header extends Component{
    render(){
        return (
            <Grid className="Header">
                <Nav bsStyle="pills" justified activeKey={this.props.selectedPage} onSelect={this.props.updateSelectedPageFunc}>
                    <NavItem eventKey="Home">Home</NavItem>
                    <NavItem eventKey="Resume">Resume</NavItem>
                    <NavItem eventKey="Project">Project</NavItem>
                    <NavItem eventKey="Hobby">Hobby</NavItem>
                </Nav>
            </Grid>
        )
    }
}

Header.propTypes = {
    updateSelectedPageFunc: React.PropTypes.func
}

export default Header;