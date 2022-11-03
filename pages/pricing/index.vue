<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="font-Mulish relative">

    <div id="large-screen"> 
      <!-- navbar -->
      <div>
        <!-- Title -->
      <div class="container text-center mt-[70px] mx-auto mb-[50px]">
        <h1 class="title">{{ $t('cloud_pricing.title.first') }}</h1>
        <h2 class="font-light text-[18px] leading-[28px] text-[#253858]">
          {{ $t('cloud_pricing.title.explain') }}
        </h2>
      </div>

      <!-- Price package -->
      <section class="bg-[#F5F5FA]">
        <div
          class="container mx-auto block md:px-10 md:flex md:justify-between md:h-[433px] md:w-[1120px]"
        >
          <!-- Package 1 -->
          <div
            class="item-block w-auto relative mt-[20px] mx-auto md:mx-[24px] md:mt-[50px]"
          >
            <h2 class="title-package">
              $0/{{ $t('cloud_pricing.price_package.first.month') }}
            </h2>
            <h1
              class="font-bold text-[28px] leading-[35px] text-[#113F67] mt-[30px] mb-[5px]"
            >
              {{ $t('cloud_pricing.price_package.first.free') }}
            </h1>
            <p
              class="px-[10px] max-w-[295px] mx-auto font-normal text-[12px] leading-18px text-[#7A90AC] mb-[25px]"
            >
              {{ $t('cloud_pricing.price_package.first.content') }}
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.first') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.second') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.third') }}
                </div>
              </div>
            </div>

            <a
              href="#"
              class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >{{ $t('common.free_trial') }}</a
            >
          </div>

          <!-- Package 2 -->
          <div
            class="item-block relative mt-[20px] mx-auto md:mx-[24px] md:mt-[50px]"
          >
            <h2 class="title-package">PAY AS YOU GO</h2>
            <h1
              class="font-bold text-[28px] leading-[35px] text-[#113F67] mt-[30px] mb-[5px]"
            >
              {{ $t('cloud_pricing.price_package.second.standard') }}
            </h1>
            <p
              class="px-[10px] max-w-[295px] mx-auto font-normal text-[12px] leading-18px text-[#7A90AC] mb-[25px]"
            >
              {{ $t('cloud_pricing.price_package.second.content') }}
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.first') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.second.benefits.first') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.third') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.second.benefits.second') }}
                </div>
              </div>
            </div>

            <a
              href="#"
              class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >{{ $t('common.sign_up') }}</a
            >
          </div>

          <!-- Package 3 -->
          <div
            class="item-block relative mt-[20px] mx-auto md:mx-[24px] md:mt-[50px]"
          >
            <h2 class="title-package">
              {{ $t('cloud_pricing.price_package.third.request_qoute') }}
            </h2>
            <h1
              class="font-bold text-[28px] leading-[35px] text-[#333536] mt-[30px] mb-[5px]"
            >
              {{ $t('cloud_pricing.price_package.third.enterprise') }}
            </h1>
            <p
              class="px-[10px] max-w-[295px] mx-auto font-normal text-[12px] leading-18px text-[#7A90AC] mb-[25px]"
            >
              {{ $t('cloud_pricing.price_package.third.content') }}
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.third.benefits.first') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.third.benefits.second') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.third.benefits.first') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.first.benefits.third') }}
                </div>
              </div>

              <div
                class="flex fel-col font-normal text-sm leading-[24px] text-[#113F67]"
              >
                <img src="../../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">
                  {{ $t('cloud_pricing.price_package.second.benefits.second') }}
                </div>
              </div>
            </div>

            <a
              href="#"
              class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >{{ $t('common.contact') }}</a
            >
          </div>
        </div>
      </section>

      <!-- Detail pricing -->
      <section class="container text-center mx-auto mt-[244px] md:w-[920px]">
        <h1 class="title mb-[40px]">Pay as you go</h1>
        <div class="flex justify-center relative">
          <div class="h-fit hidden md:flex md:sticky md:top-5">
            <div class="h-[330px] border-l-[3px] border-[#E4E7EC]"></div>
            <div class="text-left relative h-fit">
              <a class="service" href="#web-application">Web Appplication</a>
              <a class="service" href="#aws-cloud">AWS Cloud</a>
              <a class="service" href="#google-cloud">Google Cloud</a>
              <a class="service" href="#microsoft-azure">Microsoft Azure</a>
            </div>
          </div>

          <div class="space-y-[70px] px-[20px] md:px-[0] xs:w-full">
            <!-- Card -->
            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img
                    class="package-icon"
                    src="../../assets/img/www.svg"
                    alt=""
                  />
                  <div
                    id="web-application"
                    class="my-0 font-bold text-[20px] leading-[40px] text-[#6D4BFF] ml-[14px] sm:text-[28px]"
                  >
                    Web application
                  </div>
                </div>
                <div
                  class="flex font-bold text-[20px] leading-[25px] text-[#6D4BFF] items-center"
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="text-end font-light text-[14px] leading-[22px] text-[#253858] mt-[5px] mb-[25px]"
              >
                ({{ $t('cloud_pricing.detail_pricing.per_website') }}
                {{ $t('cloud_pricing.detail_pricing.per_month') }},
                {{ $t('cloud_pricing.detail_pricing.VAT_included') }})
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px] text-[15px] sm:text-[18px]"
              >
                <div
                  class="flex justify-between w-auto font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.uptime_monitor') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="flex justify-between font-normal leading-[26px] text-[#253858] relative w-full"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t('cloud_pricing.detail_pricing.vulnerability_audit')
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t(
                          'cloud_pricing.detail_pricing.blacklisted_and_hacked'
                        )
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.DNS_changed') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.content_changed') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.HTTPS_expried') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img
                    class="package-icon"
                    src="../../assets/img/www.svg"
                    alt=""
                  />
                  <div
                    id="aws-cloud"
                    class="my-0 font-bold text-[20px] leading-[40px] text-[#6D4BFF] ml-[14px] sm:text-[28px]"
                  >
                    AWS Cloud
                  </div>
                </div>
                <div
                  class="flex font-bold text-[20px] leading-[25px] text-[#6D4BFF] items-center"
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="text-end font-light text-[14px] leading-[22px] text-[#253858] mt-[5px] mb-[25px]"
              >
                ({{ $t('cloud_pricing.detail_pricing.per_website') }}
                {{ $t('cloud_pricing.detail_pricing.per_month') }},
                {{ $t('cloud_pricing.detail_pricing.VAT_included') }})
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px] text-[15px] sm:text-[18px]"
              >
                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.uptime_monitor') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t('cloud_pricing.detail_pricing.vulnerability_audit')
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t(
                          'cloud_pricing.detail_pricing.blacklisted_and_hacked'
                        )
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.DNS_changed') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img
                    class="package-icon"
                    src="../../assets/img/www.svg"
                    alt=""
                  />
                  <div
                    id="google-cloud"
                    class="my-0 font-bold text-[20px] leading-[40px] text-[#6D4BFF] ml-[14px] sm:text-[28px]"
                  >
                    Google Cloud
                  </div>
                </div>
                <div
                  class="flex items-center font-bold text-[20px] leading-[25px] text-[#6D4BFF]"
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="text-end font-light text-[14px] leading-[22px] text-[#253858] mt-[5px] mb-[25px]"
              >
                ({{ $t('cloud_pricing.detail_pricing.per_website') }}
                {{ $t('cloud_pricing.detail_pricing.per_month') }},
                {{ $t('cloud_pricing.detail_pricing.VAT_included') }})
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px] text-[15px] sm:text-[18px]"
              >
                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.uptime_monitor') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t('cloud_pricing.detail_pricing.vulnerability_audit')
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t(
                          'cloud_pricing.detail_pricing.blacklisted_and_hacked'
                        )
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img
                    class="package-icon"
                    src="../../assets/img/www.svg"
                    alt=""
                  />
                  <div
                    id="microsoft-azure"
                    class="my-0 font-bold text-[20px] leading-[40px] text-[#6D4BFF] ml-[14px] sm:text-[28px]"
                  >
                    Microsoft Azure
                  </div>
                </div>
                <div
                  class="flex font-bold text-[20px] leading-[25px] text-[#6D4BFF] items-center"
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="text-end font-light text-[14px] leading-[22px] text-[#253858] mt-[5px] mb-[25px]"
              >
                ({{ $t('cloud_pricing.detail_pricing.per_website') }}
                {{ $t('cloud_pricing.detail_pricing.per_month') }},
                {{ $t('cloud_pricing.detail_pricing.VAT_included') }})
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px] text-[15px] sm:text-[18px]"
              >
                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{ $t('cloud_pricing.detail_pricing.uptime_monitor') }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t('cloud_pricing.detail_pricing.vulnerability_audit')
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="flex justify-between w-full font-normal leading-[26px] text-[#253858] relative"
                >
                  <div class="flex fel-col">
                    <img src="../../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">
                      {{
                        $t(
                          'cloud_pricing.detail_pricing.blacklisted_and_hacked'
                        )
                      }}
                    </div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div
                class="w-auto font-normal text-[13px] leading-[26px] text-[#253858] text-left sm:w-[230px] sm:text-[18px]"
              >
                {{ $t('cloud_pricing.detail_pricing.note') }}
              </div>
              <a
                href="#"
                class="w-[170px] h-[46px] bg-[#6D4BFF] rounded flex justify-center items-center text-[#FFFFFF] leading-[20px] text-[16px] font-bold"
                >{{ $t('common.sign_up') }}</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Business partner -->
      <section class="container mx-auto mt-[137px]">
        <div
          class="text-center font-bold text-[28px] leading-[40px] text-[#253858]"
        >
          {{ $t('cloud_pricing.title.third') }}
        </div>
        <div class="mt-[53px]">
          <!-- <div class="flex justify-between mx-auto w-[1111px] mt-[53px] mb-[35px]"> -->
          <div
            id="logo-partner"
            class="hidden w-[calc(100%-100px)] justify-center mb-[35px] mx-auto sm:flex sm:flex-wrap lg:w-[1111px]"
          >
            <img src="../../assets/img/Bitmap-3.svg" alt="" />
            <img src="../../assets/img/Bitmap-2.svg" alt="" />
            <img src="../../assets/img/Bitmap-5.svg" alt="" />
            <img src="../../assets/img/Bitmap.svg" alt="" />
            <img src="../../assets/img/Bitmap-4.svg" alt="" />
            <img src="../../assets/img/Bitmap-1.svg" alt="" />
            <img src="../../assets/img/Bitmap-6.svg" alt="" />
            <img src="../../assets/img/Bitmap-7.svg" alt="" />
            <img src="../../assets/img/Bitmap-8.svg" alt="" />
            <img src="../../assets/img/Bitmap-6.svg" alt="" />
            <img src="../../assets/img/Bitmap-7.svg" alt="" />
            <img src="../../assets/img/Bitmap-7.svg" alt="" />
          </div>
        </div>
      </section>

      <section class="h-[270px] background-beauty mt-[120px]">
        <div class="container items-center mx-auto text-center pt-[65px]">
          <div
            class="font-bold text-[30px] leading-[58px] text-[#FFFFFF] mb-[40px] md:text-[48px]"
          >
            {{ $t('cloud_pricing.title.fourth') }}
          </div>
          <a class="btn1 mx-auto" href="#">{{ $t('common.free_trial') }}</a>
        </div>
      </section>
      </div>

    </div>
  </div>
  <!--eslint-enable-->
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      display: 0,
      language: '',
      typeScreen: true,
      pathnameUrl: '',
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
  },
}
</script>

<style scoped>
.background-beauty {
  background-image: url('../../assets/img/Path.svg'),
    url('../../assets/img/Oval.svg'),
    linear-gradient(51.38deg, #6d4bff 15.71%, #d62196 300%);
  background-repeat: no-repeat, no-repeat;
  background-position: left top, right bottom;
}

#exten-line {
  width: 1px;
  height: 265px;
  background-color: #e5e6ea;
  margin: 0 40px;
}

.background-exten {
  background-image: linear-gradient(#f3f5f8 0%, #fff 100%);
}

#logo-partner img {
  padding: 25px 20px;
}

#nav-moblie li:hover .blue {
  display: inline;
}

#nav-moblie li:hover .basic {
  display: none;
}

#nav-extent li {
  line-height: initial;
}
</style>
