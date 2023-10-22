import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ name, price, description, image }) => {

  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate(-1)} className='retroceder'> {"< Volver"} </Button>
      <Row className="row">
        <Col md={6} xs={12} className='detailImg'><img style={{width: "100%", marginTop:"10px" }} src={image} alt={name} /></Col>
        <Col style={{ background:"white" }} >
          <div style={{padding:"10px" }}>
            <h1 style={{paddingBottom: "5px", fontSize: "30px", fontWeight: "1000", marginTop:"15px"}}>{name}</h1>
            <h3 style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px", marginBottom: "30px" }}> $ {price} usd c/u </h3>
            <h2 style={{ marginTop: "20px", fontSize: "30px" }}>Descripción</h2>
            <p>{description}</p>
          </div>
          
        </Col>
      </Row>
    </Container>
    
  )
}

export default ItemDetail

