import React from 'react';
import { Container, Col, Row, Card, CardImg, Button } from 'reactstrap';
import img03 from '../imagens/img03.png';

export default (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="6" className='my-auto'> 
                        <h3 className='fw-bolder pt-5'>Deseja organizar a sua rotina seja no trabalho, 
                        nos estudos ou nos afazeres do dia a dia?</h3> 
                        <hr className='text-primary w-50'></hr>
                        <h5>O planner pode ajudar você a organizar tudo de maneira simples e rápida.</h5>
                        <Button outline className='mt-3'>Cadastrar-se</Button>
                    </Col>
                    <Col xs="6">
                        <img src={img03} />
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className='text-center mt-5 fs-2'>Testando de novo</h1>
            </Container>
        </div>
    );
};