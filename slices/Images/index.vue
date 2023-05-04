<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    Placeholder component for images (variation: {{ slice.variation }}) Slices
  </section>
</template>

<script setup>
// import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImagesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
