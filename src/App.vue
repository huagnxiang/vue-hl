<template>
  <div>
    <router-view v-if="$route.path==='/'"/>
    <el-container v-else>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <aside-nav></aside-nav>
        </el-aside>
        <el-main>
          <main><router-view /></main>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>
import HeaderNav from "./components/HeaderNav";
import AsideNav from "./components/AsideNav";

export default {
  name: "App",
  components: {
    HeaderNav,
    AsideNav
  },
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  margin-right: 14px;
  color: white;
}
.el-header{
  background: #2e5e85;
}
</style>
