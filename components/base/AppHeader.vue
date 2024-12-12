<template>
  <nav
    class="fixed p-4 w-full transition-all duration-300 z-50"
    :class="{
      'bg-orange-500': !scrolled,
      'bg-white shadow-lg': scrolled,
      'shadow-lg': mobileMenu,
    }"
  >
    <div class="container max-w-7xl mx-auto text-sm md:text-lg">
      <!-- Desktop Menu -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="/udf_logo.png"
            alt="Logo"
            class="h-8 w-8 mr-2"
            referrerpolicy="no-referrer"
          />
          <span
            class="transition-colors hover:text-opacity-80 md:text-xl font-bold"
            :class="{ 'text-white': !scrolled, 'text-gray-800': scrolled }"
            >{{ t("companyName") }}</span
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLinkLocale
            to="/"
            class="transition-colors hover:text-opacity-80 px-3 py-1 rounded-md"
            :class="[scrolled ? 'text-gray-800' : 'text-white']"
            active-class="font-bold underline underline-offset-8"
          >
            {{ t("home") }}
          </NuxtLinkLocale>
          <div class="relative group">
            <NuxtLinkLocale
              to="/products"
              class="transition-colors hover:text-opacity-80"
              :class="[
                scrolled ? 'text-gray-800' : 'text-white',
                {
                  'font-bold underline underline-offset-8':
                    currentRoute.path.includes('/products'),
                },
              ]"
              active-class="font-bold underline underline-offset-8"
            >
              <button
                class="transition-colors hover:text-opacity-80 flex items-center"
                :class="scrolled ? 'text-gray-800' : 'text-white'"
                @mouseover="productDropdown = true"
                @mouseleave="productDropdown = false"
              >
                {{ t("products") }}
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </NuxtLinkLocale>
            <!-- Dropdown Menu -->
            <div
              class="absolute hidden group-hover:block w-72 bg-white shadow-lg py-2 rounded-lg"
              v-show="productDropdown"
              @mouseleave="productDropdown = false"
              @mouseenter="productDropdown = true"
              @click="productDropdown = false"
            >
              <NuxtLinkLocale
                to="/products/solar-clean-bot"
                class="block px-4 py-2 hover:bg-gray-100"
                active-class="font-bold underline underline-offset-8"
              >
                {{ t("productsList.solarCleanBot") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale
                to="/products/components-tester"
                class="block px-4 py-2 hover:bg-gray-100"
                active-class="font-bold underline underline-offset-8"
              >
                {{ t("productsList.componentsTester") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale
                to="/products/factory-automation"
                class="block px-4 py-2 hover:bg-gray-100"
                active-class="font-bold underline underline-offset-8"
              >
                {{ t("productsList.factoryAutomation") }}
              </NuxtLinkLocale>
              <NuxtLinkLocale
                to="/products/training-equipment"
                class="block px-4 py-2 hover:bg-gray-100"
                active-class="font-bold underline underline-offset-8"
              >
                {{ t("productsList.trainingEquipment") }}
              </NuxtLinkLocale>
            </div>
          </div>
          <NuxtLinkLocale
            to="/about"
            class="transition-colors hover:text-opacity-80"
            :class="[scrolled ? 'text-gray-800' : 'text-white']"
            active-class="font-bold underline underline-offset-8"
          >
            {{ t("about") }}
          </NuxtLinkLocale>
          <NuxtLinkLocale
            to="/contact"
            class="transition-colors hover:text-opacity-80"
            :class="[scrolled ? 'text-gray-800' : 'text-white']"
            active-class="font-bold underline underline-offset-8"
          >
            {{ t("contact") }}
          </NuxtLinkLocale>

          <div class="flex items-center space-x-2 ml-4">
            <button
              @click="changeLanguage('vi')"
              :class="['font-bold', scrolled ? 'text-gray-800' : 'text-white']"
              class="px-2 py-1 rounded transition-colors"
            >
              VN
            </button>
            <span
              :class="{
                'text-white': !scrolled,
                'text-gray-800': scrolled,
              }"
              >|</span
            >
            <button
              @click="changeLanguage('en')"
              :class="{
                'font-bold': currentLocale === 'en',
                'text-white': !scrolled,
                'text-gray-800': scrolled,
              }"
              class="px-2 py-1 rounded transition-colors"
            >
              EN
            </button>
          </div>
        </div>

        <!-- Mobile Language Switcher & Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="flex items-center space-x-2">
            <button
              @click="changeLanguage('vi')"
              :class="{
                'font-bold': currentLocale === 'vi',
                'text-white': !scrolled,
                'text-gray-800': scrolled,
              }"
              class="px-2 py-1 rounded transition-colors"
            >
              VN
            </button>
            <span
              :class="{
                'text-white': !scrolled,
                'text-gray-800': scrolled,
              }"
              >|</span
            >
            <button
              @click="changeLanguage('en')"
              :class="{
                'font-bold': currentLocale === 'en',
                'text-white': !scrolled,
                'text-gray-800': scrolled,
              }"
              class="px-2 py-1 rounded transition-colors"
            >
              EN
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenu = !mobileMenu"
            :class="{ 'text-white': !scrolled, 'text-orange-500': scrolled }"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu với transition -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2 ease-out"
        enter-to-class="opacity-100 transform translate-y-0 ease-out"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 transform translate-y-0 ease-out"
        leave-to-class="opacity-0 transform -translate-y-2 ease-out"
        mode="out-in"
      >
        <div
          v-show="mobileMenu"
          class="md:hidden absolute top-full left-0 right-0 shadow-lg overflow-hidden transform origin-top"
          :class="{ 'bg-orange-500': !scrolled, 'bg-white': scrolled }"
        >
          <div class="container mx-auto px-4">
            <NuxtLinkLocale
              to="/"
              class="block py-3 border-b"
              :class="[
                scrolled
                  ? 'text-gray-800 border-gray-100'
                  : 'text-white border-orange-400',
              ]"
              active-class="font-bold"
              @click="closeMenus"
            >
              {{ t("home") }}
            </NuxtLinkLocale>
            <div class="relative">
              <div class="flex items-center justify-between">
                <NuxtLinkLocale
                  to="/products"
                  class="w-full text-left py-3 border-b flex justify-between items-center"
                  :class="[
                    scrolled
                      ? 'text-gray-800 border-gray-100'
                      : 'text-white border-orange-400',
                    {
                      'font-bold':
                        currentRoute.path.includes('/products'),
                    },
                  ]"
                  @click="closeMenus">
                  {{ t("products") }}
                </NuxtLinkLocale>
                <button
                  @click="productDropdown = !productDropdown"
                  class="text-center p-2 border-b flex justify-between items-center"
                  :class="[
                    scrolled
                      ? 'text-gray-800 border-gray-100'
                      : 'text-white border-orange-400',
                  ]"
                  active-class="font-bold"
                >
                  <svg
                    class="w-4 h-4 transform transition-transform duration-200"
                    :class="{ 'rotate-180': productDropdown }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              <!-- Products Submenu với transition -->
              <transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div
                  v-show="productDropdown"
                  :class="[scrolled ? 'bg-gray-50' : 'bg-orange-600']"
                  class="px-4"
                >
                  <NuxtLinkLocale
                    v-for="product in products"
                    :to="product.link"
                    class="block py-3 border-b"
                    :class="[
                      scrolled
                        ? 'text-gray-800 border-gray-100'
                        : 'text-white border-orange-400',
                    ]"
                    active-class="font-bold"
                    @click="closeMenus"
                    :key="product.id"
                  >
                    {{ product.name }}
                  </NuxtLinkLocale>
                </div>
              </transition>
            </div>

            <NuxtLinkLocale
              to="/about"
              class="block py-3 border-b"
              :class="[
                scrolled
                  ? 'text-gray-800 border-gray-100'
                  : 'text-white border-orange-400',
              ]"
              active-class="font-bold"
              @click="closeMenus"
            >
              {{ t("about") }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              to="/contact"
              class="block py-3 border-b"
              :class="[
                scrolled
                  ? 'text-gray-800 border-gray-100'
                  : 'text-white border-orange-400',
              ]"
              active-class="font-bold"
              @click="closeMenus"
            >
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

