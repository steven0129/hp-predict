import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { observer } from 'mobx-react'

@observer
class Header extends Component {
    render() {
        return (
            <Navbar inverse={this.props.state.nav.inverse} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.props.state.nav.navHeader}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {
                            this.props.state.nav.navItems.map((value, index) => {
                                return <NavItem key={index}>{value}</NavItem>
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header