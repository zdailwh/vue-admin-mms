<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form ref="formImport" :model="formImport" :rules="rules" label-width="80px">
          <el-form-item label="导入目录" prop="path">
            <el-input v-model="formImport.path" placeholder="请填写批量导入文件路径" />
          </el-form-item>
        </el-form>
        <p>
          <el-button type="primary" icon="el-icon-upload" @click="onSubmit">导入</el-button>
          <el-button>取消</el-button>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { addImportList } from '@/api/table'
export default {
  data() {
    return {
      listLoading: false,
      formImport: {
        path: ''
      },
      rules: {
        path: [
          { required: true, message: '请输入导入路径', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.formImport.validate((valid) => {
        if (valid) {
          if (this.listLoading) return
          var params = this.formImport
          this.listLoading = true
          addImportList(params).then(response => {
            this.$router.push('/contentimports/list')
            this.listLoading = false
          }).catch(error => {
            console.log(error)
            this.listLoading = false
          })
        }
      })
    }
  }
}
</script>
