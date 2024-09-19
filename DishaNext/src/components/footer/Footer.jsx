import React from 'react';
import { Box, Container, Grid, IconButton, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Home, Email, Phone, Print } from '@mui/icons-material';

export default function Footer() {
    const courses = [
        { title: 'React Basics', link: '#' },
        { title: 'Advanced JavaScript', link: '#' },
        { title: 'MERN Stack', link: '#' },
        { title: 'HTML & CSS', link: '#' },
        { title: 'Python for Beginners', link: '#' },
        { title: 'Data Structures', link: '#' },
        { title: 'Algorithms', link: '#' },
        { title: 'Node.js Essentials', link: '#' },
        { title: 'Bootstrap Framework', link: '#' },
        { title: 'SQL Basics', link: '#' },
        { title: 'PHP Development', link: '#' },
        { title: 'Laravel Framework', link: '#' },
        { title: 'Vue.js Basics', link: '#' },
        { title: 'Angular Fundamentals', link: '#' },
        { title: 'Java Programming', link: '#' },
        { title: 'Spring Boot', link: '#' },
        { title: 'Flutter Development', link: '#' },
        { title: 'Mobile App Development', link: '#' },
        { title: 'REST API Development', link: '#' },
        { title: 'AWS for Developers', link: '#' }
      ];
  return (
    <Box 
      sx={{
        backgroundColor: 'rgba(100, 130, 173, 0.3)',
        p: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Social Media Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Get connected with us on social networks:
            </Typography>
            <Box>
              <IconButton href="#" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="primary">
                <Google />
              </IconButton>
              <IconButton href="#" color="primary">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="primary">
                <LinkedIn />
              </IconButton>
              <IconButton href="#" color="primary">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              DishaNext
            </Typography>
            <Typography color="white">
            Explore a range of comprehensive courses designed to enhance your skills and knowledge in various domains.            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact
            </Typography>
            <Box>
              <Typography color="white">
                <Home sx={{ verticalAlign: 'middle', mr: 1 }} />
                Suart, Gujrat, 394540
              </Typography>
              <Typography color="white">
                <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
                DishaNext@gmail.com
              </Typography>
              <Typography color="white">
                <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
                + 91 9999999999
              </Typography>
              <Typography color="white">
                <Print sx={{ verticalAlign: 'middle', mr: 1 }} />
                + 91 9999999999
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        {/* Social Media Section */}
        <Grid container spacing={5}>
          {/* Your other sections here */}
        </Grid>

        {/* Courses Section */}
        <Box mt={5}>
          <Typography variant="h6" color="white" gutterBottom>
            Courses
          </Typography>
          <Grid container spacing={3}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Typography variant="body1">
                  <Link href={course.link} underline="hover" color="inherit">
                    {course.title}
                  </Link>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box textAlign="center" pt={4} pb={2} mt={3} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Typography variant="body2" color="white">
          © 2024 Copyright: 
          <Link href="https://mdbootstrap.com/" underline="hover" color="inherit">
            DisahNext
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
