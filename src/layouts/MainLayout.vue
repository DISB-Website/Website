<template>
  <q-layout view="hHr lpR fFf">
    <q-header expand position="top">
      <q-toolbar class="header">
        <q-toolbar-title style="margin-left: 70px;">
          <router-link class="link" :to="{ path:'/' }">
            <div class="logo"></div>
          </router-link>
          
          <!-- <img
            alt="DISB logo"
            src="~assets/Detik-Ideal.svg"
            style="width: 60px; height: 60px; margin-right: 20px;"
          > -->
        </q-toolbar-title>

        <a @click="toggleRightDrawer" style=" margin-right: 50px;">
          <i class="fa-solid fa-bars" style="cursor: pointer; height: 18px; width: 29.46px;"></i>
        </a>
      </q-toolbar> 
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      style="background-color: #009BE2; transition: 60s ease all;"
      >
      
      <q-list>
        <i @click="rightDrawerOpen=false" style="cursor: pointer; margin-left: 250px;">
          <q-icon name="close" style="color: white; margin-top: 10px; width: 20.62px; height: 20px;"></q-icon>
        </i>
        <nav>
          <ul class="">
            <li><router-link class="link" :to="{ path: '/about'}" style="cursor: pointer;">About</router-link></li>
            <li><router-link class="link" :to="{ path: '/service'}" style="cursor: pointer;">Services</router-link></li>
            <li><router-link class="link" :to="{ path: '/products'}" style="cursor: pointer;">Products</router-link></li>
            <li><router-link class="link" :to="{ path: '/contact'}" style="cursor: pointer;">Contact</router-link></li>
            <li><a class="link" href="https://detikideal.com.my/mystep22/apply/#/" target="_blank" style="cursor: pointer;">MySTEP</a></li>
          </ul>
        </nav>
      </q-list>
    </q-drawer>

    <q-page-container @click="rightDrawerOpen=false">
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header")[0].classList.remove(className);
  }
};

export default({
  name: 'MainLayout',

  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
    }
  },

  methods: {
    scrollToBottom(){
      this.$refs['footer'].scrollIntoView({behavior: "smooth"})
    }
  }
})

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

.header {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  height: 80px;
  background-color: rgb(0, 0, 0, 0.1);
  transition: all 0.1s ease;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;

  .logo {
    background-image: url(../..//src/assets/Detik-Ideal.svg);
    background-repeat: no-repeat;
    height: 40px;
  }

  &.inverted {
    background-color: #fff;
    a {color: #273D6C; }
    .logo {background-image: url(../..//src/assets/Logo-color.svg);
    background-repeat: no-repeat;}
  }
  
}

nav {
  display: flex;
  flex-direction: column;
  position: fixed; 
  height: 100%;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22px;
  margin-left: 80px;
  margin-top: 40px;

  @media (min-width: 900px) {
    max-width: 900px;
  }

  ul, .link {
    font-weight: 500;
    list-style: none;
    text-decoration: none;
  }

  li {
    padding: 10px;
  }

  .link {
    font-size: 30px;
    font-weight: 700;
    transition: 0.01s ease all;
    border-bottom: transparent;
    color: #fff;
    justify-content: flex-end; 
    display: flex;

    &:hover {
      color: #314F97;
    }

    &:active {
      color: #314F97;
    }
  }
}

.nav2 {
  background-color: #FFFFFF;
  color: #273D6C;
}

a.router-link-active.router-link-exact-active.link {
  color: #314F97;
}
</style>