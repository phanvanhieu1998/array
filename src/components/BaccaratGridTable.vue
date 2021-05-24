<template>
  <div class="baccarat-grid-table">
    {{ tableData }}
    <table>
      <tr v-for="i in this.rows" :key="i">
        <td v-for="j in cols" :key="j">
          <!-- {{ buildTableData[i - 1][j - 1] }} -->
          <div
            :class="[
              { win: buildTableData[i - 1][j - 1] == 'A' },
              { lose: buildTableData[i - 1][j - 1] == 'B' },
              { tie: buildTableData[i - 1][j - 1] == 'C' },
            ]"
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    cols: {
      type: Number,
      default: 75,
    },
    rows: {
      type: Number,
      default: 12,
    },
  },
  //   watch: {
  //     tableData(newVal, oldVal) {
  //       console.log("moi", newVal);
  //       console.log("cu", oldVal);
  //     },
  //   },

  computed: {
    initTable() {
      let table = [];

      for (let i = 0; i < this.rows; i++) {
        let tg = [];
        for (let j = 0; j < this.cols; j++) {
          tg.push(null);
        }

        table.push(tg);
      }

      return table;
    },

    buildTableData() {
      let r = 0;
      let c = 0;
      let c_change = 0;
      let arr = this.tableData;

      let table = this.initTable;
      table[0][0] = this.tableData[0];

      console.log("ll", arr);
      for (let i = 1; i < arr.length; i++) {
        // nếu nếu phần tử tiếp theo bằng phần tử trước điền vào cùng hàng
        if (arr[i - 1] === arr[i]) {
          // nếu chưa điền đến ô 12
          if (r < 11) {
            // nếu ô kế tiếp không null hoặc chúng ta đã nhẩy sang cột khác thì tiếp tục điền sang cột tiếp theo cùng hàng
            if (table[r + 1][c] != null || c != c_change) {
              table[r][++c] = arr[i];
            }
            // nếu ô kế tiếp null
            else if (table[r + 1][c] == null) {
              table[++r][c] = arr[i];
            }
          }

          // nếu ô 12 đã được điền
          else {
            table[r][++c] = arr[i];
          }
        }
        //  nếu không bằng điền vào cột tiếp theo
        else {
          c_change++;
          c = c_change;
          r = 0;

          table[r][c] = arr[i];
        }
      }

      return table;
    },
  },

  mounted() {
    // console.log(this.buildTableData);
  },
};
</script>

<style>
.win {
  border-radius: 50%;
  background-color: green;
  width: 10px;
  height: 10px;
}
.lose {
  border-radius: 50%;
  background-color: red;
  width: 10px;
  height: 10px;
}
.tie {
  border-radius: 50%;
  background-color: yellow;
  width: 10px;
  height: 10px;
}
td {
  width: 10px;
  height: 10px;
}
</style>
