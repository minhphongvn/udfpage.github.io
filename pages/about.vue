<template>
  <div>
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2">
              <img
                src="https://netos.lhu.edu.vn/_cdn/netos/about_mission.png"
                alt="Mission"
                class="w-full h-auto"
              />
            </div>
            <div class="w-full md:w-1/2">
              <h2 class="text-3xl font-semibold mb-6">
                {{ t("local.about.mission.title") }}
              </h2>
              <p class="text-gray-600">
                {{ t("local.about.mission.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="py-16 bg-orange-500">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2 order-2 md:order-1">
              <h2 class="text-3xl font-semibold text-white mb-6">
                {{ t("local.about.vision.title") }}
              </h2>
              <p class="text-white">
                {{ t("local.about.vision.description") }}
              </p>
            </div>
            <div class="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="https://netos.lhu.edu.vn/_cdn/netos/about_vision.png"
                alt="Vision"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2">
              <img
                src="https://netos.lhu.edu.vn/_cdn/netos/about_company.png"
                alt="Company"
                class="w-full h-auto"
              />
            </div>
            <div class="w-full md:w-1/2">
              <h2 class="text-3xl font-semibold mb-6">
                {{ t("local.about.company.title") }}
              </h2>
              <p class="text-gray-600">
                {{ t("local.about.company.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Message Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto text-justify">
          <p class="text-gray-600">
            {{ t("local.about.message.description") }}
          </p>
        </div>
      </div>
    </section>

    <section class="pt-6">
      <h2 class="text-3xl font-semibold text-center mb-6">
        {{ t("local.about.team") }}
      </h2>
      <div class="mx-auto px-4 py-6 bg-orange-500">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="director in directors"
              :key="director.name"
              class="text-center"
            >
              <img
                :src="director.image"
                :alt="director.name"
                class="mx-auto mb-4 object-cover rounded-lg"
              />
              <h3 class="text-xl font-bold text-white mb-1">
                {{ director.name }}
              </h3>
              <div class="text-white font-medium mb-1">
                {{ director.position }}
              </div>
              <div class="text-white text-sm">{{ director.education }}</div>
              <div
                v-if="director.additionalInfo"
                class="text-white text-sm italic"
              >
                {{ director.additionalInfo }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t } = useI18n({
  scope: "about",
});

const directors = [
  {
    name: "Mr. Anh Le",
    position: "Chairman",
    education: "Master of Electronics Engineering",
    image: "https://netos.lhu.edu.vn/_cdn/netos/AnhLe.png",
  },
  {
    name: "Ms. Thao Tran",
    position: "Chief Financial Officer (CFO)",
    education: "Master of Accounting",
    image: "https://netos.lhu.edu.vn/_cdn/netos/ThaoTran.png",
  },
  {
    name: "Mr. Nguyen Do",
    position: "Senior Technical Manager",
    education: "Master of Electronics Engineering",
    additionalInfo: "Former Lecturer at Lac Hong University",
    image: "https://netos.lhu.edu.vn/_cdn/netos/NguyenDo.png",
  },
  {
    name: "Mr. Son Pham",
    position: "Chief Executive Officer (CEO)",
    education: "Master of Electrical Engineering",
    additionalInfo: "Former Lecturer at Lac Hong University",
    image: "https://netos.lhu.edu.vn/_cdn/netos/SonPham.png",
  },
  {
    name: "Mr. Duc Tran",
    position: "Technnical Manager",
    education: "Master of Electrical Engineering",
    image: "https://netos.lhu.edu.vn/_cdn/netos/DucTran.png",
  },
  {
    name: "Mr. Khuong Nguyen",
    position: "Head of Technical Department",
    education: "Master of Electrical Engineering",
    image: "https://netos.lhu.edu.vn/_cdn/netos/KhuongNguyen.png",
  },
];
</script>
<i18n lang="json">
  {
      "vi": {
        "local": {
          "about": {
            "team": "Hội đồng quản trị",
            "mission": {
              "title": "Sứ mệnh",
              "description": "Uni Design Factory cam kết cung cấp những giải pháp kỹ thuật tối ưu, chi phí hợp lý, đảm bảo chất lượng và an toàn trong lĩnh vực Robot, IoT và Tự động hóa."
            },
            "vision": {
              "title": "Tầm nhìn", 
              "description": "Trở thành đối tác chiến lược và nhà thầu tư chính hệ thống tự động hóa, phần mềm cho các doanh nghiệp tại Việt Nam vào năm 2030."
            },
            "company": {
              "title": "Uni Design Factory",
              "description": "Công ty TNHH Uni Design Factory là công ty nghiên cứu, phát triển và sản xuất các thiết bị trong lĩnh vực Robot, IoT và Tự động hóa. Cung cấp dịch vụ B&O cho các doanh nghiệp, dịch vụ vận hành và bảo trì hệ thống, tư vấn các giải pháp về Tự động hóa và Công nghệ thông tin."
            },
            "message": {
              "title": "Thông điệp",
              "description": "Với phương châm tư vấn trung thực, cung cấp giải pháp tối ưu, chi phí hợp lý, đảm bảo chất lượng và an toàn cùng với đội ngũ kỹ thuật viên có trình độ chuyên môn cao, đầy đặn kinh nghiệm và tác phong làm việc chuyên nghiệp, chúng tôi cam kết sẽ đáp ứng được các yêu cầu, hỗ trợ tận tình và đồng hành cùng với sự phát triển của quý doanh nghiệp."
            }
          }
        }
      },
      "en": {
        "local": {
          "about": {
            "team": "Board of Directors",
            "mission": {
              "title": "Mission",
              "description": "Uni Design Factory is committed to providing optimal technical solutions, reasonable costs, ensuring quality and safety in the fields of Robotics, IoT and Automation."
            },
            "vision": {
              "title": "Vision",
              "description": "To become the main contractor and strategic partner in M&E system, factory automation and software solutions for enterprises in Vietnam in 2030."
            },
            "company": {
              "title": "Uni Design Factory", 
              "description": "Uni Design Factory Co., Ltd. is a company that researches, develops and manufactures equipment in the fields of Robotics, IoT and Factory Automation. Providing B&O services for businesses, system operation and maintenance services, consulting on Automation and Information Technology solutions."
            },
            "message": {
              "title": "Message",
              "description": "Based on honest consulting, providing optimal solution, reasonable cost, quality assurance and safety with highly qualified technicians, more experienced and professional working style, we commit to meet your demand, enthusiastic support and accompany with the development of your business."
            }
          }
        }
      }
  }
</i18n>
