<template>
    <section id="home" class="flex flex-center">
      <transition
        appear
        enter-active-class="animated jackInTheBox"
        leave-active-class="animated fadeOut"
        >
        <img
          id="main"
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 450px;"
        >
      </transition>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="width:auto; height: auto;">
        <path fill="#8DB7DB" fill-opacity="1" d="M0,256L60,229.3C120,203,240,149,360,138.7C480,128,600,160,720,144C840,128,960,64,1080,42.7C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </section>
</template>

<script>
</script>