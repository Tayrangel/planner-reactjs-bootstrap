import React from 'react';
import { Container, Col, Row, Card, CardImg } from 'reactstrap';
import img01 from '../imagens/img01.png'

export default (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="6"> Testando </Col>
                    <Col xs="6">
                    <Card>
                        <CardImg
                        alt="Card image cap"
                        src={img01}
                        width="100%"
                        background="transparent"
                    />
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};