<template>
  <div class="items-start bg-white">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      :control-type="controlType"
      control-color="grey-3"
      >

      <q-carousel-slide class="" :name="1" img-src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/12/Screen-Shot-2018-12-04-at-6.39.46-PM.png">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            Event Management Middleware Platform
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Aggregates.Orchestrates.Monetizes
          </p>
        </div>
        <div class="bg q-mt-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            Our solution futures harmonious analysists orchestration of systems and applications in your 
            <br>complex IT eco-system, supporting multi channel customer engagement, time-to-market,
            <br>service & product personalisation and innovation based on customer behaviour and trends
          </p>
        </div>
      </q-carousel-slide>

      <!-- <q-carousel-slide :name="1" img-src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/12/Screen-Shot-2018-12-04-at-6.39.46-PM.png">
        <div style="margin-left: 120px; margin-top: 15px; font-weight: 450; font-size: 43px;" class="float-center text-bold text-h3">
          Event Management Middleware Platform
        </div>
        <div style="margin-left: 120px; margin-top: 20px; font-weight: 400; font-size: 33px;" class="float-center text-h4 text-blue">
          Aggregates.Orchestrates.Monetizes
        </div>
        <div class="items-start" style="position: absolute; overflow: hidden; margin-right: 100px">
          <div style="background-color: rgba(165, 165, 165, 0.59); max-height: 140px; width: 5000px; margin-right: 100px;"> 
            <h5 style="margin-left: 120px; margin-top: 20px; font-size: 26px; margin-right: 50px;" class="text q-pt-md text-weight-regular">
              Our solution futures harmonious analysists orchestration of systems and applications in your 
              <br>complex IT eco-system, supporting multi channel customer engagement, time-to-market,
              <br>service & product personalisation and innovation based on customer behaviour and trends
            </h5>
          </div>
        </div> 
      </q-carousel-slide> -->
    </q-carousel>

    <div class="row q-pt-lg" style="color: #46525e;">
      <div class="col-12 col-md-6">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          Product Brief
        </div>
        <p class="q-pt-md" style="text-align: justify; text-justify: inter-word;">
          Event Management/Middleware Platform (EMP) is a proven middleware which addresses the need for top-notch symbiosis in IT eco-system of an organisation. 
          It is vendor-agnostic; thus, effortlessly orchestrates systems and applications enabling effective and efficient automation and digitilization process spanning through various applications and databases. The complex processes, service flows and tasks within these systems are nagivated through with ease for right time and right service deliveries.
        </p> 
        <p style="text-align: justify; text-justify: inter-word;">
          It supports multichannel and omni channel customer interaction and service engagement thus expanding the market reach and creating instantaneous customer engagement and service subscription. The resulting high volume of transactions for service enquiries, requests and deliveries is smoothly managed via EMP’s robust traffic management and service provisioning mechanism.
        </p>
        <p style="text-align: justify; text-justify: inter-word;">
          EMP is a complete business support applications, where it consists of customer relationship management, assets management, analytics as well as billing and marketing solutions. It is continuously developed to be current and future-proof, aligned to new and emerging technologies and trends. Therefore, it accelerates adoption by various industries, especially  Telecommunications and Service Providers, addressing digitization, smart cities, Internet-of-Things initiatives, and in the future, Artificial Intelligence, Augmented Reality, and Virtual Reality. 
        </p>
      </div>
      <div class="col-12 col-md-6">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          Key Features
        </div>
        <img class="img1" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/Detik-Ideal-Products.png" width="600px" height="400px">
      </div>
    </div>

    <section id="div1" ref="div1" class="grid place-items-center mt-20 md:mt-10 overflow-hidden" style="justify-content: center; color: #46525e;">
      <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
        <div class="w-full q-pb-20" style="gap: 3; margin-left: 50px; margin-top: 100px; margin-bottom: 40px;">
          <div class="text-weight-bold text-grey-9 text-h4 q-pl-sm">
            Benefits
          </div>

          <div class="row" style="justify-items: center;">
            <div class="column hoverImages reveal active fade-in" style="margin-right: 50px;">
              <div class="col col-sm-4">
                <div class="float flex justify-center items-center q-pt-xl">
                  <img class="" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/money-Custom-Custom.png" alt="money-Custom-Custom" width="32" height="32" style="">
                </div>
                <h5 class="title flex justify-center text-center" style="font-weight: 600;">Low Cost To Own</h5>
                <div class="desc flex justify-center items-center" style="font-weight: 400;">
                  <ul>
                    <li style="text-align: justify;">
                      No replacement of your existing systems, as emp is designed to be 
                      <br>complimentary.</li>
                    <li style="text-align: justify;">
                      Seamless integration with any systems, i.e. your legacy system or that of you 
                      <br>business partners.</li>
                    <li style="text-align: justify;">Deployment can be scaled down or in phases.</li>
                    <li style="text-align: justify;">Available as SaaS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="column hoverImages reveal active fade-in" style="margin-right: 50px;">
              <div class="col col-sm-4">
                <div class="float flex justify-center items-center q-pt-xl" style="">
                  <img src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/stopwatch-Custom-Custom.png" alt="money-Custom-Custom" width="32" height="32">
                </div>
                <div class="desc_wrapper">
                  <h5 class="title flex justify-center text-center" style="font-weight: 600;">Speed To Market</h5>
                  <div class="desc flex justify-center items-center" style="font-weight: 400;">
                    <ul>
                      <li style="text-align: justify;">Fast development &amp; deployment with speed of customization</li>
                      <li style="text-align: justify;">
                        Ready workable applications –CRM, Billing, Assets Management and Campaign 
                        <br>Management
                      </li>
                      <li style="text-align: justify;">Developed based of A-Z of typical service provision</li>
                      <li style="text-align: justify;">Expedite marketing of  services and products to the market, to edge competitors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="column hoverImages reveal active fade-in" style="margin-right: 50px;">
              <div class="col col-sm-4">
                <div class="float flex justify-center items-center q-pt-xl" style="">
                  <img src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/networking-Custom-Custom.png" alt="money-Custom-Custom" width="32" height="32">
                </div>
                <div class="desc_wrapper">
                  <h5 class="title flex justify-center text-center" style="font-weight: 600;">Wide Market Reach</h5>
                  <div class="desc flex justify-center items-center" style="font-weight: 400;">
                    <ul>
                      <li style="text-align: justify;">
                        Supports various channels of customer’s engagement such as mobile apps, 
                        <br>connected devices, and social media;
                      </li>
                      <li style="text-align: justify;">Market segmentation can be determined for targeted programmes such as 
                        <br>promotions.
                      </li>
                      <li style="text-align: justify;">Creates immediate market reach,  in almost real-time services delivery</li>
                      <li style="text-align: justify;">Encourages immediate &amp; impulsive purchases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="column hoverImages reveal active fade-in" style="margin-right: 50px;">
              <div class="col col-sm-4">
                <div class="float flex justify-center items-center q-pt-xl" style="">
                  <img src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/algorithm-Custom-Custom.png" alt="money-Custom-Custom" width="32" height="32">
                </div>
                <div class="desc_wrapper">
                  <h5 class="title flex justify-center text-center" style="font-weight: 600;">Service / Product Personalization</h5>
                  <div class="desc flex justify-center items-center" style="font-weight: 400;">
                    <ul>
                      <li style="text-align: justify;">Provides customers’ trends and behavior</li>
                      <li style="text-align: justify;">Recommends service/products with high potential of purchases/subscriptions</li>
                      <li style="text-align: justify;">Personalises services/product offerings based on customer interests and 
                        <br>purchases/subscription trends
                      </li>
                      <li style="text-align: justify;">Data collection and analytics for customers’ trends and predictive behaviours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="">
      <p class="Copyright">
        <a class="up" @click="scrollTop" indicator-color="grey">
          <i class="fa-solid fa-angle-up" style="color: #007cc3; font-size: 25px;"></i>
          <!-- <q-icon name="keyboard_arrow_up" style="color: #007cc3;" size="42px"></q-icon> -->
        </a>
        <br>© 2022 Detik Ideal Sdn Bhd (457490-D) All Rights Reserved | Privacy Policy
      </p>
    </footer>
  </div>
