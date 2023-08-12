import { Box, Button, Card, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams()
    const products = useSelector(item => item.products)
    const data = products.data[+id - 1]
    return (
        <Container maxWidth="lg">
            <Grid container mt={9} border="2px solid silver" alignItems="center" p={2}>
                <Grid item xs={12} sm={5} md={3}>
                    <img style={{ width: "250px" }} src={data.image} />
                </Grid>
                <Grid item xs={12} sm={7} md={9}>
                    <Box component="div" border="2px solid silver" p={1}>
                        {console.log(data)}
                        <Typography component="h4" variant="h6" color="primary">{data.title}</Typography>
                        <Typography component="p" variant="p" mt={1}>{data.description}</Typography>
                        <Typography component="p" variant="p" color="#ffca28" my={1}>Category:<span style={{ color: "silver", marginLeft: "3px" }}>{data.category}</span></Typography>
                        <Divider variant='middle' />
                        <Box component="p" display="flex" justifyContent="space-between">
                            <Button variant='contained' color='success'>{data.price} $</Button>
                            <Link to="/products"><Button variant='contained'>برگشت به فروشگاه</Button></Link>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default DetailsPage;