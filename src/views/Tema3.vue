<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Economía

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down") Bajo la metodología PESTEL y tal cual como se mencionó previamente, la variable Económica es uno de los elementos claves que conforman el análisis del macroentorno, y es justamente por las amplias dimensiones que tiene dicha variable que se aborda de manera separada.
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Antes de abordar la Economía desde la perspectiva del análisis del entorno, se debe tener claro su concepto, según Parkin, M. (2012), la Economía es “la ciencia social que estudia las elecciones que hacen los individuos, las empresas, los gobiernos y la sociedad en su conjunto, para hacer frente a la escasez, y los incentivos que influyen y reconcilian dichas elecciones”  (p. 2),  o como dirían los Economistas “es la ciencia encargada de velar por la mejor distribución de los recursos escasos”,  dichas definiciones son muy prácticas, porque evidencian que es un concepto que va mucho más allá de la percepción tradicional como lo es “economía traduce ahorro”. 


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4 Economía
                  p.mb-0 Para ampliar la información, lo invitamos a ver el documento Ver anexo 4.  Economía, en el cual se detallan aspectos sobre indicadores económicos, el producto interno bruto, la balanza comercial, inflación, tasas de cambio y tasas de desempleo.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_4_Economia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download            

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
