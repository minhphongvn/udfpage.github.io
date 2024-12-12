<template>
  <div>
    <section class="py-6 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="py-4">
            <img src="/products/components-tester/component-tester-1.png" alt="Components Tester" class="w-full" />
          </div>
          <div class="text-justify text-lg py-4 leading-5">
            <p class="pb-3" v-for="(item, index) in description" :key="index">
              {{ item }}
            </p>
          </div>
          <div>
            <img src="/products/components-tester/component-tester-2.png" alt="Components Tester" class="w-full" />
          </div>
          <div class="my-4">
            <div class="text-center text-2xl py-4">Specifications</div>
            <div class="flex justify-center">
              <div class="w-1/3">
                <img src="/products/components-tester/component-tester-spec.png" alt="Components Tester" />
              </div>
              <div class="w-2/3">
                <ol class="list-inside">
                  <li><strong>Utility:</strong></li>
                  <ul class="list-disc list-inside">
                    <li>Power supply: φ1/220V/50Hz ±10%</li>
                    <li>Dimensions: 300mm(W) x 280mm(L) x 110mm(H)</li>
                    <li>Weight: 3450g</li>
                    <li>Test point interface: Connector cover test point specification</li>
                    <li>I/O interface: Connect to computer for data storage and I/O signal control for Jig</li>
                  </ul>
                  <li class="pt-2"><strong>Test specification:</strong></li>
                  <ul class="list-decimal list-inside">
                    <li>Test point: 128 points, or more as option</li>
                    <li>Test speed:</li>
                    <ul class="list-disc list-inside">
                      <li>Continuous/Resistance: 1 msec/step or less</li>
                      <li>Insulation: 1 msec/step or less</li>
                      <li>Voltage: 1 msec/step or less</li>
                      <li>Capacitance: 50 msec/step or less</li>
                      <li>Inductance: 50 msec/step or less</li>
                    </ul>
                    <li>Continuous (Open) test:</li>
                    <ul class="list-disc list-inside">
                      <li>Range</li>
                      <ul class="list-disc list-inside">
                        <li>2Wire [0.4 ohm-2M ohm] (To cover this range): Precision +/-10% or less</li>
                        <li>4Wire [1ohm-100ohm] (To cover this range) as option: Precision +/-3% or less</li>
                      </ul>
                      <li>Input range 5V max</li>
                    </ul>
                    <li>Insulation (Short) test:</li>
                    <ul class="list-disc list-inside">
                      <li>Range 100k ohm-2 M ohm (To cover this range)</li>
                      <li>Input range 5V max</li>
                      <li>Precision +/-10% or less</li>
                    </ul>
                    <li>Resistance value test: Same with Continuous test</li>
                    <li>Voltage test:</li>
                    <ul class="list-disc list-inside">
                      <li>Range 0V-25V (To cover this range), 32V max as option</li>
                      <li>Precision +/-5% or less</li>
                    </ul>
                    <li>Capacitance test:</li>
                    <ul class="list-disc list-inside">
                      <li>Range 2000pF-5uF (To cover this range)</li>
                      <li>Input range 5V max</li>
                      <li>Precision +/-10% or less</li>
                    </ul>
                    <li>Inductance test: Option</li>
                    <ul class="list-disc list-inside">
                      <li>Range 1uH-1H (To cover this range)</li>
                      <li>Input range 5V max</li>
                      <li>Frequency 160Hz/1.6kHz/16kHz/160kHz</li>
                      <li>Precision +/-10% or less</li>
                    </ul>
                    <li>Diode Vf test:</li>
                    <ul class="list-disc list-inside">
                      <li>Range 0V-25V (To cover this range), 32V max as Option</li>
                      <li>Input range 5mA-20mA (To cover this range), 300mA as Option</li>
                      <li>Precision +/-5% or less</li>
                    </ul>
                    <li>I2C communication control test: Option</li>
                    <ul class="list-disc list-inside">
                      <li>Input range 1.2V/1.8V/3.3V-5V max (To cover this range)</li>
                      <li>Frequency 100kHz-400kHz</li>
                    </ul>
                    <li>I2S communication control test: Option</li>
                    <ul class="list-disc list-inside">
                      <li>Input range 1.2V/1.8V/3.3V-5V max (To cover this range)</li>
                      <li>Frequency 12MHz max</li>
                    </ul>
                    <li>Power supply output:</li>
                    <ul class="list-disc list-inside">
                      <li>Voltage DC 0V-24V (To cover this range), 32V max as option</li>
                      <li>Current DC 50mA (To cover this range), 300mA max as option</li>
                    </ul>
                    <li>Display</li>
                    <ul class="list-disc list-inside">
                      <li>Show result of test, PASS (Green) Fail (Red).</li>
                      <li>Show program name, setting parameter.</li>
                      <li>Show testing detail, Good/NG result.</li>
                    </ul>
                    <li>Data record</li>
                    <ul class="list-disc list-inside">
                      <li>Pass, Fail result</li>
                      <li>Measurement value and detail of function test result save as CSV file.</li>
                    </ul>
                    <li>Program</li>
                    <ul class="list-disc list-inside">
                      <li>Possible to change setting threshold by test program.</li>
                      <li>Possible to save test program in computer, and send via USB and LAN too.</li>
                      <li>To equip operator mode, engineer mode, and maintenance mode</li>
                    </ul>
                    <li>I/O control</li>
                    <ul class="list-disc list-inside">
                      <li>Possible to output signal for I/O control.</li>
                      <li>Test start / Test end / Test result Pass or Fail</li>
                      <li>Possible to input signal for I/O control. Test start / Test end</li>
                    </ul>
                    <li>Calibration</li>
                    <ul class="list-disc list-inside">
                      <li>To submit calibration document with machine installation.</li>
                      <li>To equip calibration method periodically.</li>
                    </ul>
                    <li>Alarm</li>
                    <ul class="list-disc list-inside">
                      <li>Each module trouble</li>
                      <li>Code reading error</li>
                      <li>Each sensor error</li>
                      <li>Electrical part trouble</li>
                      <li>Others</li>
                    </ul>
                  </ul>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { t, messages, locale } = useI18n();
