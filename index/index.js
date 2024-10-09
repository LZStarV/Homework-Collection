var app = new Vue({
  el: "#page",
  data: {
    logoURL: "https://pic.imge.cc/2024/07/24/66a0c6ea4edd5.png",
    introduce: [
      "卡片以ddl为索引排序，越在前面越快到ddl！记得及时做作业哦！",
      "现在没有作业！",
    ],
    card: [
      {
        img: "https://www.helloimg.com/i/2024/10/09/6706822eb66f0.png",
        uname: "计算机组成原理",
        uname_add: "",
        content: "4.5（Y）、4.10（1）、4.25",
        start: "2024.9.17 00:00",
        ddl: "2024.10.16 23:59",
        link: "https://moodle.scnu.edu.cn/mod/assign/view.php?id=683464",
      },
      {
        img: "https://www.helloimg.com/i/2024/10/09/670683deb249a.png",
        uname: "python作业(PTA)",
        uname_add: "",
        content: `见"我的题目集"`,
        start: "--",
        ddl: "2024.12.30 23:59",
        link: "https://pintia.cn/problem-sets/dashboard",
      },
    ]
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
