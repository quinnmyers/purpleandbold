import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import style from './slider.module.sass'

class TestimonialsSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testimonials: [
        {
          id: 1,
          name: 'Dima Duchet',
          position: 'Artist, Art Lead',
          testimonial:
            'Purple and Bold worked on my personal art website, which means that I had to deliver many visual assets. Quinn was patient with me, and had good solutions to any questions I had. I am so excited to finally have a website of my own that is linked to all my other profiles and will serve as a good place to start my business.',
        },
        {
          id: 2,
          name: 'Robert Riordan',
          position: 'Actor, Singer',
          testimonial:
            'Purple and Bold takes the picture in your head and brings it to life. They know how to simplify tastefully and create solid options quickly. They are a real gem to work with too, and communicate very well.',
        },
        {
          id: 3,
          name: 'Jared Bonnell',
          position: 'Broker/Owner, One Commercial',
          testimonial:
            'Purple and Bold has made me a website that really helps me get in front of buyers and sellers. I am confident when I send people a link to my website or hand them a business card, knowing that my website functions perfectly and looks stunning.',
        },
        {
          id: 4,
          name: 'Jim Jackson',
          position: 'CEO, Bluhare Studios',
          testimonial:
            'Purple and Bold did a great job on our company website. They were attentive to our needs and delivered the exact product we were looking for in a timely manner.',
        },
      ],
      slideIndex: 0,
      playing: true,
      toShow: null,
    }
  }
  componentDidMount() {
    if (window.matchMedia('(max-width: 500px)').matches) {
      this.setState({ toShow: 1 })
      return
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      this.setState({ toShow: 2 })
      return
    } else {
      this.setState({ toShow: 3 })
    }
  }

  render() {
    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // }
    return (
      <div className={style.testimonials__slider__container}>
        <Carousel
          autoplay={this.props.playing}
          wrapAround={true}
          slidesToShow={this.state.toShow}
          withoutControls={true}
          pauseOnHover={true}
          slideIndex={this.state.slideIndex}
          transitionMode={'scroll'}
          speed={3000}
          easing={'easeSinInOut'}
        >
          {this.state.testimonials.map((testimonial, index) => (
            <div
              className={style.testimonials__slider__container__slide}
              key={index}
            >
              <p className={style.description}>{testimonial.testimonial}</p>
              <div className={style.bottom}>
                <h4>{testimonial.name}</h4>
                <p className={style.position}>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default TestimonialsSlider
