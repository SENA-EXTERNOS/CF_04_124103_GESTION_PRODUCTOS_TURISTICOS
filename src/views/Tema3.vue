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
          p(data-aos="fade-down").mb-0 Antes de abordar la Economía desde la perspectiva del análisis del entorno, se debe tener claro el concepto de Economía, según Parkin, M. (2012), la economía es “la ciencia social que estudia las elecciones que hacen los individuos, las empresas, los gobiernos y la sociedad en su conjunto, para hacer frente a la escasez, y los incentivos que influyen y reconcilian dichas elecciones”  (p. 2),  o como dirían los Economistas “es la ciencia encargada de velar por la mejor distribución de los recursos escasos”,  dichas definiciones son muy práctica porque evidencian que es un concepto que va mucho más allá de la percepción tradicional que economía traduce ahorro.  

        p(data-aos="fade-down") Para ampliar la información, lo invitamos a ver el documento Ver anexo 4.  Economía, en el cual se detallan aspectos sobre indicadores económicos, el producto interno bruto, la balanza comercial, inflación, tasas de cambio y tasas de desempleo.
        .row.justify-content-start.align-items-center         
          .col-lg-4(data-aos="zoom-in")
            a.anexo(:href="obtenerLink('/downloads/Anexo_4_Economia.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 #[b Anexo 4.] Económia                           

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
