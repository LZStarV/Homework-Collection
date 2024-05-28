new Vue({
  el: "#app",
  data: {
    idx: 0, // 默认idx，实际应从localStorage获取
    selectedHomework: null,
    logoURL: "https://img2.imgtp.com/2024/05/27/jZSwVNvX.jpg",
    homework: [],
  },
  mounted() {
    this.idx = parseInt(localStorage.getItem("idx"), 10) || 0;
    // 从localStorage获取数据
    var storedHomework = JSON.parse(localStorage.getItem("selectedHomework"));
    if (storedHomework) {
      this.selectedHomework = storedHomework;
    }
  },
  methods: {},
});
