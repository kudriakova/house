<script setup>
import CatalogSection from './components/CatalogSection.vue';
import CollectionSection from './components/CollectionSection.vue';
import HeaderRow from './components/HeaderRow.vue';
import IntroSection from './components/IntroSection.vue';
import TeamSection from './components/TeamSection.vue';
import FooterRow from './components/FooterRow.vue';
</script>

<template>
  <HeaderRow />
  <main>
    <IntroSection />
    <CatalogSection />
    <CollectionSection />
    <TeamSection />
  </main>
  <FooterRow />
</template>

<style scoped></style>