const description = computed(() => messages.value[locale.value].description.map((item) => item.loc.source));
</script>
<i18n lang="json">{
  "en": {
    "description": [
      "Electronic components are used in a multitude of products, from smartphones and automobiles to home appliances and industrial machinery.",
      "Quality control is important in the electronics industry. It helps to ensure the components you source meet your specifications and performance standards and are free from defects that may cause problems in the final product’s safety and performance.",
      "Ultimately, it helps to detect and correct issues with the electronic components early on – before they affect the end product.",
      "Electronics component testing equipment is a very important and indispensable tool in the manufacturing and quality management process. They not only ensure parts meet specific product performance, reliability and safety requirements. But these tester can also detect potential defects or issues with the parts before they’re installed in a final end product."
    ]
  },
  "vi": {
    "description": [
      "Các linh kiện điện tử được sử dụng trong nhiều sản phẩm, từ điện thoại thông minh và ô tô đến các thiết bị gia dụng và máy móc công nghiệp.",
      "Kiểm soát chất lượng rất quan trọng trong ngành công nghiệp điện tử. Nó giúp đảm bảo các linh kiện bạn mua đáp ứng các thông số kỹ thuật và tiêu chuẩn hiệu suất của bạn và không có lỗi có thể gây ra vấn đề về an toàn và hiệu suất của sản phẩm cuối cùng.",
      "Cuối cùng, nó giúp phát hiện và sửa chữa các vấn đề với các linh kiện điện tử sớm – trước khi chúng ảnh hưởng đến sản phẩm cuối cùng.",
      "Thiết bị kiểm tra linh kiện điện tử là một công cụ rất quan trọng và không thể thiếu trong quá trình sản xuất và quản lý chất lượng. Chúng không chỉ đảm bảo các bộ phận đáp ứng các yêu cầu về hiệu suất, độ tin cậy và an toàn cụ thể của sản phẩm. Mà các thiết bị kiểm tra này còn có thể phát hiện các lỗi tiềm ẩn hoặc vấn đề với các bộ phận trước khi chúng được lắp đặt vào sản phẩm cuối cùng."
    ]
  }
}</i18n>
