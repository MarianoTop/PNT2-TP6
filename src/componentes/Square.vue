<template >
  <section class="src-componentes-square">
    <div class="square" :style="getStyle()"  @click="sendColor()" ></div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-square",
  props: ['estiloEnviado'],
  mounted() {},
  data() {
    return {
      estilo:this.estiloEnviado
    };
  },
  methods: {
    sendColor(){
      if(this.getPickedColor== this.estilo["background-color"]){
        
        this.changeIsWonValue(true)
        this.changeMessageDisplayValue("You Picked Right!")
        this.changeRestartMessageValue("Play Again!")
        
      }else{
        this.estilo["background-color"] = "#232323"; 
        this.changeMessageDisplayValue("Try Again!")       
      }
      
     //this.$emit('color-out',this.estilo)
    },

    getStyle(){
      if(this.getIsWonValue){
        this.estilo["background-color"] = this.getPickedColor
      }else {
        /* Francamente no entiendo porque funciona.
         normalmente esperaria que pase por arriba el color vacio pero por algun motivo no lo pasa y
         deja el vacio*/
         //Segun veo con el debugger es como si tambien modificara al estilo enviado... 
         //no tiene mucho sentido aunque quizas al ser un objeto modifica la referencia?
         // y quizas luego al presionar new creo un nuevo objeto y por eso lo modifica?

        this.estilo=this.estiloEnviado
      }      
      return this.estilo
    }



  },
  computed: {
   
  },
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
