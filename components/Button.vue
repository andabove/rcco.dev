<template>
  <a
    class="hover:bg-light-500 bg-light-500/70 px-4 py-3 inline-flex space-x-2 items-center rounded text-2xl font-mono transition cursor-pointer"
    :href="link"
    target="_blank"
    ><slot></slot
  ></a>
</template>

<script setup>
const props = defineProps({
  link: String,
});
</script>
