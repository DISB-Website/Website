<template>
  <div>
    <div class="flex flex-center lnd">
      <div  style="width: 90%">
        <div class="lndttl">
          We are currently 
          <br>growing new Products.
        </div>
        <div class="lndcap q-pa-lg text-white">
          Our “Products” page is undergoing construction to include new and up-to-date products for our clients. Thank you for your patience and please look forward to it! In the meantime....        </div>
        <!-- <div class="q-mt-lg q-pa-xl"> -->
        <div class="flex flex-center">  
          <q-btn class="button1" style="font-weight: 400;" no-caps unelevated rounded label="Take me home" :to="{ path: '/'}" icon-right="east" :ripple="false"/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.button1 {
  margin: auto;
  /* width: 40%; */
  /* border: 3px solid #73AD21; */
  padding: 10px;

  color: #009BE2;
  background-color: white;

  &:hover {
    color: white;
    background-color: #273D6C;
  }
}

.lnd {
    /* position: relative; */
  height: 100vh;
  background: linear-gradient(149deg, #273E6C 15.51%, #264AA0 39.3%, #009EE7 77.63%, #FFF 104.71%);
}

.centerbtn {
  margin: auto;
  /* width: 40%; */
  /* border: 3px solid #73AD21; */
  padding: 10px;
}
.lndttl {
  padding: 10px;
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
}

.lndcap {
  font-size: 20px;
  font-weight: 300;
}
</style>