import {React} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.css';


const Item = ({id, category, name, price, description, image }) => {

  return (
    <Card className='product-card' >
      <Card.Img className='product-img' variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          $ {price} usd
        </Card.Text>
        <Link to={`/item/${id}`} > <Button style={{backgroundColor:"#ff6347", borderColor:"#fff"}}>Detalles</Button> </Link>
      
      </Card.Body>
    </Card>
    )
};

export default Item

