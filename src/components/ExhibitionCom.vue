<template>
  <div class="exhibitions">
    <div class="about-me">
        <p class="statement">"My artistic endeavors are an intricate journey delving into spirituality through both visual and conceptual dimensions. Motivated by my profound intrigue with the interplay of shapes, forms, colors, and compositions, my work unfolds as a fusion of tradition and innovation.<br> Navigating the realm between conventional academic roots and the avant-garde realm of new media art, I continuously seek to unearth the potential and tension inherent in both worlds."</p>
    </div>

        <p class="title">Exhibitions & Media Cover</p>
        <hr>

    <div class="exhibition">
        <div v-for="(exhibition) in reversedExhibition" :key="exhibition.id" class="exhibition-item">
            <div class="exhibition-info">
                <div class="first-part">
                    <div class="first-line">
                        <p class="year">{{ exhibition.year }}</p>
                        <p class="city">
                            <template v-if="exhibition.url">
                                    <a :href="exhibition.url" target="_blank">{{ exhibition.city }}</a>
                            </template>
                            <template v-else>
                                    {{ exhibition.city }}
                            </template>
                        </p>
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
                name: '"Best drawings of the year"', 
                year: 2018, 
                location: 'Italian Hall at Imperial Academy of Arts',
                city: 'Saint Petersburg, Russia',
            },
            { 
                id: 2, 
                name: 'Training drawings from monumental workshop of A.K. Bystrov', 
                year: 2019, 
                location: 'State University of Traumatology and Traction',
                city: 'Saint Petersburg, Russia',
            },
            { 
                id: 3, 
                name: 'Training drawings from monumental workshop of A.K. Bystrov', 
                year: 2020, 
                location: 'Zurab Tsereteli Art Gallery',
                city: 'Moscow, Russia',
            },            
            { 
                id: 4, 
                name: 'Annual Monumental Diploma Show', 
                year: 2021, 
                location: 'Italian Hall at Imperial Academy of Arts',
                city: 'Saint Petersburg, Russia',
            },            
            { 
                id: 5, 
                name: 'The New Artist Exhibition', 
                year: 2022, 
                location: 'Boomer Gallery',
                city: 'London, UK',
            },            
            { 
                id: 6, 
                name: 'Kaleidoscope', 
                year: 2022, 
                location: 'The Holy Art Gallery',
                city: 'London, UK',
            },            
            { 
                id: 7, 
                name: 'Interruption', 
                year: 2022, 
                location: 'The Holy Art Gallery',
                city: 'London, UK',
            },            
            { 
                id: 8, 
                name: '2022 T-Art Conference', 
                year: 2022, 
                location: 'Ruihong Tiandi Sun Palace',
                city: 'Shanghai, China',
            },            { 
                id: 9, 
                name: 'Contemporary Sexuality Education Art Exhibition', 
                year: 2023, 
                location: 'One Island Art and Cultural Center',
                city: 'Fuzhou, China',
            },            { 
                id: 10, 
                name: 'Where there is ease, there is home', 
                year: 2023, 
                location: 'HeLai Art Gallery',
                city: 'Uster, Switzerland',
            },
            { 
                id: 11, 
                name: 'Infinity', 
                year: 2024, 
                location: 'Florence Contemporary Gallery',
                city: 'Online',
                url: 'https://www.florencecontemporary.com/infinity'
            },
            ]
        }
    },
    computed: {
        reversedExhibition() {
            return this.exhibitions.slice().reverse();
        }
    }
}
</script>

<style scoped>

.exhibitions {
}
.exhibition-info {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.title {
    font-family: Lato;
    margin-bottom: 30px;
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

p.statement {
  line-height: 1.3;
  padding-bottom: 50px;
  font-style: italic;
  color: rgb(126, 126, 126);
  text-align: center;
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

a {
    color: rgb(17, 0, 251);
}

@media screen and (max-width: 670px){
    .first-part {
        flex-direction: column;
    }
    p {
        line-height: normal;
        margin: 0px;
        font-size: smaller;
        padding-bottom: 5px;
    }
    .location {
        color: rgb(119, 119, 119);
    }
}
</style>