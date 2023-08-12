import React, { useEffect } from 'react';
import { Button, Card, CardActions, CardContent, Typography, Box, Divider } from '@mui/material';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { findProduct, shortString, totals } from '../../helper/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, decreaseItem, increaseItem } from '../../Redux/buy/createSliceBuy';
import { Link } from 'react-router-dom';

const CardEL = (props) => {

    const { title, price, image, id } = props
    const product = useSelector(item => item.buy)
    const dispatch = useDispatch()



    return (
        <Card elevation={3}>
            <img src={image} style={{ width: "100%", height: "194px" }} />
            <CardContent sx={{ mt: 1 }}>
                <Typography component="h4" variant="h6" fontWeight={600} fontSize={window.outerWidth <= 400 && "20px"} >{shortString(title)}</Typography>
                <Typography component="span" variant='p' color="#4caf50">{price} $</Typography>
            </CardContent>
            <Divider variant="middle" />
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>

                    {!findProduct(product, id) ? <Button variant='outlined' onClick={() => dispatch(addToCard(props))}>اضافه به سبد</Button>
                        : <><AddCircleOutlineRoundedIcon onClick={() => dispatch(increaseItem(props))} />
                            <Typography component="span" variant="p" m={1}>{findProduct(product, id).quentity}</Typography>
                            <RemoveCircleOutlineRoundedIcon onClick={() => dispatch(decreaseItem(props))} /></>}

                </Box>
                <Link to={`/products/${id}`}><Button variant="contained" onClick={() => dispatch(addToCard(props))} >جزیات</Button></Link>
            </CardActions>
        </Card >
    );
};

export default CardEL;