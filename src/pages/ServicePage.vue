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

      <q-carousel-slide class="" :name="1" img-src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/shutterstock_142239910.jpg">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            Software Development
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Current.Agile.Intelligent
          </p>
        </div>
        <div class="bg q-mt-md q-mb-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            Our technologists provide agile, smart and scalable systems and applications,
            <br>supporting your digital transformation to optimize business potentials and
            <br>operations performance.
          </p>
        </div>
        <!-- <q-btn square unelevated label="More" :ripple="false" style="background-color: rgba(0, 106, 211, 0.75); color: #fff;"/> -->
      </q-carousel-slide>
      
      <q-carousel-slide :name="2" img-src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/shutterstock_229895722-1-2.jpg">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            Mobile Application
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Connected.Personalised.Intuitive
          </p>
        </div>
        <div class="bg q-mt-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            Our technologists build mobile applications with pure native
            <br>to hybrid platform to enhance UI/UX for mobility and best 
            <br>customer experience.
          </p>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" img-src="	https://detikideal.com.my/wordpress/wp-content/uploads/2018/12/shutterstock_596955596.jpg">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            System Integration
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Seamless.Convenient.Agnostic
          </p>
        </div>
        <div class="bg q-mt-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            We build platform-agnostic systems and services to integrate differing 
            <br>platfroms from various vendors, allowing for orchestration of complex
            <br>process and simultaneous provisioning of multiple services.
          </p>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4" img-src="	https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/shutterstock_374290576.jpg">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            Operations Support
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Alert.Responsive.Compliant
          </p>
        </div>
        <div class="bg q-mt-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            Our dedicated technical support analysists allow your team to focus
            <br>on your core business activities, and benefit from an IT managed services
            <br>tailored to your business needs and service levels.
          </p>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row q-pt-xl" style="justify-content:center;">
      <div class="col-12 col-md flex justify-center q-mt-lg q-ml-lg items-center">
        <img class="img1" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/programming-language-at-workplace_1134-65.jpg" alt="programming-language-at-workplace_1134-65" width="430" height="300">
      </div>
      <div class="col-7 column q-pl-lg q-mr-md" style="margin-right: 100px; color: #46525e;">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          Software Development
        </div>
        <p class="text-grey-9 q-pt-md" style="font-size: 17px; font-weight: 400;">
          Develop and innovate solutions leveraging on current and future technologies and trends 
          <br>including Cloud Services, Internet-of-Things (IoT), Big Data, Artificial Intelligence and more...
        </p>
        <div class="row q-pt-md">
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                RIGHT PEOPLE
              </div>
              <div class="back text-white">
                95% of our people are qualified & 
                <br>skilled IT personnel, with a total 
                <br>combined experience of 100+ 
                <br>years in various industries.
              </div>
            </div>
          </div>
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                BEST METHODOLOGY
              </div>
              <div class="back text-white">
                We will propose best
                <br>development methodologies and 
                <br>right system architecture to best 
                <br>fit your requirements
              </div>
            </div>
          </div>
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                PROVEN SOLUTIONS
              </div>
              <div class="back text-white">
                Our in-house solutions has been
                <br>customised and deployed globally 
                <br>to leading companies and
                <br>vendors
              </div>
            </div>
          </div>
        </div>
        
        <div class="row q-pt-md" style="margin-top: 10px;">
          <div class="row" style="margin-right: 100px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <q-icon name="schema" class="q-pt-md" style="color: #007cc3;" size="50px"></q-icon>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number1" class="text-h3 text-grey-9" style="">
                  700
                </p>
                <p class="text-subtitle1 text-grey">
                  No of Projects
                </p>
              </div>
            </div>
          </div>

          <div class="row" style="margin-right: 40px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <i class="fa-solid fa-shuffle q-pt-md q-pr-md" style="color: #007cc3; font-size: 50px;"></i>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number2" class="text-h3 text-grey-9" style="">
                  117938370
                </p>
                <p class="text-subtitle1 text-grey">
                  Daily Traffic Counts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div class="row q-pt-xl bg-grey-3" style="justify-content:center;">
      <div class="col-7 column q-pl-lg q-mr-md" style="margin-right: 100px; color: #46525e;">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          Mobile Application
        </div>
        <p class="text-grey-9 q-pt-md" style="font-size: 17px; font-weight: 400;">
          Conceptualize and deliver mobile apps that strengthen your business operations and 
          <br>elevate customer experience and engagement with seamless, simple and intuitive 
          <br>navigation.
        </p>
        <div class="row q-pt-md">
          <div class="row">
            <div class="container q-pt-md q-pr-md">
              <div class="card" style="height: 150px; width: 325px; font-size: small;">
                <div class="front text-white">
                  CUSTOMISED UI/UX
                </div>
                <div class="back text-white">
                  Readily available mediation box that is easily
                  <br>customised and integrated with your legacy systems for
                  <br>your total solution.
                </div>
              </div>
            </div>
            <div class="container q-pt-md q-pr-md">
              <div class="card" style="height: 150px; width: 325px; font-size: small;">
                <div class="front text-white">
                  RICH FUNCTIONALITY
                </div>
                <div class="back text-white">
                  Development is parallel to the latest mobile technology,
                  <br>with rich features, functionalities and graphics for
                  <br>the 'wow' factors.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row q-pt-md" style="margin-top: 10px;">
          <div class="row q-pr-md" style="margin-right: 100px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <q-icon name="group" class="q-pt-md" style="color: #007cc3;" size="50px"></q-icon>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number3" class="text-h3 text-grey-9" style="">
                  1420
                </p>
                <p class="text-subtitle1 text-grey">
                  No of user/clients
                </p>
              </div>
            </div>
          </div>

          <div class="row q-pr-md" style="margin-right: 40px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <i class="fa-solid fa-mobile q-pt-md q-pr-md q-pl-md" style="color: #007cc3; font-size: 50px;"></i>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number4" class="text-h3 text-grey-9" style="">
                  3
                </p>
                <p class="text-subtitle1 text-grey">
                  No of applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-12 col-md flex justify-center q-mt-lg q-ml-md q-mb-xl q-mr-md items-center">
        <img class="img1 reveal active fade-right" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/close-up-of-mobile-phone-with-a-cloud-of-apps_1134-88.jpg" alt="close-up-of-mobile-phone-with-a-cloud-of-apps_1134-88" title="close-up-of-mobile-phone-with-a-cloud-of-apps_1134-88" width="400" height="300">
      </div>
    </div>
    
    <div class="row q-pt-xl" style="justify-content:center; color: #46525e;">
      <div class="col-12 col-md flex justify-center q-mt-lg q-ml-lg items-center">
        <img class="img1 reveal active fade-right" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/network-mainboard-service-toy-broadcasting_1286-290.jpg" alt="programming-language-at-workplace_1134-65" width="430" height="300">
      </div>
      <div class="col-7 column q-pl-lg q-mr-md" style="margin-right: 100px;">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          System Integration
        </div>
        <p class="text-grey-9 q-pt-md" style="font-size: 17px; font-weight: 400;">
          Seamlessly integrate and manage workflow within an IT echo-system ensuring multiple
          <br>systems works efficiently for timely service provisioning.
        </p>
        <div class="row q-pt-md">
          <div class="row">
            <div class="container q-pt-md q-pr-md">
              <div class="card" style="height: 150px; width: 325px; font-size: small;">
                <div class="front text-white">
                  PLUG AND PLAY BOX
                </div>
                <div class="back text-white">
                  Readily available mediation box that is easily
                  <br>customised and integrated with your legacy systems for
                  <br>your total solution.
                </div>
              </div>
            </div>
            <div class="container q-pt-md q-pr-md">
              <div class="card" style="height: 150px; width: 325px; font-size: small;">
                <div class="front text-white">
                  PROVEN INTEGRATION
                </div>
                <div class="back text-white">
                  Experience in integration with multi-national vendors'
                  <br>systems for complex work flows for service provisioning.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row q-pt-md" style="margin-top: 10px;">
          <div class="row" style="margin-right: 100px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <i class="fa-solid fa-shuffle q-pt-md q-pr-md" style="color: #007cc3; font-size: 50px;"></i>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number5" class="text-h3 text-grey-9" style="">
                  30
                </p>
                <p class="text-subtitle1 text-grey">
                  No of Integration
                </p>
              </div>
            </div>
          </div>

          <div class="row" style="margin-right: 40px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <q-icon name="share" class="q-pt-md q-pr-md" style="color: #007cc3;" size="50px"></q-icon>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number6" class="text-h3 text-grey-9" style="">
                  150
                </p>
                <p class="text-subtitle1 text-grey">
                  No of Vendors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div class="row q-pt-xl q-pb-xl bg-grey-3" style="justify-content:center; color: #46525e;">
      <div class="col-7 column q-pl-lg q-mr-md" style="margin-right: 100px;">
        <div class="text-weight-medium text-h4 text-grey-9" style="font-size: 34px;">
          Support Services
        </div>
        <p class="text-grey-9 q-pt-md" style="font-size: 17px; font-weight: 400;">
          Supply managed services on 24x7x365 comprising of reliable technical support team
          <br>and infrastructure for fast, effective, efficient and measurable services.
        </p>
        <div class="row q-pt-md">
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                DEDICATED RESOURCES
              </div>
              <div class="back text-white">
                On-site and Off-site support
                <br>arrangement for better 
                <br>management of resources and incidences.
              </div>
            </div>
          </div>
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                RIGHT TOOLS
              </div>
              <div class="back text-white">
                Available online tools and alert
                <br> services designed to effectively
                <br>managing incidences and
                <br>monitoring system performance.
              </div>
            </div>
          </div>
          <div class="container q-pr-md q-pt-md">
            <div class="card">
              <div class="front text-white">
                SLA COMPLIANCE
              </div>
              <div class="back text-white">
                Strict process and procedures to
                <br>ensure incidents are
                <br>acknowledged and resolved
                <br>within stipulated time for
                <br>customer satisfaction.
              </div>
            </div>
          </div>
        </div>

        <div class="row q-pt-md" style="margin-top: 10px;">
          <div class="row" style="margin-right: 100px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <i class="fa-solid fa-database q-pt-md" style="color: #007cc3; font-size: 50px;"></i>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number7" class="text-h3 text-grey-9" style="">
                  99.9
                </p>
                <p class="text-subtitle1 text-grey">
                  Average SLA Meet
                </p>
              </div>
            </div>
          </div>

          <div class="row" style="margin-right: 40px; margin-bottom: 30px;">
            <div class="column q-pr-md">
              <i class="fa-solid fa-shuffle q-pt-md q-pr-md" style="color: #007cc3; font-size: 50px;"></i>
            </div>
            <div class="column" style="">
              <div class="col col-sm-4">
                <p id="number8" class="text-h3 text-grey-9" style="">
                  36586947
                </p>
                <p class="text-subtitle1 text-grey">
                  Transaction Per Day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="col-12 col-md flex justify-center items-center q-mt-lg q-ml-md q-mr-md">
        <img class="img1" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/customer-service-operator-talking-on-phone-in-the-office_1301-7539.jpg" width="400" height="300">
      </div>
    </div>

    <footer class="">
      <p class="Copyright">
        <a class="up" @click="scrollTop" indicator-color="grey">
          <i class="fa-solid fa-angle-up" style="color: #007cc3; font-size: 25px;"></i>
          <!-- <q-icon name="keyboard_arrow_up" style="color: #007cc3;"  size="42px"></q-icon> -->
        </a>
        <br>© 2022 Detik Ideal Sdn Bhd (457490-D) All Rights Reserved | Privacy Policy
      </p>
    </footer>
  </div>
