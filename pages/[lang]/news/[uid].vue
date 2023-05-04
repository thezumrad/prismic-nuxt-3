<script setup>
const { client } = usePrismic();
const route = useRoute();

const { data: article } = await useAsyncData("article", async () => {
  const document = await client.getByUID("blog", route.params.uid);

  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
console.log(article.value.uid,  route.params.uid)
</script>

<template>
  <div >
    <h1>
      {{ article.data.title[0].text }}
    </h1>
  </div>
</template>