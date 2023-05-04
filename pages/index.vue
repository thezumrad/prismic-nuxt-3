<script setup>
const { client } = usePrismic();
// const localPath = useLocalePath();
const { data: homepage } = await useAsyncData("homepage", () =>
  client.getSingle("homepage", { lang: "it-it" })
);
</script>

<template>
  <div>
    <NuxtLink :to="'/about'">about</NuxtLink>

   <!-- <h1>{{ $t("homeTitle") }}</h1> -->
    {{ homepage.data.heading }}

    <NuxtLink to="/blog" >blog</NuxtLink>
  </div>
</template>