</template>


<script>
  import { ref } from 'vue'
  import '@fortawesome/fontawesome-free/css/all.css'
  import '@fortawesome/fontawesome-free/js/all.js'

  // var one = setInterval(first, 1)
  // var two = setInterval(second, 0)
  // var three = setInterval(third, 0.01)
  // var four = setInterval(fourth, 1000)
  // var five = setInterval(fifth, 100)
  // var six = setInterval(sixth, 10)
  // var seven = setInterval(seventh, 10)
  // var eight = setInterval(eighth, 10)
  
  // let count1 = 1;
  // let count2 = 1;
  // let count3 = 1;
  // let count4 = 1;
  // let count5 = 1;
  // let count6 = 1;
  // let count7 = 1;
  // let count8 = 1;

  // function first(){
  //   count1++;
  //   document.querySelector("#number1").innerHTML = count1;

  //   if (count1 == 700) {
  //     clearInterval(one)
  //   }
  // }

  // function second(){
  //   count2++;
  //   document.querySelector("#number2").innerHTML = count2;

  //   if (count2 == 117938370) {
  //     clearInterval(two)
  //   }
  // }

  // function third(){
  //   count3++;
  //   document.querySelector("#number3").innerHTML = count3;

  //   if (count3 == 1420) {
  //     clearInterval(three)
  //   }
  // }

  // function fourth(){
  //   count4++;
  //   document.querySelector("#number4").innerHTML = count4;

  //   if (count4 == 3) {
  //     clearInterval(four)
  //   }
  // }

  // function fifth(){
  //   count5++;
  //   document.querySelector("#number5").innerHTML = count5;

  //   if (count5 == 30) {
  //     clearInterval(five)
  //   }
  // }

  // function sixth(){
  //   count6++;
  //   document.querySelector("#number6").innerHTML = count6;

  //   if (count6 == 150) {
  //     clearInterval(six)
  //   }
  // }

  // function seventh(){
  //   count7++;
  //   document.querySelector("#number7").innerHTML = count7;

  //   if (count7 == 99.9) {
  //     clearInterval(seven)
  //   }
  // }

  // function eighth(){
  //   count8++;
  //   document.querySelector("#number8").innerHTML = count8;

  //   if (count8 == 36586947) {
  //     clearInterval(eight)
  //   }
  // }

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

  window.addEventListener("scroll", reveal);

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
        }, 5)
      }
    }
  }
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Avenir Next Variable';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2729/AvenirNext_Variable.ttf') format('truetype');
}
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
}

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

