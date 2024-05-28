var app = new Vue({
  el: "#page",
  data: {
    logoURL: "https://img2.imgtp.com/2024/05/27/jZSwVNvX.jpg",
    introduce: [
      "这是由计科1班的学习委员LZStarV做的一个简单的收作业网站。",
      "（PS:卡片顺序以ddl排序，越在前面越快到ddl！请及时检查哦！）",
    ],
    card: [
      {
        img: "https://img2.imgtp.com/2024/05/29/GPIm84Ps.png",
        uname: "程序实验课作业1",
        uname_add: "重载运算符",
        content: "重载运算符PPT第( (1 || 2), 3, 4 )题（不用写实验报告）",
        start: "2024-04-17",
        ddl: "2024-05-07 23:00",
        link: "https://f.wps.cn/g/lNv7LQov/",
      },
      {
        img: "https://img2.imgtp.com/2024/05/29/GPIm84Ps.png",
        uname: "程序实验课作业2",
        uname_add: "继承与派生",
        content: "重载运算符PPT（不用写实验报告）",
        start: "2024-04-23",
        ddl: "2024-05-28 23:00",
        link: "https://f.wps.cn/g/lNv7LQov/",
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
      location.assign("../Homework/Homework.html");
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
