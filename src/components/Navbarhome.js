import React from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default (props) => {
  return (
    <div>
        <Navbar expand="md" light>
            <NavbarBrand href="/">
            Planner
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/home/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/tayrangel">
                        GitHub
                        </NavLink>
                    </NavItem>
                    <Button outline>Cadastrar-se</Button>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
};
