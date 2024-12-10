<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Phaser from "phaser";

const game = ref();

onMounted(() => {
  const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
  };

  game.value = new Phaser.Game(config);
});

onUnmounted(() => {
  if (game.value) {
    game.value.destroy(true);
    game.value = null;
  }
});
</script>
