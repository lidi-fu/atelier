<template>
    <div class="archive-view">
      <div class="archive">
        <div v-for="(image, index) in images" :key="index" class="archive-item">
          <div class="image-container">
            <img :src="image.src" :alt="image.name" class="archive-image">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { id: 1, src: require('@/assets/Archive/archive1.jpg'), name: 'Archive 1', year: 2020 },
          { id: 2, src: require('@/assets/Archive/archive2.jpg'), name: 'Archive 2', year: 2021 },
          { id: 3, src: require('@/assets/Archive/archive3.jpg'), name: 'Archive 3', year: 2022 },
          { id: 4, src: require('@/assets/Archive/archive4.jpg'), name: 'Archive 4', year: 2022 },
          { id: 5, src: require('@/assets/Archive/archive5.jpg'), name: 'Archive 5', year: 2022 },
          { id: 6, src: require('@/assets/Archive/archive6.jpg'), name: 'Archive 6', year: 2022 },
          { id: 7, src: require('@/assets/Archive/archive7.jpg'), name: 'Archive 7', year: 2022 },
          // Add more image objects here
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  .archive-view {
    padding-top: 30px;
    width: 80%;
    margin: auto;
  }
  
  .archive {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
  
  .archive-item {
    width: calc(30% - 10px); /* Adjust as needed */
    margin-bottom: 20px;
  }
  
  .image-container {
    width: 100%;
    overflow: hidden;
  }
  
  .archive-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  