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
              name: 'Custom Web Development',
              //   desc:
              //     'Custom made websites. No templates, no themes, nothing is “out of the box.”  A lot of  people say that, but we mean it.  Also, we realize most clients may not understand why custom websites are important, so let us explain. Your brand and business should dictate the design and functionality of  your website, not constraints set by a theme or template. Nothing should impede on good  design and functionality, which is why (unless otherwise requested) all our websites are coded by hand, from a blank page all the way to a completed website. If you, like many people, need or prefer to work within a CMS like Wordpress or Shopify, no problem at all, we can build you a fully custom theme for any CMS that fits your business’ needs while still maintaining 100% of the custom design.',
              // },
              desc: `Custom made websites, from landing pages all the way to robust websites featuring advanced business logic. All custom web development products are created using modern technologies paired with best practices. To our clients, this means their website is as fast as it can be, perfectly set up for SEO, with design and functionality specifically tailored to your business allowing for increased conversions, sales, and lead generation, while working flawlessly across all devices. All custom web development products are still easily maintainable and updateable.`,
            },
            {
              name: 'Wordpress',
              //   desc:
              //     'Already have a great  Wordpress website or  Wordpress blog that works for you but need some new functionality? Or maybe it’s not so great and needs some attention? We are experts  at working within the Wordpress ecosystem and can make any and all edits or repairs necessary to your  Wordpress website.',
              // },
              desc:
                'We are experts at working within the Wordpress ecosystem. If you already have a Wordpress website or if Wordpress is the best fit for your business, we are fully capable of handling all your needs.',
            },
            {
              name: 'Web Applications',
              desc:
                'Need something more complex? We are ready to help you build your business’ application from the ground up and recommend the best available modern technologies to build it upon.  We will help you go from idea to prototype or fully functional application depending on your goals, and discuss each option with you so you can make an informed decision.',
            },

            {
              name: 'Hosting',
              // desc:
              //   'If you want to handle hosting yourself, no problem at all,  you can do whatever you want with your website when we are done with it, you own it. However, some people prefer not to host or manage their website themselves. We offer fast hosting with guaranteed 99.99% uptime and all hosting plans come with monthly reviews of your website, meaning, we fix or update anything that needs attention, for no additional cost.',
              desc: `If you choose to handle hosting yourself, that's no problem at all, however, some client's prefer this be handled for them. We offer extremely fast hosting with guaranteed 99.99% uptime. All hosting plans come with monthly reviews of your website, meaning, we fix or update anything that needs attention, for no additional cost.`,
            },
          ],
        },
        {
          serviceName: 'Creative',
          serviceList: [
            {
              name: 'Web Design',
              // desc:
              //   'Fully custom website design, from a blank white page, to a full website tailored specifically to your business’ brand and goals. All our websites include what other company’s consider “extra features.” We don’t charge by the page, we don’t charge extra to put a map on your website, and we don’t sell packages. The website design needs of a business is always different, and there should be no tiered constraints and rules. We know that small details and spending extra time on the small stuff really adds up to create a beautiful experience, and we treat each website design as an exercise in  beautifully blending form and function.',
              desc: `All of our custom web development products come with complete and fully custom website design. We create a design that accomplishes the specfic goals of your business and brand. The website design needs of businesses are always different, and by creating fully custom designs we are no longer held back by needless constraints and rules set by pre-built themes. Instead, we are able to create the visual message your business needs to send from Step 0. We know the details and extra time spent on designing this experience directly effects the success of our clients, and we take the time to get it right.,`,
            },
            {
              name: 'Graphic Design',
              desc:
                'All modern businesses need graphic design, and need it frequently. Brochures, fliers, billboards, newsletters, business cards, stickers, we do it all. We aim to be your partner when you need anything designed and produced, digital or printed, presenting you with options, iterating quickly, and offering a fast turnaround.',
            },
            // {
            //   name: 'Illustration',
            //   desc:
            //     'We are teamed with experts leveraging years of experience in various styles of illustration, from flat and modern to photo realistic.  Any digital art you need, you can get from us.',
            // },
            {
              name: 'Motion Graphics',
              desc:
                'When things move, they get people’s attention.  Motion graphics are very popular and instantly capture attention, you’ve probably noticed a lot of businesses have a moving and transforming logo or illustrated animation that creates intrigue, draws you closer to their content, and introduces you to their brand, we can create these for you.',
            },
          ],
        },
        {
          serviceName: 'Branding',
          serviceList: [
            {
              name: 'Logo Design',
              //   desc:
              //     'Giving your businessthe gift of a great logo is usually the best thing you can do for its success.  However, it’s not enough to just have a logo look great on a screen. Think bigger,  your logo needs to look great on a screen, a sticker, a t-shirt, a hat, a billboard,  an envelope, etc., you get the idea. There is a lot to think about when it comes to logos, and we love thinking about them.',
              // },
              desc: `We create logos that work hard for your business. Logos are arguably the most important aspect of any new business, and can be a large contributing factor to the success or failure of an existing business. Your logo needs to convey the identity of your brand in a matter of seconds and must be memorable and recognizable. Furthermore, we like to think big. Your logo shouldn't just look great on a screen, it needs to look amazing on a billboard, t-shirt, sticker, hat, letter, and everything in between.`,
            },
            {
              name: 'Business Essentials',
              desc:
                'All business need some basic materials that just work, like business cards and letterhead. We are here to help make sure these essential items are the best they can be, and create a cohesive respresentation of your business and brand.',
            },
            {
              name: 'Product Design',
              desc: `In some scenarios, a client's brand needs to extend into useable products, and we think that these should be treated with the same attention to detail your website or business card is given. We don't just want to slap your logo on a napkin, or order 10,000 pens with your logo crookedly slapped on the side that barely even write. These are representations of your brand and business, and shouldn't be taken lightly. Instead, we want our clients to give their customers branded prodcuts that actually work and are a pleasure to use, ones that reflect the quality of our client's business.`,
            },
          ],
        },
        {
          serviceName: 'Marketing',
          serviceList: [
            {
              name: 'SEO',
              desc: `All of our websites come equipped with modern best practices for on-page SEO, setting you up for success and making sure search engines don’t skip over you. For clients seeking additional SEO services, we focus on driving traffic through captivating content. Great content creates strong SEO, and we feel the best content comes from a collaborative process with our clients. We offer a consulting service throughout the process, taking what you give us and turning it into contetnt that drives traffic to your website and converts.`,
            },
            {
              name: 'Social Media Creation',
              desc: `Modern businesses need social media accounts, we create the neccessary assets to ensure that these profiles reflect your business and brand accurately. We will generate banners and images, and where applicable will set up automated posts and actions derived from your website. Don't be the business that has the wrong hours listed on their Google My Business, or the one that has an old phone number on their Facebook. We will make sure this is all set up for you perfectly.`,
            },
            {
              name: 'Email Marketing',
              desc:
                'Start collecting a list of emails and build a network, or if you already have one, put it to work. If it makes sense for your business, we will design your website with an emphasis on capturing emails. If you already have an email list, we will create beutiful custom emails that reflect your brand, look great across all devices, and help drive leads and interest in your business. After each email marketing campaign, we will equip you with analytics showing how the campaign performed, and together we will create a strategy for future campaigns.',
            },
            {
              name: 'Analytics',
              desc:
                'All our websites come with built in analytics. This means that you can check in on your website anytime and track important statistics, like page visits, how long people stay on your website,  and which pages they are visiting most. If you sign up for our hosting plan, we will automatically send you a monthly report so you can track your business’ success and together we can figure out what is working, and what may need to be adjusted, and then take action.',
            },
          ],
        },
      ],
      hexColor: '#7CBDF1',
      rgbColor: 'rgb(124, 189, 241)',
    }
    this.getCreativeColor = this.getCreativeColor.bind(this)
  }
  //passes the correct component to the service block "image"
  buildImageComponentURL(name) {
    if (name === 'Websites') {
      return <WebsitesImage />
    } else if (name === 'Creative') {
      return <CreativeImage getColorFunction={this.getCreativeColor} />
    } else if (name === 'Branding') {
      return (
        <BrandingImage
          rightSwatchBackground={this.state.hexColor}
          rightRgb={this.state.rgbColor}
        />
      )
    } else if (name === 'Marketing') {
      return <MarketingImage />
    }
  }
  // gets clicked color HEX value from creative image, passes down to branding image
  // to change color of the card
  getCreativeColor(hex, rgb) {
    this.setState({
      hexColor: hex.toString(),
      rgbColor: rgb.toString(),
    })
  }
  render() {
    return (
      <section className="services" id="services">
        <Content>
          <div className="services__container">
            <h2 className="section-header">Services</h2>
            {this.state.services.map(s => (
              <ServiceBlock
                name={s.serviceName}
                key={s.serviceName}
                servicesList={s.serviceList}
                hexColor={this.state.hexColor}
              >
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
