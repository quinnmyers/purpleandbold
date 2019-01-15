<template>
  <div v-if="isMounted">
    <div class="tags"
      v-for="(tag, index) in tagArray"
      :key="index"
      @click="categorySelected(index)"
      :ref="`tag-button-${index}`"> 
      {{ tag.name }}
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["tagArray"],
  data() {
    return {
      isMounted: false
    };
  },
  methods: {
    categorySelected(index) {
      const category = this.tagArray[index].name;
      eventBus.updateCategory(category);
      const el = this.$refs[`tag-button-${index}`][0];
      if ([...el.classList].includes("selected")) {
        el.classList.remove("selected");
        el.classList.remove("grow");
      } else {
        el.classList.add("grow");
        setTimeout(() => {
          el.classList.add("selected");
        }, 268.75);
      } //537.5
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

div
  margin-top: 10px
  list-style: none 
  @include edgesnap 
    padding: 0px 20px
  @include phone-small 
    display: flex 
    width: 100% 
    justify-content: space-between
  .tags 
    display: inline-block
    cursor: pointer
    font-family: $subfont
    font-size: .9em
    border: 1px solid black
    margin: 0px 5px
    padding: 4px 15px
    border-radius: 100px
    transition: all 0.3s ease
    background: linear-gradient(to bottom, white 50%, black 50%)
    background-size: 100% 200% 
    background-position: right top
    @include phone-large 
      font-size: 0.7em
    @include phone-small 
      padding: 3px 12px
      margin: 0px 0px
    &.grow 
      animation: portfolio-tag-bounce .5s forwards
    &:nth-child(1)
      margin-left: 0px
    &.selected 
      color: white
      background-position: right bottom


@keyframes portfolio-tag-bounce 
  from,
  20%,
  53%,
  80%,
  
  to
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
    transform: translate3d(0, 0, 0)

  40%,
  43%
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)
    transform: translate3d(0, -15px, 0)

  70%
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)
    transform: translate3d(0, -7px, 0)


  90%
    transform: translate3d(0, -2px, 0)


  

  

</style>