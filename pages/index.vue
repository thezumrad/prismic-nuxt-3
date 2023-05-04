<script setup>
const { client } = usePrismic();
const localPath = useLocalePath();
const { data: homepage } = await useAsyncData("homepage", () =>
  client.getSingle("homepage", { lang: "az-az" })
);
</script>

<template>
  <div>
    <NuxtLink :to="localPath('/about')">{{ $t("about_btn") }}</NuxtLink>


    <!-- {{ homepage.data.heading }} -->

    <NuxtLink to="/blog" >blog</NuxtLink>
  </div>
</template>
