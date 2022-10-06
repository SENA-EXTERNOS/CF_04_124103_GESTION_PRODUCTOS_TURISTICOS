<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Plaza
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="flip-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p Observe a continuación elementos esenciales sobre los canales de distribución o también conocido como plaza. 
        .col-lg-2.mb-4.mb-lg-0
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='') 

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-right") 
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6
            p La plaza llamada también en algunos libros distribución, es la variable responsable de hacer que el bien o servicio llegue a las manos del cliente, es decir, hace posible que los empresarios (o productores como se diría en economía), estén más cerca de sus clientes.                        
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/img20.png', alt='')  
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6
            p Como consecuencia del concepto de plaza, surgen los canales de distribución como aquellos medios que utilizan las empresas para gestionar el proceso de entrega del bien o servicio.                      
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/img21.png', alt='')  
        .row.justify-content-center.align-items-center(titulo="")
          .col-lg-6
            p En este sentido, los canales son importantes porque es la mejor forma que tiene la empresa para ampliar su mercado y poder llegar así a más clientes. Los canales de distribución son de dos tipos: directo e indirecto.                        
          .col-lg-4 
            img.img-a.img-t(src='@/assets/curso/temas/img22.png', alt='')

    p(data-aos="fade-down").mb-5 Para ampliar la información, lo invitamos a ver el documento anexo 5. Plaza en el cual se describe particularmente los canales y estrategias de distribución

    .row.justify-content-start.align-items-center         
      .col-lg-4(data-aos="zoom-in")
        a.anexo(:href="obtenerLink('/downloads/Anexo_5_Plaza.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Anexo 5.] Plaza      
</template>

<script>
export default {
  name: 'Tema4',
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
