import React, { Component } from 'react'
import PortfolioNav from './PortfolioNav'
import dimaMain from '../../images/portfolio/dd/dimaduchet_main.jpg'
import dimaLogo from '../../images/portfolio/dd/dima_logo.svg'
import dima2 from '../../images/portfolio/dd/dimaduchet_2.jpg'
import dima3 from '../../images/portfolio/dd/dimaduchet_3.jpg'

import ntgMain from '../../images/portfolio/ntg/ntg_main.svg'
import ntg1 from '../../images/portfolio/ntg/ntg_1.svg'
import Content from '../utility/Content/Content'
import PhotoArray from './photoArray'
import Modal from 'react-modal'
import './portfolio.sass'

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
          name: 'Website',
        },
        {
          name: 'Logo',
        },
        {
          name: 'Branding',
        },
        {
          name: 'Graphic',
        },
      ],
      showing: [],
      portfolioPieces: [
        {
          id: 0,
          name: 'Dima Duchet Portfolio Website',
          type: 'Website',
          services: ['web design', 'web development'],
          siteLink: 'dimaduchet.com',
          mainImg: {
            src: dimaMain,
            alt: 'Dima Duchet Artist Portfolio Landing Page',
          },
          altImages: [
            {
              src: dimaMain,
              alt: 'Dima Duchet Artist Portfolio Landing Page',
            },
            {
              src: dimaLogo,
              alt:
                'Logo made for Dima Duchet showing two D letters with red underlines',
            },
            {
              src: dima2,
              alt: 'Screenshot of website showing art section',
            },
            {
              src: dima3,
              alt:
                'Screenshot of website showing about section, cv, and contact',
            },
          ],
          description:
            'Dima Duchet was in need of a portfolio website to showcase her artwork. We made a beautiful, fast, and responsive website for her that made sure not to detract from her artwork, since that of course had to be the main attraction. We also made sure it was easy and seemless for her to upgrade the website herself as she adds more work to it in the future.',
        },
        {
          id: 1,
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
              src: ntgMain,
              alt: 'Nexus Technology Group Full Logo',
            },
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
        if (element.type === tagel) {
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
  render() {
    return (
      <section className="portfolio">
        <div id="portfolio">
          <Content>
            <div className={style.portfolio}>
              <h2 className={style.section__header}>Portfolio</h2>
              <PortfolioNav filter={this.filter} list={this.state.tagArray} />
              <div className="portfolio__grid">
                <div className="portfolio__grid__container">
                  {this.state.showing.map((p, index) => (
                    <div
                      key={p.id}
                      className={`item portfolio__grid__container__item ${p.type.toLowerCase()} is-visible`}
                      onClick={() => this.openModal(index)}
                    >
                      <img src={p.mainImg.src} alt={p.mainImg.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Content>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            className={style.modal}
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

                <a href={this.state.inModal.siteLink}>
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
