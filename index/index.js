var app = new Vue({
  el: "#page",
  data: {
    logoURL: "https://img.picui.cn/free/2024/06/05/666062131d44b.jpg",
    introduce: [
      "卡片以ddl为索引排序，越在前面越快到ddl！记得及时做作业哦！",
      "下面是计科一班期末考试日程表！",
    ],
    card: [
      {
        img: "https://img.picui.cn/free/2024/06/05/6660628fa99ae.png",
        uname: "四史视频与小测",
        uname_add: "共25个",
        content: "要求看够25个视频并做完25个小测！",
        start: "--",
        ddl: "2024-06-16 00:00",
        link: "https://moodle.scnu.edu.cn/course/view.php?id=15714&section=1",
      },
      {
        img: "https://img.picui.cn/free/2024/06/05/6660614324d6b.png",
        uname: "程序实验课作业",
        uname_add: "实验报告",
        content: "提交综合性实验的实验报告（本次作业分两部分提交！）",
        start: "2024-05-29",
        ddl: "2024-06-19 23:00",
        link: "https://send2me.cn/7HZKj87G/Q_aG7n44SFrslQ",
      },
      {
        img: "https://img.picui.cn/free/2024/06/05/6660624d75410.png",
        uname: "程序实验课作业",
        uname_add: "压缩包",
        content:
          "提交综合性实验压缩包文件，记得删除.vs文件和Debug文件（本次作业分两部分提交！）",
        start: "2024-05-29",
        ddl: "2024-06-19 23:00",
        link: "https://send2me.cn/-xYgPD2Q/SyOvx2JIAAm82A",
      },
      {
        img: "https://img.picui.cn/free/2024/06/11/66684813ce629.png",
        uname: "离散数学",
        uname_add: "第七章",
        content:
          "提交综合性实验压缩包文件，记得删除.vs文件和Debug文件（本次作业分两部分提交！）",
        start: "2024-06-05",
        ddl: "2024-06-14 23:41",
        link: "https://moodle.scnu.edu.cn/mod/assign/view.php?id=604782",
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
