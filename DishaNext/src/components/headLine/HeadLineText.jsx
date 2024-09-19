import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HeadLineImage from './HeadLineImage';
import { Box } from '@mui/material';
import '../../styles/headLine.css';

export default function HeadLineText() {
    return (
        <>
            <CssBaseline />
            <Container>
                <Box className='head-line' sx={{ textAlign: '', py: 4 }}>
                    <Box className='head-text'>
                        <Typography variant="h1" component="p" sx={{ fontSize: { xs: '0.5em', sm: '1.5rem', md: '1.5rem' } }}>
                            Welcome to DishNext
                        </Typography>
                        <Typography variant="h3" component="p" sx={{ fontSize: { xs: '0.4rem', sm: '0.6rem', md: '1.1rem' }, my: 2 }}>
                            At Learn With Ease, we understand that navigating through countless YouTube videos can be overwhelming for students. Our project is designed to simplify the learning process by providing curated playlists on specific topics. These playlists are carefully selected to ensure that students get clear, structured, and focused content, making their learning experience more effective and less confusing.
                        </Typography>
                        <Typography variant="h4" component="p" sx={{ fontSize: { xs: '0.3rem', sm: '0.5rem', md: '0.9rem' } }}>
                            Whether you're tackling complex subjects or just need a refresher, our playlists are here to guide you through your educational journey with ease.
                        </Typography>
                    </Box>

                    <HeadLineImage />
                </Box>
            </Container>
        </>
    );
}
