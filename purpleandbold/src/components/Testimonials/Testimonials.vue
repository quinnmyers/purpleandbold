<template>
  <section class="testimonials" v-if="isMounted">
    <div class="testimonials__content">
        <div class="testimonials__content__container">
          <h2 class="section--header">Testimonials</h2>
          <div class="testimonials__content__container__middle">
             <app-testimonials-slider 
              :isPaused="isPaused"
              :buttonClicked="buttonClicked">
            </app-testimonials-slider>
             <app-testimonials-controls
              @playSlider="playSlider" 
              @pauseSlider="pauseSlider"
              :isPaused="isPaused"></app-testimonials-controls>
          </div>
         
          <div class="testimonials__content__container__cta">
            <h3>Need help with your &nbsp;
              <ul>
                <li 
                :class="ctaSlideClass(index)"
                v-for="(ctaSlide, index) in testimonialCtaSlides" :key="index" ref="ctaSlide">
                  {{ ctaSlide }}?
                </li>
              </ul>
            </h3>
            <a href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50}">
            <button>Get A Free Quote</button>
            </a>
          </div>
        </div>
      </div>
  </section>
  
</template>

<script>
import TestimonialsSlider from "./TestimonialsSlider.vue";
import TestimonialsControls from "./TestimonialsControls.vue";

export default {
  components: {
    appTestimonialsSlider: TestimonialsSlider,
    appTestimonialsControls: TestimonialsControls
  },
  data() {
    return {
      isMounted: false,
      isPaused: false,
      buttonClicked: "",
      testimonialCtaSlides: ["website", "brand", "logo"]
    };
  },
  methods: {
    ctaSlideClass(index) {
      return `testimonial-cta-slide-${index}`;
    },
    styleCtaSlides() {
      const ctaSlideArray = [...this.$refs["ctaSlide"]];
      ctaSlideArray.forEach(slide => {
        slide.style.color = "black";
        slide.style.opacity = "0";
        slide.style.position = "absolute";
        slide.style.textDecoration = "underline";
        slide.style.fontStyle = "italic";
      });
    },
    pauseSlider() {
      this.buttonClicked = "pause";
      if (this.isPaused) {
        return;
      } else {
        this.isPaused = !this.isPaused;
      }
    },
    playSlider() {
      this.buttonClicked = "play";
      if (this.isPaused) {
        this.isPaused = !this.isPaused;
      } else {
        return;
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.styleCtaSlides);
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.testimonials 
  display: flex
  flex-direction: column
  height: 650px
  width: 100%
  background: $light-grey
  @include phone-large 
    height: auto
  &__content 
    display: flex
    flex-direction: column
    align-self: center
    width: 1100px
    height: 100%
    @include edgesnap 
      width: 100%
      padding: 0px 20px
    &__container
      display: flex
      flex-direction: column
      justify-content: center
      height: 100% 
      width: 100%
      h2 
        height: 40px
        widht: 100% 
        margin: 0px 0px
        margin-top: 30px 
        padding: 0px 0px
      &__middle
        display: flex
        justify-content: center 
        align-items: center 
        width: 100% 
        height: 55%
        margin: 40px 0px
        @include phone-large 
          flex-direction: column-reverse
          height: auto
      &__cta
        margin-bottom: 30px
        height: auto 
        width: 100%
        ul 
          list-style: none
          display: inline
          li
            display: inline
        h3 
          font-size: 1.85em
          font-weight: $light
          color: black
          @include phone-large 
            font-size: 1.55em 
          @media (max-width: 360px)
            font-size: 1.45em
          @include phone-small
            font-size: 1.35em
        a
          display: flex 
          flex-direction: column 
          justify-content: center
          align-items: center
          text-decoration: none
          color: rgb(240,129,148)
          height: 40px
          width: 140px
          border: .08em solid rgb(240,129,148)
          border-radius: 3px
          font-size: .8em
          letter-spacing: .05em
          font-weight: $light
          margin-top: 20px
          transition: all 0.25s ease-in-out
          &:hover 
            transform: scale(1.01)
            box-shadow: 0px 0px 10px 1px $accent;
          &:visited 
            color: rgb(240,129,148)
            text-decoration: none
          @include tablet-portrait
            font-size: .75em
            height: 30px 
            width: 135px
    
//each new item added to [testimonialCtaSlides] needs to be added here, with the new number on the end
//animation timing must be  [testimonialCtaSlides].length * 3
//animation display must be .testimonial-cta-slide-0 index * 3
.testimonial-cta-slide-0
  animation: fade 9s infinite linear
  animation-delay: 0s
.testimonial-cta-slide-1
  animation: fade 9s infinite linear
  animation-delay: 3s  
.testimonial-cta-slide-2
  animation: fade 9s infinite linear
  animation-delay: 6s

@keyframes fade 
  0% 
    opacity: 0
  10%
    opacity: 1
  15%
    opacity: 1
  20%
    opacity: 1
  25%
    opacity: 0
  30%
    opacity: 0
  35%
    opacity: 0
  40%
    opacity: 0
  45%
    opacity: 0
  50%
    opacity: 0
  55%
    opacity: 0
  60%
    opacity: 0
  65%
    opacity: 0
  70%
    opacity: 0
  75%
    opacity: 0
  80%
    opacity: 0
  85%
    opacity: 0
  90%
    opacity: 0
  95%
    opacity: 0
  100%
    opacity: 0
</style>