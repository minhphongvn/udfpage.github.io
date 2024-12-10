<script setup>
const { setLocale } = useI18n();
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('vi')">vi</button>
      <p>{{ $t("welcome") }}</p>
    </div>
  </div>
</template>

