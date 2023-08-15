<!--test-->
<template>
  <section id="main" class="grid place-items-center mt-20 md:mt-10 overflow-hidden" style="min-height: none; height: fit-content;">
    <Vue3Lottie :animationData="AstronautJSON" style="position:absolute;"/>
    <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div class="w-full q-pb-20" style="gap: 3; margin-left: 100px;">
        <div class="column items-start">
          <div class="col" style="justify-self: flex-start;">
            <div class="row">
              <div class="col" style="">
                <div class="column" style="margin-right: 100px; ">
                  <div class="row" style="height: 500px; align-items: center;">
                    <div class="column" style="">
                      <p class="text-weight-bold text-white text-h2" style="font-size: 50px;">
                        Solutions with
                        <br>Infinite Possibilities
                      </p>
                      <p class="text-white q-pt-sm" style="font-size: 17px; font-weight: 400;">
                        We offer smart, creative and modern IT solutions to deliver your vision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" style="justify-content: center; position: absolute; width: 100%;">
        <div class="discover column items-center" style="margin-right: 100px;">
          <div class="row justify-center">
            <div class="column">
              <a class="discover" @click="scrollToDiv1">Discover more
                <li class="flex justify-center items-center"><i class="fa-solid fa-angle-down"></i></li>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="div1" ref="div1" class="grid place-items-center mt-20 md:mt-10 overflow-hidden" style="justify-content: center;">
    <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div class="w-full q-pb-20" style="gap: 3; margin-left: 100px;">
        <div class="row" style="margin-top: 50px;">
          <div class="row" style="margin-right: 30px; margin-bottom: 30px; align-items: center;">
            <div class="column" style="margin-right: 20px;">
              <div class="col col-sm-4">
                <p class="text-weight-bold text-primary text-h2" style="font-size: 50px;">
                  "We transform
                  <br>your ideas into
                  <br>the next big thing."
                </p>
                <p class="text-secondary q-pt-sm" style="font-size: 17px; font-weight: 400;">
                  We're a software and IT service provider that helps transform and
                  <br>elevate businesses with our smart solutions, advanced
                  <br>technologies and innovative transformation.
                </p>
              </div>
            </div>
          </div>

          <div class="row out" style="margin-bottom: 30px; margin-left: 10px; margin-right: 10px;">
            <div class="column">
              <img src="~assets/line-67.png" alt="">
            </div>
          </div>

          <div class="row" style="margin-bottom: 30px;">
            <div class="column" style="margin-right: 20px; margin-left: 30px;">
              <div class="col col-sm-4">
                <div class="column justify-evenly" style="height: 400px; margin-right: 80px;" >
                  <div class="col-6">
                    <div class="row" style="align-items: center;">
                      <p id="number1" class="num number text-weight-bold text-h2">
                        700
                      </p>
                      <p class="num">+</p>
                    </div>
                    <p class="text-secondary q-pt-sm" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                      Number of projects to
                      <br>date satisfactorily
                      <br>delivered to clients
                    </p>
                  </div>
                  <div class="col-6">
                    <div class="row" style="align-items: center;">
                      <p id="number2" class="num number text-weight-bold text-h2">
                        20
                      </p>
                      <p class="num">+</p>
                    </div>
                    <p class="text-secondary q-pt-sm" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                      Years of business with
                      <br>global experiences
                      <br>and clientele
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style="margin-bottom: 30px;">
            <div class="column" style="margin-right: 20px; margin-left: 30px;">
              <div class="col col-sm-4">
                <div class="column justify-around" style="height: 400px;" >
                  <div class="col-6">
                    <div class="row" style="align-items: center;">
                      <p id="number3" class="num number text-weight-bold text-h2">
                        100
                      </p>
                      <p class="num">+</p>
                    </div>
                    <p class="text-secondary q-pt-sm" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                      Years of combined IT
                      <br>experience/expertise
                      <br>in various industry
                    </p>
                  </div>
                  <div class="col-6">
                    <div class="row" style="align-items: center;">
                      <p id="number4" class="num number text-weight-bold text-h2">
                        150
                      </p>
                      <p class="num">+</p>
                    </div>
                    <p class="text-secondary q-pt-sm" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                      Successful integration
                      <br>with multi-national IT
                      <br>vendor systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="service" class="overflow-hidden grid place-items-center md:mt-10" style="justify-content: center;">
    <div class="items-center">
      <div class="w-full q-pb-20" style="gap: 3; margin-left: 100px;">
        <div class="column flex" style="margin-right: 40px; margin-top: 30px;">
          <p class="text-weight-bold text-primary text-h2" style="font-size: 50px; margin-bottom: 100px;">
            <span class="typed-text text-secondary">{{ typeValue }}</span>
            <br>approach to problems
          </p>
          <q-item class="column flex items-center justify-evenly" style="margin-right: 80px;">
            <div class="row">
              <div class="column">
                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      alt="Quasar logo"
                      src="~assets/Group-1234.svg"
                      style="width: 60px; height: 60px; margin-right: 20px;"
                    >
                    <img
                      class="out"
                      alt="Quasar logo"
                      src="~assets/Line-66.svg"
                      style="margin-right: 20px; height: 105px; margin-top: 30px;"
                    >
                  </div>
                  <div class="column">
                    <div class="col-6">
                      <p class="text-h5 text-secondary text-bold">
                        Software
                        <br>Development
                      </p>
                      <p class="text-secondary q-pt-sm" style="font-size: 18px; font-weight: 400; gap: 5px;">
                        Big Data
                        <br>Cloud-native Solutions
                        <br>Internet of Things (IoT)
                        <br>System as a Service (SaaS)
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      alt="Quasar logo"
                      src="~assets/Vector.svg"
                      style="width: 60px; height: 60px; margin-right: 20px;"
                    >
                    <img
                      class="out"
                      alt="Quasar logo"
                      src="~assets/Line-66.svg"
                      style="margin-right: 20px; height: 80px; margin-top: 30px;"
                    >
                  </div>
                  <div class="column">
                    <div class="col-6">
                      <p class="text-h5 text-secondary text-bold">
                        IT Support
                        <br>Services
                      </p>
                      <p class="text-secondary q-pt-sm" style="font-size: 18px; font-weight: 400; gap: 5px;">
                        24x7 Support
                        <br>Strict SLA
                        <br>Right Infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      alt="Quasar logo"
                      src="~assets/Group-1238.svg"
                      style="width: 60px; height: 60px; margin-right: 20px;"
                    >
                    <img
                      class="out"
                      alt="Quasar logo"
                      src="~assets/Line-66.svg"
                      style="margin-right: 20px; height: 105px; margin-top: 30px;"
                    >
                  </div>
                  <div class="column">
                    <div class="col-6">
                      <p class="text-h5 text-secondary text-bold">
                        Mobile + Web
                        <br>Applications
                      </p>
                      <p class="text-secondary q-pt-sm" style="font-size: 18px; font-weight: 400; gap: 5px;">
                        Responsive Interface
                        <br>User-friendly UI
                        <br>Intuitive UX
                        <br>Native + Hybrid Apps
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      alt="Quasar logo"
                      src="~assets/Vector1.svg"
                      style="width: 60px; height: 60px; margin-right: 20px;"
                    >
                    <img
                      class="out"
                      alt="Quasar logo"
                      src="~assets/Line-66.svg"
                      style="margin-right: 20px; height: 80px; margin-top: 30px;"
                    >
                  </div>
                  <div class="column">
                    <div class="col-6">
                      <p class="text-h5 text-secondary text-bold">
                        Training +
                        <br>Consultancy
                      </p>
                      <p class="text-secondary q-pt-sm" style="font-size: 18px; font-weight: 400; gap: 5px;">
                        Digitalised Training
                        <br>Digital Transformation
                        <br>Subject Matter Experts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="row" style="height: 280px; margin-right: 50px;">
                  <div class="column">
                    <img
                      alt="Quasar logo"
                      src="~assets/Group.svg"
                      style="width: 60px; height: 60px; margin-right: 20px;"
                    >
                    <img
                      class="out"
                      alt="Quasar logo"
                      src="~assets/Line-66.svg"
                      style="margin-right: 20px; height: 105px; margin-top: 30px;"
                    >
                  </div>
                  <div class="column">
                    <div class="col-6">
                      <p class="text-h5 text-secondary text-bold">
                        System
                        <br>Integration
                      </p>
                      <p class="text-secondary q-pt-sm" style="font-size: 18px; font-weight: 400; gap: 5px;">
                        Star Integration
                        <br>Vertical Integration
                        <br>Horizontal Integration
                        <br>Point-to-Point Integration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-item>
          <div style="margin-bottom: 150px; margin-top: 100px;">
            <q-btn class="button2" style="margin-left: 30px; font-weight: 400;" no-caps unelevated rounded label="Explore Services" icon-right="east" :ripple="false" :to="{ path: '/service'}" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="product" class="product overflow-hidden grid place-items-center md:mt-10" style="min-height: 160vh; height: max-content; justify-content: center;">
    <div class=" " style="">
      <div class="w-full q-pb-20" style="gap: 3; margin-left: 100px;">
        <div class="row" style="margin-top: 50px;">
          <div class="row" style="margin-right: 30px; margin-bottom: 0px; align-items: center;">
            <div class="column" style="margin-right: 20px;">
              <div class="col col-sm-4">
                <p class="text-weight-bold text-white text-h2" style="font-size: 50px; font-weight: 700;">
                  <span class="typed-text text-secondary">{{ typeValue1 }}</span>
                  <br>your business with
                  <br>our smart solutions.
                </p>
                <p class="text-white q-pt-md" style="font-size: 18px; font-weight: 400;">
                  Our Event Management Platform (emp) is a suite of products that
                  <br>can be seamlessly integrated within any systems to orchestrate
                  <br>complex processes and business operations for monetization.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <Vue3Lottie :animationData="lottie2"/>
            <!-- <img
              class="img1"
              src="~assets/Group-1309.svg"
              style="position: relative;"
            /> -->
          </div>
        </div>

        <div class="column" style="">
          <div class="col">
            <div class="row">
              <div class="col"></div>
            </div>
          </div>

          <div class="col">
            <div class="column">
              <div class="row" style="margin-top: 10px;">
                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      src="~assets/line-66.png"
                      height="90px"
                      style="margin-right: 20px;"
                    >
                  </div>
                  <div class="column" style="">
                    <div class="col col-sm-4">
                      <p class="emp" style="">
                        emp.dos
                      </p>
                      <p class="text-white" style="font-size: 20px; font-weight: 500;">
                        HR + Digital Office
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      src="~assets/line-66.png"
                      height="90px"
                      style="margin-right: 20px;"
                    >
                  </div>
                  <div class="column" style="">
                    <div class="col col-sm-4">
                      <p class="emp" style="">
                        emp.unv
                      </p>
                      <p class="text-white" style="font-size: 20px; font-weight: 500;">
                        CRM + Billing
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-right: 20px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      src="~assets/line-66.png"
                      height="90px"
                      style="margin-right: 20px;"
                    >
                  </div>
                  <div class="column" style="">
                    <div class="col col-sm-4">
                      <p class="emp" style="">
                        emp.ioc
                      </p>
                      <p class="text-white" style="font-size: 20px; font-weight: 500;">
                        Asset Monitoring + Tracking
                      </p>
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-right: 50px; margin-bottom: 30px;">
                  <div class="column">
                    <img
                      src="~assets/line-66.png"
                      height="90px"
                      style="margin-right: 20px;"
                    >
                  </div>
                  <div class="column" style="">
                    <div class="col col-sm-4">
                      <p class="emp" style="">
                        emp.xsr
                      </p>
                      <p class="text-white" style="font-size: 20px; font-weight: 500;">
                        BLE Search and Rescue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="q-pt-xl q-pb-xl">
          <q-btn class="button1" style="font-weight: 400;" no-caps unelevated rounded label="Explore Products" :to="{ path: '/products'}" icon-right="east" :ripple="false"/>
        </div>

      </div>
    </div>
  </section>

  <section id="div2" class="w-full q-pb-20 flex items-center justify-center overflow-hidden" style="min-height: 20vh; margin-left: 100px; margin-right: 100px; justify-content: center; margin-top: 200px; margin-bottom: 40px;">
    <div class="" style="align-items: center; justify-content: center; width: 100%;">
      <div class="q-pb-xl items-center justify-center" style="display: flex;">
        <p class="num js-nametag" style="text-align: center;">You say it, we`ll do it.</p>
        <p class="num js-nametag text-center">You envision it, we`ll realise it.</p>
      </div>
    </div>
  </section>

  <div class="Copyright">
    <p class=" flex justify-center items-center">
      <a class="discover2" @click="scrollToBottom" style="">Drop us a message
        <li class="flex justify-center items-center"><i class="fa-solid fa-angle-down"></i></li>
      </a>
    </p>
  </div>

  <!-- <section class="grid place-items-center md:mt-10 overflow-hidden" style="background-color: #F8FAFC; margin-top: 200px;">
    <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div class="w-full q-pb-20" style="gap: 3; margin-left: 70px;">
        <div class="flex items-center" style="margin-right: 40px;">
          <p class="text-primary" style="font-size: 65px; font-weight: 500;">
            Do more, with
            <span class="num" style="font-size: 65px; font-weight:700;">do.</span>
          </p>
        </div>
        <p class="text-secondary q-pt-sm" style="font-size: 20px; font-weight: 400;">
          Manage office activities by automating HR, admin and productivity-
          <br>all on one ready-to-use platform.
        </p>
        <div class="row justify-between">
          <div class="column  bg-primary" style="margin-top: 80px; margin-right: 10px;">
            <div class="col">
              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Attendance
                </p>
              </div>
              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Leave Application
                </p>
              </div>

              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Asset Management
                </p>
              </div>
            </div>
          </div>

          <div class="column" style="margin-top: 80px;">
            <div class="col">
              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Announcement
                </p>
              </div>

              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Employee Profile
                </p>
              </div>

              <div class="row">
                <img
                  alt="Quasar logo"
                  src="~assets/Group-1283.svg"
                  style="margin-right: 20px; width: 27px; height: 27px;"
                >
                <p class="text-secondary" style="font-size: 17px; font-weight: 400;">
                  Analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="q-pt-xl q-pb-xl">
          <q-btn class="button2" no-caps unelevated rounded label="View ready-to-use product" icon-right="east" :ripple="false" scroll-target="footer"/>
        </div>
      </div>
    </div>

    <q-item class="flex items-center justify-evenly">
      <div class="row">
        <div class="column" style="" >
          <div class="col">
            <img
              alt="Quasar logo"
              src="~assets/Image-9.svg"
              style="width: 520px; margin-top: 10px;"
            >
          </div>
        </div>
      </div>
    </q-item>
  </section> -->

  <footer id="footer" ref="footer" class="App-Footer grid place-items-center">
    <div class="w-full q-pb-20" style="margin-left: 110px; margin-right: 100px;">
      <div class="row" style="margin-top: 100px;">
        <div class="column" style="margin-left: 50px; margin-right: 50px;">
          <p class="text-weight-bold text-white text-h2" style="font-size: 50px;">
            Talk to Us About
            <br>Your Next Project.
          </p>
          <form @submit="postData" method="post">
            <p class="text-white q-pt-sm" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
              Name*
              <q-input color="grey-3" dense name="name" outlined v-model="posts.nme" bg-color="white" />
            </p>
            <p class="text-white" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
              Company
              <q-input color="grey-3" dense name="company" outlined v-model="posts.com"  bg-color="white" />
            </p>
            <div class="row justify-between">
              <p class="col-6 text-white" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                Email*
                <q-input color="grey-3" dense name="email" outlined v-model="posts.eml"  bg-color="white"/>
              </p>
              <p class="text-white" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
                Contact No.
                <q-input color="grey-3" dense outlined name="contact" v-model="posts.pno"  bg-color="white" />
              </p>
            </div>
            <p class="text-white" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
              Enquiry Type*
              <q-select outlined v-model="posts.typ" dense name="enquiry" :options="options" bg-color="white" label="Select Enquiry" behavior="menu" />
            </p>
            <p class="text-white" style="font-size: 17px; font-weight: 400;">
              Message
              <q-input v-model="posts.msg" name="message" outlined type="textarea" bg-color="white" />
            </p>
            <div class="q-pt-xl q-pb-xl">
              <q-btn type="submit" class="button1" style="" no-caps unelevated rounded label="Submit" icon-right="east" :ripple="false" />
            </div>
          </form>
        </div>

        <div class="column" style="margin-left: 50px; margin-right: 50px;">
          <p class="text-weight-bold text-white text-h2" style="font-size: 50px;">
            Connect With Us.
          </p>
          <div class="row">
            <img
              src="~assets/phone.svg"
              style="margin-right: 40px;"
            >
            <p class="text-white q-pt-sm" style="font-size: 17px; font-weight: 400; margin-right: 50px; font-family: 'Helvetica';">
              + 60 3 615 14 886
            </p>
          </div>
          <div class="row q-pt-xl">
            <img
              src="~assets/mail.svg"
              style="margin-right: 40px;"
            >
            <p class="text-white q-pt-md" style="font-size: 17px; font-weight: 400; font-family: 'Helvetica';">
              hello@detikideal.com.my
            </p>
          </div>
          <div class="row q-pt-xl">
            <img
              src="~assets/map.svg"
              style="margin-right: 40px;"
            >
            <p class="text-white q-pt-md" style="font-size: 16px; font-weight: 400; font-family: 'Helvetica';">
              F-3F-3, Strand Garden Office,
              <br>Jalan PJU 5/1, Kota Damansara,
              <br>47810 Petaling Jaya
            </p>
          </div>

          <div class="row Links Contact-Links" style="margin-top: 40px;">
            <ul class="Links Icon-Row">
              <a href="https://www.linkedin.com/company/detik-ideal-sdn-bhd/" target="_blank"><li class="link"><i class="fa-brands fa-linkedin"></i></li></a>
              <a href="https://www.facebook.com/detikideal/" target="_blank"><li class="link"><i class="fa-brands fa-facebook"></i></li></a>
              <a href="https://instagram.com/detik_ideal/" target="_blank"><li class="link"><i class="fa-brands fa-instagram"></i></li></a>
              <a href="https://mobile.twitter.com/disbmarketing/" target="_blank"><li class="link"><i class="fa-brands fa-twitter"></i></li></a>
              <a href="https://www.tiktok.com/@detik_ideal/" target="_blank"><li class="link"><i class="fa-brands fa-tiktok"></i></li></a>
            </ul>
          </div>
          <div class="Icon-Row Outer-Icon-Row">
            <a style="color: #fff;" href="https://www.linkedin.com/company/detik-ideal-sdn-bhd/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a style="color: #fff;" href="https://www.facebook.com/detikideal/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a style="color: #fff;" href="https://instagram.com/detik_ideal/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a style="color: #fff;" href="https://mobile.twitter.com/disbmarketing/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a style="color: #fff;" href="https://www.tiktok.com/@detik_ideal/" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div>
        <p class="Copyright">© 2022 Detik Ideal Sdn Bhd (457490-D) All Rights Reserved | Privacy Policy</p>
      </div>
    </div>
  </footer>

    <!-- <div class="Logo-Container q-pl-lg">
      <img src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/Detik-Ideal-logo.png" alt="Detik Ideal Logo" />
      <p class="q-pt-md">
        © Detik Ideal®, Detik Ideal is built on a vision to be a top-world class IT company with main forte in software development and system integration.
      </p>
    </div>
    <div class="Icon-Row Outer-Icon-Row">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-solid fa-envelope"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-tiktok"></i>
    </div>
    <nav class="Links-Container">
      <li class="Links">
        <h3>INFO</h3>
        <ul>
          <li><a class="link">About Us</a></li>
          <li><a class="link">Contact Us</a></li>
        </ul>
      </li>
      <li class="Links">
        <h3>SERVICES</h3>
        <ul>
          <li><router-link class="link" :to="{ path:'/' }">Services</router-link></li>
          <li><a class="link">Products</a></li>
        </ul>
      </li>
      <li class="Links Contact-Links">
        <h3>CONTACT</h3>
        <div>
          <ul class="Icon-Row">
            <a href="https://www.facebook.com/detikideal/" target="_blank"><li class="link"><i class="fa-brands fa-facebook-f"></i></li></a>
            <a href="mailto:hello@detikideal.com.my" target="_blank"><li class="link"><i class="fa-solid fa-envelope"></i></li></a>
            <a href="#home"><li class="link"><i class="fa-brands fa-twitter"></i></li></a>
            <a><li class="link"><i class="fa-brands fa-tiktok"></i></li></a>
          </ul>
        </div>
      </li>
    </nav> -->

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import AstronautJSON from '../assets/DISB_BannerAnimate1.json'
import lottie2 from '../assets/NEWNEW_UIAnimate.json'

