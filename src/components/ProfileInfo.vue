<template>
    <div class="profile-info">
        <div class='left-side'> 
            <div class="up">
                <div class="profile">
                    <img class='profile-pic' src="@/assets/profile.jpg" alt="profile" />
                </div>
                <div class="contacts">
                    <p class="name">Lidi Fu</p>
                    <p class="medium">Contact</p>
                    <div class="contact-content">
                        <div class="contact">
                            <p class="email">Email</p>
                        <a href="mailto:lidi.fu@icloud.com">
                            <p>lidi.fu@icloud.com</p>
                        </a>
                        </div>
                        <div class="contact">
                            <p class="email">My Design Works</p>
                        <a href="https://www.lidifu.pro" target="_blank">
                            <p>www.lidifu.pro</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="education">
                    <p class="medium">Education</p>
                    <p class="bold">Royal College of Art</p>
                    <p class="light">2023-2024 London</p>
                    <p class="program">MA Information Experience Design</p>
                </div>
                <div class="education">
                    <p class="bold">Imperial Academy of Fine Arts</p>
                    <p class="light">2019-2021 Saint Petersburg</p>
                    <p class="program">MA Monumental Art</p>
                    <p class="light">2015-2019 Saint Petersburg</p>
                    <p class="program">BA Painting</p>
                </div>
            </div>
        </div>
    
    </div>

</template>

<script>
export default {
}
</script>

<style scoped>
.left-side {
  padding-top: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
}

.profile-pic {
  border-radius: 8px;
}
.contacts {
  padding-bottom: 35px;
}
.contact-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile {
  width: 80%;
}

img {
  width: 100%
}

.name {
  font-weight: 600;
  font-size: x-large;
  padding-bottom: 50px;
}
.medium {
  font-family: Lato;
}
.email {
    font-size: medium;
     color: rgb(109, 109, 109);

}
.contact {
    padding-bottom: 10px;
}

.bold {
  padding-top: 20px;
  font-weight: 600;
  padding-bottom: 10px;
}

.contact p{
    padding-bottom: 5px;
}

p {
  text-align: left;
  line-height: 0;
}

a {
  color: black;
}

.light {
  color: rgb(161, 161, 161);
  padding-bottom: 10px;
  font-size: small;
}

.program {
  padding-bottom: 10px;
}

/* Media query for screens smaller than 1200px */
@media screen and (max-width: 1024px){
    .left-side {
        flex-direction: row;
        align-items: center;
        gap: 30px;
    }

    .name {
        padding-top: 40px;
        padding-bottom: 40px;
    }
    
    .up {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .contacts {
        padding-bottom: 0px;
    }
    .bottom {
        display: flex;
        flex-direction: column;
    }

    p {
        line-height: normal;
        margin: 0px;
        padding: 0px;
    }
    .contact {
        padding-bottom: 0px;
    }
    .profile {
        width: 200px;
    }
    .email {
        font-size: small;
    }
    .medium {
        padding-bottom: 10px;
    }

    .bold {
        padding-top: 0px;
        padding-bottom: 2px;
    }

    .light {
        padding-bottom: 2px;
    }
}

@media screen and (max-width: 890px){
    .left-side {
        flex-direction: row;
        align-items:flex-end;
    }

    .up{
        flex-direction: column;

        gap: 10px;
    }
    
    .name {
        padding-top: 0px;
        padding-bottom: 20px;
    }

    .profile {
        width: 40%;
    }
}

@media screen and (max-width: 670px){
    .left-side {
        flex-direction: column;
        align-items: flex-start;
    }
    p {
        font-size: smaller;
    }
}
</style>
