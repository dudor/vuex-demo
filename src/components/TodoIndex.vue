  <template>
  <div>
<el-row :gutter="5">
<el-col :span="12">
<el-input v-model="txtTodo" placeholder="请输入内容" autocomplete="off"></el-input>
</el-col>
<el-col :span="2">
<el-button @click="addTodo">增加</el-button>
</el-col>
</el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index">
    </el-table-column>
    <el-table-column prop="text" label="內容">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
  </template>

<script>
export default {
  data() {
    return {
      txtTodo: ""
    };
  },
  computed: {
    tableData () {
      return this.$store.state.TodoMvc.todos
    }
  },
  methods: {
    addTodo() {
      if (this.txtTodo.trim()) {
        this.$store.commit("TodoMvc/addTodo", { text: this.txtTodo });
        this.txtTodo = ''
      }
    }
  }
};
</script>