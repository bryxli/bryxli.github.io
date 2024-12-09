<template>
  <div class="summary-content">
    <img src="/summary/self.jpg" alt="portrait" class="summary-image" />
    <div class="summary-text">
      <h3>
        <span>Br</span>
        <a @click="addY">
          <span v-if="yCount < 13">{{ "y".repeat(yCount) }}</span>
          <span v-else class="falling-y">{{ "y".repeat(yCount) }}</span> </a
        >an Li
      </h3>
      <p>
        Hey there! I'm Bryan, local full stack engineer and cloud connoisseur. I
        graduated from the University of Wisconsin-Madison with a B.S. in
        computer science, data science, and digital studies. I love exploring
        new tools and technologies. That's partially the reason you are on this
        site now. I wanted to explore Astro further, and Astro Integrations
        allowed me to create components using all kinds of frameworks, all in
        one project. Please feel free to explore the site! Who knows? They say
        there are thirteen y's in Bryan.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const yCount = ref(1);

const addY = () => {
  if (yCount.value < 13) {
    yCount.value++;
  }
};
</script>

<style scoped>
.summary-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.summary-image {
  border-radius: 8px;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 2rem;
}

.summary-text {
  max-width: 50%;
  text-align: left;
}

.summary-text a {
  user-select: none;
  cursor: text;
}

.falling-y {
  display: inline-block;
  animation: fall 1s forwards;
}

@keyframes fall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}
</style>
