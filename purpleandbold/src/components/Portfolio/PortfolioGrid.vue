<template>
  <div class="portfolio__grid" v-if="isMounted">
    <transition-group name="grid" tag="div" class="portfolio__grid__container">
      <template v-for="(piece,index) in filteredPortfolioPieces">
      <div :key="index" 
           :class="[`item portfolio__grid__container__item`, piece.type.toLowerCase(), visibleClass]"
           :ref="`portfolio-grid-item`" 
           @click="itemSelected(index)"
           @mouseenter="showNameOverlay(index)"
           @mouseleave="hideNameOverlay(index)">
        <img :src="piece.mainImg.src" :alt="piece.mainImg.alt">
        <div class="portfolio__grid__container__item__name" ref="piecenameoverlay">
          <h4>{{ piece.name }}</h4>
        </div>
        <!-- <p>{{ piece.description.substr(0, 99)  }}</p> -->
      </div>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["portfolioPieces", "tagArray"],
  data() {
    return {
      isMounted: false,
      categoryArray: [],
      selectedCategories: [],
      isVisible: false,
      visibleClass: ""
    };
  },
  methods: {
    loadPanels() {
      const itemArray = [...this.$refs["portfolio-grid-item"]];
      let index = 0;
      //removed an i parameter from this for each function on itemArray
      itemArray.forEach(function() {
        const el = itemArray[index];
        setTimeout(() => {
          el.classList.add("is-visible");
        }, index * 100);
        index++;
      });
    },
    itemSelected(index) {
      eventBus.openModal(index);
      eventBus.selected(true);
    },
    showNameOverlay(i) {
      const overlay = this.$refs.piecenameoverlay[i];
      overlay.classList.add("overlay-shown");
    },
    hideNameOverlay(i) {
      const overlay = this.$refs.piecenameoverlay[i];
      overlay.classList.remove("overlay-shown");
    }
  },
  computed: {
    //provides the grid with the list of items to display
    filteredPortfolioPieces() {
      //checks to see if nothing is selected (selectedCategories array is empty)
      if (this.selectedCategories.length === 0) {
        //if nothing is selected, it shows the entire array unfiltered
        return this.portfolioPieces;
      } else {
        //if there are selections, it filters the array for each category inside of the
        //selectedCategories array and checks it against the piece.type of the portfolio piece
        this.visibleClass = "is-visible";
        return this.portfolioPieces.filter(piece =>
          this.selectedCategories.includes(piece.type.toLowerCase())
        );
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.loadPanels);
    //populating selectedCategory array
    eventBus.$on("categoryWasChanged", category => {
      //checks to see if selectedCategories array includes selection (tag button)
      if (this.selectedCategories.includes(category)) {
        //if the array already includes the category (it's selected) then it
        //filters over the array to remove that category
        return (this.selectedCategories = this.selectedCategories.filter(
          item => item != category
        ));
      } else {
        //if the array doesn't already include that category selection, it
        //adds that category to the array
        setTimeout(() => {
          this.selectedCategories.push(category);
        }, 268.75);
      }
    });
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.portfolio__grid
  margin-top: 20px
  &__container
    display: grid 
    grid-gap: 20px
    grid-template-columns: repeat(auto-fill, minmax(254px,1fr))
    grid-auto-rows: 43px
    @include edgesnap 
      width: 100%
      padding: 0px 20px
    &__item 
      display: flex
      position: relative
      flex-direction: column 
      align-items: center
      justify-content: center 
      overflow: hidden
      transition: all 1s
      margin-right: 10px
      cursor: pointer
      opacity: 0
      box-shadow: 0px 0px 10px 1px rgba(218,218,218,1);
      border-radius: 4px
      width: 258px
      @include edgesnap
        width: auto
      @include phone-large 
        margin-right: 0px
      img
        width: 100%
      .overlay-shown 
        transform: translateY(0)
      &__name 
        display: flex 
        align-items: center
        position: absolute
        bottom: 0
        transform: translateY(100%)
        align-self: flex-start 
        width: 100%
        height: 40px
        background: rgba(240,240,240,.7)
        transition: all 0.4s ease
        @include tablet-portrait 
          transform: translateY(0)
        h4 
          font-size: 0.925rem
          font-family: $mainfont
          font-weight: 300
          margin-left: 10px
      &.is-visible 
        display: flex
        opacity: 1
        flex-direction: column
      &.website 
        grid-row-end: span 6
      &.logo
        grid-row-end: span 3
      &.graphic 
        grid-row-end: span 3
      &.branding
        grid-row-end: span 4

.grid-enter, 
  opacity: 1
  transform: translateY(300px)

.grid-leave-to
  opacity: 0

.grid-leave-active 
  opacity: 0
  transform: translateX(-1800px) scale(0.3)


</style>