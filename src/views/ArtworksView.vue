<template>
  <div class="artworks-view">
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" class="gallery-item" @click="showOverlay(image)">
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
        { id: 1, src: require('@/assets/Artworks/art1.jpg'), name: 'Image 1', year: 2020, description: 'Description 1' },
        { id: 2, src: require('@/assets/Artworks/art2.jpg'), name: 'Image 2', year: 2021, description: 'Description 2' },
        { id: 3, src: require('@/assets/Artworks/art3.jpg'), name: 'Image 3', year: 2022, description: 'Description 3' },
        { id: 4, src: require('@/assets/Artworks/art4.jpg'), name: 'Image 4', year: 2022, description: 'Description 4' },
        { id: 5, src: require('@/assets/Artworks/art5.jpg'), name: 'Image 5', year: 2022, description: 'Description 5' },
        { id: 6, src: require('@/assets/Artworks/art6.jpg'), name: 'Image 6', year: 2022, description: 'Description 6' },
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
  width: 100%;
  height: 360px;
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
</style>
