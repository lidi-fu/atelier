<template>
  <div class="exhibitions">
    <p class="title">Exhibitions & Media Cover</p>
    <hr>
    <div class="exhibition">
        <div v-for="(exhibition) in exhibitions" :key="exhibition.id" class="exhibition-item">
            <div class="exhibition-info">
                <div class="first-part">
                    <div class="first-line">
                        <p class="year">{{ exhibition.year }}</p>
                        <p class="city">{{ exhibition.city }}</p>
                    </div>
                    <div class="second-line">
                        <p class="location">{{ exhibition.location }}</p>
                    </div>
                </div>
                <div class="last-line">
                    <p class="name">{{ exhibition.name }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            exhibitions: [
            { 
                id: 1, 
                name: 'Exhibition 1', 
                year: 2020, 
                location: 'Russian XXXXXXXXXXXXXXXXXX Gallery',
                city: 'Saint Petersburg',
            },
            { 
                id: 2, 
                name: 'Exhibition 2', 
                year: 2020, 
                location: 'LRussian XXXXXXXXXXXXXXXXXX Gallery 2',
                city: 'Saint Petersburg',
            },
            { 
                id: 3, 
                name: 'Exhibition 3', 
                year: 2020, 
                location: 'Location 3',
                city: 'Saint Petersburg',
            },
            ]
        }
    }

}
</script>

<style scoped>
.title {
    font-family: Lato;
    margin-bottom: 30px;
}

.exhibition-info {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.first-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.first-line {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 50px;
}

p {
    text-align: left;
    line-height: 0;
}

hr {
    border: 0.5px solid #acacac;
    margin: 0px 0px 30px 0px;
}

.name {
    font-weight: 600;
}

.last-line {
    margin-bottom: 20px;
}
</style>