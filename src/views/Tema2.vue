<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Análisis situacional
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img2.svg', alt='') 
      .col-lg-6
        .bloque-texto-b.color-secundario.p-4(data-aos="flip-down")
          p(data-aos="fade-down").px-5.up Hanel, J. (2004), define el análisis situacional como:
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 un proceso o secuencia de pasos lógicos que permiten definir, aclarar, priorizar y planear la resolución de las situaciones, tanto en el ámbito laboral como en el personal.
            i.fas.fa-quote-right

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down") Tomando este concepto como referente y ahora llevándolo al entorno empresarial, el análisis situacional o diagnóstico del entorno, es el estudio que realizan las empresas para conocer cómo se encuentran en el momento, no solo desde la perspectiva interna, sino también comprendiendo la dinámica de la actividad económica en la que se encuentra inmersa la operación de la organización; para hacer posible, se debe realizar como mínimo un análisis externo (por fuera de la empresa) el cual es conocido como Macroentorno y otro interno (por dentro de la organización) conocido como Microentorno. 

        p(data-aos="fade-down") La importancia de realizar al menos una vez al año, un análisis situacional, radica en:

        p(data-aos="fade-down").ps-2 • Constituye un muy buen ejercicio de planeación, dado que permite accionar tácticos puntuales derivados de los hallazgos que se presenten.
        p(data-aos="fade-down").ps-2 • Posibilita anticiparse a diferentes hechos y sortear las circunstancias que se presenten de una mejor manera.
        p(data-aos="fade-down").ps-2 • Es una herramienta de monitoreo que permite testear cómo está la empresa de preparada ante eventualidades del entorno.
        p(data-aos="fade-down").ps-2 • Visibiliza oportunidades que quizá no han sido detectadas previamente.
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img12.svg', alt='')

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Macroentorno 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img13.svg', alt='')                          
      .col-lg-9.my-3 
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El Macroentorno corresponde a la identificación de los elementos que se encuentran por fuera de la empresa, pero que de alguna manera la impactan ya sea de forma positiva o negativa.   

        p(data-aos="fade-down") Inicialmente, el macroentorno se denominó PEST, haciendo alusión a las variables que se deben caracterizar: Político (P), Económico (E), Socio- cultural (S) y Tecnológico (T), sin embargo, por la incidencia de otros factores de gran incidencia en el día a día de las organizaciones se incorporaron dos variables adicionales migrando de PEST a PESTEL, e involucrando las variables Ecológica (E) y Legal (L) respectivamente. 

        p(data-aos="fade-down") Para ampliar la información, lo invitamos a ver el documento Ver anexo 3. Macroentorno
        .row.justify-content-start.align-items-center          
          .col-lg-4(data-aos="zoom-in")
            a.anexo(:href="obtenerLink('/downloads/Anexo_3_Macroentorno.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 #[b Anexo 3.] Macroentorno 
       
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Microentorno 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 El Microentorno es aquel componente del análisis situacional que diagnostica el funcionamiento de la empresa a nivel interno, revisando en detalle, cómo está el desempeño de los diferentes procesos/ áreas que componen la empresa.      
        p(data-aos="fade-down") Por ahora, se abordará la organización empresarial, como el componente fundamental para la división del trabajo en una empresa, ya que, si bien cada área o proceso aporta de alguna manera al logro de los objetivos organizacionales, es realmente aunando esfuerzos que se logran grandes resultados; de acuerdo con esto, según la orientación de los propietarios o de sus Juntas Directivas, las empresas pueden tener alguna las estructuras que se referencian en la siguiente figura. 
   
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img14.png', alt='')
    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/img15.svg', alt='Tipos de Estructura en las empresas')


      .tarjeta.color-acento-botones.p-3(x="12%" y="78%" numero="1")
        .h5.mb-2 Estructura horizontal 
        p Se caracterizan porque existen pocos jefes y se privilegia la interacción entre áreas y procesos. 
      .tarjeta.color-acento-botones.p-3(x="37.5%" y="78%" numero="2")
        .h5.mb-2 Estructura vertical 
        p Esta es la orientación tradicional de las empresas, donde la línea de mando va de arriba hacia abajo.    
      .tarjeta.color-acento-botones.p-3(x="62.5%" y="78%" numero="3")
        .h5.mb-2 Estructura circular 
        p En la mitad de la estructura está la máxima autoridad de la empresa y alrededor de él se forman círculos con otros roles de jerarquía.  
      .tarjeta.color-acento-botones.p-3(x="87.5%" y="78%" numero="4")
        .h5.mb-2 Estructura mixta 
        p Representa una combinación de la estructura vertical a nivel de mando y dentro de cada proceso / área hay una estructura.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-acento-botones.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Una vez, identificado el tipo de estructura con el que funciona la empresa, se sugiere realizar dos ejercicios: primero, explorar a partir de fuentes secundarias que tipo de estructuras se tienen en las empresas que se encuentran en la misma actividad económica de la empresa, con eso se puede determinar a nivel general cuál es la forma en la cual están operando y tomando las decisiones; lo segundo, es realizar un diagnóstico de cómo se encuentran las principales áreas funcionales que la componen.              


    p(data-aos="fade-down").mb-5 A continuación, en el video se describen los aspectos que caracterizan las áreas funcionales de una empresa. Lo invitamos a verlo. 

    .list.mb-3(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        p.mb-0.tv #[b Áreas funcionales de la empresa]

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down") Para realizar el diagnóstico del microentorno, se requiere aplicar un instrumento que permita evaluar cada área, con el fin de obtener una “radiografía” de cuáles son los aspectos que resaltan de cada una y aquellos donde se hace necesario incorporar acciones correctivas y/o de mejora. De acuerdo con lo anterior, el SENA ha desarrollado una herramienta que a través de la aplicación de una batería se puede tener un diagnóstico del estado de las áreas funcionales, lo invitamos a consultar el Apéndice donde se aplica la batería (recuerde al abrirlo habilitar las macros).  

    p(data-aos="fade-down").mb-5 Apéndice. Batería para evaluación del Microentorno

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-4(data-aos="zoom-in")
        a.anexo(:href="obtenerLink('/downloads/Herramienta_diagnostica_del_microentorno_2022.xlsm')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p.mb-0 #[b Anexo 3.] Herramienta diagnostica del microentorno 

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="flip-down") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='') 
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p En resumen, el Macroentorno a partir de las variables del PESTEL (Política, Económica, Socio- cultural, Tecnológica, Ecológica y Ambiental) tiene por fin conocer qué está pasando a nivel externo de la empresa, para con base en ello plantear como la organización debe reaccionar ante estos fenómenos, mientras que por su lado, el Microentorno consiste en conocer cuál es el tipo de estructura con la cual trabaja la empresa y a partir de esto, realizar una evaluación (ojalá realizada por un tercero para ser imparciales) de las áreas funcionales para encontrar buenas prácticas y escenarios de mejora.             
                                   
</template>

<script>
export default {
  name: 'Tema2',
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
