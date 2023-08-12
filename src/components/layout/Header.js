import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, styled, Badge, Container } from "@mui/material"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Header = () => {
    const products = useSelector(state => state.buy)

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar>
                    <Link to="/checkout" style={{ flexGrow: 1 }}>
                        <IconButton aria-label="cart" >
                            <StyledBadge badgeContent={products.itemCounter} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none", color: "#fff" }}>
                        <Typography variant="h5" component="h2">
                            محصولات
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;