import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class Header extends Component{
    render(){
        return <div className="Header">
            <Nav bsStyle="pills" justified activeKey={this.props.selectedPage} onSelect={this.props.updateSelectedPageFunc}>
                <NavItem eventKey="Home">Home</NavItem>
                <NavItem eventKey="Resume">Resume</NavItem>
                <NavItem eventKey="Project">Project</NavItem>
                <NavItem eventKey="Hobby">Hobby</NavItem>
            </Nav>
        </div>
    }
}

Header.propTypes = {
    updateSelectedPageFunc: React.PropTypes.func
}

export default Header;