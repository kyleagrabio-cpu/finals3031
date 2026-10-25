<template>
  <main class="home-page">
    <Hero />
    <Courses />
    <History/>
    <DeanMessage/>
    <NewsUpdate/>
    <Partners/>
    <Contact/>
  </main>
</template>

<script setup>

import Hero from "../section/Hero.vue";
import Courses from "../section/Courses.vue";
import History from "../section/History.vue";
import DeanMessage from "../section/Message.vue";
import NewsUpdate from "../section/NewsUpdate.vue";
import Partners from "../section/Partners.vue";
import Contact from "@/section/Contact.vue";
</script>

<style scoped>
.home-page {
  width: 100%;
  font-family: Arial, sans-serif;
}
</style>