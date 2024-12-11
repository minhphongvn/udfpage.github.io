<script setup lang="ts">
const route = useRoute();
const head = useLocaleHead();
</script>

<template>
  <div>
    <Html>

    <Head>
      <Title>Nuxt App</Title>
    </Head>

    <Body>
      <BaseAppHeader />
      <div class="container mx-auto pt-10 px-4">
        <div class="py-10">
          <slot />
        </div>
        <BaseAppFooter />
      </div>
    </Body>

    </Html>
  </div>
</template>