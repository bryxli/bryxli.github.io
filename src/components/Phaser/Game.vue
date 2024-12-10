<template>
  <PhaserGame ref="phaserRef" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import PhaserGame from "./Phaser.vue";

const phaserRef = ref();
</script>
