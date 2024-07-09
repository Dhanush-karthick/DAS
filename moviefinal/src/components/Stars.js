import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

//Stars component is a child of ReviewForm and takes the value from onChange event listener
export default function Stars({rating}) {
  
  const [value, setValue] = React.useState(null);


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     
      <Typography component="legend" className="movieText">Rate this movie:</Typography>
      <Rating 
      name="simple-controlled"
      value={value}
      onChange={(_event, newValue) => {
        rating(newValue);
        setValue(newValue);

      }
        }
      />
    </Box>

    //update state from parent here
  );
}
