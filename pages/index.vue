<script setup lang="ts">
import KatseyeImage from '~/assets/katseye-pinky-up.jpg';

definePageMeta({
  theme: 'standard'
})
</script>

<template>
<NuxtLayout name="default">
  <template #image>
    <PageImage :image="KatseyeImage" alt="" />
  </template>

  <template #header>
    <header class="flex flex-col-reverse">
      <h1 class="font-display font-semibold text-5xl md:text-6xl">
        Norah's 9th Birthday Party</h1>
      <p class="uppercase text-base font-semibold tracking-wider">
        You are invited to</p>
    </header>
  </template>

  <template #date>
    Aug 2
  </template>

  <template #time>
    2–4pm
  </template>

  <template #where>
    <p>Kenneth R Dunn Municipal Pool at Truxtun Park</p>
  </template>

  <template #description>
    <p>Celebrate with Norah as she dances into a new year around the
      sun!</p>
    <p class="mt-4"><a
        class="underline text-standard-blue hover:text-standard-accent/80"
        href="mailto:timuism@me.com, missaddy22@gmail.com?subject=RSVP%20for%20Norah's%208th%20Birthday%20Party&body=%0A%0A">Click
        here to RSVP by email</a> before July 25th (Let us know who
      you are (parent /
      child) in the email body).</p>
  </template>
</NuxtLayout>
</template>