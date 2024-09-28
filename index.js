var app = new Vue({
  el: "#page",
  data: {
    logoURL: "https://img.picui.cn/free/2024/06/05/666062131d44b.jpg",
    introduce: [
      "卡片以ddl为索引排序，越在前面越快到ddl！记得及时做作业哦！",
    ],
    card: [
      // {
      //   img: "",
      //   uname: "",
      //   uname_add: "",
      //   content: "",
      //   start: "",
      //   ddl: "",
      //   link: "",
      // },
    ],
    subject: [
      {
        proj: "程序设计实验课程",
        class: "学院630",
        tm: "2024-06-23 09:00-10:30",
      },
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
