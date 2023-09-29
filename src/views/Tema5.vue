<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Promoción
    .row.justify-content-center.align-items-center      
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La promoción llamada actualmente desde la perspectiva de mercadeo y comunicación hace alusión a la forma como la empresa plantea sus estrategias para comunicar su marca y productos a los clientes. 
        p(data-aos="fade-down").mb-0 La promoción suele ser una variable bastante densa, dado que dentro de ella tiene sus propios componentes, denominados en conjunto “mezcla de comunicación”, la cual tiene básicamente los siguientes elementos: publicidad, relaciones públicas y propaganda.                
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='')

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.my-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img.pad(src="@/assets/curso/temas/img24.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Publicidad
            p Es quizá lo más utilizado por las empresas dentro de la promoción, ya que, según la estrategia, puede dar alcance a tres objetivos: 
            p #[b 1.] Informar (dar a conocer algo) 
            p  #[b 2.] Persuadir (disuadir para que se realice una acción) 
            p.mb-0 #[b 3.]  Recordar (mantener en la mente de los clientes una marca o un producto).

      .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.my-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img.pad(src="@/assets/curso/temas/img25.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Relaciones Públicas
            p.mb-0 Conocidas por sus siglas como RRPP, son todas aquellas acciones encaminadas en entablar buenas relaciones con los diversos grupos de interés de la empresa (el Estado, accionistas, periodistas, proveedores, distribuidores, entre otros), con el fin principal de crear buena imagen.

      .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0.my-5
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img.pad(src="@/assets/curso/temas/img26.svg", alt="alt")
          .crd_hover_txt--body.text-center
            h4.mb-3 Propaganda
            p.mb-0 Es similar a la publicidad, porque consiste en la forma impersonal de estimular la demanda o de influir en la opinión o actitud de un grupo hacia la empresa, a través de una comunicación en medios masivos, la gran diferencia es que usualmente no es pagada por la empresa u organización que se beneficia con ella.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4 Promoción
                  p.mb-0 Para ampliar la información, lo invitamos a ver el documento anexo 6.  Promoción, en este documento se detallan las características y aspectos relacionados con la publicidad, las relaciones públicas y la propaganda.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_6_Promocion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   
 
</template>

<script>
export default {
  name: 'Tema5',
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
