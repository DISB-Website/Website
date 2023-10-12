<template>
  <div>
    <div class="flex flex-center lnd">
      <div class="lndttl px-vw s-h1">
        Nurturing Tomorrow’s 
        <br>Innovation Today
      </div>
      <div class="absolute-bottom">
        <div class="row items-center">
          <!-- <a @click="scrollToElement">
            Get to know us more
            <li><q-icon name="expand_more"/></li>
          </a> -->
          <!-- <q-img v-if="$q.screen.lt.md" src="../assets/about/tml.svg"  style="width:85vw; margin:auto;"></q-img> -->
          <q-btn @click="scrollToSt" style="margin:auto;" flat rounded color="white" no-caps size="$q.screen.lt.md?'lg':'sm'">
            Get to know us
          </q-btn>
        </div>
        <div class="row items-center q-pb-md">
          <!-- <br> -->
          <q-btn @click="scrollToSt" style="margin:auto;" flat rounded color="white" icon="expand_more" no-caps size="$q.screen.lt.md?'lg':'sm'"/>
        </div>
      </div>
    </div>
    
    <section ref="stHere" class="" style="height:20vh;"></section>

    <section>
    <div class="row items-center px-vw">
      <div class="q-pa-md col-md-6 col-sm-12 c-disb-h s-h1">
        "Teamwork makes our dream work."
      </div>
      <div class="q-px-md col-md-6 col-sm-12 c-disb-t s-t2">
        We are a dynamic and collaborative team of designers and developers united by a common purpose– to deliver the best solutions for our valued clients and partners. With a diverse range of skills and expertise, we thrive on creativity, innovation, and problem-solving skills to craft exceptional digital experiences.
      </div>
    </div>

    <div class="" style="height:20vh;"></div>

    <div x="cont" class="row px-vw">
      <div x="1" class="lbcol q-px-md q-pt-md q-pb-xl col-lg-3 col-md-6 col-xs-12">
        <div>
          <q-img src="../assets/about/good.svg" fit="contain" style="height:50px; width:50px;"/>
        </div>
        <div class="q-pl-0 q-py-md s-t1 c-disb-t" >
          Simple
        </div>
        <div class="s-t2">
          Simplicity in design and communication.
        </div>
      </div>
      <div x="2" class="lbcol q-px-md q-pt-md q-pb-xl col-lg-3 col-md-6 col-xs-12">
        <div>
          <q-img src="../assets/about/rt-shield.svg" fit="contain" style="height:50px; width:50px;"/>
        </div>
        <div class="q-pl-0 q-py-md s-t1 c-disb-t" >
          Reliable
        </div>
        <div class="s-t2">
          Consistent quality in services and delivery.
        </div>
      </div>
      <div x="3" class="lbcol q-pa-md col-lg-3 col-md-6 col-xs-12">
        <div>
          <q-img src="../assets/about/star.svg" fit="contain" style="height:50px; width:50px;"/>
        </div>
        <div class="q-pl-0 q-py-md s-t1 c-disb-t" >
          Professional
        </div>
        <div class="s-t2">
          Customer-centric service orientation.
        </div>
      </div>
      <div x="4" class="lbcol q-pa-md col-lg-3 col-md-6 col-xs-12">
        <div>
          <q-img src="../assets/about/clock-up.svg" fit="contain" style="height:50px; width:50px;"/>
        </div>
        <div class="q-pl-0 q-py-md s-t1 c-disb-t">
          Contemporary
        </div>
        <div class="s-t2">
          Up-to-date with latest technologies and trends.
        </div>
      </div>
    </div>
    </section>
  
    <div class="" style="height:20vh;"></div>

    <section>
    <div class="row items-center px-vw">
      <div class="q-pa-md c-disb-h s-h1">
        History + Milestone
      </div>
      <div class="q-pa-md c-disb-t s-t2">
        Detik Ideal is built on a vision to be a top-world class IT company with main forte in in-house software development and digital services.
        <br><br>Established in 2002, we began our journey with skeleton resources, and shortly thereafter, secured a major project in Malawi, Africa. We then expanded our business territory to West Asia and soon after brought our business back to Malaysia. 
        <br><br>We have since grown from a humble beginning to build our company and people to be the best of the best, and to deliver quality services. All is made possible with the commitment and dedication of our people.
      </div>
      <q-img v-if="$q.screen.lt.md" src="../assets/about/tml.svg"  style="width:85vw; margin:auto;"></q-img>
      <q-img v-if="$q.screen.gt.sm" src="../assets/about/tml.svg"  style="width:40vw; margin:auto;"></q-img>

    </div>
    </section>
        
    <div class="" style="height:20vh;"></div>

    <section>
    <div class="px-vw q-mb-xl row items-center">
      <div class="q-pa-md c-disb-h s-h1">
        Global Presence
      </div>
    </div>
    <div class="flex flex-center items-center">
      <q-img v-if="$q.screen.lt.md" src="../assets/about/map.svg"  style="width:98vw; overflow-x: visible;"></q-img>
      <q-img v-if="$q.screen.gt.sm" src="../assets/about/map.svg"  style="width:60vw; margin:auto;"></q-img>
    </div>
    </section>

    <div class="" style="height:20vh;"></div>

    <!-- this one AA -->
    <div class="bg-blu" style="height:4vh;"></div>
    <div x="cont" class="row q-gutter-0 px-vy bg-blu text-white">
      <div x="1" class="col-md-6 col-xs-12">
        <div class=" q-px-md q-pt-lg s-h1">
          Talk To Us About Your Next Project.
        </div>
        <div class="q-pt-lg">
          <q-form
              @submit="submitEnquiry"
              method="post"
              class="q-pa-md q-gutter-md"
            >
            <!-- <p class="q-my-0 text-white">Name</p> -->
            <q-input dense filled color="grey-3" label-color="grey-10" bg-color="white" class="q-pt-0 q-pb-sm"
              label="Your Name *"
              v-model="enq.nme"
              lazy-rules :rules="[val => !!val || 'Field is required']"
            />
            <q-input dense filled color="grey-3" label-color="grey-10" bg-color="white" class="q-pt-0 q-pb-sm"
              label="Company"
              v-model="enq.com"
            />
            <div class="row">
            <q-input dense filled color="grey-3" label-color="grey-10" bg-color="white" class="col-6 q-pr-xs q-pt-0 q-pb-sm"
              label="Email *"
              v-model="enq.eml"
              lazy-rules :rules="[val => !!val || 'Field is required']"
            />
            <q-input dense filled color="grey-3" label-color="grey-10" bg-color="white" class="col-6 q-pl-xs q-pt-0 q-pb-sm"
              label="Contact No."
              v-model="enq.pno"
            />
            </div>
            <q-select dense filled color="grey-3" label-color="grey-10" bg-color="white" class="q-pt-0 q-pb-sm"
              :options="options"
              label="Enquiry Type"
              v-model="enq.typ"
            />
            <q-input dense filled color="grey-3" label-color="grey-10" bg-color="white" class="q-pt-0 q-pb-sm"
              type="textarea"
              label="Message"
              v-model="enq.msg"
            />
            <div class="col self-center q-pt-sm q-pb-xl">
              <q-btn type="submit" class="" style="" color="white" text-color="grey-10" no-caps unelevated rounded label="Submit Enquiry" icon-right="east" :ripple="false" />
            </div>

          </q-form>

        </div>
      </div>
      <div x="2" class="col-md-6 col-xs-12">
        <div class=" pxy-mdlg s-h1">
          <div class="plb-xl">
            Connect with Us.
          </div>
        </div>
        <div x="1" class="row items-center q-py-md q-pl-md">
          <div x="pic" class="col-4 q-px-xl">
            <q-img class="" src="~/assets/phone.svg" fit="contain" style="height:45px; width:45px;"></q-img>
          </div>
          <div x="txt" class="col-8 s-t2">+ 60 3 6151 4886</div>
        </div>
        <div x="2" class="row items-center q-py-md q-pl-md">
          <div x="pic" class="col-4 q-px-xl">
            <q-img class="" src="~/assets/mail.svg" fit="contain" style="height:45px; width:45px;"></q-img>
          </div>
          <div x="txt" class="col-8 s-t2">hello@detikideal.com.my</div>
        </div>
        <div x="3" class="row items-center q-py-md q-pl-md">
          <div x="pic" class="col-4 q-px-xl">
            <q-img class="" src="~/assets/map.svg"  fit="contain" style="height:45px; width:45px;"></q-img>
          </div>
          <div x="txt" class="col-8 s-t2">F-3F-3, Strand Garden Office,<br>Jalan PJU 5/1, Kota Damansara,<br>47810 Petaling Jaya</div>
        </div>
        <div x="x" class="self-center pa-soc q-gutter-md">
          <q-btn flat round size="md" icon="fa-brands fa-linkedin"  href="https://www.linkedin.com/company/detik-ideal-sdn-bhd/" class="text-white"></q-btn>
          <q-btn flat round size="md" icon="fa-brands fa-facebook"  href="https://www.facebook.com/detikideal/"                  class="text-white socsz"></q-btn>
          <q-btn flat round size="md" icon="fa-brands fa-instagram" href="https://instagram.com/detik_ideal/"                    class="text-white socsz"></q-btn>
          <q-btn flat round size="md" icon="fa-brands fa-twitter"   href="https://mobile.twitter.com/disbmarketing/"             class="text-white socsz"></q-btn>
          <q-btn flat round size="md" icon="fa-brands fa-tiktok"    href="https://www.tiktok.com/@detik_ideal/"                  class="text-white socsz"></q-btn>
        </div>
      </div>
    </div>
    <div class="bg-blu" style="height:4vh;"></div>
    <div class="bg-blu text-white row items-center" style="height:10vh;">
      <div style="margin:auto;" class="row items-center Copyright">© 2022 Detik Ideal Sdn Bhd (457490-D) All Rights Reserved | Privacy Policy</div>
    </div>


    <!-- <q-dialog v-model="enqReceived">
      <q-card>
        <q-card-section>
          <div class="text-h6">Enquiry Received</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Thank you for your interest in us. 
          <br>We will be in contact soon. 
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <!-- AA up to here -->
  </div>
