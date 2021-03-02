/* Nextjs */

import React, { Component } from 'react'
import {
  Navbar, Form, Button, Nav, NavDropdown,
} from 'react-bootstrap'
import Link from 'next/link'

export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showForgotPassword: false,
    }
  }

  render() {
    const user = {}
    const { showLogin, showSignUp, showUser } = this.props
    const { isLoggedIn, username, loadingUserSession } = user
    const { showForgotPassword } = this.state

    const renderUser = (
      <Nav>
        <NavDropdown title={username} id="NavDropDown" alignRight>
          <Link href={`/profile/${username}`} passHref><NavDropdown.Item eventKey={10.1}>Profile</NavDropdown.Item></Link>
          <Link href={`/profile/${username}/edit`} passHref><NavDropdown.Item eventKey={10.2}>Edit Profile</NavDropdown.Item></Link>
          <Link href="/settings" passHref><NavDropdown.Item eventKey={10.3}>Settings</NavDropdown.Item></Link>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey={10.3} onClick={this.logoutUser}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    )

    const renderLogin = loadingUserSession ? <Loading className='xs' /> : (
      <Form inline>
        <Form.Group className="mr-1">
          <Form.Check type="checkbox" label="Remember Me" onChange={this.props.handleRememberMe} />
        </Form.Group>
        <Form.Group className="mr-1">
          <Form.Control type="text" placeholder="username" onChange={this.props.handleChangeUsername} />
          <Form.Control type="password" placeholder="password" onChange={this.props.handleChangePassword} />
        </Form.Group>
        <Button className="mr-1" variant="primary" type="submit" onClick={this.loginUser}>Login</Button>
        <Button className="mr-1" variant="light" onClick={this.openSignUpModal}>Sign Up</Button>
        <Button className="mr-1" variant="light">Forgot password</Button>
      </Form>
    )

    const renderSignUp = (
      <Form inline>
        <Navbar.Text>
          Don’t have an account ?
        </Navbar.Text>
        <Button className="ml-1" variant="light">Sign Up</Button>
      </Form>
    )

    return (
      <Navbar bg="light" variant="light" expand="lg">
        <Link href="/" passHref><Navbar.Brand>Earthaline</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          </Nav>
          { showLogin && !isLoggedIn ? renderLogin : null }
          { showUser && isLoggedIn ? renderUser : null }
          { showSignUp && !isLoggedIn ? renderSignUp : null }
        </Navbar.Collapse>
      </Navbar>
    )
  }
}