const currentRoute = useRoute();

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

// on scroll
watch(scrolled, () => {
  if (scrolled.value) {
    mobileMenu.value = false;
  }
});

const { width: screenWidth } = useWindowSize();

const mobileMenu = ref(false);
const productDropdown = ref(false);

const closeMenus = () => {
  mobileMenu.value = false;
};

const products = computed(() => {
  return [
    {
      id: 1,
      name: t("productsList.solarCleanBot"),
      link: "/products/solar-clean-bot",
    },
    {
      id: 2,
      name: t("productsList.componentsTester"),
      link: "/products/components-tester",
    },
    {
      id: 3,
      name: t("productsList.factoryAutomation"),
      link: "/products/factory-automation",
    },
    {
      id: 4,
      name: t("productsList.trainingEquipment"),
      link: "/products/training-equipment",
    },
  ];
});
</script>

<i18n lang="json">{
  "en": {
    "companyName": "Uni Design Factory",
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
    "companyName": "Uni Design Factory",
    "home": "Trang chủ",
    "products": "Sản phẩm",
    "productsList": {
      "solarCleanBot": "Robot vệ sinh solar",
      "componentsTester": "Thiết bị kiểm tra linh kiện",
      "factoryAutomation": "Tự động hoá sản xuất",
      "trainingEquipment": "Thiết bị đào tạo"
    },
    "about": "Về chúng tôi",
    "contact": "Liên hệ"
  }
}</i18n>
