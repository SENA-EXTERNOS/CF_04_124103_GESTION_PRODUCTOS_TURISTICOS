<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img1.svg', alt='')          
      .col-lg-8.my-3
        p(data-aos="fade-down") Estimado aprendiz, bienvenido a este recurso educativo, el cual describe los elementos requeridos para la caracterización del entorno turístico, teniendo en cuenta la información a recolectar en las diversas fuentes y la protección de datos. Con la revisión de estas temáticas, aprenderá a distinguir las particularidades que se requieren para realizar un análisis situacional, considerando la incidencia que marcan aspectos como la economía, la plaza y sus características, la promoción, la segmentación y la competencia. 

        h5(data-aos="fade-down") En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WRSI5QusNFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)           
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
