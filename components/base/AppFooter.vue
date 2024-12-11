<template>
  <footer class="py-16 bg-white">
    <div class="space-y-4 text-gray-600">
      <h3 class="font-semibold text-xl text-gray-800">
        {{ t('contact.companyName') }}
      </h3>

      <div class="space-y-2">
        <p class="flex items-start">
          <span class="font-medium mr-2">
            {{ t('contact.address') }}:</span>
          {{ t('contact.addressValue') }}
        </p>

        <p class="flex items-start">
          <span class="font-medium mr-2">
            {{ t('contact.office') }}:</span>
          {{ t('contact.officeValue') }}
        </p>

        <p class="flex items-start">
          <span class="font-medium mr-2">
            {{ t('contact.taxNo') }}:</span>
          3603898847
        </p>

        <p class="flex items-start">
          <span class="font-medium mr-2">
            {{ t('contact.phone') }}:</span>
          094.5522.904-0902.634.638 [Zalo]
        </p>

        <p class="flex items-start">
          <span class="font-medium mr-2">Email:</span>
          <a href="mailto:uni.design.factory@gmail.com"
            class="text-blue-600 hover:underline">uni.design.factory@gmail.com</a>
        </p>

        <p class="flex items-start">
          <span class="font-medium mr-2">Website:</span>
          <a href="http://www.udf.com.vn" class="text-blue-600 hover:underline">www.udf.com.vn</a>
        </p>
      </div>

      <div class="flex space-x-4 mt-6">
        <a href="#" class="text-red-600 hover:text-red-700">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>
        <a href="#" class="text-blue-600 hover:text-blue-700">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n({
  scope: "footer",
});
</script>
<i18n lang="json">{
  "en": {
    "contact": {
      "title": "Contact Information",
      "companyName": "Uni Design Factory Co., Ltd",
      "address": "Address",
      "addressValue": "37/30 Dang Duc Thuot Str, Quarter 3, Tam Hoa Ward, Bien Hoa City, Dong Nai Province, Vietnam",
      "office": "Office & Manufacture",
      "officeValue": "551 Huynh Van Nghe Street, Buu Long Ward, Bien Hoa City, Dong Nai, Vietnam",
      "taxNo": "Tax No.",
      "phone": "Phone",
      "email": "Email",
      "website": "Website"
    }
  },
  "vi": {
    "contact": {
      "title": "Thông tin liên hệ",
      "companyName": "Công ty TNHH Uni Design Factory",
      "address": "Địa chỉ",
      "addressValue": "37/30 Đặng Đức Thuật, Khu phố 3, Phường Tam Hòa, TP. Biên Hòa, Đồng Nai",
      "office": "Văn phòng & Xưởng sản xuất",
      "officeValue": "551 Huỳnh Văn Nghệ, Phường Bửu Long, TP. Biên Hòa, Đồng Nai",
      "taxNo": "Mã số thuế",
      "phone": "Điện thoại",
      "email": "Email",
      "website": "Website"
    }
  }
}</i18n>
