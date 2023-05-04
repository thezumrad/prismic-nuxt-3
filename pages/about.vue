<script setup >
const localPath = useLocalePath();
</script>
<template>
  <div>
    <h1>{{ $t("aboutTitle") }}</h1>
    <NuxtLink :to="localPath('/')">{{ $t("homeBtn") }}</NuxtLink>
  </div>
</template>