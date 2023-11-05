import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, price, description, image, stock }) => {
  const [quantityAdded, setQuantityAdded]= useState(0)

  const {addItem} = useContext(CartContext)

  const handleOnAdd=(quantity)=>{
    setQuantityAdded(quantity)

    const item ={
      id, name, price
    }

    addItem(item,quantity)
  }
  
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => navigate(-1)} className='retroceder'> {"< Volver"} </Button>
      <Row className="row">
        <Col md={6} xs={12} className='detailImg'><img style={{width: "100%", marginTop:"10px" }} src={image} alt={name} /></Col>
        <Col style={{ background:"white" }} >
          <div style={{padding:"10px" }}>
            <h1 style={{paddingBottom: "5px", fontSize: "30px", fontWeight: "1000", marginTop:"15px"}}>{name}</h1>
            <h3 className='price'> $ {price} usd c/u </h3>
            <h2 style={{ marginTop: "20px", fontSize: "30px" }}>Descripción</h2>
            <p>{description}</p>
            <footer className='ItemFooter'>
            {
              quantityAdded > 0 ?(
              <Link to="/cart" className="Option">Terminar compra</Link> 
              ):(
                <ItemCount initial ={1} stock={10} onAdd={handleOnAdd}/>
              )
            }
          </footer>
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default ItemDetail;








