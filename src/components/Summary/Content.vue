<template>
  <div class="summary-content">
    <img src="/summary/self.jpg" alt="portrait" class="summary-image" />
    <div class="summary-text">
      <h3 class="summary-header">
        <div class="name-container">
          <span>Br</span>
          <span class="no-select">
            <span v-if="yCount < 13">
              <a data-testid="y" @click="addY">{{ yText }}</a>
            </span>
            <span v-else-if="yValue" data-testid="y" class="success">{{
              yText
            }}</span>
            <span v-else>
              <span data-testid="y" class="falling-y">{{ yText }}</span> </span
            >an Li
          </span>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/bryxli" target="_blank">
            <OhVueIcon name="bi-linkedin" inverse />
          </a>
          <a href="https://github.com/bryxli" target="_blank">
            <OhVueIcon name="bi-github" inverse />
          </a>
          <a href="mailto:bryanzero765@gmail.com">
            <OhVueIcon name="md-email" inverse />
          </a>
        </div>
      </h3>
      <p>
        Hey there! I'm Bryan, local full stack engineer and cloud connoisseur
        based in Chicago. I graduated from the University of Wisconsin-Madison
        with a B.S. in computer science, data science, and digital studies. I
        love exploring new tools and technologies. On this site, you can find
        various projects that I have been working on. Please feel free to
        explore the site! Who knows? They say there are thirteen y's in Bryan.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeMount } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGithub, BiLinkedin, MdEmail } from "oh-vue-icons/icons";
import { useStore } from "@nanostores/vue";
import { selector, y } from "../../store/optionsStore";

const selectorValue = useStore(selector);
const yValue = useStore(y);
const yCount = ref(1);
const complete = ref(false);
const yText = computed(() => "y".repeat(yCount.value));

const addY = () => {
  if (yCount.value < 13) {
    yCount.value++;
  }
  if (yCount.value === 13) {
    if (selectorValue.value === 4) {
      y.set(true);
    }
    complete.value = true;
  }
};

onBeforeMount(() => {
  addIcons(MdEmail, BiGithub, BiLinkedin);
});
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

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name-container {
  display: inline-flex;
  align-items: center;
}

.no-select {
  user-select: none;
  cursor: text;
}

.social-links a OhVueIcon {
  color: white;
  margin-left: 1rem;
  cursor: pointer;
}

.social-links a:hover OhVueIcon {
  color: gray;
}

.falling-y {
  display: inline-block;
  animation: fall 1s forwards;
}

.success {
  color: yellow;
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
