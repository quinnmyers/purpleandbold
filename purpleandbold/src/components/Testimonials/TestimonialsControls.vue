<template>
<div class="testimonials__controls" v-if="isMounted">
    <div class="testimonials__controls__container">
      <div class="testimonials__controls__container__play">
        <button type="button"
                @click="playSlider"
                ref="playbutton">
                <template v-if="buttonSelected === 'play'">
                  <img :src="playButton.srcSelected" :alt="playButton.alt">
                </template>
                <template v-else>
                  <img :src="playButton.src" :alt="playButton.alt">
                </template>
        </button>
      </div>
      <div class="testimonials__controls__container__pause">
        <button type="button" 
                @click="pauseSlider"
                ref="pausebutton">
                <template v-if="buttonSelected === 'pause'">
                  <img :src="pauseButton.srcSelected" :alt="pauseButton.alt">
                </template>
                <template v-if="buttonSelected === 'play'">
                  <img :src="pauseButton.src" :alt="pauseButton.alt">
                </template>
        </button>
      </div>
      <!-- <div class="testimonials__controls__container__rewind"></div> -->
    </div> 
  </div>
</template>

<script>
export default {
  props: ["isPaused"],
  data() {
    return {
      isMounted: false,
      playButton: {
        src: require("../../assets/images/icons/play.svg"),
        srcSelected: require("../../assets/images/icons/play-selected.svg"),
        alt: "play symbol"
      },
      pauseButton: {
        src: require("../../assets/images/icons/pause.svg"),
        srcSelected: require("../../assets/images/icons/pause-selected.svg"),
        alt: "pause symbol"
      },
      buttonSelected: "play"
    };
  },
  methods: {
    pauseSlider() {
      this.$emit("pauseSlider");
    },
    playSlider() {
      this.$emit("playSlider");
    },
    playButtonImg() {
      return `../../assets/images/icons/play.svg`;
    }
  },
  watch: {
    isPaused: function() {
      if (this.isPaused) {
        this.buttonSelected = "pause";
      } else if (!this.isPaused) {
        this.buttonSelected = "play";
      }
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.testimonials__controls
  display: flex 
  position: relative
  height: 150% 
  width: 25%
  background: $blue-grey 
  z-index: 10 
  @include testimonial-snap 
    width: 35%
  @media (max-width: 710px)
    height: 120%
  @include tablet-phone 
    width: 40%
  @include phone-large 
    height: 110px 
    width: 100%
  &__container 
    display: flex 
    flex-direction: column 
    align-self: center 
    justify-content: space-around
    align-items: center
    width: 100% 
    height: 60% 
    @include phone-large  
      flex-direction: row
    &__play, &__pause
      display: flex 
      justify-content: center 
      align-items: center
      img 
        transition: all .5s ease-in-out
        &:hover
          transform: scale(0.95)
    &__play
      img
        width: 75px
        @include phone-large 
          width: 60px
    &__pause
      display: flex
      img
        left: 0 
        height: 70px
        @include phone-large  
          height: 45px
    &__rewind
</style>