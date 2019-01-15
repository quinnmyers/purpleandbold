<template>
  <div class="portfolio" v-if="isMounted" id="portfolio">
    <div class="portfolio__content">
      <h2 class="section--header">Portfolio</h2>
      <div class="portfolio__content__container">
        <div class="portfolio__content__container__navigation">
          <div class="portfolio__content__container__navigation__tags">
            <app-portfolio-nav
              :tagArray="tagArray">
            </app-portfolio-nav>
            <!-- <div class="coming-soon-cta">
              <h3>Coming Soon! (seriously)</h3>
            </div> -->
          </div>
          <div class="portfolio__content__container__navigation__search">
          </div>
        </div>
        <app-portfolio-grid
          :portfolioPieces='portfolioPieces'
          :tagArray="tagArray">
        </app-portfolio-grid>
      </div>
    </div>
    <app-portfolio-item-modal
          :portfolioPiece="portfolioPieces[pieceIndex]"
          :imageArray='portfolioPieces[pieceIndex].altImages'
          >

    </app-portfolio-item-modal>
  </div>
</template>

<script>
import PortfolioNav from "./PortfolioNav.vue";
import PortfolioGrid from "./PortfolioGrid.vue";
import PortfolioItemModal from "./PortfolioItemModal.vue";
import { eventBus } from "../../main";

export default {
  components: {
    appPortfolioNav: PortfolioNav,
    appPortfolioGrid: PortfolioGrid,
    appPortfolioItemModal: PortfolioItemModal
  },
  data() {
    return {
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
            src: require("../../assets/images/portfolio/dd/dimaduchet_main.jpg"),
            alt: "Dima Duchet Artist Portfolio Landing Page"
          },
          altImages: [
            {
              src: require("../../assets/images/portfolio/dd/dimaduchet_main.jpg"),
              alt: "Dima Duchet Artist Portfolio Landing Page"
            },
            {
              src: require("../../assets/images/portfolio/dd/dima_logo.svg"),
              alt:
                "Logo made for Dima Duchet showing two D letters with red underlines"
            },
            {
              src: require("../../assets/images/portfolio/dd/dimaduchet_2.jpg"),
              alt: "Screenshot of website showing art section"
            },
            {
              src: require("../../assets/images/portfolio/dd/dimaduchet_3.jpg"),
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
            src: require("../../assets/images/portfolio/ntg/ntg_main.svg"),
            alt: "Nexus Technology Group Full Logo"
          },
          altImages: [
            {
              src: require("../../assets/images/portfolio/ntg/ntg_main.svg"),
              alt: "Nexus Technology Group Full Logo"
            },
            {
              src: require("../../assets/images/portfolio/ntg/ntg_1.svg"),
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
        // {
        //   id: 2,
        //   name: "Nexus Technology Group 2",
        //   type: "Graphic",
        //   services: ["33333", "333333", "third item"],
        //   siteLink: "",
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        // },
        // {
        //   id: 3,
        //   name: "Dima Duchet Artist Portfolio 3",
        //   type: "Website",
        //   services: ["website design", "web development", "logo design"],
        //   siteLink: "",
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        // },
        // {
        //   id: 4,
        //   name: "Nexus Technology Group",
        //   type: "Website",
        //   services: ["website design", "web development", "logo design"],
        //   siteLink: "",
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        // },
        // {
        //   id: 5,
        //   name: "Dima Duchet Artist Portfolio",
        //   type: "Website",
        //   services: ["website design", "web development", "logo design"],
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        // },
        // {
        //   id: 6,
        //   name: "Nexus Technology Group",
        //   type: "Branding",
        //   services: ["website design", "web development", "logo design"],
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        // },
        // {
        //   id: 7,
        //   name: "Dima Duchet Artist Portfolio",
        //   type: "Website",
        //   services: ["website design", "web development", "logo design"],
        //   mainImg: {
        //     src: "https://via.placeholder.com/231x329",
        //     alt: "sample alt text"
        //   },
        //   description:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! v v"
        // }
      ]
    };
  },
  methods: {
    //what's really going on here?
    selectedPiece(index) {
      return `potfolioPieces[index]`;
    }
  },
  mounted() {
    this.isMounted = true;
    eventBus.$on("itemSelected", index => {
      // this.selectedPiece(index);
      this.pieceIndex = index;
    });
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.portfolio
  display: flex
  justify-content: center
  margin-top: 30px
  margin-bottom: 50px
  &__content 
    display: flex 
    flex-direction: column
    width: 1100px
    @include edgesnap 
      width: 100%
    &__container 
      .coming-soon-cta 
        width: 100% 
        text-align: center
        margin-top: 50px
        margin-bottom: 300px
        h3
          font-family: $mainfont 
          font-weight: 300

</style>