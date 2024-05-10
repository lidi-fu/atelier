<template>
    <div class="picture-viewer" @wheel="handleScroll">
      <div class="image-container">
        <img v-if="showImage" :key="currentImage.src" class="fade-image" :src="currentImage.src" :alt="currentImage.alt" />
      </div>
      <p class="text">{{ currentImage.text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: require('@/assets/showreel/image1.jpg'), alt: 'Image 1', text: 'Description for Image 1' },
          { src: require('@/assets/showreel/image2.jpg'), alt: 'Image 2', text: 'Description for Image 2' },
          { src: require('@/assets/showreel/image3.jpg'), alt: 'Image 3', text: 'Description for Image 3' },
          { src: require('@/assets/showreel/image4.jpg'), alt: 'Image 4', text: 'Description for Image 4' },
          // Add more image objects as needed
        ],
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
      handleScroll(event) {
        if (event.deltaY > 0) {
          // Scrolled down
          this.nextImage();
        } else {
          // Scrolled up
          this.previousImage();
        }
      },
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
    }
  };
  </script>
  
  <style scoped>

  .picture-viewer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-container {
    width: auto;
    height: 60vh; /* Adjust as needed */
    overflow: hidden;
    object-fit: cover;
  }
  
  .fade-image {
    object-fit: cover;
  }
  
  .text {
    padding-top: 10px;
    text-align: center;
  }
  </style>
  