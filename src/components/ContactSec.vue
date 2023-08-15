<template>
    <section id="contact" class="flex flex-center">
      <div class="container reveal fade-right">
        <h2>Caption</h2>
        <div class="text-container">
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
          <div class="text-box">
            <h3>Section Text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eius molestiae perferendis eos provident vitae iste.
            </p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
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
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Asap", sans-serif;
}

body {
  background-color: white;
}

section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section:nth-child(2) {
  color: #dcebff;
}

section:nth-child(4) {
  color: #f8f8fd;
  background-color:#b0d6f5;
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
</style>