import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

  //Reviews component styles the data from the form entry by recieving the props from the parent component, ReviewForm
  export default class Reviews extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);
      this.state = {
         id: props.id,
         userName: props.userName,
         userReview: props.userReview,
         stars: props.stars,
        };
      }

    render(){
      console.log('Reviews:', this.state);
        return (
            <Box sx={{ maxWidth: 275 }}>
              <Card variant="outlined">
            <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Name: {this.props.review.userName}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Rating:
                </Typography>
                <Rating name="read-only" value={this.props.review.stars} readOnly />
                <Typography variant="body2">
                {this.props.review.userReview}
                </Typography>
                <br></br>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                {new Date().toLocaleString()}
                </Typography>
            </CardContent>
            </React.Fragment>
            </Card>
            </Box>
          );

    }
    
  }