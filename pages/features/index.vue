<template>
  <div class="font-Mulish">
    <section class="bg-[#353B6B] h-[55px] flex relative items-center">
      <div class="container mx-auto px-10 w-[1190px] flex">
        <img src="../../assets/img/NEW.svg" alt="#" class="mr-[10px]" />
        <p>
          <span class="text-notification font-bold">Vuln-feed:</span>
          <span class="text-notification font-light"
            >Những lỗ hổng mới nhất ảnh hưởng tới website & server mà hệ thống
            có thể phát hiện</span
          >
          <a href="#" class="text-notification font-bold underline ml-[25px]"
            >View more</a
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
        src="../../assets/img/featurebg.svg"
        alt=""
        class="object-left h-[600px] object-cover top-0 left-0 -z-10 md:w-full md:h-full"
      />
      <img
        src="../../assets/img/featurebg1.svg"
        alt=""
        class="object-left h-[600px] object-cover absolute top-[-10px] left-0  md:w-full md:h-full"
      />
      <div class="absolute top-0 w-full">
        <nav class="container mx-auto px-10 lg:w-[1190px]">
          <div class="flex items-center justify-between h-nav border-b border-linecolor">
            <div class="flex relative z-10">
              <a href="#">
                <!-- Logo -->
                <img src="../../assets/img/logowhite.svg" alt="" />
              </a>
              <div class="hidden md:flex space-x-7 items-center ml-[87px]">
                <!-- Menu Items -->
                <a href="#" class="nav-font-features">Platform</a>
                <a href="#" class="nav-font-features">Apps</a>
                <a href="#" class="nav-font-features">Solutions</a>
                <a href="#" class="nav-font-features">More</a>
              </div>
            </div>
            <!-- Button -->
            <div class="flex space-x-[25px] items-center z-10">
              <a href="#" class="nav-button-features uppercase">Đăng nhập</a>
              <a
                href="#"
                class="nav-button-features w-[130px] h-[38px] bg-[#09D0BD] uppercase rounded flex justify-center items-center" >Đăng ký</a>
            </div>
          </div>
        </nav>

        <!-- cloud security -->
        <div class="z-10 container relative mx-auto flex items-center justify-between h-2.25 mt-[15px] px-10 lg:w-[1190px]">
          <div class="flex relative">
            <a href="#">
              <img src="../../assets/img/cloudsec-logo.svg" alt="" />
            </a>
            <div class="flex space-x-6 items-center ml-[47px]">
              <a href="#" class="nav-font-features min-w-fit">Tính năng</a>
              <a href="#" class="nav-font-features min-w-fit">Bảng giá</a>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-[70px] flex px-[40px] inset-0 mx-auto absolute lg:w-[1190px] md:mt-0">
        <div class="max-w-[570px] text-[#FFFFFF] self-center">
          <h1 class="font-bold text-[48px] leading-[58px] mb-[20px]">
            Những tính năng tốt nhất xây dựng bởi chuyên gia hàng đầu
          </h1>
          <p class="font-normal text-[20px] leading-[32px] max-w-[532px]">
            Được thiết kế và duy trì bởi đội ngũ chuyên gia có nhiều kinh nghiệm
            tại CyStack Việt Nam, Cloud Security cung cấp những tính năng hữu
            dụng nhất để nâng cao bảo mật cho website, máy chủ web và dịch vụ
            đám mây.
          </p>
        </div>
        <div class="hidden w-[200px] mt-[100px] overflow-visible lg:flex">
          <img
            src="../../assets/img/img.svg"
            alt=""
            class="max-w-[670px]"
          />
        </div>
      </div>
      <!-- right-[45px] bottom-[-150px] -->
    </section>

    <h1 class="features-h1 max-w-[515px] mb-[40px]">
      Bảo mật website với Cloud Security
    </h1>

    <section class="container items-center mx-auto flex flex-col px-10 max-w-[1190px] md:flex-row">
      <div class="max-w-[540px] self-center md:mr-[30px] mb-[30px] md:w-1/2">
        <h2 class="features-h2 mb-[20px]">Quét lỗ hổng website</h2>
        <ul class="space-y-[15px] list-disc">
          <h3 class="features-p">
            Hệ thống tự động kiểm tra các lỗ hổng bảo mật nguy hiểm tồn tại 
            trên website.
          </h3>
          <li>
            <p class="features-p">
              Tính năng được phát triển và duy trì bởi các chuyên gia An 
              Ninh Mạng hàng đầu tại Việt Nam. CyStack nắm công nghệ 
              gốc và không phụ thuộc vào bên thứ ba.
            </p>
          </li>
          <li>
            <p class="features-p">
              CyStack sử dụng kỹ thuật Fuzzing kết hợp với việc phân loại, 
              xác định công nghệ web và các yếu tố liên quan đến hạ tầng 
              máy chủ để phát hiện các điểm yếu và nguy cơ gây mất an 
              toàn cho website.
            </p>
          </li>
          <li>
            <p class="features-p">
              <span class="features-p-highlight">Danh sách các lỗ hổng</span> được cập nhật liên tục.
            </p>
          </li>
        </ul>
      </div>
      <img src="../../assets/img/content1.svg" alt="" class="max-w-[499px] w-full md:w-1/2"/>
    </section>

    <section class="container items-center mx-auto flex flex-col-reverse px-10 max-w-[1190px] md:flex-row">
      <img src="../../assets/img/content3.svg" alt="" class="max-w-[511px] w-full md:w-1/2 md:mr-[60px]" />
      <div class="max-w-[540px] self-center mb-[30px] md:w-1/2">
        <h2 class="features-h2 mb-[20px]">Giám sát Uptime</h2>
        <ul class="space-y-[15px] list-disc">
          <h4 class="features-p">
            Hệ thống liên tục kiểm tra tình trạng hoạt động của website
            (UP/DOWN) và tốc độ truy cập web.
          </h4>
          <li>
            <p class="features-p">
              Cloud Security có thể kiểm tra khả năng truy cập website từ các IP
              tại Việt nam.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="container items-center mx-auto flex flex-col px-10 max-w-[1190px] md:flex-row">
      <div class="max-w-[540px] self-center mb-[30px] md:mr-[30px] md:w-1/2">
        <h2 class="features-h2 mb-5">Hacking monitoring</h2>
        <p class="features-p mb-5">
          Cảnh báo khi website bị tấn công xâm nhập.*<br>
          CyStack sử dụng cơ sở dữ liệu toàn cầu về tấn công mạng được
          thu thập từ <span class="features-p-highlight">CyStack Attack Map</span> để nhanh chóng phát hiện khi
          website bị tấn công.
        </p>
        <ul class="space-y-[15px] list-disc">
          <h2 class="features-p">Tăng cường bảo mật với các tính năng hỗ trợ:</h2>
          <li>
            <p class="features-p">
              <b>Blacklist monitoring:</b> Giám sát website khỏi cơ sở dữ liệu mã độc
              toàn cầu như Google Safe Browsing, McAfee, Norton Safe Web, Opera,
              PhishTank, Sucuri Labs, Yandex
            </p>
          </li>
          <li>
            <p class="features-p">
              <b>DNS monitoring:</b> Chống lại các tấn công chiếm đoạt tên miền và DNS
              Spoofing. Hỗ trợ cả IPv4 và IPv6.
            </p>
          </li>
          <li>
            <p class="features-p">
              <b>HTTPS monitor:</b> Dùng để xác định tình trạng hoạt động của chứng chỉ
              HTTPS trên website của bạn.
            </p>
          </li>
        </ul>

        <button class="mx-auto features-button mt-[45px] md:mx-0">Bảo mật website miễn phí</button>
      </div>
      <img src="../../assets/img/content2.svg" alt="" class="max-w-[541px] w-full md:w-1/2"/>
    </section>

    <section class="bg-[#F2F2F2] w-full mt-[100px]">
      <div class="container mx-auto max-w-[1190px] pt-[90px] pb-[100px]">

        <h1 class="features-h1">Bảo mật máy chủ</h1>
        <h4 class="features-p max-w-[770px] mx-auto text-center px-[20px] mt-[15px] mb-[35px]">
          Bảo mật máy chủ web và máy chủ dịch vụ là nhu cầu tất yếu của nhiều doanh nghiệp.
          Với CyStack Security, bạn có thể dễ dàng bảo mật cho server thông qua tính năng
          Security Monitoring - giám sát bảo mật máy chủ.
        </h4>
        <div class="container items-center mx-auto flex flex-col-reverse px-10 max-w-[1190px] md:flex-row">
          <img src="../../assets/img/content4.svg" alt="" class="max-w-[540px] w-full md:mr-[30px] md:w-1/2"/>
          <div class="max-w-[525px] self-center mr-[30px] mb-[30px] md:w-1/2">
            <h2 class="features-h2 mb-[8px]">Security monitoring</h2>
            <ul class="space-y-[15px] list-disc">
              <li>
                <p class="features-p">
                  Hệ thống kiểm tra định kỳ các lỗ hổng bảo mật nguy hiểm tồn
                  tại trên máy chủ.
                </p>
              </li>
              <li>
                <p class="features-p">
                  CyStack sử dụng kỹ thuật Fuzzing kết hợp với việc phân loại,
                  xác định công nghệ web và các yếu tố liên quan đến hạ tầng
                  máy chủ để phát hiện các điểm yếu và nguy cơ gây mất an 
                  toàn cho máy chủ.
                </p>
              </li>
              <li>
                <p class="features-p">
                  Tính năng này thích hợp cho các doanh nghiệp có số lượng 
                  máy chủ lớn và cần rà soát để đảm bảo an ninh cho hệ thống 
                  liên tục và tự động.
                </p>
              </li>
              <li>
                <p class="features-p">
                  <span class="features-p-highlight">Danh sách các lỗ hổng</span> chúng tôi có thể nhận diện được cập 
                  nhật liên tục
                </p>
              </li>
              <li>
                <p class="features-p">
                  Chu kỳ quét là 1 lần/ngày.
                </p>
              </li>
            </ul>
            <button class="features-button mt-[45px] mx-auto md:mx-0">BÁO GIÁ CHO DOANH NGHIỆP</button>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto max-w-[1190px] px-10 pt-[80px]">
      <h1 class="features-h1 mb-[15px]">Quản lý bảo mật dịch vụ Cloud</h1>
      <p class="features-p max-w-[730px] mx-auto text-center mb-[30px]">
        Các dịch vụ Cloud như AWS, Google Cloud, Azure đang được sử dụng rất
        rộng rãi, tuy nhiên việc sử dụng không đúng cách dễ dẫn đến các lỗ hổng
        bảo mật và gây mất an toàn cho chính tài khoản và các dịch vụ được triển
        khai trên nền tảng Cloud này.
      </p>
      <div class="container items-center mx-auto flex flex-col px-10 w-full md:flex-row">
        <div class="max-w-[525px] self-center mb-[30px] md:mr-[87px] md:w-1/2">
          <h2 class="features-h2 mb-2">Cloud Audit</h2>
          <p class="features-p max-w-[525px] mb-[45px]">
            Tính năng Cloud Audit giúp kiểm tra các vấn đề bảo mật liên quan đến
            các dịch vụ đang được kích hoạt trong tài khoản cloud như AWS IAM,
            S3, EC2...<br />
            Việc kiểm tra được thực hiện theo bộ tiêu chuẩn an ninh của các nhà
            cung cấp dịch vụ cloud Amazon, Google, Microsoft và theo chuẩn của
            CyStack.<br />
            Chu kỳ quét là 1 lần/tuần
          </p>
          <button class="features-button mx-auto md:mx-0">ĐÁNH GIÁ HỆ THỐNG CỦA BẠN</button>
        </div>
        <img src="../../assets/img/content5.svg" alt="" class="max-w-[491px] w-full md:w-1/2" />
      </div>
    </section>

    <section class="container mx-auto max-w-[1190px] mt-[100px] mb-[80px]">
      <h1 class="features-h1 mb-[30px]">Cảnh báo bảo mật Email</h1>
      <div class="container items-center mx-auto flex flex-col-reverse px-10 w-full md:flex-row">
        <img src="../../assets/img/content6.svg" alt="" class="max-w-[505px] w-full md:mr-[65px] md:w-1/2" />
        <div class="features-p space-y-[15px] mb-[40px] max-w-[540px] self-center">
          <p class="features-p">
            Mỗi email của cá nhân/doanh nghiệp có thể được dùng để đăng ký cho
            rất nhiều dịch vụ khác nhau trên Internet. Nếu các dịch vụ này 
            bị tấn công, phát tán các thông tin nhạy cảm ra ngoài thì các tài 
            khoản liên quan đến email của bạn cũng sẽ bị ảnh hưởng, thậm 
            chí bị lộ password tương ứng.
          </p>
          <p class="features-p">
            Tính năng <b>Cảnh báo bảo mật Email</b> cho phép bạn theo dõi xem 
            email của mình có bị lộ trong các vụ tấn công hay không để có 
            biện pháp bảo đảm an toàn cho các tài khoản và thông tin quan 
            trọng.
          </p>
        </div>
      </div>
    </section>

    <section class="w-full bg-[#F5F5FA] pt-[80px] pb-[90px]">
      <div class="container max-w-[812px] px-[40px] mx-auto">
        <h1 class="features-h1 pb-[40px]">Những câu hỏi thường gặp</h1>
        <ol class="list-decimal space-y-[24px]">
          <div class="flex justify-between features-ol-section">
            <li>Target là gì?</li>
            <img src="../../assets/img/-.svg" alt="">
          </div>
          <p class="features-p">
            Trong Cloud Security, mỗi target là một đơn vị cần giám sát bảo mật. Bao gồm website,
            máy chủ, dịch vụ đám mây, email.</p>
          <hr/>

          <div class="flex justify-between features-ol-section">
            <li>Website target</li>
            <img src="../../assets/img/+.svg" alt="">
          </div>
          <hr/>

          <div class="flex justify-between features-ol-section">
            <li>Server target</li>
            <img src="../../assets/img/+.svg" alt="">
          </div>
          <hr/>

          <div class="flex justify-between features-ol-section">
            <li>Cloud target</li>
            <img src="../../assets/img/+.svg" alt="">
          </div>
          <hr/>

          <div class="flex justify-between features-ol-section">
            <li>Email target</li>
            <img src="../../assets/img/+.svg" alt="">
          </div>
          <hr/>

        </ol>
      </div>
    </section>

    <section class="h-[330px] background-beauty">
      <div class="container items-center mx-auto text-center pt-[65px]">
        <a class="features-button-green mx-auto mb-[30px]" href="#">BẮT ĐẦU SỬ DỤNG</a>
        <div class="text-center font-bold text-[20px] leading-[25px] text-[#FFFFFF]">
          hoặc<br>
          <div class="mt-[5px]">
            <a id="link-contact" href="#" >Gặp nhân viên tư vấn</a>   
          </div>
        </div>
      </div>
    </section>

      <footer class="bg-[#353B6B]">
        <div class="container mx-auto pt-[80px] px-5 md:px-10 md:w-[1112px]">
          <div class="grid grid-cols-2 justify-between md:grid-cols-4">
            <div class="mb-[30px]">
              <img src="../../assets/img/logowhite.svg" alt="#" />
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
                  <div class="w-[14px] h-[16px] mr-[14px]"><img id="vietnamese-icon" class="hidden" src="../../assets/img/plane.svg" alt=""></div>
                  <a id="vietnamese" class="cursor-pointer" @click="choseVietNamese">Vietnamese</a>
                </div>
                <div class="flex items-center">
                  <div class="w-[14px] h-[16px] mr-[14px]"><img id="english-icon" src="../../assets/img/plane.svg" alt=""></div>
                  <a id="english" class="font-bold cursor-pointer" @click="choseEnglish">English</a>
                </div>
              </div>
            </div>

            <div>
              <h4 class="h-footer mb-[15px]">Product</h4>
              <div class="flex space-x-[14px]">
                <img src="../../assets/img/   .svg" alt="" />
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
                <img src="../../assets/img/     .svg" alt="" />
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
                <img src="../../assets/img/      .svg" alt="" />
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
                src="../../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../../assets/img/facebook-logo.svg"
                alt=""
                class="h-[30px]"
              />
              <img
                src="../../assets/img/facebook-logo.svg"
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
</template>

<script>
export default {
  data() {
    return {
      language: 1,
    }
  },
  methods: {
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
  background-image: url('../../assets/img/Path.svg'), url('../../assets/img/Oval.svg'),
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
