<template >
  <section class="src-componentes-square">
    <div class="square" :style=getStyle() @click="sendColor()" ></div>
  </section>
</template>

 "background-color": color,
<script>
export default {
  name: "src-componentes-square",
  props: ['estiloEnviado'],
  mounted() {},
  data() {
    return {
      estiloActual:this.estiloEnviado
    };
  },
  methods: {
    sendColor(){
      console.log(this.estilo)
     this.$emit('color-out',this.estiloActual)
    },
    getStyle(){
      if(this.getIsWonValue){       
        this.estiloActual= { "background-color": this.getPickedColor,}
      }else{
        this.estiloActual=this.estiloEnviado
      }
      return this.estiloActual


    }
  },
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

.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
</style>
