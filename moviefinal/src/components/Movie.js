import React from 'react';
import Card from 'react-bootstrap/Card';
import ReviewForm from './ReviewForm';
import { Badge } from 'react-bootstrap';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      releaseDate: props.releaseDate,
      director: props.director,
      image: props.image,
      rating: props.rating // Add rating to the state
    };
  }

  render() {
    return (
      <Card className='movieCard' style={{ width: '18rem' }}>
        <Card.Img className="moviePoster" variant="top" src={this.state.image} />
        <Card.Body>
          <Card.Text className="movieTitle">{this.state.title}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Dir. {this.state.director}
          </Card.Subtitle><br />
          <Card.Subtitle className="mb-2 text-muted" id="smallText">
            <div>{'Release Date: '}{this.state.releaseDate}</div>
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted" id="smallText">
            <div>
              {'Rating: '}{this.state.rating} stars
            </div>
          </Card.Subtitle>
          <ReviewForm />
        </Card.Body>
      </Card>
    );
  }
}
