<template>
    <div class="wrapper"> 
      <ul>
        <li
        :class="[aboutImage, panelLoaded]"
        v-for="(heroImg, index) in heroImages"
        :style="styleAboutListItem(index)"
        :key='index'
        >
          <img v-in-viewport :src="getImgSrc(index + 1)" :class="`about__panel__image__${index + 1}`" :ref="index" alt="Vector illustration of of a square" :style="stylePanel(index)">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      heroImages: [
        {
          src: "./src/assets/images/hero-iso/iso-1.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-2.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-3.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-4.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-5.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-6.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-7.svg"
        },
        {
          src: "./src/assets/images/hero-iso/iso-8.svg"
        }
      ],
      panelArray: [],
      display: "none",
      panelLoaded: "",
      loadIn: "",
      aboutImage: ""
    };
  },
  methods: {
    //returns a string that fills in the :src binding of each img src
    getImgSrc(index) {
      return require("../../assets/images/hero-iso/iso-" + index + ".svg");
    },
    //sets the starting style of the IMG tags of each list item
    //LI are styled in function below which is the after-load animations
    //animations in CSS only serve to reset to 0 at this point
    //these set the starting position of the IMG/LI for the load-in animations
    //removed index as a paramter from this function
    stylePanel() {
      //translateX
      const minTranslateX = 100;
      const maxTranslateX = 800;
      let translateX = this.getRandomNumber(minTranslateX, maxTranslateX);
      if (Math.random() > 0.5) {
        translateX = translateX * -1;
      }
      //translateY
      //multiplied by 0.57 to ensure the deg movement is 30 degree the same angle used in isometric illustrations
      const translateY = translateX * 0.57;
      //scale
      const scale = Math.random();
      return {
        transform: `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) rotateY(180deg)`
        //may want to add in rotation to styling
        //
      };
    },
    //this styles the starting point of the styling for the LI tags
    //animation being styled is the "after-load" animation on the LI
    //removed index from this parameter
    styleAboutListItem() {
      // const minScale = 0.97;
      // const maxScale = 1.03;
      //const scale = this.getRandomNumber(minScale, maxScale);
      const minHeightOffset = 2;
      const maxHeightOffset = 9;
      let heightOffset = this.getRandomNumber(minHeightOffset, maxHeightOffset);
      if (Math.random() > 0.5) {
        heightOffset = heightOffset * -1;
      }
      return {
        marginTop: `${heightOffset}px`
      };
    },

    //constrols starts of animation and timeout of others if added
    panelAnimations() {
      this.loadIn = "load__in";
      this.aboutImage = "about__image";
      this.panelLoaded = "panel__loaded";
    },

    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },

    selectListItem() {
      let id = 0;
      const limit = this.heroImages.length;
      while (id < limit) {
        const el = this.$refs[id];
        id++;
        this.panelArray.push(el);
      }
    }
  },
  mounted() {
    this.selectListItem();
    this.panelAnimations();
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'


//IMPORTANT 
  //in order to reorder these images later or recolor them, if you set the display of the UL/LI
  //to make all panel images show  in a line on top of each other the order is correct, 1 is 1, 2 is 2, etc.
.wrapper 
  transform: scale(0.8)
  @include edgesnap
    transform: scale(0.8)
  @include tablet-portrait
    transform: scale(0.6)
  @include phone-small 
    transform: scale(0.55)
  ul 
    display: flex
    align-items: center
    justify-content: center
    margin-right: 170px
    height: 100% 
    list-style: none
    @include phone-small
      margin-top: -40px
    li.panel__loaded 
      animation: after-panels-loaded 3s infinite
      //make sure this timeout is exactly the same as the IMG tag load-in animation timing
      //I think it looks best at exactly the same timing (delay) or 0.1 under.
      animation-delay: 1.9s
    li
      //remove this for reordering, or recoloring
      position: absolute
      @include phone-large
      img 
      //-------------------------------------------------------------------was .load__in
      .in-viewport
        animation: panel-load-in 2s forwards
        position: relative
        opacity: 0
    .about__panel__image
      img
      &__1.loaded 
        display: none
      &__1
        //large top right peach
        margin-left: 250px
        margin-bottom: 100px
      &__2
        // pinkish on top of larger black middle bottom
        z-index: 2
        margin-top: 120px
        margin-right: 10px
      &__3
        //smaller black one
        z-index: 1
        margin-right: 210px
        margin-bottom: 130px
      &__4
        //black below top right peach middle
        z-index: 1
        margin-left: 90px
        margin-top: 50px
      &__5
        // top left purple
        z-index: -1
        margin-left: 50px
        margin-bottom: 200px
      &__6
        //lower right purple
        margin-left: 390px
        margin-top: 330px
      &__7
        //small narrow pinkish top left
        margin-right: 150px
        margin-bottom: 190px
      &__8
        // display: none
        margin-right: 300px
        margin-bottom: 100px
        z-index: 1
      
    
@keyframes panel-load-in
  20% 
    opacity: 0
  100%
    opacity: 1
    transform: scale(1) translateX(0px) translateY(0px)


@keyframes after-panels-loaded
  50%
    margin-top: 0px
    transform: scale(1)

</style>