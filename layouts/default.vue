<template>
  <el-container>
    <el-header>
      <navigation />
    </el-header>
    <el-main>
      <Nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import Navigation from '~/components/main/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style>

</style>
