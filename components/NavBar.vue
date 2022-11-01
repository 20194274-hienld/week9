<!-- eslint-disable vue/no-v-html -->
<template>
  <nav>
    <div class="container mx-auto px-5 lg:px-10 lg:w-[1190px]">
      <div
        class="
          flex
          items-center
          justify-between
          h-nav
          border-b border-linecolor
        "
      >
        <div class="flex h-[101%] items-center z-10">
          <a class="mr-2" href="#">
            <!-- Logo -->
            <img
              v-if="linklocation === 'pricing'"
              src="../assets/img/Object.svg"
              alt=""
            />
            <img v-else src="../assets/img/logowhite.svg" alt="" />
          </a>
          <div
            v-if="linklocation === 'pricing'"
            class="hidden md:flex space-x-7 ml-[87px] top-0 bottom-0 h-full"
          >
            <!-- Menu Items -->
            <a
              href="#"
              class="nav-font"
              @mouseover="displayElementNav('platform-extent')"
              @mouseleave="hiddenElementNav('platform-extent')"
              >{{ $t('common.platform') }}</a
            >
            <a
              href="#"
              class="nav-font"
              @mouseover="displayElementNav('apps-extent')"
              @mouseleave="hiddenElementNav('apps-extent')"
              >{{ $t('common.apps') }}</a
            >
            <a
              href="#"
              class="nav-font"
              @mouseover="displayElementNav('solutions-extent')"
              @mouseleave="hiddenElementNav('solutions-extent')"
              >{{ $t('common.solutions') }}</a
            >
            <a
              href="#"
              class="nav-font"
              @mouseover="displayElementNav('more-extent')"
              @mouseleave="hiddenElementNav('more-extent')"
              >{{ $t('common.more') }}</a
            >
          </div>
          <div v-else class="hidden md:flex space-x-7 items-center ml-[87px] h-full top-0 bottom-0">
            <!-- Menu Items -->
            <a 
              href="#" 
              class="nav-font-features"
              @mouseover="displayElementNav('platform-extent')"
              @mouseleave="hiddenElementNav('platform-extent')"
              >{{ $t('common.platform') }}</a>
            <a 
              href="#" 
              class="nav-font-features"
              @mouseover="displayElementNav('apps-extent')"
              @mouseleave="hiddenElementNav('apps-extent')"
              >{{ $t('common.apps') }}</a>
            <a 
              href="#" 
              class="nav-font-features"
              @mouseover="displayElementNav('solutions-extent')"
              @mouseleave="hiddenElementNav('solutions-extent')"
              >{{$t('common.solutions')}}</a>
            <a 
              href="#" 
              class="nav-font-features"
              @mouseover="displayElementNav('more-extent')"
              @mouseleave="hiddenElementNav('more-extent')"
              >{{ $t('common.more') }}</a>
          </div>
        </div>

        <!-- Button -->
        <a
          v-if="linklocation === 'pricing'"
          class="hidden md:block font-bold leading-19px text-15px text-primary"
          href="#"
          >{{ $t('common.log_in') }}</a
        >
        <div v-else class="hidden md:flex space-x-[25px] items-center z-10">
          <a href="#" class="nav-button-features uppercase">{{
            $t('common.sign_up')
          }}</a>
          <a
            href="#"
            class="
              nav-button-features
              w-[130px]
              h-[38px]
              bg-[#09D0BD]
              uppercase
              rounded
              flex
              justify-center
              items-center
            "
            >{{ $t('common.log_in') }}</a
          >
        </div>

        <!-- Bar button -->
        <button id="menu-btn" class="ml-auto md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            @click="toggleTypeScreen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- nav-extent -->
    <div
      id="nav-extent"
      class="absolute bg-[#FFFFFF] w-full z-20 drop-shadow-lg"
      @mouseover="hoverBackground"
      @mouseleave="leaveBackground"
    >
      <!-- Platform -->
      <div
        id="platform-extent"
        class="
          container
          my-[30px]
          hidden
          mx-auto
          h-[265px]
          lg:w-[1190px]
          px-[40px]
        "
      >
        <div class="">
          <img src="../assets/img/exten.svg" />
          <p
            class="exten-p max-w-[310px] mt-[30px]"
            v-html="$t('navbar.platform.para')"
          ></p>
        </div>
        <div id="exten-line"></div>
        <div>
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.platform.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.platform.question1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.platform.question2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.platform.question3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.platform.question4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.platform.question5')
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Apps -->
      <div
        id="apps-extent"
        class="
          container
          my-[30px]
          hidden
          mx-auto
          h-[265px]
          lg:w-[1190px]
          pl-[40px]
        "
      >
        <div class="mr-5">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.apps.para1.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para1.inventory1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para1.inventory2')
              }}</a>
            </li>
          </ul>
        </div>

        <div id="exten-line"></div>
        <div class="mr-5">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.apps.para2.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para2.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para2.list2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para2.list3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para2.list4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.apps.para2.list5')
              }}</a>
            </li>
          </ul>
        </div>
        <div id="exten-line"></div>
        <div>
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.apps.para3.title') }}
          </h2>
          <a class="exten-h3" href="#">{{ $t('navbar.apps.para3.list1') }}</a>
        </div>
        <div
          class="
            hidden
            lg:block
            background-exten
            absolute
            right-0
            self-center
            h-[325px]
            w-[395px]
            pl-[40px]
            pt-[30px]
          "
        >
          <h2 class="exten-h2-blue mb-2">
            {{ $t('navbar.apps.para4.title') }}
          </h2>
          <p
            class="exten-p mb-[30px]"
            v-html="$t('navbar.apps.para4.subtitle')"
          ></p>
          <img src="../assets/img/exten.svg" alt="" />
        </div>
      </div>

      <!-- Solutions -->
      <div
        id="solutions-extent"
        class="
          container
          my-[30px]
          hidden
          mx-auto
          h-[265px]
          lg:w-[1190px]
          pl-[40px]
        "
      >
        <div class="mr-[50px]">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.solutions.para1.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para1.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para1.list2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para1.list3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para1.list4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para1.list5')
              }}</a>
            </li>
          </ul>
        </div>
        <div id="exten-line"></div>
        <div>
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.solutions.para2.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list5')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.solutions.para2.list6')
              }}</a>
            </li>
          </ul>
        </div>

        <div
          class="
            background-exten
            absolute
            right-0
            self-center
            h-[325px]
            w-[395px]
            pl-[40px]
            pt-[30px]
          "
        >
          <h2 class="exten-h2 mb-2">free demo</h2>
          <h2
            class="
              font-Archivo font-bold
              text-[16px]
              leading-[22px]
              text-[#031B4E]
            "
          >
            {{ $t('navbar.solutions.para3.title') }}
          </h2>
          <p
            class="
              font-Montserrat font-normal
              text-sm
              leading-[26px]
              mb-[5px]
              text-[#79809B]
            "
            v-html="$t('navbar.solutions.para3.subtitle')"
          ></p>
          <a
            href="#"
            class="
              font-Archivo font-bold
              text-[16px]
              leading-[20px]
              text-[#0056F7]
              mt-[10px]
              flex
            "
          >
            <img class="mr-[8px]" src="../assets/img/rightnow.svg" />
            <p>{{ $t('navbar.solutions.para3.link') }}</p>
          </a>
        </div>
      </div>

      <!-- More -->
      <div
        id="more-extent"
        class="
          container
          hidden
          my-[30px]
          mx-auto
          h-[265px]
          lg:w-[1190px]
          pl-[40px]
        "
      >
        <div class="">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.more.para1.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list5')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para1.list6')
              }}</a>
            </li>
          </ul>
        </div>
        <div class="pl-[40px] border-l-[1px] border-[#E5E6EA]">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.more.para2.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para2.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para2.list2')
              }}</a>
            </li>
          </ul>
        </div>
        <div class="pl-[40px] border-l-[1px] border-[#E5E6EA]">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.more.para3.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para3.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para3.list2')
              }}</a>
            </li>
          </ul>
        </div>
        <div class="pl-[40px] border-l-[1px] border-[#E5E6EA]">
          <h2 class="exten-h2 mb-[10px]">
            {{ $t('navbar.more.para4.title') }}
          </h2>
          <ul class="space-y-[18px]">
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para4.list1')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para4.list2')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para4.list3')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para4.list4')
              }}</a>
            </li>
            <li>
              <a class="exten-h3" href="#">{{
                $t('navbar.more.para4.list5')
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<!--eslint-enable-->

<script>
export default {
  data() {
    return {
      linklocation: '',
    }
  },

  mounted() {
    const link = window.location.href
    if (link.includes('pricing')) {
      this.linklocation = 'pricing'
    } else this.linklocation = 'features'
  },

  methods: {
    toggleTypeScreen() {
      this.$emit('toggleTypeScreen')
    },

    hoverBackground() {
      switch (this.display) {
        case 1:
          document.getElementById('platform-extent').classList.remove('hidden')
          document.getElementById('platform-extent').classList.add('flex')
          break
        case 2:
          document.getElementById('apps-extent').classList.remove('hidden')
          document.getElementById('apps-extent').classList.add('flex')
          break
        case 3:
          document.getElementById('solutions-extent').classList.remove('hidden')
          document.getElementById('solutions-extent').classList.add('flex')
          break
        case 4:
          document.getElementById('more-extent').classList.remove('hidden')
          document.getElementById('more-extent').classList.add('grid')
          document.getElementById('more-extent').classList.add('grid-cols-4')
          break
        default:
          this.leaveBackground()
      }
    },

    leaveBackground() {
      if (document.getElementById('platform-extent').classList.contains('flex'))
        document.getElementById('platform-extent').classList.add('hidden')

      if (document.getElementById('apps-extent').classList.contains('flex'))
        document.getElementById('apps-extent').classList.add('hidden')

      if (
        document.getElementById('solutions-extent').classList.contains('flex')
      )
        document.getElementById('solutions-extent').classList.add('hidden')

      if (document.getElementById('more-extent').classList.contains('grid'))
        document.getElementById('more-extent').classList.add('hidden')
    },

    displayElementNav(id) {
      const element = document.getElementById(id)
      element.classList.remove('hidden')
      element.classList.add('flex')
      if (id === 'platform-extent') this.display = 1
      if (id === 'apps-extent') this.display = 2
      if (id === 'solutions-extent') this.display = 3
      if (id === 'more-extent') {
        this.display = 4
        element.classList.remove('flex')
        element.classList.add('grid')
        element.classList.add('grid-cols-4')
      }
    },

    hiddenElementNav(id) {
      const element = document.getElementById(id)
      element.classList.add('hidden')
      element.classList.remove('flex')
    },
  },
}
</script>

<style scoped>
#exten-line {
  width: 1px;
  height: 265px;
  background-color: #e5e6ea;
  margin: 0 40px;
}

.background-exten {
  background-image: linear-gradient(#f3f5f8 0%, #fff 100%);
}

#nav-extent li {
  line-height: initial;
}
</style>