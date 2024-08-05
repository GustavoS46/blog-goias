<template>
  <div class="bg-[#E1E5E7]">
    <HeroSection />
    <NewsSection />
    <LatestArticles />
    <FooterComponet />
  </div>
</template>

<script setup>
import HeroSection from "./views/HeroSection.vue";
import NewsSection from "./views/News/NewsSection.vue";
import LatestArticles from "./views/LatestArticles.vue";
import FooterComponet from "./views/FooterComponet.vue";
</script>