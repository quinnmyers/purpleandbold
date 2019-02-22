import React, { Component } from 'react'

//components
import Content from '../utility/Content/Content'
import TextBlock from '../utility/TextBlock/TextBlock'
// import Button from '../utility/Button/Button'
import Spacer from '../utility/Spacer/Spacer'

//styles
import './testimonialsnew.sass'

class TestimonialsNew extends Component {
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
          name: 'Patricia York',
          position: 'Author',
          testimonial: `Purple and Bold gave me exactly what I imagined. Cole patiently walked me through the ins and outs of "websitery," helping me to navigate a heretofore unknown territory. Arranging my plays, books, and music into a cohesive and visually compelling format was no small feat, yet, he did it. Instead of being intimidated by cyberspace, I'm infatuated and enthralled!.`,
        },
        {
          id: 3,
          name: 'Jared Bonnell',
          position: 'Broker/Owner, One Commercial',
          testimonial:
            'Purple and Bold has made me a website that really helps me get in front of buyers and sellers. I am confident when I send people a link to my website or hand them a business card, knowing that my website functions perfectly and looks stunning.',
        },
        // {
        //   id: 4,
        //   name: 'Jim Jackson',
        //   position: 'CEO, Bluhare Studios',
        //   testimonial:
        //     'Purple and Bold did a great job on our company website. They were attentive to our needs and delivered the exact product we were looking for in a timely manner.',
        // },
      ],
    }
  }
  render() {
    return (
      <div>
        {/* <Spacer /> */}
        <div className="testimonialsnew">
          <Content>
            <div className="testimonialsnew__container">
              <TextBlock
                header={`See What People Are Saying About Us`}
                text={null}
              />
              <div className="testimonialsnew__container__grid">
                {this.state.testimonials.map(item => (
                  <div
                    className="testimonialsnew__container__grid__item"
                    key={item.id}
                  >
                    <p>{item.testimonial}</p>
                    <div className="testimonialsnew__container__grid__item__bottom">
                      <h5>{item.name}</h5>
                      <span>
                        <p>{item.position}</p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Content>
        </div>
        {/* <Spacer /> */}
      </div>
    )
  }
}

export default TestimonialsNew