</template>

<style scoped lang="sass">

.Copyright
margin:auto
text-align:center
font-size: 15px
@media screen and (max-width : 600px)
  font-size: 12px

.lnd
position: relative
height: 100vh
background-image: url("../assets/about/bg1.png")
background-position: center
background-repeat: no-repeat
background-size: cover

.lndttl 
color: #FFF
text-align: center
font-family: Roboto
font-size: 50px
font-style: normal
font-weight: 700
line-height: normal
letter-spacing: 0.75px

.btm 
margin: auto
position: absolute
bottom: 0

.inficon
  height:50px
  width:50px
  // @media screen and (max-width : 600px)
  //   height: 50px
  //   width: 50px

.pa-soc
padding: 30px 100px
@media screen and (max-width : 600px)
  padding: 30px 10px
.pa-vw
padding: 20vw 20vw

.px-vy
padding: 0 15vw
@media screen and (max-width : 600px)
  padding: 0 10vw

.px-vw 
padding: 0 20vw
@media screen and (max-width : 600px)
  padding: 0 10vw
.px-vx 
padding: 0 15vw
@media screen and (max-width : 600px)
  padding: 0 10vw

.plb-xl
padding-left: 64px
padding-bottom: 48px
@media screen and (max-width : 600px)
  padding-left: 24px
  padding-bottom: 48px

