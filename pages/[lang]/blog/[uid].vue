<script setup>
const { client } = usePrismic();
const route = useRoute();

    const post = ref(null);
    onMounted(async () => {
      setTimeout(async () => {
        try {
          const document = await client.getByUID('blog', route.params.uid);

          if (document) {
            post.value = document;
          } else {
            throw createError({ statusCode: 404, message: 'Page not found' });
          }
        } catch (error) {
          console.error(error);
          // Handle error
        }
      }, 1000); // Wait for 1 second before making the API request
    });

</script>

<template>
  <div v-if="post !== null">
    <h1>
      {{ post.data.title[0].text }}
    </h1>
  </div>
  <div v-else>loading</div>
</template>