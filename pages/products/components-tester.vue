<template>
  <div>
    <section class="py-6 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="py-4">
            <img
              src="/products/components-tester/component-tester-1.png"
              alt="Components Tester"
              class="w-full"
            />
          </div>
          <div class="text-justify text-sm md:text-lg py-6 leading-5">
            <p
              class="pb-3"
              v-for="(item, index) in messages[locale].description"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
          <div>
            <img
              src="/products/components-tester/component-tester-2.png"
              alt="Components Tester"
              class="w-full"
            />
          </div>
          <div class="py-4 mt-10">
            <div class="flex flex-col md:flex-row justify-center">
              <div class="md:w-1/3 py-4 mt-10">
                <img
                  src="/products/components-tester/component-tester-spec.png"
                  alt="Components Tester"
                />
              </div>
              <div class="md:w-2/3 text-sm md:text-lg">
                <div class="text-center text-[36px] py-4 mt-10">
                  {{ t("specifications.title") }}
                </div>
                <ol class="list-inside leading-7 space-y-2">
                  <li>
                    <strong>{{ t("specifications.utility.title") }}</strong>
                  </li>
                  <ul class="list-disc list-inside pl-5">
                    <li>{{ t("specifications.utility.powerSupply") }}</li>
                    <li>{{ t("specifications.utility.dimensions") }}</li>
                    <li>{{ t("specifications.utility.weight") }}</li>
                    <li>
                      {{ t("specifications.utility.testPoint") }}
                    </li>
                    <li>
                      {{ t("specifications.utility.ioInterface") }}
                    </li>
                  </ul>
                  <li>
                    <strong>{{ t("specifications.testSpec.title") }}:</strong>
                  </li>
                  <ul class="list-decimal list-inside pl-5">
                    <li>{{ t("specifications.testSpec.testPoint") }}</li>
                    <li>{{ t("specifications.testSpec.testSpeed.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.testSpeed.continuous") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.testSpeed.insulation") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.testSpeed.voltage") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.testSpeed.capacitance") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.testSpeed.inductance") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.continuous.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.continuous.rangeTitle") }}
                      </li>
                      <ul class="list-inside pl-5">
                        <li>
                          {{ t("specifications.testSpec.continuous.range1") }}
                        </li>
                        <li>
                          {{ t("specifications.testSpec.continuous.range2") }}
                        </li>
                      </ul>
                      <li>
                        {{ t("specifications.testSpec.continuous.inputRange") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.insulation.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.insulation.range") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.insulation.inputRange") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.insulation.precision") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.resistanceValue.title") }}:
                      {{ t("specifications.testSpec.resistanceValue.same") }}
                    </li>
                    <li>{{ t("specifications.testSpec.voltage.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.voltage.range") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.voltage.precision") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.capacitance.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.capacitance.range") }}
                      </li>
                      <li>
                        {{
                          t("specifications.testSpec.capacitance.inputRange")
                        }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.capacitance.precision") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.inductance.title") }}:
                      Option
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.inductance.range") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.inductance.inputRange") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.inductance.frequency") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.inductance.precision") }}
                      </li>
                    </ul>
                    <li>{{ t("specifications.testSpec.diode.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.diode.range") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.diode.inputRange") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.diode.precision") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.i2c.title") }}: Option
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.i2c.inputRange") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.i2c.frequency") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.i2s.title") }}: Option
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.i2s.inputRange") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.i2s.frequency") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.powerSupply.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.powerSupply.voltage") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.powerSupply.current") }}
                      </li>
                    </ul>
                    <li>{{ t("specifications.testSpec.display.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.display.showResult") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.display.showProgram") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.display.showDetail") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.dataRecord.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.dataRecord.passFail") }}
                      </li>
                      <li>
                        {{
                          t(
                            "specifications.testSpec.dataRecord.measurementValue"
                          )
                        }}
                      </li>
                    </ul>
                    <li>{{ t("specifications.testSpec.program.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.program.changeSetting") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.program.saveProgram") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.program.operatorMode") }}
                      </li>
                    </ul>
                    <li>{{ t("specifications.testSpec.ioControl.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{
                          t("specifications.testSpec.ioControl.outputSignal")
                        }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.ioControl.testStart") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.ioControl.inputSignal") }}
                      </li>
                    </ul>
                    <li>
                      {{ t("specifications.testSpec.calibration.title") }}:
                    </li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{
                          t(
                            "specifications.testSpec.calibration.submitDocument"
                          )
                        }}
                      </li>
                      <li>
                        {{
                          t(
                            "specifications.testSpec.calibration.equipCalibration"
                          )
                        }}
                      </li>
                    </ul>
                    <li>{{ t("specifications.testSpec.alarm.title") }}:</li>
                    <ul class="list-disc list-inside pl-5">
                      <li>
                        {{ t("specifications.testSpec.alarm.eachModule") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.alarm.codeReading") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.alarm.eachSensor") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.alarm.electricalPart") }}
                      </li>
                      <li>
                        {{ t("specifications.testSpec.alarm.others") }}
                      </li>
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
const { t, messages, locale } = useI18n({
  messages: {
    en: {
      description: [
        "Electronic components are used in a multitude of products, from smartphones and automobiles to home appliances and industrial machinery.",
        "Quality control is important in the electronics industry. It helps to ensure the components you source meet your specifications and performance standards and are free from defects that may cause problems in the final product’s safety and performance.",
        "Ultimately, it helps to detect and correct issues with the electronic components early on – before they affect the end product.",
        "Electronics component testing equipment is a very important and indispensable tool in the manufacturing and quality management process. They not only ensure parts meet specific product performance, reliability and safety requirements. But these tester can also detect potential defects or issues with the parts before they’re installed in a final end product.",
      ],
      specifications: {
        title: "Specifications",
        utility: {
          title: "Utility",
          powerSupply: "Power supply: φ1/220V/50Hz ±10%",
          dimensions: "Dimensions: 300mm(W) x 280mm(L) x 110mm(H)",
          weight: "Weight: 3450g",
          testPoint:
            "Test point interface: Connector cover test point specification",
          ioInterface:
            "I/O interface: Connect to computer for data storage and I/O signal control for Jig",
        },
        testSpec: {
          title: "Test specification",
          testPoint: "128 points, or more as option",
          testSpeed: {
            title: "Test speed",
            continuous: "Continuous/Resistance: 1 msec/step or less",
            insulation: "Insulation: 1 msec/step or less",
            voltage: "Voltage: 1 msec/step or less",
            capacitance: "Capacitance: 50 msec/step or less",
            inductance: "Inductance: 50 msec/step or less",
          },
          continuous: {
            title: "Continuous (Open) test",
            rangeTitle: "Range",
            range1:
              "2Wire [0.4 ohm-2M ohm] (To cover this range): Precision +/-10% or less",
            range2:
              "4Wire [1ohm-100ohm] (To cover this range) as option: Precision +/-3% or less",
            inputRange: "Input range 5V max",
          },
          insulation: {
            title: "Insulation (Short) test",
            range: "100k ohm-2 M ohm (To cover this range)",
            inputRange: "Input range 5V max",
            precision: "Precision +/-10% or less",
          },
          resistanceValue: {
            title: "Resistance value test",
            same: "Resistance value test: Same with Continuous test",
          },
          voltage: {
            title: "Voltage test",
            range: "0V-25V (To cover this range), 32V max as option",
            precision: "Precision +/-5% or less",
          },
          capacitance: {
            title: "Capacitance test",
            range: "2000pF-5uF (To cover this range)",
            inputRange: "Input range 5V max",
            precision: "Precision +/-10% or less",
          },
          inductance: {
            title: "Inductance test",
            range: "1uH-1H (To cover this range)",
            inputRange: "Input range 5V max",
            frequency: "Frequency 160Hz/1.6kHz/16kHz/160kHz",
            precision: "Precision +/-10% or less",
          },
          diode: {
            title: "Diode Vf test",
            range: "0V-25V (To cover this range), 32V max as Option",
            inputRange:
              "Input range 5mA-20mA (To cover this range), 300mA as Option",
            precision: "Precision +/-5% or less",
          },
          i2c: {
            title: "I2C communication control test",
            inputRange:
              "Input range 1.2V/1.8V/3.3V-5V max (To cover this range)",
            frequency: "Frequency 100kHz-400kHz",
          },
          i2s: {
            title: "I2S communication control test",
            inputRange:
              "Input range 1.2V/1.8V/3.3V-5V max (To cover this range)",
            frequency: "Frequency 12MHz max",
          },
          powerSupply: {
            title: "Power supply output",
            voltage:
              "Voltage DC 0V-24V (To cover this range), 32V max as option",
            current:
              "Current DC 50mA (To cover this range), 300mA max as option",
          },
          display: {
            title: "Display",
            showResult: "Show result of test, PASS (Green) Fail (Red).",
            showProgram: "Show program name, setting parameter.",
            showDetail: "Show testing detail, Good/NG result.",
          },
          dataRecord: {
            title: "Data record",
            passFail: "Pass, Fail result",
            measurementValue:
              "Measurement value and detail of function test result save as CSV file.",
          },
          program: {
            title: "Program",
            changeSetting:
              "Possible to change setting threshold by test program.",
            saveProgram:
              "Possible to save test program in computer, and send via USB and LAN too.",
            operatorMode:
              "To equip operator mode, engineer mode, and maintenance mode",
          },
          ioControl: {
            title: "I/O control",
            outputSignal: "Possible to output signal for I/O control.",
            testStart: "Test start / Test end / Test result Pass or Fail",
            inputSignal:
              "Possible to input signal for I/O control. Test start / Test end",
          },
          calibration: {
            title: "Calibration",
            submitDocument:
              "To submit calibration document with machine installation.",
            equipCalibration: "To equip calibration method periodically.",
          },
          alarm: {
            title: "Alarm",
            eachModule: "Each module trouble",
            codeReading: "Code reading error",
            eachSensor: "Each sensor error",
            electricalPart: "Electrical part trouble",
            others: "Others",
          },
        },
      },
    },
    vi: {
      description: [
        "Các linh kiện điện tử được sử dụng trong nhiều sản phẩm, từ điện thoại thông minh và ô tô đến các thiết bị gia dụng và máy móc công nghiệp.",
        "Kiểm soát chất lượng rất quan trọng trong ngành công nghiệp điện tử. Nó giúp đảm bảo các linh kiện bạn mua đáp ứng các thông số kỹ thuật và tiêu chuẩn hiệu suất của bạn và không có lỗi có thể gây ra vấn đề về an toàn và hiệu suất của sản phẩm cuối cùng.",
        "Cuối cùng, nó giúp phát hiện và sửa chữa các vấn đề với các linh kiện điện tử sớm – trước khi chúng ảnh hưởng đến sản phẩm cuối cùng.",
        "Thiết bị kiểm tra linh kiện điện tử là một công cụ rất quan trọng và không thể thiếu trong quá trình sản xuất và quản lý chất lượng. Chúng không chỉ đảm bảo các bộ phận đáp ứng các yêu cầu về hiệu suất, độ tin cậy và an toàn cụ thể của sản phẩm. Mà các thiết bị kiểm tra này còn có thể phát hiện các lỗi tiềm ẩn hoặc vấn đề với các bộ phận trước khi chúng được lắp đặt vào sản phẩm cuối cùng.",
      ],
      specifications: {
        title: "Thông số kỹ thuật",
        utility: {
          title: "Tiện ích",
          powerSupply: "Nguồn điện: φ1/220V/50Hz ±10%",
          dimensions: "Kích thước: 300mm(R) x 280mm(D) x 110mm(C)",
          weight: "Trọng lượng: 3450g",
          testPoint: "Giao diện điểm kiểm tra: Đầu nối che điểm kiểm tra",
          ioInterface:
            "Giao diện I/O: Kết nối với máy tính để lưu trữ dữ liệu và điều khiển tín hiệu I/O cho Jig",
        },
        testSpec: {
          title: "Thông số kiểm tra",
          testPoint: "128 điểm, hoặc nhiều hơn tùy chọn",
          testSpeed: {
            title: "Tốc độ kiểm tra",
            continuous: "Liên tục/Điện trở: 1 msec/bước hoặc ít hơn",
            insulation: "Cách điện: 1 msec/bước hoặc ít hơn",
            voltage: "Điện áp: 1 msec/bước hoặc ít hơn",
            capacitance: "Điện dung: 50 msec/bước hoặc ít hơn",
            inductance: "Cảm kháng: 50 msec/bước hoặc ít hơn",
          },
          continuous: {
            title: "Kiểm tra liên tục (Mở)",
            rangeTitle: "Phạm vi",
            range1:
              "2Dây [0.4 ohm-2M ohm] (Để bao phủ phạm vi này): Độ chính xác +/-10% hoặc ít hơn",
            range2:
              "4Dây [1ohm-100ohm] (Để bao phủ phạm vi này) tùy chọn: Độ chính xác +/-3% hoặc ít hơn",
            inputRange: "Phạm vi đầu vào tối đa 5V",
          },
          insulation: {
            title: "Kiểm tra cách điện (Ngắn mạch)",
            range: "100k ohm-2 M ohm (Để bao phủ phạm vi này)",
            inputRange: "Phạm vi đầu vào tối đa 5V",
            precision: "Độ chính xác +/-10% hoặc ít hơn",
          },
          resistanceValue: {
            title: "Kiểm tra giá trị điện trở",
            same: "Giống với kiểm tra liên tục",
          },
          voltage: {
            title: "Kiểm tra điện áp",
            range: "0V-25V (Để bao phủ phạm vi này), tối đa 32V tùy chọn",
            precision: "Độ chính xác +/-5% hoặc ít hơn",
          },
          capacitance: {
            title: "Kiểm tra điện dung",
            range: "2000pF-5uF (Để bao phủ phạm vi này)",
            inputRange: "Phạm vi đầu vào tối đa 5V",
            precision: "Độ chính xác +/-10% hoặc ít hơn",
          },
          inductance: {
            title: "Kiểm tra cảm kháng",
            range: "1uH-1H (Để bao phủ phạm vi này)",
            inputRange: "Phạm vi đầu vào tối đa 5V",
            frequency: "Tần số 160Hz/1.6kHz/16kHz/160kHz",
            precision: "Độ chính xác +/-10% hoặc ít hơn",
          },
          diode: {
            title: "Kiểm tra Diode Vf",
            range: "0V-25V (Để bao phủ phạm vi này), tối đa 32V tùy chọn",
            inputRange:
              "Phạm vi đầu vào 5mA-20mA (Để bao phủ phạm vi này), tối đa 300mA tùy chọn",
            precision: "Độ chính xác +/-5% hoặc ít hơn",
          },
          i2c: {
            title: "Kiểm tra điều khiển giao tiếp I2C",
            inputRange:
              "Phạm vi đầu vào 1.2V/1.8V/3.3V-5V tối đa (Để bao phủ phạm vi này)",
            frequency: "Tần số 100kHz-400kHz",
          },
          i2s: {
            title: "Kiểm tra điều khiển giao tiếp I2S",
            inputRange:
              "Phạm vi đầu vào 1.2V/1.8V/3.3V-5V tối đa (Để bao phủ phạm vi này)",
            frequency: "Tần số tối đa 12MHz",
          },
          powerSupply: {
            title: "Đầu ra nguồn điện",
            voltage:
              "Điện áp DC 0V-24V (Để bao phủ phạm vi này), tối đa 32V tùy chọn",
            current:
              "Dòng điện DC 50mA (Để bao phủ phạm vi này), tối đa 300mA tùy chọn",
          },
          display: {
            title: "Hiển thị",
            showResult: "Hiển thị kết quả kiểm tra, ĐẠT (Xanh) Không đạt (Đỏ).",
            showProgram: "Hiển thị tên chương trình, tham số cài đặt.",
            showDetail: "Hiển thị chi tiết kiểm tra, kết quả Tốt/NG.",
          },
          dataRecord: {
            title: "Ghi dữ liệu",
            passFail: "Kết quả Đạt, Không đạt",
            measurementValue:
              "Giá trị đo lường và chi tiết kết quả kiểm tra chức năng lưu dưới dạng tệp CSV.",
          },
          program: {
            title: "Chương trình",
            changeSetting:
              "Có thể thay đổi ngưỡng cài đặt bằng chương trình kiểm tra.",
            saveProgram:
              "Có thể lưu chương trình kiểm tra trong máy tính, và gửi qua USB và LAN.",
            operatorMode:
              "Trang bị chế độ vận hành, chế độ kỹ sư, và chế độ bảo trì",
          },
          ioControl: {
            title: "Điều khiển I/O",
            outputSignal: "Có thể xuất tín hiệu cho điều khiển I/O.",
            testStart:
              "Bắt đầu kiểm tra / Kết thúc kiểm tra / Kết quả kiểm tra Đạt hoặc Không đạt",
            inputSignal:
              "Có thể nhập tín hiệu cho điều khiển I/O. Bắt đầu kiểm tra / Kết thúc kiểm tra",
          },
          calibration: {
            title: "Hiệu chuẩn",
            submitDocument: "Nộp tài liệu hiệu chuẩn khi lắp đặt máy.",
            equipCalibration: "Trang bị phương pháp hiệu chuẩn định kỳ.",
          },
          alarm: {
            title: "Báo động",
            eachModule: "Sự cố từng mô-đun",
            codeReading: "Lỗi đọc mã",
            eachSensor: "Lỗi từng cảm biến",
            electricalPart: "Sự cố phần điện",
            others: "Khác",
          },
        },
      },
    },
  },
});
</script>