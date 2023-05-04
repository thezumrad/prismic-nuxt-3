<script setup>
const { client } = usePrismic();
const route = useRoute();

const { data: post } = await useAsyncData("post", async () => {
  const document = await client.getByUID("blog", route.params.uid);

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div>
    <h1>
      {{ post.data.title[0].text }}
    </h1>
  </div>
</template>