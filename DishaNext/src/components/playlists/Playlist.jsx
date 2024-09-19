import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Playlist() {
  let [playList, setPlaylist] = useState([
    {
      title: "MERN stack",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },
    {
      title: "React Basics",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },{
      title: "Node.js Introduction",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },{
      title: "Express Framework",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },
    {
      title: "Express Framework",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },
    {
      title: "Express Framework",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },  
    {
      title: "Express Framework",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    },
    {
      title: "Express Framework",
      imageUrl: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149243381.jpg?t=st=1726718777~exp=1726722377~hmac=89a567f0354124014d4f149ef761caa66f36fec4b4362a62a4158468ade414e0&w=826"
    }
  ]);

  return (
    <Container style={{marginTop:'17rem', marginBottom:"15rem"}}>
      <Grid container spacing={4}> {/* Using Material UI's Grid system */}
        {playList.map((v, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}> {/* Responsive layout */}
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={v.imageUrl}
                alt={v.title}
              />
              <CardContent style={{backgroundColor:'#435585'}}>
                <Typography gutterBottom variant="h5" component="div">
                  {v.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
