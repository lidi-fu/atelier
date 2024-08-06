<template>
  <div class="artworks-view">
    <div class="gallery">
      <div v-for="(image, index) in reversedImages" :key="index" class="gallery-item" @click="showOverlay(image)">
        <div class="image-container">
          <img :src="image.src" :alt="image.name" class="gallery-image">
        </div>
        <div class="image-info">
          <p class="image-name">{{ image.name }}</p>
          <p class="image-year">{{ image.year }}</p>
        </div>
      </div>
    </div>
    <OverlayPic :selectedImage="selectedImage" v-if="showOverlayFlag" @closeOverlay="closeOverlay"/>
  </div>
</template>

<script>
import OverlayPic from '@/components/OverlayPic.vue';

export default {
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/Artworks/art1.jpg'), largeSrc: require('@/assets/Artworks/art1-large.png'), name: 'Void', year: 2022, description: '' },
        { id: 2, src: require('@/assets/Artworks/art2.jpg'), largeSrc: require('@/assets/Artworks/art2-large.png'), name: 'Alienation', year: 2022, description: '' },
        // { id: 3, src: require('@/assets/Artworks/art3.jpg'), largeSrc: require('@/assets/Artworks/art3-large.jpg'), name: 'Dreams', year: 2019, description: 'Description 3' },
        { id: 4, src: require('@/assets/Artworks/art4.jpg'), largeSrc: require('@/assets/Artworks/art4-large.png'), name: 'Anxiety at Night', year: 2022, description: '' },
        { id: 5, src: require('@/assets/Artworks/art5.jpg'), largeSrc: require('@/assets/Artworks/art5-large.png'), name: 'Lust', year: 2022, description: '' },
        { id: 6, src: require('@/assets/Artworks/art6.jpg'), largeSrc: require('@/assets/Artworks/art6-large.png'), name: 'Encoded', year: 2023, description: '' },
        { id: 7, src: require('@/assets/Artworks/art7.jpg'), largeSrc: require('@/assets/Artworks/art7-large.png'), name: 'Libido', year: 2023, description: '' },
        // { id: 8, src: require('@/assets/Artworks/art8.jpg'), largeSrc: require('@/assets/Artworks/art8-large.png'), name: 'Embrace', year: 2024, description: '' },
        { id: 8, src: require('@/assets/Artworks/art9.webp'), largeSrc: require('@/assets/Artworks/art9-large.webp'), name: 'Embrace', year: 2024, description: '' },
        { id: 8, src: require('@/assets/Artworks/art10.webp'), largeSrc: require('@/assets/Artworks/art10-large.webp'), name: 'Pray', year: 2024, description: '' },
        // Add more image objects here
      ],
      selectedImage: null,
      showOverlayFlag: false
    };
  },
  components: {
    OverlayPic
  },
  methods: {
    showOverlay(image) {
      this.selectedImage = image;
      this.showOverlayFlag = true;
    },
    closeOverlay() {
      this.showOverlayFlag = false;
    }
  },
  computed: {
    reversedImages() {
      return this.images.slice().reverse();
    }
  }
};
</script>

<style scoped>
.artworks-view {
  padding-top: 30px;
  width: 80%;
  margin: auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery-item {
  width: calc(30% - 10px); /* Adjust as needed */
  margin-bottom: 20px;
}

.image-container {
  width:100%;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.image-info {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.image-year {
  color: #666;
}

@media screen and (max-width: 670px){
  .gallery-item {
    width: calc(50% - 20px); /* Adjust as needed */
  }

  .gallery {
    justify-content: space-between;
  }
}
</style>
