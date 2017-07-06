import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Header extends Component {

    @observable inverse = true
    @observable navHeader = 'HP Predict'
    @observable navItems = ['首頁', '房市現況']

    toggleInverse() {
        this.inverse = !this.inverse
    }

    render() {
        return (
            <Navbar inverse={this.inverse} collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.navHeader}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {
                            this.navItems.map((value, index) => {
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