<!-- <template>
  <section class="home grid place-items-center md:mt-10 overflow-hidden" style="justify-content: flex-start; align-items: center; min-height: 160vh; height: max-content;">
    <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 items-end gap-10 lg:gap-16 w-full px-0 lg:px-10">
      <div class="w-full q-pb-20 flex-center" style="gap: 3; margin-left: 110px; justify-self: flex-start;">
        <div class="column">
          <div class="col" style="margin-bottom: 100px;">
            <p class="text-weight-bold text-white text-h2" style="font-size: 50px;">
              Nurturing
              <br>Innovations
            </p>
          </div>
          <div class="col">
            <p class="text-white q-pt-sm" style="font-size: 17px; font-weight: 400;">
              Our Event Management Platform (emp) is a suite of products that 
              <br>can be seamlessly integrated within any systems to orchestrate
              <br>complex processes and business operations for monetization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->
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

      <q-carousel-slide class="" :name="1" img-src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/about-us.jpeg">
        <div class="q-mt-md text-start">
          <p style="margin-top: 15px; margin-right: 20px; font-weight: 500;" class="car1 float-center text-bold text-h3">
            Our Values
          </p>
        </div>
        <div class="q-mt-md text-start">
          <p style="margin-top: 20px;  margin right: 20px; font-weight: 500;" class="car1 float-center text-h4 text-blue">
            Professional.Reliable.Contemporary.Simple
          </p>
        </div>
        <div class="bg q-mt-md text-start">
          <p style="margin-right: 40px; margin-top: 20px;" class="car2 q-pt-md q-pb-md text-weight-regular text-h5">
            Our team are dedicated to ensuring our clients and partners are getting the best 
            <br>experience with us, by providing professional and reliable services, and simplicity
            <br>in communications and the way we do things without comprising quality.
          </p>
        </div>
        <!-- <div class="tp-mask-wrap items-start" style="position: absolute; display: block; overflow: visible;">
          <div class="" data-x="-7" data-y="center" data-voffset="50" data-width="['full','full','full','full']" data-height="['183']" data-type="shape" data-responsive_offset="on" data-frames="[{}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="z-index: 8; background-color: rgba(165, 165, 165, 0.59); visibility: inherit; transition: none 0s ease 0s; text-align: inherit; line-height: 4px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 0px; font-weight: 400; font-size: 3px; min-height: 130px; min-width: 1920px; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform-origin: 50% 50% 0px;"> 
            
          </div>
        </div> -->
      </q-carousel-slide>
    </q-carousel>

    <div class="row q-pt-lg">
      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-12 col-sm-6" style="text-align: center;">
            <p id="number1" class="q-pt-md text-grey-9 text-h5" style="font-size: 60px;">
              100
            </p>
            <p class="text-h3 text-weight-light" style="font-size: 30px; color: #1c91f2;">
              YEARS
            </p>
            <p class="text-body text-weight-light" style="font-size: 20px; color: #46525e;">
              OF COMBINED IT EXPERIENCES IN VARIOUS INDUSTRIES
            </p>
          </div>
          <div class="col-12 col-sm-6" style="text-align: center;">
            <p id="number2" class="q-pt-md text-grey-9 text-h5" style="font-size: 60px;">
              16
            </p>
            <p class="text-h3 text-weight-light" style="font-size: 30px; color: #1c91f2;">
              YEARS
            </p>
            <p class="text-body text-weight-light" style="font-size: 20px; color: #46525e;">
              IN BUSINESS WITH GLOBAL EXPERIENCES
            </p>
          </div>
          <div class="col-12 col-md-12" style="text-align: center;">
            <p class="q-pt-md text-grey-9 text-h2" style="font-size: 30px; font-weight: 700; color: #46525e;">
              OUR COMPETENCIES
            </p>
            <p class="text-h4" style="font-size: 20px; color: #46525e; font-weight: 600;">
              software development . system integration . consultancy services
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6" style="text-align: center;">
        <div class="text-h2" style="font-size: 30px; font-weight: 700; color: #46525e;">
          Board of Directors
        </div>
        <img class="img1 reveal active fade-in" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/Screen-Shot-2018-11-13-at-3.31.12-PM.png" width="600px" height="400px">
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col-12 col-md-6" style="">
        <div class="text-h2" style="font-size: 30px; font-weight: 700; color: #46525e;">
          Our Staff, Our Assets
        </div>
        <img class="img1" src="https://detikideal.com.my/wordpress/wp-content/uploads/2018/11/Screen-Shot-2018-11-14-at-11.02.51-AM-1024x605.png" width="550px" height="350px">
      </div>
      <div class="col-12 col-md-6" style="color: #46525e; margin-top: 60px;">
        <p class="" style="text-align: justify; text-justify: inter-word; font-weight: 400; font-size: 17px;">
          Detik Ideal is built on a vision to be a top-world class IT company with main forte in software development and system integration.
        </p> 
        <p style="text-align: justify; text-justify: inter-word; font-weight: 400; font-size: 17px;">
          Established in 2002, we began our journey with skeleton resource, and shortly thereafter, secure a major project in Malawi, Africa. We then expand our business territory to West Asia and soon after brought our business back to Malaysia.
        </p>
        <p style="text-align: justify; text-justify: inter-word; font-weight: 400; font-size: 17px;">
          We have since grown from a humble beginning to build our company and people to be the best of the best, and to deliver quality services.
        </p>
        <p style="text-align: justify; text-justify: inter-word; font-weight: 400; font-size: 17px;">
          All is made possible with the commitment and dedication of our people.
        </p>
      </div>
    </div>

    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      animated
      infinite
      swipeable
      padding
      arrows
      control-color="grey-6"
      height="300px"
      class="bg-white rounded-borders reveal active fade-in"
      >

      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-italic text-body1" style="color: #007fe8;">
          As a marketing executive, I had the opportunity to learn directly from my senior on how to manage accounts. I am thankful to have the experience in managing sales and relationship with clients and to be able to work in happy environment.
        </div>
        <div>
          <i class="fa-solid fa-ellipsis q-pt-md" style="color: #0095eb; font-size: 30px;"></i>
        </div>
        <div class="q-mt-md text-center text-h5" style="color: #46525e; font-size: 20px; font-weight: 800;">
          Marketing Executive
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-italic text-body1" style="color: #007fe8;">
          It is a good opportunity to advance my career here, the management are very generous and welcome our ideas and offers good benefit and provide training to improve our skills.
        </div>
        <div>
          <i class="fa-solid fa-ellipsis q-pt-md" style="color: #0095eb; font-size: 30px;"></i>
        </div>
        <div class="q-mt-md text-center text-h5" style="color: #46525e; font-size: 20px; font-weight: 800;">
          Operation Support
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-italic text-body1" style="color: #007fe8;">
          I started out as an intern with the Company and my impressive experiences and helpful supervisor had me decided to join as permanent staff. It has been wonderful experience so far. Thank you very much DISB
        </div>
        <div>
          <i class="fa-solid fa-ellipsis q-pt-md" style="color: #0095eb; font-size: 30px;"></i>
        </div>
        <div class="q-mt-md text-center text-h5" style="color: #46525e; font-size: 20px; font-weight: 800;">
          Programmer
        </div>
      </q-carousel-slide>
    </q-carousel>

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
  import '@fortawesome/fontawesome-free/css/all.css'
  import '@fortawesome/fontawesome-free/js/all.js'
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

  var one = setInterval(first, 1)
  var two = setInterval(second, 100)
  let count1 = 1;
  let count2 = 1;


  function first(){
    count1++;
    document.querySelector("#number1").innerHTML = count1;

    if (count1 == 100) {
      clearInterval(one)
    }
  }

  function second(){
    count2++;
    document.querySelector("#number2").innerHTML = count2;

    if (count2 == 16) {
      clearInterval(two)
    }
  }

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
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}

.active.fade-in {
  animation: fade-in 1s ease-in;
}

@keyframes fade-in {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 1; }
}


.Copyright {
  position: relative;
  bottom: 0;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 100px;
  margin-right: 50px;
  margin-left: 50px;
  color: #fff;
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

.up {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .row {
    text-align: center;
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
  .img1 {
    width: 400px;
    height: 250px;
  }

  .text {
    font-size: 20px;
  }

  .row {
    text-align: center;
  }
}

@media (max-width: 425px) {
  .img1 {
    width: 300px;
    height: 280px;
  }

  .row {
    text-align: center;
  }

  .text {
    font-size: 15px;
  }
}
</style>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
.row + .row
  margin-top: 1rem
  margin-right: 3rem
  margin-left: 3rem
</style>