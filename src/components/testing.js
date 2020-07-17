import React from "react"
import { Carousel } from "react-bootstrap"

export default function Testing({ data }) {
    return (
<Carousel touch>
<Carousel.Item>
        <img
      className="d-block w-100"
      src="https://homeiswhereyourbagis.com/wp-content/uploads/2019/06/Shanghai-Tipps-Shanghai-Skyline.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>

</Carousel.Item>

<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2019/12/03/c10d9b0c-1510-11ea-9462-4dd25a5b0420_image_hires_041043.JPG?itok=-Kuq_JLJ&v=1575317448"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/87469.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}