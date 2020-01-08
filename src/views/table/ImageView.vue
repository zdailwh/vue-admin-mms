<template>
  <el-dialog
    title="海报预览"
    width="30%"
    top="5vh"
    :visible="imgurl !== ''"
    :before-close="handleClose"
  >
    <div>
      <img :src="imgurl" style="width: 100%;height: 100%;">
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    imgurl: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClose(done) {
      done()
      this.imgurl = ''
    }
  }
}
</script>
