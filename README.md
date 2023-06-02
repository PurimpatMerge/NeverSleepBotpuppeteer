# NeverSleepBotpuppeteer
///////////////////////////////////////////////////
Purimpat Worakaicharuphak : 0825639991

จากโจทย์
สั่งของจากเว็บ โดยใช้ Bot
- เข้าเว็บ https://www.425degree.com/
- คลิกที่สินค้าชื่อ "CASE-MATE TOUGH PLUS CLEAR WITH MAGSAFE เคส IPHONE 14 PRO MAX"
- เพิ่มจำนวนสินค้าเป็น 2 ชิ้น
- กดเพิ่มลงตระกร้า
- กดสั่งซื้อสินค้า
- กรอกข้อมูลให้ครบทุกช่องพร้อมเช็ควิธีการชำระเงินเป็นปลายทาง (ไม่ต้องกดสั่งซื้อ)
(ใช้ Puppeteer with Node.js หรือภาษาอื่นที่รองรับ Puppeteer Library)

//////////////////////////////////////////////////

Installation
/NeverSleepBotpuppeteer: yarn insall

Run 
/NeverSleepBotpuppeteer: node loic_a.js    เป็นวิธีที่ 1
/NeverSleepBotpuppeteer: node loic_b.js    เป็นวิธีที่ 2
/NeverSleepBotpuppeteer: node loic_c.js    เป็นวิธีที่ 3

////////////////////////////////////////////////

ผมใช้ javascript (Node)  

ทำออกมา 3 วิธี แต่ละวิธีจะต่างกัน
1.loic_a.js
            - ทำการเปิดเว็บ https://www.425degree.com/
            - ทำยอมรับ cookie
            - ทำการเลื่อนหา item
            - เมื่อเจอ item นั้นก็เข้าไปสั่งซื้อ
            Process time : 20.694s AVG
            สรุป : เป็นวิธีแรกที่หัดเขียนโค้ดแนวนี้ครับ ไม่ค่อยแม่งยำเพราะต้องเลื่อนหา section iphone case 14 ถึงจะเจอ item นั้น
2.loic_b.js
            - ทำการเปิดเว็บ https://www.425degree.com/
            - ทำยอมรับ cookie
            - เปลี่ยนขั้นตอนนี้เป็น การ search หา item นั้นก่อน
            - เมื่อเจอ item นั้นก็เข้าไปสั่งซื้อ
            Process time : 20.100s AVG 
            สรุป : เป็นวิธีมีความแม่นยำสูง กว่าวิธีอื่นๆ เพราะ search หาชื่อโดยตรงแล้วสั่งซื้อ
2.loic_c.js
            - ทำการเปิดเว็บ https://www.425degree.com/
            - ทำยอมรับ cookie
            - เปลี่ยนขั้นตอนนี้เป็น การ search หา item นั้นก่อน
            - เมื่อเจอ item นั้นก็เข้าไปสั่งซื้อ
            Process time : 16.426s AVG 
            สรุป : เป็นวิธีที่เร็วที่สุดตัดการค้นหาออก แต่ไปที่ section นั้น direct part ทำให้ไม่ต้องผ่านการ search หรือ เลื่อนหา แต่ข้อเสียคือถ้ามีการปรับเปลี่ยน section นั้นจาก web อาจจะหา section part นั้นไม่เจอ และระบบจะผิดพลาด


โดยรวมทั้งหมด : วิธีที่ 2 มีความแม่นยำมากที่สุด แต่ไม่เร็จเท่าวิธีที่ 3

เพิ่มเติม ผมได้แนก folder function เพื่อ เป็นการเรียกใช้ ซ้ำ