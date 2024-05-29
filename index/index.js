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
        ddl: "2024-06-15 23:00",
        link: "https://moodle.scnu.edu.cn/course/view.php?id=15714&section=1",
      },
      {
        img: "",
        uname: "程序实验课作业",
        uname_add: "",
        content: "",
        start: "2024-05-29",
        ddl: "2024-06-04 23:00",
        link: "",
      },
      {
        img: "https://img2.imgtp.com/2024/05/29/t4LotBTw.png",
        uname: "学业规划课作业",
        uname_add: "规划书",
        content: "重载运算符PPT第( (1 || 2), 3, 4 )题",
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
