<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Competencia

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La competencia es tan natural como la existencia del comercio y ahora con los entornos digitales, las empresas están inmersas en un escenario de competidores no imaginado.
        p(data-aos="fade-down") Antes de entrar en detalle sobre la competencia, es importante clarificar su concepto, “la competencia son las diferentes empresas que se encuentran en el mercado y que ofrecen bienes y/o servicios que satisfacen la misma necesidad en la que está enfocada la empresa”. Por ejemplo, si usted tiene un hotel, su competencia está constituida por todos los hoteles que están ubicados en una zona geográfica cercana a la suya, o como aquellos establecimientos que ofrecen otro tipo de alojamiento, tales como: #[i camping, glamping] y hosterías entre otros. 
        p(data-aos="fade-down") Para comprender mejor la dinámica de la competencia, es preciso entenderla desde dos perspectivas, la económica y la de mercadeo, en la siguiente figura se evidencia esta clasificación:         
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg', alt='')

    .row.justify-content-center.align-items-start.mb-5           
      .col-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-left") 
          h5 Figura 5
          br
          span.fst-italic Variables de segmentación       
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img38.svg', alt='')             

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4 Perspectiva económica y de mercado
                  p.mb-0 Para ampliar la información, lo invitamos a ver el documento anexo 7. Perspectiva económica y de mercado, donde se describe en qué consiste la competencia perfecta e imperfecta, que es un oligopolio, un monopolio y un monopsonio, adicionalmente se muestran algunos aspectos a considerar desde el concepto de perspectiva del mercado.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_7_Perspectiva_economica_y_de_Mercado.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
       

    .cajon.color-acento-botones.p-4.mb-3(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, la actividad didáctica, material complementario, entre otros. 

</template>

<script>
export default {
  name: 'Tema7',
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
