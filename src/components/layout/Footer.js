import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box component="div" bgcolor="#0277bd" fontWeight={700} mt={3} textAlign="center">
            <Typography component="div" variant='p' color="#fff">ساخته شده توسط نیما</Typography>
        </Box>
    );
};

export default Footer;