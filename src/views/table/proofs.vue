<template>
  <div class="app-container">
    <el-form ref="formSearch" :inline="true" :model="formSearch" class="demo-form-inline">
      <el-form-item label="内容ID" prop="content_id">
        <el-input v-model="formSearch.content_id" placeholder="内容对象ID" />
      </el-form-item>
      <el-form-item label="导入状态" prop="status">
        <el-select v-model="formSearch.status" placeholder="状态">
          <el-option v-for="(item, k) in statusArr" :key="k" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="fetchData">查询</el-button>
        <el-button @click="resetForm('formSearch')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      fit
      highlight-current-row
      size="small"
    >
      <el-table-column type="expand">
        <template slot-scope="scope">
          <p class="expandP"><strong>内容：</strong><span>{{ scope.row.content }}</span></p>
        </template>
      </el-table-column>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="main_data">
        <template slot-scope="scope">
          {{ scope.row.main_data }}
        </template>
      </el-table-column>
      <el-table-column label="extra_data">
        <template slot-scope="scope">
          {{ scope.row.extra_data }}
        </template>
      </el-table-column>
      <el-table-column label="reference">
        <template slot-scope="scope">
          {{ scope.row.reference }}
        </template>
      </el-table-column>
      <el-table-column label="发送时间" width="90">
        <template slot-scope="scope">
          {{ scope.row.sendtime }}
        </template>
      </el-table-column>
      <el-table-column label="tx_id">
        <template slot-scope="scope">
          {{ scope.row.tx_id }}
        </template>
      </el-table-column>
      <el-table-column label="日志">
        <template slot-scope="scope">
          {{ scope.row.log }}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="90">
        <template slot-scope="scope">
          {{ scope.row.statusstr }}
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="90">
        <template slot-scope="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column label="更新时间" width="90">
        <template slot-scope="scope">
          {{ scope.row.update_time }}
        </template>
      </el-table-column>
      <!-- <el-table-column class-name="status-col" label="操作" align="center" /> -->
    </el-table>
    <div class="pageContainer">
      <el-pagination
        :total="listTotal"
        layout="total, prev, pager, next"
        :current-page.sync="page"
        background
        :page-size="per_page"
        @size-change="fetchData"
        @current-change="fetchData"
      />
    </div>

  </div>
</template>

<script>
import { getProofList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: false,
      listTotal: 0,
      page: 1,
      per_page: 20,
      formSearch: {
        content_id: this.$route.query.contentId || '',
        status: ''
      },
      statusArr: [
        { label: '初始的', value: 0 },
        { label: '成功', value: 1 },
        { label: '失败', value: 2 }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      if (this.listLoading) return
      var params = {
        page: this.page - 1,
        per_page: this.per_page
      }
      if (this.formSearch.content_id !== '') {
        params.content_id = this.formSearch.content_id
      }
      if (this.formSearch.status !== '') {
        params.status = this.formSearch.status
      }
      this.listLoading = true
      getProofList(params).then(response => {
        this.list = response.data.items || []
        this.listTotal = response.data.total || 0
        this.listLoading = false
      }).catch(error => {
        console.log(error)
        this.listLoading = false
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.pageContainer {
  margin: 15px 0;
}
.demo-form-inline {
  padding: 20px 15px 0;
  background-color: #f2f2f2;
}
</style>
