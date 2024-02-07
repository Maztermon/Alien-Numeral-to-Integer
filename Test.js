const readline = require("readline");

// สร้าง Interface สำหรับการรับ input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ฟังก์ชันสำหรับแปลง Alien numeral เป็น Integer
function alienToInteger(s) {
  const symbolValues = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    const currentValue = symbolValues[char];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

// ใช้ readline เพื่อรับ input
rl.question("Enter the Alien numeral: ", (input) => {
  // เรียกใช้ฟังก์ชัน alienToInteger เมื่อได้ input
  const result = alienToInteger(input);
  console.log("Result:", result);

  // ปิด Interface หลังจากได้ผลลัพธ์
  rl.close();
});