var one = setInterval(first, 1)
var two = setInterval(second, 20)
var three = setInterval(third, 50)
var four = setInterval(fourth, 40)
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function first(){
  count1++;
  document.querySelector("#number1").innerHTML = count1;

  if (count1 == 700) {
    clearInterval(one)
  }
}

function second(){
  count2++;
  document.querySelector("#number2").innerHTML = count2;

  if (count2 == 20) {
    clearInterval(two)
  }
}

function third(){
  count3++;
  document.querySelector("#number3").innerHTML = count3;

  if (count3 == 100) {
    clearInterval(three)
  }
}

function fourth(){
  count4++;
  document.querySelector("#number4").innerHTML = count4;

  if (count4 == 150) {
    clearInterval(four)
  }
}

export default ({
  name: 'IndexPage',
  components: {
    Vue3Lottie
  },

  data: () => {
    return {
      posts: {
        nme: "",
        com: "",
        eml: "",
        pno: "",
        typ: "",
        msg: ""
      },
      AstronautJSON,
      lottie2,
      typeValue: '',
      typeValue1: '',
      typeValue2: '',
      typeValue3: '',
      typeStatus: false,
      typeStatus1: false,
      typeStatus2: false,
      typeStatus3: false,
      typeArray: ['Technology-first', 'Intelligent', 'Innovative', 'Extensive'],
      typeArray1: ['Digitalise', 'Streamline', 'Modernise'],
      typeArray2: ['You dream it, we`ll bring to life', 'You say it, we`ll do it', 'You envision it, we`ll realise it'],
      typingSpeed: 100,
      typingSpeed1: 100,
      erasingSpeed: 20,
      erasingSpeed1: 50,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      typeArrayIndex1: 0,
      typeArrayIndex2: 0,
      typeArrayIndex3: 0,
      charIndex: 0,
      charIndex1: 0,
      charIndex2: 0,
      charIndex3: 0,
      // defaultOptions: {animationData: animationData},
      // animationSpeed: 1
    }
  },

  setup () {
    return {
      enquiry: ref(null),

    }
  },


  methods: {
    postData(e) {
      e.preventDefault();
      console.log(this.posts)
      axios.post("https://stage.disbapps.com/rv3api/api/webmail", this.posts)
      .then (res =>
      console.log(res))
      .catch (err => console.log(err))
    },

    
    scrollToBottom(){
      this.$refs['footer'].scrollIntoView({behavior: "smooth"})
    },
    
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    typeText1() {
      if(this.charIndex1 < this.typeArray1[this.typeArrayIndex1].length) {
        if(!this.typeStatus1)
          this.typeStatus1 = true;
        this.typeValue1 += this.typeArray1[this.typeArrayIndex1].charAt(this.charIndex1);
        this.charIndex1 += 1;
        setTimeout(this.typeText1, this.typingSpeed1);
      }
      else {
        this.typeStatus1 = false;
        setTimeout(this.eraseText1, this.newTextDelay);
      }
    },
    typeText2() {
      if(this.charIndex2 < this.typeArray2[this.typeArrayIndex2].length) {
        if(!this.typeStatus2)
          this.typeStatus2 = true;
        this.typeValue2 += this.typeArray2[this.typeArrayIndex2].charAt(this.charIndex2);
        this.charIndex2 += 1;
        setTimeout(this.typeText2, this.typingSpeed1);
      }
      else {
        this.typeStatus2 = false;
        setTimeout(this.eraseText2, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed1);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed1 + 1000);
      }
    },
    eraseText1() {
      if(this.charIndex1 > 0) {
        if(!this.typeStatus1)
          this.typeStatus1 = true;
        this.typeValue1 = this.typeArray1[this.typeArrayIndex1].substring(0, this.charIndex1 - 1);
        this.charIndex1 -= 1;
        setTimeout(this.eraseText1, this.erasingSpeed1);
      }
      else {
        this.typeStatus1 = false;
        this.typeArrayIndex1 += 1;
        if(this.typeArrayIndex1 >= this.typeArray1.length)
          this.typeArrayIndex1 = 0;
        setTimeout(this.typeText1, this.typingSpeed1 + 1000);
      }
    },
    eraseText2() {
      if(this.charIndex2 > 0) {
        if(!this.typeStatus2)
          this.typeStatus2 = true;
        this.typeValue2 = this.typeArray2[this.typeArrayIndex2].substring(0, this.charIndex2 - 1);
        this.charIndex2 -= 1;
        setTimeout(this.eraseText2, this.erasingSpeed);
      }
      else {
        this.typeStatus2 = false;
        this.typeArrayIndex2 += 1;
        if(this.typeArrayIndex2 >= this.typeArray2.length)
          this.typeArrayIndex2 = 0;
        setTimeout(this.typeText2, this.typingSpeed1 + 1000);
      }
    },

    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },

    scrollToDiv1(){
      this.$refs['div1'].scrollIntoView({behavior: "smooth"})
    },

    scrollToDiv2(){
      this.$refs['div2'].scrollIntoView({behavior: "smooth"})
    },
  },

  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    setTimeout(this.typeText1, this.newTextDelay + 200);
    setTimeout(this.typeText2, this.newTextDelay + 200);
  },

  setup() {
    return {
      options: [
        'Software Development', 'Mobile + Web Applications', 'System Integration', 'IT Support', 'Training + Consultancy', 'Others'
      ]
    }

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener('scroll', reveal);
  },
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Avenir Next Variable';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2729/AvenirNext_Variable.ttf') format('truetype');
}
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.js-nametag{
  position: absolute;
}

