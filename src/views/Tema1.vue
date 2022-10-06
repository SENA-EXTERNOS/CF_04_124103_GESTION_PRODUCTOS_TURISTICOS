<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Información
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En el contexto empresarial la información hoy en día es un tema de alto interés, ya que las decisiones se toman con base en ella. Sin embargo, no es posible mencionar este concepto sin antes conocer un poco sobre los datos que son aquellos que posibilitan la existencia de la información.
        p(data-aos="fade-down").mb-0 Los datos son números, cifras incluso palabras que están almacenados en algún repositorio. En términos técnicos, es la representación de una variable cuantitativa (números) o cualitativa (cualidades o características); teniendo presente lo referenciado, se puede afirmar que la información es un conjunto de datos con contexto o significado. A modo de ejemplo, se tiene los siguientes casos:
      .col-lg-7
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img2.png', alt='') 

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-10.bg3.p-3(data-aos="flip-down")    
        .row.justify-content-center.align-items-stretch          
          .col-lg-4
            h5(data-aos="fade-down").mb-0.p-2.bg1.text-center Dato           
            p(data-aos="fade-down").mb-0.p-2.bg1-sup.text-center $200.000
            p(data-aos="fade-down").mb-0.p-2.bg1-sup.text-center 16             
            p(data-aos="fade-down").mb-0.p-2.bg1-sup.text-center 12             
            p(data-aos="fade-down").mb-0.p-2.bg1-sup.bg1-rad.text-center Ventas             
          .col-lg-8
            h5(data-aos="fade-down").mb-0.p-2.bg2.text-center Información           
            p(data-aos="fade-down").mb-0.p-2.bg2-sup El precio de un paquete turístico es de $200.000
            p(data-aos="fade-down").mb-0.p-2.bg2-sup El día de hoy se vendieron 16 tiquetes de aviones.
            p(data-aos="fade-down").mb-0.p-2.bg2-sup En el mes se vendieron 12 excursiones.
            p(data-aos="fade-down").mb-0.p-2.bg2-sup.bg1-rad María Valentina es la asesora de viajes que más ventas realiza.
        p(data-aos="fade-down").text-end.mt-3.mb-0 Ejemplos con la relación entre dato e información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bgcap.p-3(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 #[b Nota.] La tabla anterior ejemplifica a partir de cuatro datos de entrada cómo estos se convierten en información al darles un contexto.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        p(data-aos="fade-down") En la tabla anterior, se evidencia la relación entre ambos conceptos. Por una parte, se cuentan con cuatro datos, tres de ellos cuantitativos ($200.000, 16 y 12) y uno de ellos cualitativo (Ventas), en este sentido el usuario de la información solo tiene esa visual sin mayor contexto, sin embargo, por otra parte, cuando se tomaron estos datos y se les dio un alcance o se asociaron a una situación específica se identifica la importancia de cada dato y se pasa ahora a mencionar información. 
        p(data-aos="fade-down") En el contexto del Turismo la información es vital, dado que es lo que motiva la interacción y el interés entre el emisor (quien emite el mensaje comunicacional, generalmente, es el vendedor) y el receptor (quien recibe la información, usualmente el cliente).             
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img3.svg', alt='')      
      .col-lg-4.cajon.color-acento-contenido.p-4(data-aos="flip-down")
        p(data-aos="fade-down").mb-0 La información como tal, debe contar con unas características mínimas que se deben garantizar: debe tener una finalidad (enterar, validar, preguntar o responder); a nivel empresarial debe propiciar la generación de conocimiento para la toma de decisiones; debe ser confiable, es decir, debe provenir de una fuente que garantice la fidelidad de lo que se está informando; debe ser precisa, lo que significa que se deben entregar los detalles necesarios para comprender el contenido; debe estar disponible (por supuesto, bajo los criterios de seguridad definidos por la organización), con el fin de permitir su uso por parte de las personas interesadas. 

    .list.mb-3(data-aos="fade-down")
      .list__item
        .list__item__icon
          img(src='@/assets/curso/temas/v.svg', alt='')
      .list__txt
        p.mb-0.tv #[b Tipos de información]

    p(data-aos="fade-down").mb-5 Existen diferentes tipos de información, los cuales se pueden clasificar desde diferentes perspectivas, según su: fuente, el objeto comunicacional, criterios de programación en sistemas, entre otros; sin embargo, la clasificación más referenciada a nivel empresarial es la asociada con la relación que existe entre quien la produce/ pública (emisor) y los potenciales usuarios requirentes (receptores), esta clasificación se muestra en la siguiente figura:
    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        .avatar
          figure
            img.img-w(src="@/assets/curso/temas/img4.svg", alt="alt").img50
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/img5.svg", alt="alt").img100
            .col
              h5 Información confidencial
              p Corresponde a aquella información que dado su nivel de seguridad, peligrosidad o exclusividad solo puede ser consultada por ciertas personas con accesos específicos al repositorio donde se encuentra alojada.
        .crd.crd--avatarHorizontal.crd--med.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/img6.svg", alt="alt").img100
            .col
              h5 Información pública
              p Es la información que está publicada para que sea consultada y utilizada por quien considere le puede ser de utilidad.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/img7.svg", alt="alt").img100
            .col
              h5 Información personal
              p Es la información que está asociada y es de propiedad de cada individuo. En este sentido, es responsabilidad de la persona decidir con quién se compartirá y definir con qué fines se podrá utilizar.
        .crd.crd--avatarHorizontal.crd--med.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/img8.svg", alt="alt").img100
            .col
              h5 Información externa
              p Es un tipo de información que ha sido creada para ser divulgada y consultada por personas/ entes por fuera de la organización/ entidad que la produjo, no obstante, quién construye la información define cuál será su uso.
        .crd.crd--avatarHorizontal.crd--last1.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/img9.svg", alt="alt").img100
            .col
              h5 Información interna
              p Es aquella que es utilizada por un grupo específico de personas, usualmente pertenecientes a una misma empresa. Se caracteriza porque suele ser de interés solo por parte de un determinado conjunto de personas.

    .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 La inadecuada aplicación de los tipos de información, puede llevar a las empresas a la desinformación (a nivel digital conocida como las famosas “fake news” –noticias falsas-), esto se convierte hoy en día en un riesgo latente para las organizaciones quienes son generadoras y consumidoras constantes de información, esto ha llevado a muchas empresas a implementar políticas, buenas prácticas de sistemas de gestión e incluso procesos de gestión documental, con el fin de propender para que la información que se origina en la empresa sea producida, usada y custodiada (guardada) bajo parámetros de calidad y confiabilidad. 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1  Fuentes de información 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img10.png', alt='')            
      .col-lg-5
        p(data-aos="fade-down") Dado que la legislación es propia de cada país, ya que cada nación establece su marco de actuación legal para el tema; el manejo de los datos en Colombia se regula mediante el Derecho de Habeas Data, el cual posibilita a las personas que puedan actualizar, autorizar, conocer, y rectificar toda la información que tengan las distintas entidades y bases de datos del territorio nacional. Nació como parte importante de los artículos 15 y 20 de la Constitución Política y posteriormente, fue desarrollado a través de leyes y decretos complementarios.
        p(data-aos="fade-down") Para ampliar la información, lo invitamos a ver el documento anexo 1. Fuentes de información 
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_1_Fuentes_de_informacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo 1.] Fuentes de información 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2  Protección de datos en Colombia 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-5
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Las fuentes de información hacen referencia a la forma como se obtiene la información de interés de una empresa, con la finalidad de que la información pueda ser consultada y accesible para los diferentes usuarios.
        p(data-aos="fade-down") Técnicamente, se dice que las fuentes de información existen por la necesidad que existe de satisfacer la “demanda de información”. Tradicionalmente, las fuentes de información se han dividido en: primarias, secundarias y terciarias.
        p(data-aos="fade-down").mb-4 Para ampliar la información, lo invitamos a ver el documento Ver anexo 2.  Protección de datos en Colombia 
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_2_Proteccion_de_datos_en_Colombia.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo 2.] Protección de datos en Colombia          
      .col-lg-7
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img11.svg', alt='')      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
