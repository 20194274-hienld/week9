<template>
  <div class="font-Mulish relative">
    <!-- Mobile -->
    <div id="mobile-nav" class="w-auto px-[25px] pt-[25px] pb-[30px] hidden">

      <div class="flex justify-between mb-[50px]">
        <a href="#">
          <img src="../assets/img/Object.svg" class="w-[114px]">
        </a>
        <img src="../assets/img/close.svg" class="cursor-pointer" @click="toggleTypeScreen">
      </div>

      <ul id="nav-moblie" class="space-y-[30px]">
        <li id="platform-mobile">
          <a href="#" @click="toggleMoblie('platform-mobile')"><span class="extent-h3-mobile">Platform</span>
          <img src="../assets/img/down.svg" class="inline ml-[10px]">
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]">
          </a>
          <ul class="mt-[18px] ml-[20px] space-y-[18px] hidden">
            <li class="extent-h3-mobile-onclick w-fit">What is CyStack Platform?</li>
            <li class="extent-h3-mobile-onclick w-fit">What are the benefits?</li>
            <li class="extent-h3-mobile-onclick w-fit">Why security platform?</li>
            <li class="extent-h3-mobile-onclick w-fit">A look into CyStack Apps</li>
            <li class="extent-h3-mobile-onclick w-fit">FAQ</li>
          </ul>
        </li>
        <li class="extent-h3-mobile">
          <a href="#">Apps
          <img src="../assets/img/down.svg" class="inline ml-[10px]">
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]">
        </a></li>
        <li class="extent-h3-mobile">
          <a href="#">Solutions
          <img src="../assets/img/down.svg" class="inline ml-[10px]">
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]">
        </a></li>
        <li class="extent-h3-mobile">
          <a href="#">More
          <img src="../assets/img/down.svg" class="inline ml-[10px]">
          <img src="../assets/img/hover-blue.svg" class="hidden ml-[10px]">
        </a></li>
      </ul>

      <div class="fixed bottom-0 bg-[#FFF] z-10 grid w-full px-[25px] pb-[30px] left-0">
        <a class="extent-mobile-button block mx-auto mb-[22px]">Log in</a>
        <button class="extent-mobile-button h-[44px] text-[#FFFFFF] bg-[#0266F9] rounded-[5px]">Get Started</button>
      </div>

    </div>

    <div id="large-screen">

      <!-- header -->
      <nav class="container mx-auto px-5 lg:px-10 lg:w-[1190px]">
        <div
          class="flex items-center justify-between h-nav border-b border-linecolor">
          <div class="flex h-[101%] items-center">
            <a class="mr-2" href="#">
              <!-- Logo -->
              <img src="../assets/img/Object.svg" alt="" />
            </a>
            <div class="hidden md:flex space-x-7 ml-[87px] top-0 bottom-0 h-full">
              <!-- Menu Items -->
              <a href="#" class="nav-font" @mouseover="displayElementNav('platform-extent')" @mouseleave="hiddenElementNav('platform-extent')">Platform</a>
              <a href="#" class="nav-font" @mouseover="displayElementNav('apps-extent')" @mouseleave="hiddenElementNav('apps-extent')">Apps</a>
              <a href="#" class="nav-font" @mouseover="displayElementNav('solutions-extent')" @mouseleave="hiddenElementNav('solutions-extent')">Solutions</a>
              <a href="#" class="nav-font" @mouseover="displayElementNav('more-extent')" @mouseleave="hiddenElementNav('more-extent')">More</a>
            </div>
          </div>
          <!-- Button -->
          <a class="hidden md:block font-bold leading-19px text-15px text-primary" href="#" >Sign in</a >

          <!-- Bar button -->
          <button id="menu-btn" class="ml-auto md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click="toggleTypeScreen">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      <div id="nav-extent" class="absolute bg-[#FFFFFF] w-full z-10 drop-shadow-lg" @mouseover="hoverBackground" @mouseleave="leaveBackground">
        <!-- Platform -->
        <div id="platform-extent" class="container my-[30px] hidden mx-auto h-[265px] lg:w-[1190px] px-[40px]">
          <div class="">
            <img src="../assets/img/exten.svg" />
            <p class="exten-p max-w-[300px] mt-[30px]"> 
              There are many variations of passsages <br>
              of Lorem Ipsum available, but the <br>
              majority have suffered.
            </p>
          </div>
          <div id="exten-line"></div>
          <div>
            <h2 class="exten-h2 mb-[10px]">ABOUT CYSTACK PLATFORM</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">What is Cystack Platform?</a></li>
              <li><a class="exten-h3" href="#">What are the benefits?</a></li>
              <li><a class="exten-h3" href="#">Why security platform?</a></li>
              <li><a class="exten-h3" href="#">A look into CyStack Apps</a></li>
              <li><a class="exten-h3" href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <!-- Apps -->
        <div id="apps-extent" class="container my-[30px] hidden mx-auto h-[265px] lg:w-[1190px] pl-[40px]">
          <div class="mr-5">
            <h2 class="exten-h2 mb-[10px]">Asset Management</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">Asset Inventory</a></li>
              <li><a class="exten-h3" href="#">Certificate Inventory</a></li>
            </ul>
          </div>
          
          <div id="exten-line"></div>
          <div class="mr-5">
            <h2 class="exten-h2 mb-[10px]">IT Security</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">WhiteHub Bug Bounty</a></li>
              <li><a class="exten-h3" href="#">Web Scanning</a></li>
              <li><a class="exten-h3" href="#">Malware Detection</a></li>
              <li><a class="exten-h3" href="#">Vulnerability Management</a></li>
              <li><a class="exten-h3" href="#">Endpoint Detection & Response</a></li>
            </ul>
          </div>
          <div id="exten-line"></div>
          <div>
            <h2 class="exten-h2 mb-[10px]">Compliance</h2>
            <a class="exten-h3" href="#">Policy Compliance</a>
          </div>
          <div class="hidden lg:block background-exten absolute right-0 self-center h-[325px] w-[395px] pl-[40px] pt-[30px]">
            <h2 class="exten-h2-blue mb-2">Coming soon</h2>
            <p class="exten-p mb-[30px]">There are many variations of passages <br>
              of Lorem Ipsum available, but the <br>
              majority have suffered.</p>
            <img src="../assets/img/exten.svg" alt="">
          </div>
        </div>

        <!-- Solutions -->
        <div id="solutions-extent" class="container my-[30px] hidden mx-auto h-[265px] lg:w-[1190px] pl-[40px]">
          <div class="mr-[50px]">
            <h2 class="exten-h2 mb-[10px]">Security Assessment</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">Pentest Audit</a></li>
              <li><a class="exten-h3" href="#">Network Assessment</a></li>
              <li><a class="exten-h3" href="#">Crowdsourced Pentest</a></li>
              <li><a class="exten-h3" href="#">Application Assessment</a></li>
              <li><a class="exten-h3" href="#">Security Questionaires</a></li>
            </ul>
          </div>
          <div id="exten-line"></div>
          <div>
            <h2 class="exten-h2 mb-[10px]">Managed Security Services</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">Security Monitoring</a></li>
              <li><a class="exten-h3" href="#">Website Security</a></li>
              <li><a class="exten-h3" href="#">Mobile App Security</a></li>
              <li><a class="exten-h3" href="#">SaaS Security</a></li>
              <li><a class="exten-h3" href="#">Server Security</a></li>
              <li><a class="exten-h3" href="#">Managed Bug Bounty</a></li>
            </ul>
          </div>

          <div class="background-exten absolute right-0 self-center h-[325px] w-[395px] pl-[40px] pt-[30px]">
            <h2 class="exten-h2 mb-2">free demo</h2>
            <h2 class="font-Archivo font-bold text-[16px] leading-[22px] text-[#031B4E]">Lorem Ipsum available</h2>
            <p class="font-Montserrat font-normal text-sm leading-[26px] mb-[5px] text-[#79809B]">
              It is a long established fact that a reader will <br>
              be distracted by the readable content of a <br>
              page when looking at its layout.</p>
            <a href="#" class="font-Archivo font-bold text-[16px] leading-[20px] text-[#0056F7] mt-[10px] flex"> 
              <img class="mr-[8px]" src="../assets/img/rightnow.svg"/>
              <p>Book a call</p>
            </a>
          </div>
        </div>

        <!-- More -->
        <div
          id="more-extent"
          class="container hidden my-[30px] mx-auto h-[265px] lg:w-[1190px] pl-[40px]">
          <div class="mr-[125px]">
            <h2 class="exten-h2 mb-[10px]">company</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">About us</a></li>
              <li><a class="exten-h3" href="#">Team</a></li>
              <li><a class="exten-h3" href="#">Press Release</a></li>
              <li><a class="exten-h3" href="#">Research</a></li>
              <li><a class="exten-h3" href="#">Blog</a></li>
              <li><a class="exten-h3" href="#">Jobs</a></li>
            </ul>
          </div>
          <div id="exten-line"></div>
          <div class="mr-[104px]">
            <h2 class="exten-h2 mb-[10px]">Customer</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">Case study</a></li>
              <li><a class="exten-h3" href="#">Our Customers</a></li>
            </ul>
          </div>
          <div id="exten-line"></div>
          <div class="mr-[89px]">
            <h2 class="exten-h2 mb-[10px]">partnership</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">MSSP</a></li>
              <li><a class="exten-h3" href="#">Become a Partner</a></li>
            </ul>
          </div>
          <div id="exten-line"></div>
          <div>
            <h2 class="exten-h2 mb-[10px]">Support</h2>
            <ul class="space-y-[18px]">
              <li><a class="exten-h3" href="#">Trainning</a></li>
              <li><a class="exten-h3" href="#">Documents</a></li>
              <li><a class="exten-h3" href="#">Discuss</a></li>
              <li><a class="exten-h3" href="#">Technical Support</a></li>
              <li><a class="exten-h3" href="#">Send Ticket</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- cloud security -->
      <div class="container relative px-5 mx-auto hidden items-center justify-between h-2.25 md:flex mt-[15px] lg:px-10 lg:w-[1190px]">
        <div class="flex relative">
          <div>
            <a class="font-bold text-[20px] leading-[25px] text-[#253858]" href="#">Cloud Security</a>
          </div>
          <div class="flex space-x-6 ml-[51px] top-0 bottom-0">
            <a href="#" class="nav-font">Features</a>
            <a href="#" class="nav-font">Pricing</a>
          </div>
        </div>

        <a class="btn flex" href="#">Start 7 days free trial</a>
      </div>

      <!-- Title -->
      <div class="container text-center mt-[70px] mx-auto mb-[50px]">
        <h1 class="title">Simple, predictable pricing</h1>
        <h2 class="font-light text-[18px] leading-[28px] text-[#253858]">
          Always know what you’ll pay with monthly caps
        </h2>
      </div>

      <!-- Price package -->
      <section class="bg-[#F5F5FA]">
        <div class="container mx-auto block md:px-10 md:flex md:justify-between md:h-[433px] md:w-[1120px]">
          <!-- Package 1 -->
          <div
            class=" item-block w-auto relative mt-[20px] mx-auto md:mx-[24px] md:mt-[50px]">
            <h2 class="title-package">$0/MONTH</h2>
            <h1 class=" font-bold text-[28px] leading-[35px] text-[#113F67] mt-[30px] mb-[5px]">
              Free
            </h1>
            <p
              class="
                px-[10px]
                max-w-[295px]
                mx-auto
                font-normal
                text-[12px]
                leading-18px
                text-[#7A90AC]
                mb-[25px]
              "
            >
              For companies requiring enterprise-grade security, performance, &
              emergency support.
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Full standard features</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">7 days of use</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Unlimited team members</div>
              </div>
            </div>

            <a href="#" class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >Start 7 days free trial</a
            >
          </div>

          <!-- Package 2 -->
          <div
            class="
              item-block
              relative
              mt-[20px]
              mx-auto
              md:mx-[24px] md:mt-[50px]
            "
          >
            <h2 class="title-package">PAY AS YOU GO</h2>
            <h1
              class="
                font-bold
                text-[28px]
                leading-[35px]
                text-[#113F67]
                mt-[30px]
                mb-[5px]
              "
            >
              Standard
            </h1>
            <p
              class="
                px-[10px]
                max-w-[295px]
                mx-auto
                font-normal
                text-[12px]
                leading-18px
                text-[#7A90AC]
                mb-[25px]
              "
            >
              For individuals and businesses requiring advanced security,
              performance, and prioritized support.
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Full standard features</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Unlimited time of use</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Unlimited team members</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">24x7x365 chat support</div>
              </div>
            </div>

            <a href="#" class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >Sign Up</a
            >
          </div>

          <!-- Package 3 -->
          <div
            class="
              item-block
              relative
              mt-[20px]
              mx-auto
              md:mx-[24px] md:mt-[50px]
            "
          >
            <h2 class="title-package">request quote</h2>
            <h1 class="font-bold text-[28px] leading-[35px] text-[#113F67] mt-[30px] mb-[5px]">
              Enterprise
            </h1>
            <p
              class="
                px-[10px]
                max-w-[295px]
                mx-auto
                font-normal
                text-[12px]
                leading-18px
                text-[#7A90AC]
                mb-[25px]
              "
            >
              For companies requiring enterprise-grade security, performance, &
              emergency support.
            </p>

            <!-- Benefits package -->
            <div class="w-[213px] mx-auto space-y-[8px]">
              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Full standard features</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Requested features</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Unlimited time of use</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">Unlimited team members</div>
              </div>

              <div
                class="
                  flex
                  fel-col
                  font-normal
                  text-sm
                  leading-[24px]
                  text-[#113F67]
                "
              >
                <img src="../assets/img/checkicon.svg" alt="" />
                <div class="ml-[10px]">24x7x365 chat support</div>
              </div>
            </div>

            <a href="#" class="btn absolute mx-auto left-0 right-0 bottom-[30px]"
              >Contact</a
            >
          </div>
        </div>
      </section>

      <!-- Detail pricing -->
      <section class="container text-center mx-auto mt-[244px] md:w-[920px]">
        <h1 class="title mb-[40px]">Pay as you go</h1>
        <div class="flex justify-center">
          <div class="relative hidden md:block">
            <div class="h-[330px] border-l-[3px] border-[#E4E7EC] absolute"></div>
            <div class="text-left relative">
              <a class="service" href="#">Web Appplication</a>
              <a class="service" href="#">AWS Cloud</a>
              <a class="service" href="#">Google Cloud</a>
              <a class="service" href="#">Microsoft Azure</a>
            </div>
          </div>

          <div class="space-y-[70px] px-[20px] md:px-[0] xs:w-full ">
            <!-- Card -->
            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img class="package-icon" src="../assets/img/www.svg" alt="" />
                  <div class="my-0 font-bold text-[28px] leading-[40px] text-[#6D4BFF] ml-[14px]">
                    Web application
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-end
                    font-bold
                    text-[20px]
                    leading-[25px]
                    text-[#6D4BFF]
                  "
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="
                  text-end
                  font-light
                  text-[14px]
                  leading-[22px]
                  text-[#253858]
                  mt-[5px]
                  mb-[25px]
                "
              >
                (per website per moth, VAT included)
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px]"
              >
                <div
                  class="
                    flex
                    justify-between
                    w-auto
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Uptime Monitor</div>
                  </div>
                  <div class="line-dot"></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                    w-full
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Vulnerability audit</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Blacklisted & hacked</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">DNS Changed</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Content Changed</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">HTTPS Expried</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img class="package-icon" src="../assets/img/www.svg" alt="" />
                  <div
                    class="
                      my-0
                      font-bold
                      text-[28px]
                      leading-[40px]
                      text-[#6D4BFF]
                      ml-[14px]
                    "
                  >
                    AWS Cloud
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-end
                    font-bold
                    text-[20px]
                    leading-[25px]
                    text-[#6D4BFF]
                  "
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="
                  text-end
                  font-light
                  text-[14px]
                  leading-[22px]
                  text-[#253858]
                  mt-[5px]
                  mb-[25px]
                "
              >
                (per website per moth, VAT included)
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px]"
              >
                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Uptime Monitor</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Vulnerability audit</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Blacklisted & hacked</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">DNS Changed</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img class="package-icon" src="../assets/img/www.svg" alt="" />
                  <div
                    class="
                      my-0
                      font-bold
                      text-[28px]
                      leading-[40px]
                      text-[#6D4BFF]
                      ml-[14px]
                    "
                  >
                    Google Cloud
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-end
                    font-bold
                    text-[20px]
                    leading-[25px]
                    text-[#6D4BFF]
                  "
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="
                  text-end
                  font-light
                  text-[14px]
                  leading-[22px]
                  text-[#253858]
                  mt-[5px]
                  mb-[25px]
                "
              >
                (per website per moth, VAT included)
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px]"
              >
                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Uptime Monitor</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Vulnerability audit</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Blacklisted & hacked</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <div class="flex">
                  <img class="package-icon" src="../assets/img/www.svg" alt="" />
                  <div
                    class="
                      my-0
                      font-bold
                      text-[28px]
                      leading-[40px]
                      text-[#6D4BFF]
                      ml-[14px]
                    "
                  >
                    Microsoft Azure
                  </div>
                </div>
                <div
                  class="
                    flex
                    items-end
                    font-bold
                    text-[20px]
                    leading-[25px]
                    text-[#6D4BFF]
                  "
                >
                  = 300.000đ ($11)
                </div>
              </div>
              <div
                class="
                  text-end
                  font-light
                  text-[14px]
                  leading-[22px]
                  text-[#253858]
                  mt-[5px]
                  mb-[25px]
                "
              >
                (per website per moth, VAT included)
              </div>
              <!-- List pricing -->
              <div
                class="bg-[#F5F5FA] space-y-[14px] pt-[43px] pb-[40px] px-[33px]"
              >
                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Uptime Monitor</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">75.000 ($3)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Vulnerability audit</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">100.000 ($4)</h3>
                </div>

                <div
                  class="
                    flex
                    justify-between
                    w-full
                    font-normal
                    text-[18px]
                    leading-[26px]
                    text-[#253858]
                    relative
                  "
                >
                  <div class="flex fel-col">
                    <img src="../assets/img/checkicon.svg" alt="" />
                    <div class="ml-[15px]">Blacklisted & hacked</div>
                  </div>
                  <div
                    class="line-dot"
                  ></div>
                  <h3 class="right-0 absolute">25.000 ($1)</h3>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div
                class="
                  w-[230px]
                  font-normal
                  text-[18px]
                  leading-[26px]
                  text-[#253858] text-left
                "
              >
                Sign up for 7 days trial and pay-as-you-go later.
              </div>
              <a
                href="#"
                class="
                  w-[170px]
                  h-[46px]
                  bg-[#6D4BFF]
                  rounded
                  flex
                  justify-center
                  items-center
                  text-[#FFFFFF]
                  leading-[20px]
                  text-[16px]
                  font-bold
                "
                >Sign up</a
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
          Over 100+ inovative business trust CyStack
        </div>
        <div class="mt-[53px]">
          <!-- <div class="flex justify-between mx-auto w-[1111px] mt-[53px] mb-[35px]"> -->
          <div
            class="
              items-center
              hidden
              gap-1
              w-[calc(100%-100px)]
              justify-items-center
              mb-[35px]
              mx-auto
              md:grid md:grid-cols-3
              lg:grid-cols-6 lg:w-[1111px]
            "
          >
            <img src="../assets/img/Bitmap-3.svg" alt="" />
            <img src="../assets/img/Bitmap-2.svg" alt="" />
            <img src="../assets/img/Bitmap-5.svg" alt="" />
            <img src="../assets/img/Bitmap.svg" alt="" />
            <img src="../assets/img/Bitmap-4.svg" alt="" />
            <img src="../assets/img/Bitmap-1.svg" alt="" />
          </div>
          <div
            class="
              items-center
              hidden
              gap-1
              w-[calc(100%-100px)]
              justify-items-center
              mb-[35px]
              mx-auto
              md:grid md:grid-cols-3
              lg:grid-cols-5 lg:w-[937px]
            "
          >
            <img src="../assets/img/Bitmap-6.svg" alt="" />
            <img src="../assets/img/Bitmap-7.svg" alt="" />
            <img src="../assets/img/Bitmap-8.svg" alt="" />
            <img src="../assets/img/Bitmap-7.svg" alt="" />
            <img src="../assets/img/Bitmap-7.svg" alt="" />
          </div>
        </div>
      </section>

      <section class="h-[270px] background-beauty mt-[120px]">
        <div class="container items-center mx-auto text-center pt-[65px]">
          <div
            class="font-bold text-[48px] leading-[58px] text-[#FFFFFF] mb-[40px]"
          >
            Get started now.
          </div>
          <a class="btn1 mx-auto" href="#">Start 7 days free trial</a>
        </div>
      </section>

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
                Address: 3rd floor Bigwin Tower, Le <br />
                Van Luong, Hanoi, Vietnam <br />
                Email: contact@cystack.net <br />
                Phone: (+84) 247 109 9656
              </p>
              <div class="font-light text-[14px] leading-[27px] text-[#FFFFFF]">
                <div class="flex items-center">
                  <div class="w-[14px] h-[16px] mr-[14px]"><img id="vietnamese-icon" class="hidden" src="../assets/img/plane.svg" alt=""></div>
                  <a id="vietnamese" class="cursor-pointer" @click="choseVietNamese">Vietnamese</a>
                </div>
                <div class="flex items-center">
                  <div class="w-[14px] h-[16px] mr-[14px]"><img id="english-icon" src="../assets/img/plane.svg" alt=""></div>
                  <a id="english" class="font-bold cursor-pointer" @click="choseEnglish">English</a>
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
                  <li>Bảo vệ dữ liệu</li>
                  <li>Tấn công mạng</li>
                  <li>Rủi ro</li>
                  <li>Case study</li>
                  <li>Báo cáo</li>
                  <li>Tài liệu</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 class="h-footer mb-[15px]">Company</h4>
              <div class="flex space-x-[14px]">
                <img src="../assets/img/      .svg" alt="" />
                <ul class="text-footer">
                  <li>Giới thiệu</li>
                  <li>Báo chí</li>
                  <li>Blog kỹ thuật</li>
                  <li>Tuyển dụng</li>
                  <li>Chính sách & điều khoản</li>
                  <li>Thông báo lỗ hổng</li>
                  <li>Liên hệ</li>
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
            <div class="flex my-auto space-x-[10px]">
              <img
                src="../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
            </div>
            <div
              class="font-light text-[12px] leading-[15px] text-[#FFFFFF] my-auto"
            >
              Copyright © 2018 CyStack Security. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      display: 0,
      language: 1,
      typeScreen: true,
    };
  },
  methods: {
    toggleTypeScreen() {
      if (this.typeScreen) {
        this.typeScreen = false;
        document.getElementById('large-screen').classList.add('hidden');
        document.getElementById('mobile-nav').classList.remove('hidden');
      } else {
        this.typeScreen = true;
        document.getElementById('large-screen').classList.remove('hidden');
        document.getElementById('mobile-nav').classList.add('hidden');
      }
    },

    choseVietNamese() {
      if (this.language === 1) {
        document.getElementById('english').classList.remove('font-bold');
        document.getElementById('english-icon').classList.add('hidden');
        document.getElementById('vietnamese').classList.add('font-bold');
        document.getElementById('vietnamese-icon').classList.remove('hidden');
        this.language = 0;
      }
    },

    choseEnglish() {
      if (this.language === 0) {
        document.getElementById('english').classList.add('font-bold');
        document.getElementById('english-icon').classList.remove('hidden');
        document.getElementById('vietnamese').classList.remove('font-bold');
        document.getElementById('vietnamese-icon').classList.add('hidden');
        this.language = 1;
      }
    },

    hoverBackground() {
      switch (this.display) {
        case 1:
          document.getElementById('platform-extent').classList.remove('hidden');
          document.getElementById('platform-extent').classList.add('flex');
          break;
        case 2:
          document.getElementById('apps-extent').classList.remove('hidden');
          document.getElementById('apps-extent').classList.add('flex');
          break;
        case 3: 
          document.getElementById('solutions-extent').classList.remove('hidden');
          document.getElementById('solutions-extent').classList.add('flex');
          break;
        case 4: 
          document.getElementById('more-extent').classList.remove('hidden');
          document.getElementById('more-extent').classList.add('flex');
          break;
        default:
          this.leaveBackground();
      }
    },  

    leaveBackground() {
      if (document.getElementById('platform-extent').classList.contains('flex'))
        document.getElementById('platform-extent').classList.add('hidden');

      if (document.getElementById('apps-extent').classList.contains('flex'))
        document.getElementById('apps-extent').classList.add('hidden'); 

      if (document.getElementById('solutions-extent').classList.contains('flex'))
        document.getElementById('solutions-extent').classList.add('hidden');

      if (document.getElementById('more-extent').classList.contains('flex'))
        document.getElementById('more-extent').classList.add('hidden');  
    },

    displayElementNav(id) {
      const element = document.getElementById(id);
      element.classList.remove('hidden');
      element.classList.add('flex');
      if (id === 'platform-extent') this.display = 1;
      if (id === 'apps-extent') this.display = 2;
      if (id === 'solutions-extent') this.display = 3;
      if (id === 'more-extent') this.display = 4;
    },

    hiddenElementNav(id) {
      const element = document.getElementById(id);
      element.classList.add('hidden');
      element.classList.remove('flex')
    },

    toggleMoblie(option) {
      const images = document.getElementById(option).querySelectorAll("img")
      const title = document.getElementById(option).querySelector("a span");
      const elementChild = document.getElementById(option).querySelector("ul");
      if (elementChild.classList.contains('hidden')) {
        elementChild.classList.remove('hidden');
        title.classList.remove('extent-h3-mobile');
        title.classList.add('extent-h3-mobile-onclick');
        images[0].classList.add('hidden');
        images[1].classList.remove('hidden');
        images[1].classList.add('inline');
      } else {
        elementChild.classList.add('hidden');
        title.classList.add('extent-h3-mobile');
        title.classList.remove('extent-h3-mobile-onclick');
        images[1].classList.add('hidden');
        images[0].classList.remove('hidden');
        images[0].classList.add('inline');
      }
    }

  }
}
</script>

<style scoped>
.background-beauty {
  background-image: url('../assets/img/Path.svg'), url('../assets/img/Oval.svg'),
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