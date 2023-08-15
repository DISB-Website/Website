<template>
  <section class="App-Footer overflow-hidden" style="">
    <div class="" style="margin-left: 110px; margin-right: 100px;">
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
  </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default ({

  data: () => {
    return {
      posts: {
        nme: null,
        com: null,
        eml: null,
        pno: null,
        typ: null,
        msg: null
      }
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
  },

  setup() {
    return {
      options: [
        'Software Development', 'Mobile + Web Applications', 'System Integration', 'IT Support', 'Training + Consultancy', 'Others'
      ]
    }
  },
})
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

</style>

<style scoped lang="scss">
.App-Footer {
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background :#009BE2;
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
  .Links h3 {
    font-size: 20px;
  }
  .Links li {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .App-Footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .Outer-Icon-Row {
    display: grid;
    column-gap: 13px;
    margin-block: 40px;
  }
  .Icon-Row img {
    height: 35px;
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

.button1 {
  color: #009BE2;
  background-color: white;

  &:hover {
    color: white;
    background-color: #273D6C;
  }
}
</style>