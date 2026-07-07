<script setup lang="ts">
defineProps<{
  dt: string
}>()
</script>

<template>
<div class="uppercase tracking-wider">
  <dt class="text-white/30 text-sm font-semibold w-full md:text-base">
    {{ dt }}
  </dt>
  <dd class="text-base w-full md:text-lg">
    <slot />
  </dd>
</div>
</template>