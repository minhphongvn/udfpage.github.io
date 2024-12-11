<template>
  <nav class="fixed p-4 w-full transition-all duration-300 text-[18px] z-50" :class="{
    'bg-orange-500': !scrolled,
    'bg-white shadow-lg': scrolled,
    'shadow-lg': screenWidth < 768,
  }">
    <div class="container mx-auto">
      <!-- Desktop Menu -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="https://netos.lhu.edu.vn/_cdn/netos/udf_logo.png" alt="Logo" class="h-8 w-8 mr-2"
            referrerpolicy="no-referrer" />
          <span class="transition-colors text-xl font-semibold"
            :class="{ 'text-white': !scrolled, 'text-gray-800': scrolled }">Uni Design Factory</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLinkLocale to="/" class="transition-colors hover:text-orange-200 px-3 py-1 rounded-md"
            :class="scrolled ? 'text-gray-800' : 'text-white'">
            {{ t("home") }}
          </NuxtLinkLocale>
          <div class="relative group">
            <NuxtLinkLocale to="/products" class="transition-colors" :class="scrolled ? 'text-gray-800' : 'text-white'">
              <button class="transition-colors flex items-center" :class="scrolled ? 'text-gray-800' : 'text-white'">
                {{ t("products") }}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </NuxtLinkLocale>
            <!-- Dropdown Menu -->
            <div class="absolute hidden group-hover:block w-64 bg-white shadow-lg py-2 rounded-lg">
              <NuxtLinkLocale to="/products/solar-clean-bot" class="block px-4 py-2 hover:bg-gray-100">
                {{ t("productsList.solarCleanBot") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale to="/products/components-tester" class="block px-4 py-2 hover:bg-gray-100">
                {{ t("productsList.componentsTester") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale to="/products/factory-automation" class="block px-4 py-2 hover:bg-gray-100">
                {{ t("productsList.factoryAutomation") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale to="/products/training-equipment" class="block px-4 py-2 hover:bg-gray-100">
                {{ t("productsList.trainingEquipment") }}
              </NuxtLinkLocale>
            </div>
          </div>
          <NuxtLinkLocale to="/about" class="transition-colors" :class="scrolled ? 'text-gray-800' : 'text-white'">
            {{ t("about") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/contact" class="transition-colors" :class="scrolled ? 'text-gray-800' : 'text-white'">
            {{ t("contact") }}
          </NuxtLinkLocale>

          <div class="flex items-center space-x-2 ml-4">
            <button @click="changeLanguage('vi')" :class="{
              'font-bold': currentLocale === 'vi',
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }" class="px-2 py-1 rounded transition-colors">
              VN
            </button>
            <span :class="{
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }">|</span>
            <button @click="changeLanguage('en')" :class="{
              'font-bold': currentLocale === 'en',
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }" class="px-2 py-1 rounded transition-colors">
              EN
            </button>
          </div>
        </div>

        <!-- Mobile Language Switcher & Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="flex items-center space-x-2">
            <button @click="changeLanguage('vi')" :class="{
              'font-bold': currentLocale === 'vi',
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }" class="px-2 py-1 rounded transition-colors">
              VN
            </button>
            <span :class="{
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }">|</span>
            <button @click="changeLanguage('en')" :class="{
              'font-bold': currentLocale === 'en',
              'text-white': !scrolled,
              'text-gray-800': scrolled,
            }" class="px-2 py-1 rounded transition-colors">
              EN
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenu = !mobileMenu" :class="{ 'text-white': !scrolled, 'text-orange-500': scrolled }">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu với transition -->
      <transition enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2 ease-out"
        enter-to-class="opacity-100 transform translate-y-0 ease-out" leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 transform translate-y-0 ease-out"
        leave-to-class="opacity-0 transform -translate-y-2 ease-out" mode="out-in">
        <div v-show="mobileMenu"
          class="md:hidden absolute top-full left-0 right-0 shadow-lg overflow-hidden transform origin-top"
          :class="{ 'bg-orange-500': !scrolled, 'bg-white': scrolled }">
          <div class="container mx-auto px-4">
            <NuxtLinkLocale to="/" class="block py-3 border-b" :class="scrolled
              ? 'text-gray-800 border-gray-100'
              : 'text-white border-orange-400'
              ">
              {{ t("home") }}
            </NuxtLinkLocale>
            <div class="relative">
              <button @click="productDropdown = !productDropdown"
                class="w-full text-left py-3 border-b flex justify-between items-center" :class="{
                  'text-white border-orange-400': !scrolled,
                  'text-gray-800 border-gray-100': scrolled,
                }">
                {{ t("products") }}
                <svg v-if="!productDropdown" class="w-4 h-4 transform transition-transform duration-200"
                  :class="{ 'rotate-180': productDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Products Submenu với transition -->
              <transition enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div v-show="productDropdown" :class="{
                  'bg-orange-600': !scrolled,
                  'bg-gray-50': scrolled,
                }" class="px-4">
                  <NuxtLinkLocale to="/products/solar-clean-bot" class="block py-3 border-b" :class="scrolled
                    ? 'text-gray-800 border-gray-100'
                    : 'text-white border-orange-400'
                    ">
                    {{ t("productsList.solarCleanBot") }}
                  </NuxtLinkLocale>
                  <NuxtLinkLocale to="/products/components-tester" class="block py-3 border-b" :class="scrolled
                    ? 'text-gray-800 border-gray-100'
                    : 'text-white border-orange-400'
                    ">
                    {{ t("productsList.componentsTester") }}
                  </NuxtLinkLocale>
                  <NuxtLinkLocale to="/products/factory-automation" class="block py-3 border-b" :class="scrolled
                    ? 'text-gray-800 border-gray-100'
                    : 'text-white border-orange-400'
                    ">
                    {{ t("productsList.factoryAutomation") }}
                  </NuxtLinkLocale>
                  <NuxtLinkLocale to="/products/training-equipment" class="block py-3 border-b" :class="scrolled
                    ? 'text-gray-800 border-gray-100'
                    : 'text-white border-orange-400'
                    ">
                    {{ t("productsList.trainingEquipment") }}
                  </NuxtLinkLocale>
                </div>
              </transition>
            </div>

            <NuxtLinkLocale to="/about" class="block py-3 border-b" :class="scrolled
              ? 'text-gray-800 border-gray-100'
              : 'text-white border-orange-400'
              ">
              {{ t("about") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale to="/contact" class="block py-3 border-b" :class="scrolled
              ? 'text-gray-800 border-gray-100'
              : 'text-white border-orange-400'
              ">
              {{ t("contact") }}
            </NuxtLinkLocale>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { useWindowScroll, useWindowSize, useStorage } from "@vueuse/core";
const { setLocale, locale, t } = useI18n({
  scope: "header",
});

onMounted(() => {
  localStorage.setItem("currentLocale", locale.value);
});

const currentLocale = computed(() => {
  return locale.value;
});

const changeLanguage = (lang) => {
  setLocale(lang);
  localStorage.setItem("currentLocale", lang);
};

const { y } = useWindowScroll();

const scrolled = computed(() => y.value > 50);

const { width: screenWidth } = useWindowSize();

const mobileMenu = ref(false);
const productDropdown = ref(false);
</script>

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
