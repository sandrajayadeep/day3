import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function App() {

  const districts = [

    {
      id: 1,
      city: 'Kasarkod',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kasrkod-beach-park-Honnavar.jpg/1200px-Kasrkod-beach-park-Honnavar.jpg',
      dis: 'Has a unique culture, with several ancient temples and mosques, such as the Ananthapura Lake Temple and the Malik Deenar Mosque.',
    },

    {
      id: 2,
      city: 'Kannur',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg/1024px-Muzhappilangad_Drive-in_Beach_2.jpg',
      dis: 'Has a rich history, with several ancient temples and monuments, such as St. Angelo Fort and the Parassinikadavu Muthappan Temple.',
    },

    {
      id: 3,
      city: 'Calicut',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRwnTyfBU1t9qnloBvM4AYe4eVXKmfztoyzesrlbOVQdjHGCoRIO7LU3jJJOPVpsUwEetTV0HiQMx7GYoA1eumymdp41Q',
      dis: 'Has a beautiful coastline, with popular beaches such as Kappad Beach and Payyoli Beach.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/'
    },
    {
      id: 4,
      city: 'Wayanad',
      image: 'https://www.wayanad.com/files/menuboxes/108009770.jpg',
      dis: 'Has a large population of tribal communities, with many preserving their traditional way of life',
    },

    {
      id: 5,
      city: 'Malappuram',
      image: 'https://cdn.s3waas.gov.in/s382aa4b0af34c2313a562076992e50aa3/uploads/2018/04/2018041752-2.jpg',
      dis: 'Has a large Muslim population, with several mosques and Islamic institutions in the region.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 6,
      city: 'Palakkad',
      image: 'https://www.tusktravel.com/blog/wp-content/uploads/2022/12/Malampuzha-Park-Palakkad-Kerala.jpg',
      dis: 'Known for its unique terrain, with several hill stations and wildlife sanctuaries, such as the Silent Valley National Park and the Nelliyampathy Hills.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 7,
      city: 'Thrissur',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsc376BoB-Tnb7m10osDSXsV15oXL98UD4zMduln4AQ&usqp=CAU&ec=48665701',
      dis: 'Known as the “Cultural Capital of Kerala” for its rich cultural heritage, with many ancient temples and monuments, such as the Vadakkunnathan Temple and the Thrissur Zoo.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 8,
      city: 'Ernakulam',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1',
      dis: 'The commercial capital of Kerala, with a bustling port and several industries, such as the Kochi Refinery and the Cochin Shipyard.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 9,
      city: 'Alappuzha',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/1024px-Alappuzha_Boat_Beauty_W.jpg',
      dis: 'Known as the “Venice of the East” for its intricate network of canals and backwaters.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },

    {
      id: 10,
      city: 'Idukki',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Munnar_Top_station.jpg/1024px-Munnar_Top_station.jpg',
      dis: 'Known for its scenic beauty and abundance of wildlife, with attractions such as the Idukki Arch Dam and the Eravikulam National Park.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },

    {
      id: 11,
      city: 'Kollam',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/13_Arch_bridge_Kazhuthurutty_Kerala.jpg',
      dis: 'Known for its backwaters, which are a popular tourist attraction.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },

    {
      id: 12,
      city: 'Kottayam',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vembanad_Lake_at_Kumarakom.jpg/1280px-Vembanad_Lake_at_Kumarakom.jpg',
      dis: 'Home to many educational institutions, including the Mahatma Gandhi University and the Rubber Research Institute of India.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 13,
      city: 'Pathanamthitta',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/33kVsubstationperunad.jpeg/1280px-33kVsubstationperunad.jpeg',
      dis: 'Known for its famous pilgrimage centre, Sabarimala, which is visited by millions of devotees every year.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },
    {
      id: 14,
      city: 'Thiruvananthapuram',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Poovar_Kerala.jpg/1280px-Poovar_Kerala.jpg',
      dis: 'Known for its beautiful beaches, such as Kovalam Beach and Shanghumukham Beach.... Read more at: https://www.studyiq.com/articles/districts-of-kerala/',
    },





  ]



  return (
    <div>
      <h1> <center>Kerala Districts</center> </h1>
      <Container>
        <Row>
          {
            districts.map((district, index) => {
              return (
                <Col sm={3} key={index}>
                  <Card>
                    <Card.Img style={{height:'13rem'}} variant="top" src={district.image} />
                    <Card.Body>
                      <Card.Title>{district.city}</Card.Title>
                      <Card.Text>
          {district.dis}
        </Card.Text>
                      <Button variant="primary">visit</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )

            })
          }
        </Row>
      </Container>
    </div>
  )
}