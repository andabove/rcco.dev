<template>
  <main
    class="bg-white h-screen w-screen flex items-center justify-center bg-white"
  >
    <p class="hidden md:block fixed bottom-0 font-mono">
      blobity by <a href="//github.com/gmrchk" target="_blank">gmrchk</a>
    </p>
    <div class="container mx-auto px-2 lg:px-0 lg:max-w-[50vw] space-y-4">
      <div>
        <img class="w-42" src="~assets/logo.svg" />
      </div>
      <h3
        class="font-mono text-2xl lg:text-4xl bg-clip-text text-transparent from-big-stone-500 to-big-stone-900 bg-gradient-to-tr"
      >
        A team of creative engineers and designers building products in the
        AdTech space.
      </h3>
      <div class="flex items-center space-x-2">
        <Button link="//github.com/rcco">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
              fill="currentColor"
            ></path>
          </svg>
          <p>Github</p>
        </Button>
        <Button link="//rcco.uk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z"
              fill="currentColor"
            ></path>
          </svg>
          <p>Home</p>
        </Button>
      </div>
    </div>
  </main>
</template>

<script setup>
import Blobity from "blobity";
import { ref } from "vue";
const instance = ref(null);

onMounted(() => {
  if (!instance.value) {
    instance.value = new Blobity({
      licenseKey: "opensource",
      zIndex: 1,
      opacity: 0.5,
      color: "#D20B5B",
    });
  }
});
</script>

<style lang="postcss">
main {
  background-image: linear-gradient(
    to right,
    theme("colors.gray.200") 1px,
    transparent 1px
  );

  background-size: calc(100% / 12);
}
</style>