</template>
  
<script>
  import { ref } from 'vue'

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

  window.addEventListener("play", reveal);


  export default {
    setup() {
      return {
        slide: ref(1),
        autoplay: ref(true),
        controlType: ref('flat')
      }
    },

    methods: {
      scrollTop: function () {
        this.intervalId = setInterval(() => {
          if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
          }
            window.scroll(0, window.pageYOffset - 50)
        }, 10)
      }
    }
  }
</script>
  
<style scoped lang="scss">

section {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
}

footer{
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-image: url(https://detikideal.com.my/wordpress/wp-content/uploads/2018/01/robotics-home-footerbg.png); 
  background-color: #313b46; 
  background-position-x: right;
  background-position-y: top;
  background-repeat: no-repeat;
  min-height: 33px;
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-in {
  animation: fade-in 4s ease-in;
}

@keyframes fade-in {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1; }
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

.hoverImages {
  margin: 0px;
  float:center;
	-webkit-transition: margin 0.5s ease-out;
  -moz-transition: margin 0.5s ease-out;
  -o-transition: margin 0.5s ease-out;
}

.hoverImages:hover {
  margin-top: -5px;

  .float {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 100px; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 3px solid #007cc3;
    padding-left: 35px;
    align-content: center;
    // margin-bottom: 10px;
  }

  img {
    margin-bottom: 5px;
  }
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
  
.up {
  cursor: pointer;
}

.car1{
  font-size: clamp(20px, 3vw, 40px);
  margin-left: 120px;
}

.car2{
  font-size: clamp(15px, 2vw, 30px);
  text-align: justify;
  margin-right: 100px;
  margin-left: 120px;
}

.bg {
  background-color: rgba(165, 165, 165, 0.59);
}

@media (max-width: 1024px) {
  .car1 {
    margin-left: 0px;
    text-align: center;
  }

  .car2 {
    margin-left: 0px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .img1 {
    width: 500px;
    height: 350px;
  }

  .text {
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .img1 {
    width: 350px;
    height: 250px;
  }

  
  .text {
    font-size: 15px;
  }
}

/* 
    @media (max-width: 768px) {
        .img1 {
            width: 400px;
            height: 200px;
        }
    } */
</style>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
.row + .row
  margin-top: 1rem
  margin-right: 3rem
  margin-left: 3rem
</style>