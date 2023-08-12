import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/api/products';
import CardEL from './shared/CardEL';

const HomePage = () => {

    const products = useSelector(state => state.products.data)
    const { loading } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    console.log(products)

    if (loading) return <div style={{ height: "83.2vh", textAlign: "center" }}>Loding...</div>

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} mt={10} >
                {products.map(item => (
                    <Grid item xs={6} sm={4} md={3} key={item.id}><CardEL {...item} /></Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;