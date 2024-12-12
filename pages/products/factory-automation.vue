<template>
  <div>
    <!-- Factory Automation Info Section -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-2xl font-bold mb-6">
            {{ t('factoryAutomation.whyTitle') }}
          </h2>
          <p class="text-lg mb-8 text-justify">
            {{ t('factoryAutomation.whyDescription') }}
            <br />
            <br />
            {{ t('factoryAutomation.whyDescription2') }}
          </p>

          <h2 class="text-2xl font-bold mb-6">
            {{ t('factoryAutomation.impactTitle') }}
          </h2>
          <div class="space-y-4">
            <div v-for="(impact, index) in impacts" :key="index" class="flex gap-2">
              <span>{{ index + 1 }}.</span>
              <p>{{ impact }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typical Projects Section -->
    <section class="py-8 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-center">
            {{ t('factoryAutomation.typicalProjects.title') }}
          </h2>

          <!-- Project 1 -->
          <div class="mb-12" v-for="(project, index) in projects" :key="index">
            <h3 class="text-xl font-semibold mb-4 text-center">
              {{ project.name }}
            </h3>
            <p class="text-center mb-4">
              {{ project.company }}
            </p>
            <div>
              <img :src="`/udfpage.github.io/products/factory-automation/${project.image}`" alt="Wire cutting machine"
                class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t, messages, locale } = useI18n();
const impacts = computed(() => messages.value[locale.value].factoryAutomation.impacts.map((impact) => impact.loc.source));

const projects = computed(() => [
  {
    name: t('factoryAutomation.typicalProjects.project1.name'),
    company: t('factoryAutomation.typicalProjects.project1.company'),
    image: 'wire-cutting.png'
  },
  {
    name: t('factoryAutomation.typicalProjects.project2.name'),
    company: t('factoryAutomation.typicalProjects.project2.company'),
    image: 'pcb-spraying.png'
  },
  {
    name: t('factoryAutomation.typicalProjects.project3.name'),
    company: t('factoryAutomation.typicalProjects.project3.company'),
    image: 'liquid-filling.png'
  }
])

