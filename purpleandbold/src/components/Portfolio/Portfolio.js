import React, { Component } from 'react'
import PortfolioNav from './PortfolioNav'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ReactGA from 'react-ga'
// smaller
import dimaMainSmall from '../../images/portfolio/dd/tinified/dimaduchet_main.png'
import dima2Small from '../../images/portfolio/dd/tinified/dimaduchet_2.png'
import dima3Small from '../../images/portfolio/dd/tinified/dimaduchet_3.png'

// import dimaMain from '../../images/portfolio/dd/dimaduchet_main.jpg'
import dimaLogo from '../../images/portfolio/dd/dima_logo.svg'
// import dima2 from '../../images/portfolio/dd/dimaduchet_2.jpg'
// import dima3 from '../../images/portfolio/dd/dimaduchet_3.jpg'

// import ntgMainpng from '../../images/portfolio/ntg/ntg_main.png'
// import ntg1png from '../../images/portfolio/ntg/ntg_1.png'

import ntgMain from '../../images/portfolio/ntg/ntg_main.svg'
import ntg1 from '../../images/portfolio/ntg/ntg_1.svg'
import Content from '../utility/Content/Content'
import Spacer from '../utility/Spacer/spacer'
import PhotoArray from './photoArray'
import Modal from 'react-modal'
import './portfolio.sass'

//one commercial
import oneCommHome from '../../images/portfolio/onecomm/one_comm_home.jpg'
import oneCommIndex from '../../images/portfolio/onecomm/one_comm_index.jpg'
import oneCommListing from '../../images/portfolio/onecomm/one__comm__listing.jpg'
import oneCommContact from '../../images/portfolio/onecomm/one_comm_contact.jpg'

import style from './portfolio.module.sass'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      isMounted: false,
      pieceIndex: 0,
      inModal: {
        name: '',
        type: '',
        sitelink: '',
        mainImg: {
          src: '',
          alt: '',
        },
        altImages: [],
        description: '',
      },
      tagArray: [
        {
          name: 'website',
        },
        {
          name: 'logo',
        },
        {
          name: 'branding',
        },
        {
          name: 'graphic',
        },
      ],
      showing: [],
      portfolioPieces: [
        {
          id: 0,
          name: 'One Commercial Website',
          type: 'Website',
          services: ['web development, web design'],
          siteLink: 'http://onecom.purpleandbold.net/',
          mainImg: {
            src: oneCommHome,
            alt: 'One Commercial Home Page',
          },
          altImages: [
            {
              src: oneCommIndex,
              alt: 'One Commercial Home Page',
            },
            {
              src: oneCommListing,
              alt: 'One Commercial Home Page',
            },
            {
              src: oneCommContact,
              alt: 'One Commercial Home Page',
            },
          ],
          description: `We made One Commercial a website that took control out of the hands of 3rd party companies and put them in control of the information they present to clients. One Commercial's website serves as a central location for all their listings, giving them a great resource to point potential clients to, with easy ways to get in contact about specific properties if they need more information. Also, we set the website up so it's very easy for One Commercial to share their listings on social media, with a beautiful and information rich experience ready for people when they click-through.`,
        },
        {
          id: 1,
          name: 'Dima Duchet Portfolio Website',
          type: 'Website',
          services: ['web design', 'web development'],
          siteLink: 'dimaduchet.com',
          mainImg: {
            src: dimaMainSmall,
            alt: 'Dima Duchet Artist Portfolio Landing Page',
          },
          altImages: [
            {
              src: dimaLogo,
              alt:
                'Logo made for Dima Duchet showing two D letters with red underlines',
            },
            {
              src: dima2Small,
              alt: 'Screenshot of website showing art section',
            },
            {
              src: dima3Small,
              alt:
                'Screenshot of website showing about section, cv, and contact',
            },
          ],
          description:
            'Dima Duchet was in need of a portfolio website to showcase her artwork. We made a beautiful, fast, and responsive website for her that made sure not to detract from her artwork, since that of course had to be the main attraction. We also made sure it was easy and seemless for her to upgrade the website herself as she adds more work to it in the future.',
        },
        {
          id: 2,
          name: 'Nexus Technology Group Logo',
          type: 'Logo',
          services: ['logo design'],
          siteLink: '',
          mainImg: {
            src: ntgMain,
            alt: 'Nexus Technology Group Full Logo',
          },
          altImages: [
            {
              src: ntg1,
              alt: 'Nexus Technology Group Smaller Logo',
            },
          ],
          description:
            'Nexus Technology Group is a company specializing in filtration technology for the food and beverage industry. Nexus Technology Group is a clean and environmentally aware company utlizing only organic filtration compounds. Our was with their logo was to create a clean, contemporary, and organic feel.',
        },
      ],
    }
    this.openModal = this.openModal.bind(this)
    this.filter = this.filter.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    this.setState({ showing: this.state.portfolioPieces })
  }
  openModal(i) {
    this.setState({ inModal: this.state.portfolioPieces[i] })
    this.setState({ modalIsOpen: true })
  }

  filter(tag) {
    let temparray = []
    this.state.portfolioPieces.forEach(element => {
      tag.forEach(tagel => {
        if (element.type.toLowerCase() === tagel.toLowerCase()) {
          temparray.push(element)
        } else {
          return
        }
      })
    })

    if (temparray.length === 0) {
      temparray = this.state.portfolioPieces
    }
    this.setState({ showing: temparray })
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }
  selectedPiece(index) {
    return `potfolioPieces[index]`
  }
  handlePortfolioItemClick(index) {
    this.openModal(index)
    this.logPortfolioEvent()
  }
  logPortfolioEvent() {
    ReactGA.event({
      category: 'Portfolio Click',
      action: 'User clicked portfolio item',
    })
  }
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div>
          <Content>
            <div className={style.portfolio}>
              <h2 className={style.section__header}>Portfolio</h2>
              <PortfolioNav filter={this.filter} list={this.state.tagArray} />

              <div className="portfolio__grid">
                <TransitionGroup className="portfolio__grid__container">
                  {this.state.showing.map((p, index) => (
                    <CSSTransition key={p.id} timeout={500} classNames="grid">
                      <div
                        className={`item portfolio__grid__container__item ${p.type.toLowerCase()} is-visible`}
                        onClick={this.handlePortfolioItemClick.bind(
                          this,
                          index
                        )}
                      >
                        <img src={p.mainImg.src} alt={p.mainImg.alt} />
                      </div>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
            </div>
          </Content>
          <Modal
            ariaHideApp={false}
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            className={style.modal}
            closeTimeoutMS={400}
          >
            <div className={style.body}>
              <div className={style.left}>
                <div className={style.left__main}>
                  <img
                    src={this.state.inModal.mainImg.src}
                    alt={this.state.inModal.mainImg.alt}
                  />
                </div>
                <div className={style.left__alt}>
                  <PhotoArray
                    imageArray={this.state.inModal.altImages}
                    altImage={this.state.inModal.mainImg}
                  />
                </div>
              </div>
              <div className={style.right}>
                <div className={style.right__top}>
                  <button
                    className={style.right__top__close}
                    onClick={this.closeModal}
                  />
                  <h4>{this.state.inModal.name}</h4>
                  <p className={style.right__top__type}>
                    {this.state.inModal.type.toLowerCase()}
                  </p>
                  <p className={style.right__top__desc}>
                    {this.state.inModal.description}
                  </p>
                </div>

                <a href={`//${this.state.inModal.siteLink}`} target="_blank">
                  <button>Visit Live Site</button>
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    )
  }
}

export default Portfolio
