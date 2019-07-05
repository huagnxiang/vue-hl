<template>
  <div class="header">
    <p>欢迎来到小爱后台管理系统</p>
    <p>早上好，亲爱的 上次登录时间:</p>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.header {
  /*margin: 0;*/
  /*padding: 0;*/
  /*display: flex;*/
  /*width: 100px;*/
  /*height: 40px;*/
  background: #2e5e85;
  /*border: 1px solid #000;*/
  /*position: relative;*/
  /*align-items: center;*/
  display: flex;
  justify-content: space-between;
  /*注意*/
  /*position: fixed;*/
  /*z-index: 1;*/
  /*top: 10px;*/
  /*background-color: #2e5e85;*/
}
p {
  font-size: 17px;
  line-height: 60px;
}
</style>
