<script setup>
const route = useRoute();
const { locale, t } = useI18n();
const head = useLocaleHead();

const listPageHero = {
  "/": {
    bg: "/home/hero_bg.png",
    title: t("home"),
  },
  "/products": {
    bg: "/products/hero_bg_products.png",
    title: t("products"),
  },
  "/products/solar-clean-bot": {
    bg: "/products/solar-clean-bot/solar_hero.png",
    title: t("productsList.solarCleanBot"),
  },
  "/products/components-tester": {
    bg: null,
    title: t("productsList.componentsTester"),
  },
  "/products/factory-automation": {
    bg: null,
    title: t("productsList.factoryAutomation"),
  },
  "/products/training-equipment": {
    bg: null,
    title: t("productsList.trainingEquipment"),
  },
  "/about": {
    bg: "/about/hero_bg_about.png",
    title: t("about"),
  },
  "/contact": {
    bg: "/contact/hero_bg_contact.png",
    title: t("contact"),
  },
};
// change hero bg image based on the current page when using i18n
const contentHero = computed(() => {
  const currentPath =
    route.path === "/" ? "/" : route.path.replace(`/${locale.value}`, "");
  return {
    bg: listPageHero[currentPath]?.bg,
    title: listPageHero[currentPath]?.title,
  };
});

// check if the current page is the contact page when using i18n
const isContactPage = computed(() => {
  return route.path === `/${locale.value}/contact` || route.path === "/contact";
});
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>Uni Design Factory</Title>
      </Head>

      <Body>
        <BaseAppHeader />
        <div>
          <section class="pt-16">
            <div class="relative">
              <div class="bg-orange-500 py-6">
                <template v-if="contentHero.bg">
                  <img
                    :src="contentHero.bg"
                    alt="Robots"
                    class="w-full max-w-6xl mx-auto h-auto"
                    referrerpolicy="no-referrer"
                  />
                </template>
                <template v-else>
                  <div class="w-full text-center max-w-6xl mx-auto h-auto">
                    <h1 class="text-4xl font-bold text-white">
                      {{ contentHero.title }}
                    </h1>
                  </div>
                </template>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div>
            <slot />
          </div>
          <div class="container max-w-7xl mx-auto px-4">
            <footer class="py-16 bg-white">
              <BaseAppFooter v-if="!isContactPage" />
            </footer>
          </div>
        </div>
      </Body>
    </Html>
  </div>
</template>
<i18n lang="json">{
  "en": {
    "home": "Home",
    "products": "Products",
    "productsList": {
      "solarCleanBot": "Solar Clean Bot",
      "componentsTester": "Components Tester",
      "factoryAutomation": "Factory Automation",
      "trainingEquipment": "Training Equipment"
    },
    "about": "About",
    "contact": "Contact"
  },
  "vi": {
    "home": "Trang chủ",
    "products": "Sản phẩm",
    "productsList": {
      "solarCleanBot": "Robot rửa xe mặt trời",
      "componentsTester": "Máy kiểm tra linh kiện",
      "factoryAutomation": "Hệ thống tự động hóa",
      "trainingEquipment": "Thiết bị đào tạo"
    },
    "about": "Về chúng tôi",
    "contact": "Liên hệ"
  }
}</i18n>