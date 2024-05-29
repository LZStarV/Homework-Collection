var app = new Vue({
  el: "#page",
  data: {
    logoURL: "https://img2.imgtp.com/2024/05/27/jZSwVNvX.jpg",
    introduce: [
      "卡片以ddl为索引排序，越在前面越快到ddl！记得及时做作业哦！",
      "下面是计科一班期末考试日程表！",
    ],
    card: [
      {
        img: "https://img2.imgtp.com/2024/05/29/11qCi2Mf.png",
        uname: "社会主义发展史小测",
        uname_add: "共十讲",
        content: "砺儒云上已布置相关作业，请及时完成！",
        start: "--",
        ddl: "2024-06-16 00:00",
        link: "https://moodle.scnu.edu.cn/course/view.php?id=15714&section=1",
      },
      {
        img: "https://img2.imgtp.com/2024/05/29/Dvi9vEc0.png",
        uname: "程序实验课作业1",
        uname_add: "多态性2",
        content: "PDF两道题（第三题自选）",
        start: "2024-05-29",
        ddl: "2024-06-04 23:00",
        link: "https://send2me.cn/yL7prYCY/TvyXRgaiuhFC5g",
      },
      {
        img: "https://img2.imgtp.com/2024/05/29/2FKmButq.png",
        uname: "程序实验课作业2",
        uname_add: "陨石撞飞机",
        content: "先不着急交，还没问清",
        start: "2024-05-29",
        ddl: "2024-06-26 23:00",
        link: "https://send2me.cn/-xYgPD2Q/SyOvx2JIAAm82A",
      },
      {
        img: "https://img2.imgtp.com/2024/05/29/t4LotBTw.png",
        uname: "学业规划课作业",
        uname_add: "规划书",
        content: "基于模板，定制属于自己的职业生涯规划书",
        start: "2024-04-17",
        ddl: "2024-06-02 24:00",
        link: "https://f.wps.cn/g/lNv7LQov/",
      },
    ],
    subject: [
      {
        proj: "大学物理（III-1）",
        class: "南305",
        tm: "2024-06-24 09:00-11:00",
      },
      {
        proj: "数字逻辑电路课程实验",
        class: "北905",
        tm: "2024-06-25 14:30-16:30",
      },
      {
        proj: "中国近现代史纲要",
        class: "与老师有关",
        tm: "2024-06-26 09:00-11:00",
      },
      {
        proj: "基础英语（2）",
        class: "与老师有关",
        tm: "2024-06-27 14:30-16:30",
      },
      {
        proj: "习近平新时代中国特色社会主义思想概论",
        class: "与老师有关",
        tm: "2024-06-28 09:00-11:00",
      },
      {
        proj: "高等数学（I-2）",
        class: "与老师有关",
        tm: "2024-07-01 09:00-11:00",
      },
      {
        proj: "离散数学（1）",
        class: "北204",
        tm: "2024-07-03 09:00-11:00",
      },
      {
        proj: "面向对象程序设计",
        class: "北505",
        tm: "2024-07-04 09:00-11:00",
      },
    ],
  },
  mounted() {
    // 假设你希望在页面加载时就存储数据
    // 将card数据存储到localStorage
    localStorage.setItem("homeworkData", JSON.stringify(this.card));
    // 组件挂载完成后调用排序方法
    this.sortCardsByDdl();
    this.addIdsToCards();
  },
  methods: {
    gotoPage(idx) {
      // 存储当前点击的card元素到localStorage
      localStorage.setItem("selectedHomework", JSON.stringify(this.card[idx]));
    },
    sortCardsByDdl() {
      this.card.sort((a, b) => {
        // 将ddl字符串转换为Date对象
        let dateA = new Date(a.ddl);
        let dateB = new Date(b.ddl);
        // 比较日期并返回差值，实现升序排序
        return dateA - dateB;
      });
    },
    addIdsToCards() {
      this.card.forEach((card, index) => {
        card.key = Date.now() + index;
      });
    },
  },
});
