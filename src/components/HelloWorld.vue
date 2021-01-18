<template>
  <div class="hello">
    <vue-circle
      :progress="progressNumber"
      :size="250"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      insert-mode="append"
      :thickness="5"
      :show-percent="true"
      @vue-circle-progress="progress"
      @vue-circle-end="progress_end"
    >
      <p v-if="money">{{ current | currency_rub }}/{{min | toCurrency}}</p>
      <p v-else>{{ progressMessage }}</p>
    </vue-circle>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      default: "",
      type: String
    },
    money: {
      default: false,
      type: Boolean
    },
    progres: {
      default: 0,
      type: Number
    },
    min: {
      default: 100,
      type: Number
    },
    current: {
      default: 10,
      type: Number
    }
  },
  components: {
    VueCircle
  },
  data() {
    return {
      fill: { gradient: ["red", "yellow"] }
    };
  },
  methods: {
    progress(event, progress, stepValue) {
      console.log(stepValue);
    },
    progress_end(event) {
      console.log("Circle progress end");
    }
  },
  computed: {
    // a computed getter
    progressMessage: function() {
      // `this` points to the vm instance
      return this.current + "/" + this.min;
    },
    progressNumber: function() {
      // `this` points to the vm instance
      return (this.current / this.min) * 100;
    }
  },
  filters: {
    currency_rub(amount) {
      return (
        amount &&
        `${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
      );
    },
    pct(amount) {
      return (
        amount &&
        `${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}%`
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
