import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
const Homepage = () => {
    /*const [producto, setProducto] = useState([]);*/

    const [loading, setLoading] = useState(true)

    const [productos, setProductos] = useState([]);

    /*const getProductoList = async () =>{
        let productoArray = [];
        sole.log(productoArray);
        setProducto(productoArray);
        setLoading(false)
    }*/

    const peticionget = () => {
        axios.get(`http://localhost:8081/api/products/`)
            .then(response => {
                const listaproductos = response.data;
                console.log(listaproductos);
                setProductos(listaproductos);
                setLoading(false);
            })
    }

    /* const getProductoData = async () => {
         const res = await axios.get(`http://localhost:8081/api/products/`);
         return res;
     }*/

    useEffect(() => {
        peticionget();
        /*getProductoList();*/
    }, []);


    return (
        <div className='p-2'>

            {/*  */}
            {loading ? (
            <Loader></Loader>
            ) : (
            <Row>

            
              
                    {

                        productos.map(i => (
                                
                            <Col  key={i.id} xs={12} sm={12} md={4} lg={4} xl={4}>
                                
                                <Card className='border my-3 p-3 rounded text-center shadow p-3 mb-5 bg-danger rounded' style={{ border: 'none' }}>
                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                        {/* FOTO DE PAGINAS */}
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <Card.Img style={{ width: '24rem', textAlign :'center' }} class="d-block w-100" src={i.img_delante} variant='top' />
                                                <Card.Body className={`rounded text-dark`}>
                                                    <Link to="/#" className='link-name'>
                                                        <Card.Title as='div'><strong>#{i.id} {i.nombre}</strong></Card.Title>
                                                    </Link>
                                                </Card.Body>
                                            </div>
                                            <div class="carousel-item">
                                                <Card.Img style={{ width: '24rem', textAlign :'center' }} class="d-block w-100" src={i.atras} variant='top' />
                                                <Card.Body className={`rounded text-dark`}>
                                                    <Link to="/#" className='link-name'>
                                                        <Card.Title as='div'><strong>#{i.id} {i.nombre}</strong></Card.Title>
                                                    </Link>
                                                </Card.Body>
                                            </div>
                                            <div class="carousel-item">
                                                <Card.Img style={{ width: '24rem', textAlign :'center' }} class="d-block w-100" src={i.costado} variant='top' />
                                                <Card.Body className={`rounded text-dark`}>
                                                    <Link to="/#" className='link-name'>
                                                        <Card.Title as='div'><strong>#{i.id} {i.nombre}</strong></Card.Title>
                                                    </Link>
                                                </Card.Body>
                                            </div>
                                        </div>
                                    </div>
                                </Card>         
                            </Col>
                        ))
                    }
               
            </Row>
            )}
        </div>
    );
}

export default Homepage;