.js-nametag:nth-child(1){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: alternate-reverse;
}

.js-nametag:nth-child(2){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 5s;
  animation-direction: alternate;
}

.js-nametag:nth-child(3){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-direction: alternate-reverse;
}

@keyframes fade{
  0%,50% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
}

section:nth-child(1) {
  color: #fff;
  background: linear-gradient(to right bottom, #273E6C, #273E6C, #264AA0, #009BE2, #009BE2, #FFFFFF);
}

section:nth-child(2) {
  color: #fff;
  background-color:#fff;
}

section:nth-child(3) {
  color: #aabfe7;
}

section:nth-child(4) {
  color: #f8f8fd;
  background-color:#fff;
}

section:nth-child(5) {
  color: #aabfe7;
}

section:nth-child(6) {
  color: #f8f8fd;
  background-color:#b0d6f5;
}

/* section:nth-child(7) {
  color: #98adc9;
  background: rgb(190,225,255);
  background: radial-gradient(circle, rgba(190,225,255,1) 0%, rgba(97,162,235,1) 100%);
} */

section .container {
  margin: 100px;
}

section h1 {
  font-size: 3rem;
  margin: 20px;
}

section h2 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}

section .text-container {
  display: flex;
}

section .text-container .text-box {
  margin: 20px;
  padding: 20px;
  background: #255F8F;
}

