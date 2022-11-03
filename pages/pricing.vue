<!-- eslint-disable vue/no-v-html -->
<template>
    <div>
        <MobileNav v-if="!typeScreen" @toggleTypeScreen="toggleTypeScreen()"/>
  
        <NavBar v-if="typeScreen" @toggleTypeScreen="toggleTypeScreen()"/>
  
        <nuxt-child/>

        <FooterPage v-if="typeScreen" linkeng="/" linkvi="/vi"/>
  
    </div>
    
  
  </template>
  <!--eslint-enable-->
  
  <script>
  export default {
    data() {
      return {
        extentedQuestion: 'none',
        display: 0,
        language: '',
        typeScreen: true,
      }
    },
    mounted() {
      this.pathnameUrl = window.location.href;
      if (this.pathnameUrl.includes('vi')) {
        this.language = '/vi'
      } else this.language = ''
    },
    methods: {
        toggleTypeScreen() {
            this.typeScreen = !this.typeScreen;
        },
      displayQuestion(idElement) {
        const images = document.getElementById(idElement).getElementsByTagName('img');
        if (!images[0].classList.contains('hidden')) {
          images[0].classList.add('hidden')
        }
        if (images[1].classList.contains('hidden')) {
          images[1].classList.remove('hidden')
        }
        const para = document.getElementById(idElement).querySelector('p');
        if (para.classList.contains('hidden')) {
          para.classList.remove('hidden')
        }
      },
      hideQuestion(idElement) {
        const images = document.getElementById(idElement).getElementsByTagName('img');
        if (images[0].classList.contains('hidden')) {
          images[0].classList.remove('hidden')
        }
        if (!images[1].classList.contains('hidden')) {
          images[1].classList.add('hidden')
        }
        const para = document.getElementById(idElement).querySelector('p');
        if (!para.classList.contains('hidden')) {
          para.classList.add('hidden')
        }
  
      },
      extentQuestion(idQuestion) {
        const old = document.getElementById(this.extentedQuestion);
        if (old) {
          this.hideQuestion(this.extentedQuestion);
          if (idQuestion === this.extentedQuestion) {
            this.extentedQuestion = 'none';
          } else {
            this.displayQuestion(idQuestion);
            this.extentedQuestion = idQuestion;
          }
        } else {
          this.displayQuestion(idQuestion);
          this.extentedQuestion = idQuestion;
        }
      },
  
    }
  }
  </script>
  
  <style scoped>
    ul li {
      color: #6D4BFF;
      margin-left: 15px;
    }
  
    ol li {
      margin-left: 20px;
    }
  
    footer li {
      margin-left: 0;
      color: #FFF;
    }
  
    b {
      font-weight: 700;
    }
  
    hr {
      border-top: solid 1px #253858;
      opacity: 0.1;
      mix-blend-mode: normal;
    }
  
    .background-beauty {
    background-image: url('../assets/img/Path.svg'), url('../assets/img/Oval.svg'),
      linear-gradient(51.38deg, #6d4bff 15.71%, #d62196 300%);
    background-repeat: no-repeat, no-repeat;
    background-position: left top, right bottom;
    }
  
    #link-contact {
      text-decoration: underline;
      text-decoration-color: white;
      margin-top: 5px;
    } 
  </style>
  