.active.fade-right {
  animation: fade-right 2s ease-in;
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

.card{
  height: 150px;
  width: 208px;
  position: relative;
  transition: all 0.4s linear;
  transform-style: preserve-3d;
  font-family: "Poppins", Arial, Tahoma, sans-serif;
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
  height: max-content;
} 

.front{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.51em;
  position: absolute;
  text-align: center;
  font-weight: 550;
}

.back{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9em;
  /* font-family: 'Lobster', cursive; */
  position: absolute;
  text-align: center;
}

.front{
  background: #0095eb;
  z-index: 2;
  backface-visibility: hidden;
}

.back{
  background: #007cc3;
  z-index: 1;
  transform: rotateX(180deg);
}

.container:hover .card{
  transform: rotateX(180deg);
}

.up {
  cursor: pointer;
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
  .card {
    width: 500px;
  }
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

  .tp-caption {
    width: fit-content;
  } 

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
  .card {
    width: 400px;
  }

  .img1 {
    width: 450px;
    height: 350px;
  }

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
  .card {
    width: 300px;
  }

  .img1 {
    width: 330px;
    height: 250px;
  }

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

@media (max-width: 300px) {
  .card {
    width: 250px;
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

.home {
  background: url(../..//src/assets/Vector_166-1.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 1000px;
  width: auto;
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

</style>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

<style>
.counter-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.counter {
  text-align: center;
}

.counter h3 {
  padding: 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 800;
}

.counter h6 {
  font-size: 2rem;
  padding-bottom: 1rem;
}

</style>