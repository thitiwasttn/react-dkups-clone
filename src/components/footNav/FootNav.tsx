import React from "react";
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavbarB from 'react-bootstrap/Navbar'
import {checkLogin} from "../../utils/Utils";

const FootNav: React.FC = () => {
    let navProfile: string = (checkLogin()) ? '/login' : '/profile';
    return (
        <>
            <NavbarB
                collapseOnSelect
                bg="light"
                variant="light"
                fixed="bottom"
                className={""}>
                <Nav className={""}>
                    <Nav.Link as={Link} to={'/'} className={"col-3"}>
                        HOME
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/'} className={"col-3"}>
                        ORDER
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/'} className={"col-3"}>
                        SEARCH
                    </Nav.Link>
                    <Nav.Link as={Link}
                              to={navProfile}
                              className={"col-3"}>
                        PROFILE
                    </Nav.Link>
                </Nav>
            </NavbarB>
        </>
    );
}

export default FootNav;