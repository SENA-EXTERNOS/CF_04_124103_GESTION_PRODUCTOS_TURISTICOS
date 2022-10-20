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
        p(data-aos="fade-down") Antes de entrar en detalle sobre la competencia, es importante clarificar el concepto, la competencia son las empresas que ofrecen bienes y servicios que satisfacen la misma necesidad que está atendiendo la empresa. Por ejemplo, si usted tiene un hotel, su competencia está constituida por todos los hoteles que están ubicados en una zona geográfica cercana a la suya como aquellas empresas que ofrecen otro tipo de alojamiento, tales como: #[i camping, glamping] y hosterías entre otros. 
        p(data-aos="fade-down") Para comprender mejor la dinámica de la competencia, es preciso entenderla desde dos perspectivas, la económica y la de mercadeo, en la siguiente figura se evidencia esta clasificación:         
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img37.svg', alt='')

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img38.svg', alt='')             
      .col-lg-5
        p(data-aos="fade-down") Para ampliar la información, lo invitamos a ver el documento. Anexo 7. Perspectiva Económica y de Mercado, en dicho documento se describe en qué consiste la competencia perfecta e imperfecta, qué es un oligopolio, un monopolio y un monopsonio, adicionalmente se muestran algunos aspectos a considerar desde el concepto de perspectiva del mercado.
        a.anexo(data-aos="zoom-in")(:href="obtenerLink('/downloads/Anexo_7_Perspectiva_economica_y_de_Mercado.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo 7.] Perspectiva Económica y de Mercado          

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
