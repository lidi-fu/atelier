<template>
    <div class="picture-viewer" @wheel="handleScroll">
      <P class="note">scroll on the image for more</P>
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
    },

  };
  </script>
  
  <style scoped>

  .picture-viewer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .note {
    font-size: smaller;
    color: rgb(161, 161, 161);
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
    text-align: center;
  }
  </style>
  