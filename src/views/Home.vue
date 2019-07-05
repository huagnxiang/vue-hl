<template>
  <div>
    <header>
      <el-card class="box-card">
        <div class="text">
          <img src="../assets/用户.svg" alt="" />
          <div style="float: right">
            <div>New Visits</div>
            <div>
              <count
                :startVal="startVal"
                :endVal="num.messages"
                :duration="duration"
              >
              </count>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text">
          <img src="../assets/信息.svg" alt="" />
          <div style="float: right">
            <div>Messages</div>
            <div>
              <count
                :startVal="startVal"
                :endVal="num.purchases"
                :duration="duration"
              >
              </count>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text">
          <img src="../assets/钱.svg" alt="" />
          <div style="float: right">
            <div>Purchases</div>
            <div>
              <count
                :startVal="startVal"
                :endVal="num.shopping"
                :duration="duration"
              >
              </count>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text">
          <img src="../assets/购物车.svg" alt="" />
          <div style="float: right">
            <div>Shoppings</div>
            <div>
              <count
                :startVal="startVal"
                :endVal="num.visits"
                :duration="duration"
              >
              </count>
            </div>
          </div>
        </div>
      </el-card>
    </header>
    <template>
      <div class="dv">
        <el-card class="box-card">
          <ve-line :data="chartData"></ve-line>
        </el-card>
      </div>
    </template>
  </div>
</template>

<script>
import count from "vue-count-to";
export default {
  name: "Home",
  components: {
    count
  },
  props: {},
  data() {
    return {
      num: {},
      //  时间
      duration: 9000,
      //初始值
      startVal: 0,
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: []
      }
    };
  },
  methods: {},
  mounted() {
    this.$axios
      .req("api/homeData")
      .then(res => {
        if (res) {
          this.num = res.data.data;
          // console.log(this.num);
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.$axios
      .req("api/homeChat")
      .then(res => {
        if (res) {
          this.chartData.rows = res.data.data;
          console.log(this.chartData.rows);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.text {
  width: 240px;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
header img {
  width: 80px;
  height: 40px;
}
.dv {
  margin: 2.25em 1.5em 2em;
}
</style>
