<template>
  <div>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">
            {{ t("contact.title") }}
          </h2>
        </div>
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col-reverse md:flex-row md:justify-center gap-8">
            <div class="grow-0">
              <img
                src="/contact/udf-logo.png"
                alt="Robots"
                class="w-2/3 mx-auto md:w-full md:h-auto md:max-w-md ring-2 ring-gray-500 rounded-3xl p-4 md:p-16"
              />
            </div>
            <div class="w-full md:w-1/2">
              <BaseAppFooter class="text-[16px] md:text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t } = useI18n({
  scope: "contact",
});
</script>
<i18n lang="json">
  {
    "en": {
      "contact": {
        "title": "Contact"
      }
    },
    "vi": {
      "contact": {
        "title": "Liên hệ"
      }
    }
  }
</i18n>
