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
        <slot />
        <BaseAppFooter />
      </Body>
    </Html>
  </div>
</template>