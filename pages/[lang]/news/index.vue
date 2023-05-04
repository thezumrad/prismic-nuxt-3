<script setup>
const { client } = usePrismic();

const { data: posts } = await useAsyncData("posts", () =>
  client.getAllByType("blog")
);
</script>

<template>
  
  <div style="display: flex; flex-direction: column;">
    
         <!-- {{posts}} -->
    <NuxtLink v-for="post in posts" :to="`/blog/${post.uid}`" style="margin: 2rem;font-size: 2rem;">
      {{post.data.title[0].text}}
    </NuxtLink>
  
  </div>

</template>