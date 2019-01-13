<template>
  <div class="testimonials__slider__container" v-if="isMounted">
    <tiny-slider class="tiny__slider" ref="slider"  :mouse-drag="true" :autoplay="true" :autoplay-hover-pause="true" :slideBy='1' :speed="1000" :controls="false" :useLocalStorage="false" :autoplayText="['play', 'play']" :loop="true" :autoplayTimeout="2400" :items="slidesInView"  :gutter="50">
 <div class="testimonials__slider__container__slide"
      v-for="(testimonial, index) in testimonials"
      :key="index"
      ref="testimonialslide">
        <p class="description">{{ testimonial.testimonial }}</p>
        <div class="bottom">
          <h4>{{ testimonial.name }}</h4>
          <p class="position">{{ testimonial.position }}</p>
        </div>
      </div>
    </tiny-slider>
  </div>
</template>

<script>
import VueTinySlider from "vue-tiny-slider";

export default {
  components: {
    tinySlider: VueTinySlider
  },
  props: ["isPaused", "buttonClicked"],
  data() {
    return {
      isMounted: false,
      slidesInView: 3,
      sliderButton: "",
      testimonials: [
        {
          id: 1,
          name: "Dima Duchet",
          position: "Artist, Art Lead",
          testimonial:
            "Purple and Bold has worked on my personal art website, which means that I had to deliver many visual assets. Quinn was patient with me, and had good solutions to any questions I had. I am so excited to finally have a website of my own that is linked to all my other profiles and will serve as a good place to start my business."
        },
        {
          id: 2,
          name: "Robert Riordan",
          position: "Actor, Singer",
          testimonial:
            "Purple and Bold takes the picture in your head and brings it to life. They knows how to simplify tastefully and create solid options quickly. They are a real gem to work with too, and communicate very well."
        },
        {
          id: 3,
          name: "Jared Bonnell",
          position: "Broker/Owner, One Commercial",
          testimonial:
            "Purple and Bold has made me the exact website I want that has really helped me get in front of maybe buyers and sellers. I am proud to hand people the business card the designed for me and even prouder when people complement my website."
        },
        {
          id: 4,
          name: "Jim Jackson",
          position: "Broker/Owner, Bluhare Studios",
          testimonial:
            "Purple and Bold did a great job on our company website. They were attentive to our needs and delivered the exact product we were looking for in a timely manner."
        }
      ]
    };
  },
  methods: {
    handlePausePlay() {
      let el = document.querySelectorAll('[data-action="stop"]');
      el = el[0];
      this.sliderButton = el;
      if (this.buttonClicked === "play") {
        let el = document.querySelectorAll('[data-action="start"]');
        el = el[0];
        this.sliderButton = el;
        this.sliderButton.click();
      } else if (this.buttonClicked === "pause") {
        this.sliderButton.click();
      }
    },
    hideButton() {
      let el = document.querySelectorAll('[data-action="stop"]');
      el = el[0];
      el.style.display = "none";
    }
  },
  mounted() {
    console.log("hey");

    this.isMounted = true;
    if (window.matchMedia("(max-width: 650px)").matches) {
      this.slidesInView = 1;
    } else if (window.matchMedia("(max-width: 900px)").matches) {
      this.slidesInView = 2;
    }
    this.$nextTick(this.hideButton);
  },
  watch: {
    buttonClicked: function() {
      this.handlePausePlay();
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'
@import './tnsCss.sass'
.tns-inner
   overflow: hidden
.testimonials__slider__container 
  position: relative
  height: auto
  width: 75% 
  font-family: $subfont
  z-index: 1
  @include testimonial-snap 
    width: 65%
  @include tablet-phone 
    width: 60%
  @include phone-large 
    width: 75%
  
  &__slide 
    display: flex
    height: 300px 
    width: 260px 
    padding: 0px 15px
    flex-direction: column
    border-left: 1px solid black
    @include edgesnap 
      width: 33%
    @include testimonial-snap 
      width: 26%
    @include phone-large 
      width: 90%
      margin-top: 15px
    .bottom
      position: absolute 
      bottom: 0
    .description 
      font-size: 0.95em
      line-height: 1.3em
      @include edgesnap 
        font-size: 0.9em
    
    h4 
      color: black
      font-size: 1.1em
      @include edgesnap 
        font-size: 1em
    .position 
      font-size: .75em 
      color: grey
  
@keyframes moving-forward 
  0% 
    transform: translateX(0)
  100%
    transform: translateX(-900px)
 

</style>