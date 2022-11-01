<!-- eslint-disable vue/no-v-html -->
<template>
  
  <div>
    <MobileNav @toggleTypeScreen="toggleTypeScreen()"/>
    <div id="large-screen" class="font-Mulish">
      <section class="bg-[#353B6B] min-h-[55px] flex relative items-center">
        <div class="container mx-auto px-10 w-[1190px] flex">
          <img src="../assets/img/NEW.svg" alt="#" class="mr-[10px]" />
          <p>
            <span class="text-notification font-bold">Vuln-feed:</span>
            <span class="text-notification font-light"
              >{{ $t('cloud_feature.vuld_feed') }}</span
            >
            <a href="#" class="text-notification font-bold underline ml-[25px]"
              >{{ $t('cloud_feature.view_more') }}</a
            >
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFFFFF"
          class="w-6 h-6 absolute right-[30px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </section>

      <section class="w-full relative mt-[-1px]">
        <img
          src="../assets/img/featurebg.svg"
          alt=""
          class="object-left h-[600px] object-cover top-0 left-0 -z-10 md:w-full md:h-full"
        />
        <img
          src="../assets/img/featurebg1.svg"
          alt=""
          class="object-left h-[600px] object-cover absolute top-[-10px] left-0  md:w-full md:h-full"
        />
        <div class="absolute top-0 w-full">

          <NavBar @toggleTypeScreen="toggleTypeScreen()"/>

          <!-- cloud security -->
          <div class="z-10 container relative mx-auto flex items-center justify-between h-2.25 mt-[15px] px-5 lg:px-10 lg:w-[1190px]">
            <div class="flex relative">
              <a href="#">
                <img src="../assets/img/cloudsec-logo.svg" alt="" />
              </a>
              <div class="flex space-x-6 items-center ml-[55px]">
                <NuxtLink :to="language + '/'" class="nav-font-features min-w-fit">{{ $t('common.features') }}</NuxtLink>
                <NuxtLink :to="language + '/pricing'" class="nav-font-features min-w-fit">{{ $t('common.pricing') }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-[70px] flex px-[40px] inset-0 mx-auto absolute z-0 lg:w-[1190px] md:mt-0">
          <div class="max-w-[570px] text-[#FFFFFF] self-center">
            <h1 class="text-[30px] font-bold leading-[58px] mb-[20px] sm:text-[48px]">
              {{ $t('cloud_feature.paragraph.first.title') }}
            </h1>
            <p class="font-normal text-[15px] leading-[32px] max-w-[532px] sm:text-[20px]">
              {{ $t('cloud_feature.paragraph.first.description') }}
            </p>
          </div>
          <div class="hidden w-[200px] mt-[100px] overflow-visible lg:flex">
            <img
              src="../assets/img/img.svg"
              alt=""
              class="max-w-[670px]"
            />
          </div>
        </div>
        <!-- right-[45px] bottom-[-150px] -->
      </section>

      <h1 class="features-h1 max-w-[515px] mb-[40px]">
        {{ $t('cloud_feature.paragraph.second.title') }}
      </h1>

      <section class="container items-center mx-auto flex flex-col px-10 max-w-[1190px] md:flex-row">
        <div class="max-w-[540px] self-center md:mr-[30px] mb-[30px] md:w-1/2">
          <h2 class="features-h2 mb-[20px]">{{ $t('cloud_feature.paragraph.second.topic_one.title') }}</h2>
          <ul class="space-y-[15px] list-disc">
            <h3 class="features-p">
              {{ $t('cloud_feature.paragraph.second.topic_one.aim') }}
            </h3>
            <li>
              <p class="features-p">
                {{ $t('cloud_feature.paragraph.second.topic_one.extent.first') }}
              </p>
            </li>
            <li>
              <p class="features-p">
                {{ $t('cloud_feature.paragraph.second.topic_one.extent.second') }}
              </p>
            </li>
            <li>
              <p class="features-p" v-html="$t('cloud_feature.paragraph.second.topic_one.extent.third')">
                
              </p>
            </li>
          </ul>
        </div>
        <img src="../assets/img/content1.svg" alt="" class="max-w-[499px] w-full md:w-1/2"/>
      </section>

      <section class="container items-center mx-auto flex flex-col-reverse px-10 max-w-[1190px] md:flex-row">
        <img src="../assets/img/content3.svg" alt="" class="max-w-[511px] w-full md:w-1/2 md:mr-[60px]" />
        <div class="max-w-[540px] self-center mb-[30px] md:w-1/2">
          <h2 class="features-h2 mb-[20px]">{{ $t('cloud_feature.paragraph.second.topic_two.title') }}</h2>
          <ul class="space-y-[15px] list-disc">
            <h4 class="features-p">
              {{ $t('cloud_feature.paragraph.second.topic_two.aim') }}
            </h4>
            <li>
              <p class="features-p">
                {{ $t('cloud_feature.paragraph.second.topic_two.extent') }}
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="container items-center mx-auto flex flex-col px-10 max-w-[1190px] md:flex-row">
        <div class="max-w-[540px] self-center mb-[30px] md:mr-[30px] md:w-1/2">
          <h2 class="features-h2 mb-5">{{ $t('cloud_feature.paragraph.second.topic_three.title') }}</h2>
          <p class="features-p mb-5" v-html="$t('cloud_feature.paragraph.second.topic_three.aim')">
          </p>
          <ul class="space-y-[15px] list-disc">
            <h2 class="features-p">{{ $t('cloud_feature.paragraph.second.topic_three.extent.title') }}</h2>
            <li>
              <p class="features-p" v-html="$t('cloud_feature.paragraph.second.topic_three.extent.first')">
              </p>
            </li>
            <li>
              <p class="features-p" v-html="$t('cloud_feature.paragraph.second.topic_three.extent.second')">
              </p>
            </li>
            <li>
              <p class="features-p" v-html="$t('cloud_feature.paragraph.second.topic_three.extent.third')">
              </p>
            </li>
          </ul>

          <button class="mx-auto features-button mt-[45px] md:mx-0">{{ $t('cloud_feature.paragraph.second.topic_three.button') }}</button>
        </div>
        <img src="../assets/img/content2.svg" alt="" class="max-w-[541px] w-full md:w-1/2"/>
      </section>

      <section class="bg-[#F2F2F2] w-full mt-[100px]">
        <div class="container mx-auto max-w-[1190px] pt-[90px] pb-[100px]">

          <h1 class="features-h1">{{ $t('cloud_feature.paragraph.third.title') }}</h1>
          <h4 class="features-p max-w-[770px] mx-auto text-center px-[20px] mt-[15px] mb-[35px]">
            {{ $t('cloud_feature.paragraph.third.explain') }}
          </h4>
          <div class="container items-center mx-auto flex flex-col-reverse px-10 max-w-[1190px] md:flex-row">
            <img src="../assets/img/content4.svg" alt="" class="max-w-[540px] w-full md:mr-[30px] md:w-1/2"/>
            <div class="max-w-[525px] self-center mr-[30px] mb-[30px] md:w-1/2">
              <h2 class="features-h2 mb-[8px]">{{ $t('cloud_feature.paragraph.third.topic.title') }}</h2>
              <ul class="space-y-[15px] list-disc">
                <li>
                  <p class="features-p">
                    {{ $t('cloud_feature.paragraph.third.topic.extent.first') }}
                  </p>
                </li>
                <li>
                  <p class="features-p">
                    {{ $t('cloud_feature.paragraph.third.topic.extent.second') }}
                  </p>
                </li>
                <li>
                  <p class="features-p">
                    {{ $t('cloud_feature.paragraph.third.topic.extent.third') }}
                  </p>
                </li>
                <li>
                  <p class="features-p" v-html="$t('cloud_feature.paragraph.third.topic.extent.fourth')">
                  </p>
                </li>
                <li>
                  <p class="features-p">
                    {{ $t('cloud_feature.paragraph.third.topic.extent.fifth') }}
                  </p>
                </li>
              </ul>
              <button class="features-button mt-[45px] mx-auto md:mx-0">{{ $t('cloud_feature.paragraph.third.button') }}</button>
            </div>
          </div>
        </div>
      </section>

      <section class="container mx-auto max-w-[1190px] px-10 pt-[80px]">
        <h1 class="features-h1 mb-[15px]">{{ $t('cloud_feature.paragraph.fourth.title') }}</h1>
        <p class="features-p max-w-[730px] mx-auto text-center mb-[30px]">
          {{ $t('cloud_feature.paragraph.fourth.explain') }}
        </p>
        <div class="container items-center mx-auto flex flex-col px-10 w-full md:flex-row">
          <div class="max-w-[525px] self-center mb-[30px] md:mr-[87px] md:w-1/2">
            <h2 class="features-h2 mb-2">{{ $t('cloud_feature.paragraph.fourth.topic.title') }}</h2>
            <p class="features-p max-w-[525px] mb-[45px]" v-html="$t('cloud_feature.paragraph.fourth.topic.explain') ">
            </p>
            <button class="features-button mx-auto md:mx-0">{{ $t('cloud_feature.paragraph.fourth.button') }}</button>
          </div>
          <img src="../assets/img/content5.svg" alt="" class="max-w-[491px] w-full md:w-1/2" />
        </div>
      </section>

      <section class="container mx-auto max-w-[1190px] mt-[100px] mb-[80px]">
        <h1 class="features-h1 mb-[30px]">{{ $t('cloud_feature.paragraph.fifth.title') }}</h1>
        <div class="container items-center mx-auto flex flex-col-reverse px-10 w-full md:flex-row">
          <img src="../assets/img/content6.svg" alt="" class="max-w-[505px] w-full md:mr-[65px] md:w-1/2" />
          <div class="features-p space-y-[15px] mb-[40px] max-w-[540px] self-center">
            <p class="features-p">
              {{ $t('cloud_feature.paragraph.fifth.explain_one') }}
            </p>
            <p class="features-p" v-html="$t('cloud_feature.paragraph.fifth.explain_two') ">
            </p>
          </div>
        </div>
      </section>

      <section class="w-full bg-[#F5F5FA] pt-[80px] pb-[90px]">
        <div class="container max-w-[812px] px-[40px] mx-auto">
          <h1 class="features-h1 pb-[40px]">{{ $t('cloud_feature.paragraph.sixth.title') }}</h1>
          <ol class="list-decimal space-y-[24px]">
            <div id="question-1" class="kinhdien">
              <div class="flex justify-between features-ol-section">
                <li>{{ $t('cloud_feature.paragraph.sixth.topic_one') }}</li>
                <div @click="extentQuestion('question-1')">
                  <img src="../assets/img/+.svg" alt="">
                  <img src="../assets/img/-.svg" alt="" class="hidden">
                </div>
              </div>
              <p class="features-p hidden">
                {{ $t('cloud_feature.paragraph.sixth.extent') }}
              </p>
            </div>
            <hr/>

            <div id="question-2">
              <div class="flex justify-between features-ol-section">
                <li>{{ $t('cloud_feature.paragraph.sixth.topic_two') }}</li>
                <div @click="extentQuestion('question-2')">
                  <img src="../assets/img/+.svg" alt="" >
                  <img src="../assets/img/-.svg" alt="" class="hidden">
                </div>
              </div>
              <p class="features-p hidden">
                {{ $t('cloud_feature.paragraph.sixth.extent') }}
              </p> 
            </div>
            <hr/>

            <div id="question-3">
              <div class="flex justify-between features-ol-section">
                <li>{{ $t('cloud_feature.paragraph.sixth.topic_three') }}</li>
                <div @click="extentQuestion('question-3')">
                  <img src="../assets/img/+.svg" alt="">
                  <img src="../assets/img/-.svg" alt="" class="hidden">
                </div>
              </div>
              <p class="features-p hidden">
                {{ $t('cloud_feature.paragraph.sixth.extent') }}
              </p>
            </div>
            <hr/>

            <div id="question-4">
              <div class="flex justify-between features-ol-section">
                <li>{{ $t('cloud_feature.paragraph.sixth.topic_four') }}</li>
                <div @click="extentQuestion('question-4')">
                  <img src="../assets/img/+.svg" alt="">
                  <img src="../assets/img/-.svg" alt="" class="hidden">
                </div>
              </div>
              <p class="features-p hidden">
                {{ $t('cloud_feature.paragraph.sixth.extent') }}
              </p>
            </div>
            <hr/>

            <div id="question-5">
              <div class="flex justify-between features-ol-section">
                <li>{{ $t('cloud_feature.paragraph.sixth.topic_five') }}</li>
                <div @click="extentQuestion('question-5')">
                  <img src="../assets/img/+.svg" alt="">
                  <img src="../assets/img/-.svg" alt="" class="hidden">
                </div>
              </div>
              <p class="features-p hidden">
                {{ $t('cloud_feature.paragraph.sixth.extent') }}
              </p>
            </div>
            <hr/>
          </ol>
        </div>
      </section>

      <section class="h-[330px] background-beauty">
        <div class="container items-center mx-auto text-center pt-[65px]">
          <a class="features-button-green mx-auto mb-[30px]" href="#">{{ $t('cloud_feature.paragraph.seventh.button') }}</a>
          <div class="text-center font-bold text-[20px] leading-[25px] text-[#FFFFFF]">
            {{ $t('cloud_feature.paragraph.seventh.or') }}
            <br>
            <div class="mt-[5px]">
              <a id="link-contact" href="#" >{{ $t('cloud_feature.paragraph.seventh.contact') }}</a>   
            </div>
          </div>
        </div>
      </section>

      <FooterPage linkeng="/" linkvi="/vi"/>

    </div>
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
      if (this.typeScreen) {
        this.typeScreen = false;
        document.getElementById('large-screen').classList.add('hidden')
        document.getElementById('mobile-nav').classList.remove('hidden')
      } else {
        this.typeScreen = true;
        document.getElementById('large-screen').classList.remove('hidden')
        document.getElementById('mobile-nav').classList.add('hidden')
      }
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
