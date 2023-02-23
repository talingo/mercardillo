import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";


const Layout = () => {
    return (
        <>
        
            <main>
                <Container className="d-flex flex-column">
                <Row><NavigationBar/></Row>
                <Row><Outlet/></Row>
                </Container>
            </main>
        </>
    )
}
export default Layout