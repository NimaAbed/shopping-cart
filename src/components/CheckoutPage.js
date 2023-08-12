import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { checkout, clear, decreaseItem, increaseItem } from '../Redux/buy/createSliceBuy';
import { shortString } from '../helper/helper';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const products = useSelector(state => state.buy)
    const dispatch = useDispatch()

    if (products.itemSelected.length == 0) return (
        <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 125px)" }}>
            <Grid container display="flex" justifyContent="end" mt={2}>
                <Grid item xs={12} sm={4} border="2px solid silver" textAlign="center" >
                    {products.checkOut ? <Typography m={2} component="div" variant='h6' color="#4caf50">خرید با موفقیت انجام شد</Typography>
                        : <Typography m={2} color="#ffa726" component="div" variant='h6'>سبد خرید خالی می باشد</Typography>}
                    <Divider variant='middle' />
                    <Link to="/products"><Button sx={{ m: 2 }} variant='contained' >رفتن به فروشگاه</Button></Link>
                </Grid>
            </Grid>
        </Container >
    )


    return (
        <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 181px)" }}>
            <Grid container mt={9}>
                <Grid item xs={12} sm={6} md={9}>
                    {products.itemSelected.map(item => (
                        <Grid item border="2px solid silver" p={2} display="flex" justifyContent="space-between" alignItems="center" m={1}>
                            <img src={item.image} style={{ height: "100px", width: "100px" }} />
                            <Box component="div" display="flex" flexDirection="column">
                                <Typography component="span" color="primary" variant='p'>{shortString(item.title)}</Typography>
                                <Typography component="span" variant='p' color="#4caf50">{(item.price * item.quentity).toFixed(2)} $</Typography>
                            </Box>
                            <Box component="div" display="flex" alignItems="center">
                                <AddCircleOutlineRoundedIcon onClick={() => dispatch(increaseItem(item))} />
                                <Typography mx={1} component="span" variant='p'>{item.quentity}</Typography>
                                <RemoveCircleOutlineRoundedIcon onClick={() => dispatch(decreaseItem(item))} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Grid item m={1}>
                        <Box component="div" border="2px solid silver" dir='rtl' p={2}>
                            <Typography color="primary" component="div" variant='h5'>تسویه حساب</Typography>
                            <Typography component="div" my={2}>مجموع کالا: {products.itemCounter}</Typography>
                            <Typography component="div" my={2}>قیمت نهایی: $ {products.total}</Typography>
                            <Divider variant='middle' />
                            <Box component="div" display="flex" justifyContent="space-between" mt={3}>
                                <Button onClick={() => dispatch(checkout())} variant='contained' color="success">پرداخت</Button>
                                <Button variant='outlined' onClick={() => dispatch(clear())}>خالی کردن</Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
};

export default CheckoutPage;