<template>
  <div id="mobile-nav" class="w-auto px-[25px] pt-[25px] pb-[30px] hidden">
    <div class="flex justify-between mb-[50px]">
      <a href="#">
        <img src="../assets/img/Object.svg" class="w-[114px]" />
      </a>
      <img
        src="../assets/img/close.svg"
        class="cursor-pointer"
        @click="toggleTypeScreen"
      />
    </div>

    <ul id="nav-moblie" class="space-y-[30px]">
      <li id="platform-mobile">
        <a href="#" @click="toggleMoblie('platform-mobile')"
          ><span class="extent-h3-mobile">{{ $t('common.platform') }}</span>
          <img src="../assets/img/down.svg" class="inline ml-[10px]" />
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]" />
        </a>
        <ul class="mt-[18px] ml-[20px] space-y-[18px] hidden">
          <li class="extent-h3-mobile-onclick w-fit">
            What is CyStack Platform?
          </li>
          <li class="extent-h3-mobile-onclick w-fit">What are the benefits?</li>
          <li class="extent-h3-mobile-onclick w-fit">Why security platform?</li>
          <li class="extent-h3-mobile-onclick w-fit">
            A look into CyStack Apps
          </li>
          <li class="extent-h3-mobile-onclick w-fit">FAQ</li>
        </ul>
      </li>
      <li class="extent-h3-mobile">
        <a href="#"
          >{{ $t('common.apps') }}
          <img src="../assets/img/down.svg" class="inline ml-[10px]" />
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]" />
        </a>
      </li>
      <li class="extent-h3-mobile">
        <a href="#"
          >{{ $t('common.solutions') }}
          <img src="../assets/img/down.svg" class="inline ml-[10px]" />
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]" />
        </a>
      </li>
      <li class="extent-h3-mobile">
        <a href="#"
          >{{ $t('common.more') }}
          <img src="../assets/img/down.svg" class="inline ml-[10px]" />
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]" />
        </a>
      </li>
    </ul>

    <div
      class="
        fixed
        bottom-0
        bg-[#FFF]
        z-10
        grid
        w-full
        px-[25px]
        pb-[30px]
        left-0
      "
    >
      <a class="extent-mobile-button block mx-auto mb-[22px]">{{
        $t('common.log_in')
      }}</a>
      <button
        class="
          extent-mobile-button
          h-[44px]
          text-[#FFFFFF]
          bg-[#0266F9]
          rounded-[5px]
        "
      >
        {{ $t('common.get_started') }}
      </button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    toggleTypeScreen() {
        this.$emit('toggleTypeScreen')
    },
    toggleMoblie(option) {
      const images = document.getElementById(option).querySelectorAll('img')
      const title = document.getElementById(option).querySelector('a span')
      const elementChild = document.getElementById(option).querySelector('ul')
      if (elementChild.classList.contains('hidden')) {
        elementChild.classList.remove('hidden')
        title.classList.remove('extent-h3-mobile')
        title.classList.add('extent-h3-mobile-onclick')
        images[0].classList.add('hidden')
        images[1].classList.remove('hidden')
        images[1].classList.add('inline')
      } else {
        elementChild.classList.add('hidden')
        title.classList.add('extent-h3-mobile')
        title.classList.remove('extent-h3-mobile-onclick')
        images[1].classList.add('hidden')
        images[0].classList.remove('hidden')
        images[0].classList.add('inline')
      }
    },
  },
}
</script>