section .text-container .text-box h3 {
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }
  section .text-container {
    flex-direction: column;
  }
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-top {
  animation: fade-top 1s ease-in;
}

.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}

.active.fade-left {
  animation: fade-left 1s ease-in;
}

.active.fade-right {
  animation: fade-right 1s ease-in;
}

@keyframes fade-top {
  0% {
    transform: translateY(-300px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-bottom {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

// .nametag2{
//   animation-name: fade;
//   position: absolute;
//   animation-fill-mode: both;
//   animation-duration: 4s;
//   animation-direction: alternate;
//   animation: fadeOut  ease 5s infinite;
// }

// .nametag2{
//   animation-name: fade;
//   position: absolute;
//   animation-fill-mode: both;
//   animation-delay: 15s;
//   animation-duration: 4s;
//   animation-direction: alternate;
//   animation: fadeOut  ease 7s infinite alternate;
// }

// .nametag3{
//   animation-name: fade;
//   position: absolute;
//   animation-fill-mode: both;
//   animation-delay: 30s;
//   animation-duration: 4s;
//   animation-direction: alternate;
//   animation: fadeOut  ease 7s infinite;
// }

// @keyframes fade{
//     0% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }

// @keyframes fadeOut {
//   0% {
//     opacity:1;
//   }
//   100% {
//     opacity:0;
//   }
// }

// @-moz-keyframes fadeOut {
//   0% {
//     opacity:1;
//   }
//   100% {
//     opacity:0;
//   }
// }

// @-webkit-keyframes fadeOut {
//   0% {
//     opacity:1;
//   }
//   100% {
//     opacity:0;
//   }
// }

// @-o-keyframes fadeOut {
//   0% {
//     opacity:1;
//   }
//   100% {
//     opacity:0;
//   }
// }

// @-ms-keyframes fadeOut {
//   0% {
//     opacity:1;
//   }
//   100% {
//     opacity:0;
// }}
</style>

<style scoped lang="scss">
.App-Footer {
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background : #009BE2;
  margin-top: 100px;
}

.Logo-Container img {
  height: 66px;
}

.Logo-Container p {
  max-width: 400px;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #125e8a;
}

.Links-Container {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  width: 100%;
  list-style: none;
}

.Links h3 {
  font-weight: 700;
  font-size: 28px;
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  margin-left: 40px;
}

.Links li {
  font-weight: 400;
  font-size: 30px;
  line-height: 19px;
  margin-bottom: 8px;
  color: #fff;
  list-style: none;
}
.Icon-Row {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  list-style: none;
  color: #fff;
  gap: 35px;
}

.Outer-Icon-Row {
  display: none;
}

.Copyright {
  position: relative;
  bottom: 0;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 100px;
  margin-right: 50px;
  margin-left: 50px;
  color: #fff;
}

ul, .link {
  list-style: none;
  text-decoration: none;
  margin-bottom: 5px;
  cursor: pointer;
}

.link {
  transition: 0.1s ease all;
  padding-bottom: 2px;
  border-bottom: transparent;
  list-style: none;

  &:hover {
    color: #11567d;
  }
}

li {
  .link {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}

@media (max-width: 1024px) {
  .Logo-Container img {
    height: 50px;
  }
  .Links h3 {
    font-size: 20px;
  }
  .Links li {
    font-size: 14px;
  }

  .out {
    display: none;
  }
}

@media (max-width: 768px) {
  .App-Footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Logo-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Logo-Container img {
    height: 60px;
  }
  .Logo-Container p {
    text-align: center;
    width: 95%;
    font-size: 11pt;
    line-height: 19px;
    margin-bottom: 0;
  }
  .Outer-Icon-Row {
    display: grid;
    column-gap: 13px;
    margin-block: 40px;
  }
  .Icon-Row img {
    height: 35px;
  }

  .img1 {
    width: 200px;
  }

  .img2 {
    width: 250px;
  }

  .Links-Container {
    display: flex;
    justify-content: space-around;
    padding-inline: var(--Vertical-Squeeze);
    margin-bottom: 30px;
  }
  .Links {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .Links > * {
    text-align: center;
  }
  .Links li {
    font-size: 13pt;
  }
  .Links.Contact-Links {
    display: none;
  }
}

@media (max-width: 425px) {
  .Logo-Container p {
    font-size: 9pt;
  }
  .Links h3 {
    font-size: 15px;
  }
  .Links li {
    font-size: 10pt;
  }
  .Copyright {
    font-size: 10pt;
  }
}

.containers {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 22px;
  font-weight: 500;
  font-family: 'Roboto';
  span.typed-text {
    color: #11567d;
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  49% { background-color: transparent; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}

.button1 {
  color: #009BE2;
  background-color: white;

  &:hover {
    color: white;
    background-color: #273D6C;
  }
}

.discover {
  color: #FFFFFF;
  cursor: pointer;
  position: relative;
  bottom: 0;
  line-height: 23px;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 50px;
  margin-left: 50px;
  color: #fff;
  justify-content: center;

  &:hover {
    color: #273D6C;
  }
}

.discover2 {
  color: #0095eb;
  cursor: pointer;

  &:hover {
    color: #273D6C;
  }
}

.button2 {
  color: #FFFFFF;
  background-color: #009BE2;

  &:hover {
    color: #fff;
    background-color: #273D6C;
  }
}

.num {
  background: linear-gradient(to right bottom, rgba(0,158,231,1) 0%, rgba(39,62,108,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 55px;
  font-weight: 700;
}

.product {
  background: url(../..//src/assets/Vector-166.svg) center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1050px;
}

.emp {
  background: linear-gradient(to right, #bcc8e0, #cfd5e8, #e0e2ef, #f0f0f7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Avenir Next Variable';
  font-weight: 600;
  font-size: 25px;
}

.type {
  background: linear-gradient(142deg, rgba(0,158,231,1) 25%, rgba(38,74,160,1) 75%, rgba(39,62,108,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h1 {
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 700px;
}

h1 span {
  font-size: 40px;
  margin-left: 10px;
}

.message {
  overflow: hidden;
  position: absolute;
  font-size: 50px;
  top: 0.5rem;
  margin-right: 40px;
  animation: openclose 7s ease-in-out infinite;
}

.word1, .word2, .word3 {
  font-family: 'Roboto';
}

@keyframes openclose {
  0% {
    top: 0.2rem;
    width: 0;
  }
  // 5% {
  //   width: 300px;
  // }
  15% {
    width: 673px;
  }
  // 30% {
  //   top: 0.2rem;
  //   width: 300px;
  // }
  33% {
    top: 0.2rem;
    width: 0px;
  }
  35% {
    top: -3.5rem;
    width: 0;
  }
  // 38% {
  //   top: -3.5rem;
  //   width: 250px;
  // }
  48% {
    top: -3.5rem;
    width: 453px;
  }
  // 55% {
  //   top: -3.5rem;
  //   width: 250px;
  // }
  62% {
    top: -3.5rem;
    width: 0px;
  }
  65% {
    top: -3.5rem;
    width: 50;
    text-indent: 0;
  }
  68% {
    top: -7.5rem;
    width: 0;
    text-indent: 5px;
  }
  // 71% {
  //   top: -7.5rem;
  //   width: 350px;
  // }
  83% {
    top: -7.5rem;
    width: 660px;
  }
  98% {
    top: -7.5rem;
    width: 550;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
}

.fade-in-text {
  font-family: Arial;
  font-size: 60px;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fadeIn {
  animation: fadeIn 1s linear infinite;
}

.fadeOut {
  animation: fadeOut 1s linear infinite;
}
</style>