</script>
<i18n lang="json">{
  "vi": {
    "factoryAutomation": {
      "name": "Tự động hóa quy trình sản xuất",
      "whyTitle": "Tại sao phải tiến hành tự động hóa dây chuyền sản xuất?",
      "whyDescription": "Tự động hóa cho phép doanh nghiệp sản xuất hàng hóa và dịch vụ với tốc độ nhanh hơn, đồng đều và chính xác hơn. Điều này có nghĩa là các nhiệm vụ sản xuất có thể được thực hiện ở mức độ cao hơn nhiều so với những gì con người có thể làm, dẫn đến thời gian sản xuất nhanh hơn và tăng sản lượng.",
      "whyDescription2": "Tự động hóa nhà máy trong sản xuất có thể giúp giảm chi phí, cải thiện sự an toàn của người lao động, giảm thời gian sản xuất tại nhà máy, mang lại ROI nhanh hơn, nâng cao khả năng cạnh tranh, tăng sản lượng sản xuất và mang lại nhiều lợi ích khác nữa!",
      "impactTitle": "Những tác động lớn nhất của tự động hóa là gì?",
      "impacts": [
        "Chi phí vận hành thấp hơn: Robot có thể thực hiện công việc của 3-5 người tùy thuộc vào nhiệm vụ. Tự động hóa cho phép thợ máy của bạn vận hành nhiều máy cùng một lúc. Ngoài việc tiết kiệm chi phí nhân công, tiết kiệm năng lượng cũng có thể đáng kể do yêu cầu nhiệt thấp hơn trong các hoạt động tự động.",
        "Cải thiện an toàn cho người lao động: Máy móc tự động loại bỏ công nhân khỏi các công việc nguy hiểm. Nhân viên của bạn sẽ cảm ơn bạn vì đã bảo vệ họ khỏi các mối nguy hiểm trong môi trường nhà máy.",
        "Giảm thời gian sản xuất: Tự động hóa có thể giữ quy trình của bạn trong nhà, cải thiện kiểm soát quy trình và giảm đáng kể thời gian so với việc thuê ngoài hoặc đi nước ngoài.",
        "ROI nhanh hơn: Các giải pháp tự động hóa dựa trên nhu cầu và mục tiêu riêng của bạn và nhanh chóng hoàn vốn nhờ chi phí vận hành thấp hơn, thời gian sản xuất ngắn hơn, sản lượng tăng và hơn thế nữa.",
        "Khả năng cạnh tranh cao hơn: Máy móc tự động cho phép bạn giảm thời gian chu kỳ và chi phí trên mỗi sản phẩm trong khi cải thiện chất lượng. Điều này cho phép bạn cạnh tranh tốt hơn trên quy mô toàn cầu.",
        "Tăng sản lượng: Robot có khả năng làm việc ở tốc độ không đổi, không cần giám sát, 24/7. Tự động hóa trong sản xuất có nghĩa là bạn có tiềm năng sản xuất nhiều hơn. Sản phẩm mới có thể được đưa vào quy trình sản xuất nhanh chóng."
      ],
      "typicalProjects": {
        "title": "Các dự án tiêu biểu",
        "project1": {
          "name": "Máy cắt dây và hàn tự động",
          "company": "Công ty TNHH Kahoku Lighting Solution Việt Nam"
        },
        "project2": {
          "name": "Hệ thống phun sơn và sấy bo mạch tự động",
          "company": "Công ty TNHH Daikan Việt Nam"
        },
        "project3": {
          "name": "Hệ thống cân và chiết rót dung dịch tự động",
          "company": ""
        }
      }
    }
  },
  "en": {
    "factoryAutomation": {
      "name": "Factory Automation",
      "whyTitle": "Why is it necessary to automate production lines?",
      "whyDescription": "Automation allows businesses to produce goods and services at a faster rate, with greater consistency and accuracy. This means that manufacturing tasks can be performed at a much higher level than what a human worker could do, leading to faster production times and increased output.",
      "whyDescription2": "Factory Automation in manufacturing can help lower costs, improve worker safety, reduce factory lead times, provide faster ROI, allow your operation to become more competitive, increase production output, and so much more!",
      "impactTitle": "What is the biggest impact of automation?",
      "impacts": [
        "Lowered operating costs: Robots can perform the work of three to five people, depending on the task. Automation allow your machinists to attend to multiple machines at once. In addition to savings on the cost of labor, energy savings can also be significant due to lower heating requirements in automated operations.",
        "Improved worker safety: Automated machines remove workers from dangerous tasks. Your employees will thank you for safeguarding them against the hazards of a factory environment.",
        "Reduced factory lead times: Automation can keep your process in-house, improve process control and significantly reduce lead times compared to outsourcing or going overseas.",
        "Faster ROI: Automation solutions are based on your unique needs and goals and pay for themselves quickly due to lower operating costs, reduced lead times, increased output and more.",
        "Ability to be more competitive: Automated machines allow you to decrease cycle times and cost-per-piece while improving quality. This allows you to better compete on a global scale.",
        "Increased production output: A robot has the ability to work at a constant speed, unattended, 24/7. Automation in manufacturing means you've got the potential to produce more. New products can be quickly introduced into the production process."
      ],
      "typicalProjects": {
        "title": "The typical projects",
        "project1": {
          "name": "Automatic wire cutting and welding machine",
          "company": "Kahoku Lighting Solution Vietnam Co., Ltd"
        },
        "project2": {
          "name": "Automatic PCB spraying and drying system",
          "company": "Daikan Vietnam Co., Ltd"
        },
        "project3": {
          "name": "Automatic liquid weighing and filling system",
          "company": ""
        }
      }
    }
  }
}</i18n>
