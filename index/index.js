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
        img: "https://www.helloimg.com/i/2024/10/28/671ee0ac8c8a1.png",
        uname: "程序设计作业",
        uname_add: "",
        content: "提交整个系统，包括源代码、编译后的可执行程序、实验报告",
        start: "--",
        ddl: "2024.10.30 00:00",
        link: "https://send2me.cn/0_i29Sdz/QzGpL6uHsdOHbQ",
      },
      {
        img: "https://www.helloimg.com/i/2024/10/28/671ee23fb0ad2.png",
        uname: "计组实验报告提交",
        uname_add: "",
        content: "提交拍照后PDF内容",
        start: "--",
        ddl: "2024.10.28 23:00",
        link: "https://send2me.cn/W5hZoTiF/Qb6TIMo6pCONzQ",
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
