<template>
  <div class="picture-viewer">
    <div class="image-container">
      <button @click="previousImage" class="nav-button">
        <img class="button" src="@/assets/previous.svg" :class="{ 'no-hover': currentIndex === 0 }" />
      </button>
      <img v-if="showImage" :key="currentImage.src" class="fade-image" :src="currentImage.src" :alt="currentImage.alt" />
      <button @click="nextImage" class="nav-button">
        <img class="button" src="@/assets/next.svg" :class="{ 'no-hover': currentIndex === images.length - 1 }" />
      </button>
    </div>
    <p class="text">{{ currentImage.text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require('@/assets/showreel/showreel1.jpg'), alt: 'Image 1', text: '2023 Fuzhou, China' },
        { src: require('@/assets/showreel/showreel2.jpg'), alt: 'Image 2', text: '2022 Shanghai, China' },
        { src: require('@/assets/showreel/showreel3.jpg'), alt: 'Image 3', text: '2022 Shanghai, China' },
        { src: require('@/assets/showreel/showreel4.jpg'), alt: 'Image 4', text: '2020 Saint Petersburg, Russia' },
        { src: require('@/assets/showreel/showreel5.jpg'), alt: 'Image 5', text: '2020 Saint Petersburg, Russia' },
        { src: require('@/assets/showreel/showreel6.jpg'), alt: 'Image 6', text: '2022 London, UK' },
        { src: require('@/assets/showreel/showreel7.jpg'), alt: 'Image 7', text: '2022 London, UK' },
        { src: require('@/assets/showreel/showreel8.jpg'), alt: 'Image 8', text: '2023 Uster, Switzerland' },
        { src: require('@/assets/showreel/showreel9.jpg'), alt: 'Image 9', text: '2023 Uster, Switzerland' },
        // Add more image objects as needed
      ].reverse(),
      currentIndex: 0,
      showImage: true
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  },
};
</script>

<style scoped>
.picture-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.button {
  width: 25px;
  opacity: 0.4;
  padding: 10px;
}

.nav-button {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.button:hover {
  background-color:  #b3c9e1;
  border-radius: 50px;
}

.nav-button:focus {
  outline: none;
}

.no-hover {
  background-color: transparent !important;
}
.fade-image {
  object-fit: cover;
  width: 100%; /* Ensure image takes full width of container */
}

.text {
  text-align: center;
}

</style>
