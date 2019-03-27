<template>
    <v-carousel
    delimiter-icon="stop"
    prev-icon="mdi-arrow-left"
    next-icon="mdi-arrow-right"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
 export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/jl.jpg')
          },
          {
            src: require('@/assets/new.jpg')
          },
          {
            src: require('@/assets/new2.jpg')
          }
        ]
      }
    }
  }
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>