<template >
  <section class="src-componentes-banner">
    <head>
      <title></title>
    </head>
    <div :style="{'background-color': getIsWonValue? getPickedColor:'steelblue'}" class="header">
      <h1>
        The Great <br />
        <span class="colorDisplay"  >{{getPickedColor}}</span>
        <br />
        Guessing Game
      </h1>
    </div>
  </section>
</template>

<script >
export default {
  name: "src-componentes-banner",
  props: [ ],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
.colorDisplay {
  font-size: 200%;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
