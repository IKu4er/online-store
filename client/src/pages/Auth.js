import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >

            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password...'
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        <Col>
                            {isLogin ?
                                <div>
                                    No account? <NavLink to={REGISTRATION_ROUTE}>Registrate now!</NavLink>
                                </div>
                                :
                                <div>
                                    Already have an account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
                                </div>
                            }

                        </Col>

                        <Col className='ml-auto'>
                            <Button variant={"outline-success"}>{isLogin ? "Login" : "Create account"}</Button>
                        </Col>

                    </Row>
                </Form>
            </Card>
        </Container>
    )
}


export default Auth;
