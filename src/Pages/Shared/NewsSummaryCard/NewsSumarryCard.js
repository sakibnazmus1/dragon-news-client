import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const NewsSumarryCard = ({ news }) => {
    const { title, _id, image_url, author, details, total_view, } = news;
    console.log(news);
    return (
        <Card className="">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSumarryCard;