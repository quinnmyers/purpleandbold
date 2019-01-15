import React, { Component } from 'react';
import PortfolioGrid from "./PortfolioGrid"
import PortfolioItemModal from "./PortfolioItemModal"
import PortfolioNav from "./PortfolioNav"
import dimaMain from "../../images/portfolio/dd/dimaduchet_main.jpg"
import dimaLogo from "../../images/portfolio/dd/dima_logo.svg"
import dima2 from "../../images/portfolio/dd/dimaduchet_2.jpg"
import dima3 from "../../images/portfolio/dd/dimaduchet_3.jpg"

import ntgMain from "../../images/portfolio/ntg/ntg_main.svg"
import ntg1 from "../../images/portfolio/ntg/ntg_1.svg"
import style from "./portfolio.module.sass"
import Content from '../utility/Content/Content'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            pieceIndex: 0,
            tagArray: [
                {
                    name: "website"
                },
                {
                    name: "logo"
                },
                {
                    name: "branding"
                },
                {
                    name: "graphic"
                }
            ],
            portfolioPieces: [
                {
                    id: 0,
                    name: "Dima Duchet Portfolio Website",
                    type: "Website",
                    services: ["web design", "web development"],
                    siteLink: "dimaduchet.com",
                    mainImg: {
                        src: dimaMain,
                        alt: "Dima Duchet Artist Portfolio Landing Page"
                    },
                    altImages: [
                        {
                            src: dimaMain,
                            alt: "Dima Duchet Artist Portfolio Landing Page"
                        },
                        {
                            src: dimaLogo,
                            alt:
                                "Logo made for Dima Duchet showing two D letters with red underlines"
                        },
                        {
                            src: dima2,
                            alt: "Screenshot of website showing art section"
                        },
                        {
                            src: dima3,
                            alt:
                                "Screenshot of website showing about section, cv, and contact"
                        }
                    ],
                    description:
                        "Dima Duchet was in need of a portfolio website to showcase her artwork. We made a beautiful, fast, and responsive website for her that made sure not to detract from her artwork, since that of course had to be the main attraction. We also made sure it was easy and seemless for her to upgrade the website herself as she adds more work to it in the future."
                },
                {
                    id: 1,
                    name: "Nexus Technology Group Logo",
                    type: "Logo",
                    services: ["logo design"],
                    siteLink: "",
                    mainImg: {
                        src: ntgMain,
                        alt: "Nexus Technology Group Full Logo"
                    },
                    altImages: [
                        {
                            src: ntgMain,
                            alt: "Nexus Technology Group Full Logo"
                        },
                        {
                            src: ntg1,
                            alt: "Nexus Technology Group Smaller Logo"
                        },
                        {
                            src: "https://via.placeholder.com/300x300",
                            alt: "lorem ipsum"
                        },
                        {
                            src: "https://via.placeholder.com/400x400",
                            alt: "lorem ipsum"
                        }
                    ],
                    description:
                        "Nexus Technology Group is a company specializing in filtration technology for the food and beverage industry. Nexus Technology Group is a clean and environmentally aware company utlizing only organic filtration compounds. Our was with their logo was to create a clean, contemporary, and organic feel."
                }
            ]
        }
    }
    selectedPiece(index) {
        return `potfolioPieces[index]`;
    }
    render() {
        return (

            <div className={style.portfolio} v-if="isMounted" id="portfolio">
                <Content>
                    <h2 className={style.section__header}>Portfolio</h2>
                    <div>
                        {this.state.portfolioPieces.map((peice, index) => (
                            <div key={peice.id}>
                                <img src={peice.mainImg.src} alt={peice.mainImg.alt} width="75" height="75" />
                            </div>
                        ))}
                    </div>
                    <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                        <Header icon='archive' content='Archive Old Messages' />
                        <Modal.Content>
                            <p>
                                Your inbox is getting full, would you like us to enable automatic archiving of old messages?
      </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='red' inverted>
                                <Icon name='remove' /> No
      </Button>
                            <Button color='green' inverted>
                                <Icon name='checkmark' /> Yes
      </Button>
                        </Modal.Actions>
                    </Modal>
                </Content>
            </div>



        );
    }
}

export default Portfolio;