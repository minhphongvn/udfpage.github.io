<template>
  <div>
    <section class="py-6 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-justify">
            <p class="text-sm md:text-lg mb-4">
              {{ t("description") }}
            </p>
          </div>
          <div>
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/YDHaaf9KeWs"
                title="2. Mô hình FMS đào taọ lập trình PLC [Flexible Manufacturing System model for PLC programming]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="w-full h-full min-h-[400px]"
              />
            </div>
          </div>
          <div class="text-center text-sm md:text-lg my-4">
            {{ t("content") }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t } = useI18n();
</script>
<i18n lang="json">{
  "vi": {
    "name": "Thiết bị đào tạo",
    "content": "Mô hình FMS đào tạo lập trình PLC",
    "description": "Công ty TNHH Uni Design Factory nhận tư vấn, thiết kế và chế tạo các mô hình đào tạo như  thực hành vật lý, STEM, điện dân dụng, điện công nghiệp, điện tử, kỹ thuật số, cảm biến,  tự động hóa sản xuất công nghiệp, Robotics, xử lý ảnh và IoT  cho trường đại học, cao đẳng, trường dạy nghề và các doanh nghiệp trong lĩnh vực kỹ thuật."
  },
  "en": {
    "name": "Training Equipment",
    "content": "Flexible Manufacturing System model for PLC programming",
    "description": "Uni Design Factory Co., Ltd. consults, designs and manufactures training models such as physics practice, STEM, civil electricity, industrial electricity, electronics, digital technology, sensors, and factory automation, Robotics, and IoT for universities, colleges, vocational schools and businesses in the technical field."
  }
}</i18n>
