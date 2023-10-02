import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap';

function BasicExample() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/photos')
            .then(response => {
                setPhotos(response.data.photos);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    const renderCards = () => {
        const cardGroups = [];
        for (let i = 0; i < photos.length; i += 5) {
            const group = photos.slice(i, i + 5);
            cardGroups.push(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '.4rem' }}>
                    <Row className='gap-3' key={i}>
                        {group.map(photo => (
                            <Card style={{ width: '15rem', marginBottom: '20px', padding: '.7rem' }}>
                                <Card.Img variant="top" src={photo.url} />
                                <Card.Body className={'text-center'}>
                                    <Card.Title>{photo.title.slice(0, 17)}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card ...
                                    </Card.Text>
                                    <Button variant="dark">Click Me</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </div>
            );
        }
        return cardGroups;
    };

    return (
        <div>
            {renderCards()}
        </div>
    );
}

export default BasicExample;
