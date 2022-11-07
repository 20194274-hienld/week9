<template>
  <footer class="bg-[#353B6B]">
    <div class="container mx-auto pt-[80px] px-5 md:px-10 md:w-[1112px]">
      <div class="grid grid-cols-2 justify-between md:grid-cols-4">
        <div class="mb-[30px]">
          <img src="../assets/img/logowhite.svg" alt="#" />
          <p
            class="
              font-light
              text-[14px] text-[#FFFFFF]
              leading-[22px]
              mt-[22px]
              mb-[47px]
            "
          >
            {{ $t('common.address') }}: 3rd floor Bigwin Tower, Le <br />
            Van Luong, Hanoi, Vietnam <br />
            Email: contact@cystack.net <br />
            {{ $t('common.phone_number') }}: (+84) 247 109 9656
          </p>
          <div class="font-light text-[14px] leading-[27px] text-[#FFFFFF]">
            <div class="flex items-center">
              <div class="w-[14px] h-[16px] mr-[14px]">
                <img
                  id="vietnamese-icon"
                  class="hidden"
                  src="../assets/img/plane.svg"
                  alt=""
                />
              </div>
              <NuxtLink v-if="$i18n.locale === 'en'" :to="'/vi' + linkPath">
                <h4 id="vietnamese">Vietnamese</h4>
              </NuxtLink>
              <NuxtLink v-else to="linkPath">
                <h4 id="vietnamese">Vietnamese</h4>
              </NuxtLink>
            </div>
            <div class="flex items-center">
              <div class="w-[14px] h-[16px] mr-[14px]">
                <img
                  id="english-icon"
                  class="hidden"
                  src="../assets/img/plane.svg"
                  alt=""
                />
              </div>
              <NuxtLink v-if="$i18n.locale === 'en'" :to="linkPath">
                <h4 id="english">English</h4>
              </NuxtLink>
              <NuxtLink v-else :to="linkPath.substring(3, linkPath.length)">
                <h4 id="english">English</h4>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div>
          <h4 class="h-footer mb-[15px]">Product</h4>
          <div class="flex space-x-[14px]">
            <img src="../assets/img/   .svg" alt="" />
            <ul class="text-footer">
              <li>Whitehub</li>
              <li>Endpoint Security</li>
              <li>Web Protection</li>
              <li>Data Protection</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="h-footer mb-[15px]">Resources</h4>
          <div class="flex space-x-[14px]">
            <img src="../assets/img/     .svg" alt="" />
            <ul class="text-footer">
              <li>{{ $t('common.data_protection') }}</li>
              <li>{{ $t('common.cyber_attack') }}</li>
              <li>{{ $t('common.risk') }}</li>
              <li>Case study</li>
              <li>{{ $t('common.report') }}</li>
              <li>{{ $t('common.document') }}</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="h-footer mb-[15px]">Company</h4>
          <div class="flex space-x-[14px]">
            <img src="../assets/img/      .svg" alt="" />
            <ul class="text-footer">
              <li>{{ $t('common.about_us') }}</li>
              <li>{{ $t('common.newspaper') }}</li>
              <li>{{ $t('common.technology_blog') }}</li>
              <li>{{ $t('common.recruitment') }}</li>
              <li>{{ $t('common.privacy_and_terms') }}</li>
              <li>{{ $t('common.report_security_flaw') }}</li>
              <li>{{ $t('common.contact') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="
          flex
          justify-between
          mt-[46px]
          border-t-[1px] border-[#FFFFFF]
          h-[45px]
        "
      >
        <div class="hidden my-auto space-x-[10px] sm:flex">
          <img src="../assets/img/facebook-logo.svg" alt="" class="h-[30px]" />
          <img src="../assets/img/facebook-logo.svg" alt="" class="h-[30px]" />
          <img src="../assets/img/facebook-logo.svg" alt="" class="h-[30px]" />
          <img src="../assets/img/facebook-logo.svg" alt="" class="h-[30px]" />
        </div>
        <div
          class="font-light text-[12px] leading-[15px] text-[#FFFFFF] my-auto"
        >
          Copyright © 2018 CyStack Security. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linkPath: '',
    }
  },
  mounted() {
    this.linkPath = window.location.pathname;
    if (this.linkPath.includes('vi')) {
      document.getElementById('vietnamese').classList.add('font-bold')
      document.getElementById('vietnamese-icon').classList.remove('hidden')
    } else {
      document.getElementById('english').classList.add('font-bold')
      document.getElementById('english-icon').classList.remove('hidden')
    }
  },


}
</script>