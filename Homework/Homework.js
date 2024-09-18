new Vue({
  el: "#app",
  data: {
    idx: 0, // 默认idx，实际应从localStorage获取
    selectedHomework: null,
    logoURL: "https://pic.imge.cc/2024/07/24/66a0c6ea4edd5.png",
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
