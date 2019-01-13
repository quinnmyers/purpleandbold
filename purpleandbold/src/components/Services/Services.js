import React, { Component } from 'react'

//components
import Content from '../utility/Content/Content'
import ServiceBlock from './ServiceBlock'
import WebsitesImage from './ServiceImages/WebsitesImage'
import CreativeImage from './ServiceImages/CreativeImage'
import BrandingImage from './ServiceImages/BrandingImage'
import MarketingImage from './ServiceImages/MarketingImage'

//styles
import './services.sass'

class Services extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services: [
        {
          serviceName: 'Websites',
          serviceList: [
            {
              name: 'Websites 1',
              desc: 'WEB SERVICE 1',
            },
            {
              name: 'Websites 2',
              desc: 'WEB SERVICE 2',
            },
            {
              name: 'Websites 3',
              desc: 'WEB SERVICE 3',
            },
            {
              name: 'Websites 4',
              desc: 'WEB SERVICE 4',
            },
          ],
        },
        {
          serviceName: 'Creative',
          serviceList: [
            {
              name: 'Creative 1',
              desc: 'Creative SERVICE 1',
            },
            {
              name: 'Creative 2',
              desc: 'Creative SERVICE 2',
            },
            {
              name: 'Creative 3',
              desc: 'Creative SERVICE 3',
            },
            {
              name: 'Creative 4',
              desc: 'Creative SERVICE 4',
            },
          ],
        },
        {
          serviceName: 'Branding',
          serviceList: [
            {
              name: 'Branding 1',
              desc: 'BRANDING SERVICE 1',
            },
            {
              name: 'Branding 2',
              desc: 'BRANDING SERVICE 2',
            },
            {
              name: 'Branding 3',
              desc: 'BRANDING SERVICE 3',
            },
            {
              name: 'Branding 4',
              desc: 'BRANDING SERVICE 4',
            },
          ],
        },
        {
          serviceName: 'Marketing',
          serviceList: [
            {
              name: 'Marketing 1',
              desc: 'MARKETING SERVICE 1',
            },
            {
              name: 'Marketing 2',
              desc: 'MARKETING SERVICE 2',
            },
            {
              name: 'Marketing 3',
              desc: 'MARKETING SERVICE 3',
            },
            {
              name: 'Marketing 4',
              desc: 'MARKETING SERVICE 4',
            },
          ],
        },
      ],
    }
  }
  buildImageComponentURL(name) {
    if (name === 'Websites') {
      return <WebsitesImage />
    } else if (name === 'Creative') {
      return <CreativeImage getColorFunction={this.getColor} />
    } else if (name === 'Branding') {
      return <BrandingImage />
    } else if (name === 'Marketing') {
      return <MarketingImage />
    }
  }
  getColor(hex) {
    console.log(hex)
  }
  render() {
    return (
      <section className="services">
        <Content>
          <div className="test-div">
            <h2>Services</h2>
            {this.state.services.map(s => (
              <ServiceBlock name={s.serviceName} key={s.serviceName}>
                {this.buildImageComponentURL(s.serviceName)}
              </ServiceBlock>
            ))}
          </div>
        </Content>
      </section>
    )
  }
}

export default Services