.pxy-mdlg 
padding: 24px 24px
@media screen and (max-width : 600px)
  padding: 24px 0px

.px-vwx 
padding: 0 24vw 48px 24vw

.c-disb-h 
color: #009EE7

.c-disb-t 
color: #273D6C

.bg-blu
background-color: #009EE7

.s-h1  
font-size: 3.75rem  // /* 60px */
line-height: 1
font-weight: 700 
@media screen and (max-width : 600px)
  font-size: 50px

.s-t1 
font-size: 1.875rem  // /* 30px */
line-height: 2.25rem  // /* 36px */
font-weight: 600
@media screen and (max-width : 600px)
  font-size: 24px

.s-t2 
font-size: 1.25rem   // /* 20px */
line-height: 1.75rem // /* 28px */
@media screen and (max-width : 600px)
  font-size: 18px

.lbcol 
// /* border-left: 10px linear-gradient(270deg, #264AA0 -16.33%, #009BE2 78%); */
padding: 0 1rem 0 1rem
border-width: 3px
border-style: solid
border-image: linear-gradient(270deg, #264AA0 -16.33%, #009BE2 78%) 0 0 0 1

</style>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const options = ref([
'Software Development', 'Mobile + Web Applications', 'System Integration', 'IT Support', 'Training + Consultancy', 'Others' 
])

const enq = reactive( {
nme:"",
com:"",
eml:"",
pno:"",
typ:"",
msg:""
})

const enqReceived = ref(false)
const stHere = ref() // assigned to some element in the template


function submitEnquiry(e) {

e.preventDefault();
    console.log(enq)
    axios.post("https://doprod.at-hive.com/rv3api/api/webmail", enq)
    .then (res => {
    // enqReceived.value = true
    acceptRFI()
    // alert("Enquiry Received. We will be in contact soon.")

    console.log(res)
    })
    .catch (err => console.log(err))
} 

function acceptRFI () {
$q.dialog({
  title: 'Enquiry Received',
  message: 'Thank you for your interest in us. We will be in contact soon.'
}).onOk(() => {
  // console.log('OK')
}).onCancel(() => {
  // console.log('Cancel')
}).onDismiss(() => {
  // console.log('I am triggered on both OK and Cancel')
})
}

function scrollToSt () {
stHere.value.scrollIntoView({ behavior: "smooth" })
}

</script>
