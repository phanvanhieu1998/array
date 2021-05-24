<template>
  <div>
    <!-- <table>
      <tr v-for="i in table.row" :key="i">
        <td v-for="j in table.column" :key="j">
          {{ table.table[i][j] }}
        </td>
      </tr>
    </table>

    {{ this.table.arr }}
    <el-input placeholder="Please input" v-model="input"></el-input>
    <el-button type="primary" @click="add">Primary</el-button>
    {{ table.table }} -->

    <BaccaratGridTable :table-data="tbData"></BaccaratGridTable>
    <el-input size="mini" placeholder="Please input" v-model="input" clearable>
    </el-input>
    <el-button type="primary" @click="add">Primary</el-button>
  </div>
</template>

<script>
import BaccaratGridTable from "@/components/BaccaratGridTable.vue";

export default {
  data() {
    return {
      input: "",
      //   input: "",
      //   table: {
      //     row: 12,
      //     column: 75,
      //     table: [],
      //     arr: ["a", "o", "p", "p", "p", "p", "p", "p"],
      //   },

      tbData: [],
    };
  },
  methods: {
    add() {
      this.tbData.push(...this.input);
      this.input = "";
    },
  },
  components: {
    BaccaratGridTable,
  },
  //   computed: {},
  //   methods: {
  //     add() {
  //       this.table.arr.push(this.input);
  //       this.hihi();
  //     },
  //     create_table() {
  //       for (let i = 0; i < this.table.row; i++) {
  //         // mỗi lần i chạy tọa 1 array tg và push vào table
  //         let tg = [];
  //         for (let j = 0; j < this.table.column; j++) {
  //           tg.push(null);
  //         }

  //         this.table.table.push(tg); // push 12 arrray tg to arry table
  //       }
  //     },
  //     hihi() {
  //       let r = 0;
  //       let c = 0;
  //       let c_change = 0;
  //       // điền ô đầu tiên
  //       this.table.table[r][c] = this.table.arr[0];
  //       for (let i = 1; i < this.table.arr.length; i++) {
  //         // nếu nếu phần tử tiếp theo bằng phần tử trước điền vào cùng hàng
  //         if (this.table.arr[i - 1] === this.table.arr[i]) {
  //           // nếu chưa điền đến ô 12
  //           if (r < 11) {
  //             // nếu ô kế tiếp không null hoặc chúng ta đã nhẩy sang cột khác thì tiếp tục điền sang cột tiếp theo cùng hàng
  //             if (this.table.table[r + 1][c] != null || c != c_change) {
  //               this.table.table[r][++c] = this.table.arr[i];
  //             }
  //             // nếu ô kế tiếp null
  //             else if (this.table.table[r + 1][c] == null) {
  //               this.table.table[++r][c] = this.table.arr[i];
  //             }
  //           }

  //           // nếu ô 12 đã được điền
  //           else {
  //             this.table.table[r][++c] = this.table.arr[i];
  //           }
  //         }
  //         //  nếu không bằng điền vào cột tiếp theo
  //         else {
  //           c_change++;
  //           c = c_change;
  //           r = 0;

  //           this.table.table[r][c] = this.table.arr[i];
  //         }
  //       }
  //     },
  //   },
  //   mounted() {
  //     this.create_table();
  //     this.hihi();
  //   },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
