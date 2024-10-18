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
        img: "https://www.helloimg.com/i/2024/10/18/6712199836621.png",
        uname: "计算机组成原理",
        uname_add: "",
        content: "5.5、5.13、5.14",
        start: "2024.9.17 00:00",
        ddl: "2024.10.23 23:59",
        link: "https://moodle.scnu.edu.cn/mod/assign/view.php?id=684795",
      },
      {
        img: "https://www.helloimg.com/i/2024/10/18/67121b1502eac.png",
        uname: "python实验作业",
        uname_add: "",
        content: "PPT上四个题",
        start: "2024.10.14 14:30",
        ddl: "2024.10.21 23:59",
        link: "https://send2me.cn/0ysZKmQY/SCWWw27jjy0bmQ",
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
