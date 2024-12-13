<template>
  <div>
    <!-- About Section - Ngay sau Hero -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-justify">
            <p class="text-sm md:text-lg mb-4">{{ t("about.description") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">
            {{ t("products.title") }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- SolarCleanBot -->
            <div
              v-for="product in products"
              :key="product.name"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <NuxtLinkLocale
                :to="`/products/${product.link}`"
                class="flex flex-row md:flex-col p-4"
              >
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="w-1/3 md:w-full h-24 md:h-48 object-contain md:mb-4"
                  referrerpolicy="no-referrer"
                />
                <div class="ml-4 md:ml-0">
                  <h3 class="font-semibold mb-2 md:text-center text-sm">
                    {{ product.name }}
                  </h3>
                  <div class="md:text-center text-sm">
                    {{ product.description }}
                  </div>
                </div>
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto py-10">
          <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">
            {{ t("strategic_partnership") }}
          </h2>
          <div>
            <img
              src="/home/strategic_partnership.png"
              alt="Strategic Partnership"
              class="w-full h-auto"
              referrerpolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t } = useI18n({
  scope: "home",
});

// list 4 products and i18n
const products = computed(() => {
  return [
    {
      name: t("products.solarCleanBot.name"),
      description: t("products.solarCleanBot.description"),
      image: "/products/solar-clean-bot/solar_bot.png",
      link: "solar-clean-bot",
    },
    {
      name: t("products.componentsTester.name"),
      description: t("products.componentsTester.description"),
      image: "/products/components-tester/component_tester.png",
      link: "components-tester",
    },
    {
      name: t("products.factoryAutomation.name"),
      description: t("products.factoryAutomation.description"),
      image: "/products/factory-automation/factory_automation.png",
      link: "factory-automation",
    },
    {
      name: t("products.trainingEquipment.name"),
      description: t("products.trainingEquipment.description"),
      image: "/products/training-equipment/training_equipment.png",
      link: "training-equipment",
    },
  ];
});
</script>
<i18n lang="json">{
  "en": {
    "products": {
      "title": "Products"
    },
    "strategic_partnership": "Strategic Partnership"
  },
  "vi": {
    "products": {
      "title": "Sản phẩm"
    },
    "strategic_partnership": "Đối tác chiến lược"
  }
}</i18n>
