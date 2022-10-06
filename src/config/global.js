export default {
  global: {
    componenteFormativo: 'Caracterización del entorno turístico',
    descripcionCurso:
      'Antes de comenzar a implementar cualquier estrategia comercial, se debe diagnosticar cómo se comporta el mercado, es decir, cuál es el desempeño de la actividad económica en la cual se encuentra inmersa la organización. En este sentido, caracterizar el entorno turístico se entiende como la búsqueda de información y análisis de variables que impactan el desempeño de una empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fuentes de información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protección de datos en Colombia',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis situacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Macroentorno',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Microentorno',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Economía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plaza',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Promoción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Segmentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Competencia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Protección de datos en Colombia',
      referencia:
        'Superintendencia de Industria y Comercio. (2021) <i>Protección de Datos Personales</i>. ',
      tipo: 'Artículo',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
    {
      tema: '3. Economía',
      referencia:
        'Haro, E., Jurado, R., Pérez, L., Revelo, R., Rodríguez, P. y Mata, A. (2017). <i>Fundamentos de Economía</i>. Colección Empresarial.',
      tipo: 'Libro',
      link: 'Libro',
    },
    {
      tema: '4. Plaza <br> 5. Promoción',
      referencia:
        'Federación Nacional de Comerciantes y Servicio Nacional de Aprendizaje. (1995).  <i>Nociones y estrategias empresariales de mercadeo</i>. ',
      tipo: 'Folleto',
      link: 'https://hdl.handle.net/11404/4515',
    },
    {
      tema: 'Segmentación',
      referencia:
        'Armstrong, G. y Kotler, P. (2013). Fundamentos de marketing. Pearson Educación. Decimoprimera edición.',
      tipo: 'Libro',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis situacional',
      significado:
        'un proceso o secuencia de pasos lógicos que permiten definir, aclarar, priorizar y planear la resolución de las situaciones, tanto en el ámbito laboral como en el personal.',
    },
    {
      termino: 'Competencia',
      significado:
        'son las empresas que ofrecen bienes y servicios que satisfacen la misma necesidad que está atendiendo la empresa.',
    },
    {
      termino: 'Economía',
      significado:
        'es la ciencia encargada de velar por la mejor distribución de los recursos escasos.',
    },
    {
      termino: 'Empresa',
      significado: 'estructura económica sobre la cual funciona la economía.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'son las formas o herramientas como obtiene la información de interés una empresa, con la finalidad de que esta pueda ser consultada y accesible para los diferentes usuarios.',
    },
    {
      termino: 'Información',
      significado:
        'es un conjunto de datos con sentido. La información es la fuente para la generación de conocimiento.',
    },
    {
      termino: 'Plaza',
      significado:
        'es la variable responsable de hacer que el bien o servicio llegue a las manos del cliente, es la que hace que los empresarios estén con sus productos más cerca de sus clientes.',
    },
    {
      termino: 'Promoción',
      significado:
        'es la forma como la empresa plantea sus estrategias para comunicar su marca y productos a los clientes.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'es el derecho que tiene un ciudadano a que a sus datos se les dé un buen uso.',
    },
    {
      termino: 'Segmentación',
      significado:
        'es la división de los clientes de la empresa en grupos con características similares entre sí (heterogéneos) pero diferentes de los demás (homogéneos) entre ellos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Hanel, J. (2004). <i>Análisis Situacional</i>. Universidad Autónoma Metropolitana. Recuperado 11-08-2022 de:',
      link: 'https://core.ac.uk/download/pdf/48390913.pdf.',
    },
    {
      referencia:
        'Krugman, P., Wells, R., y Graddy, K. Fundamentos de Economía. Recuperado 13-08-2022 de:',
      link:
        'https://cbceconomia.files.wordpress.com/2017/09/krugman-2013-fundamentos-de-economc3ada.pdf',
    },
    {
      referencia:
        'Ley 1581 de 2012. Ley de Protección de Datos. Congreso de la República de Colombia. 17 de octubre de 2012. Recuperado 07-08-2022 de:',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      referencia:
        'Ley 2157 de 2021. Modifica y adiciona elementos a la Ley 1266 de 2008 y se dictan disposiciones adicionales asociadas al Habeas Data. Congreso de la República de Colombia. 29 de octubre de 2021. Recuperado 07-08-2022 de:',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%202157%20DEL%2029%20DE%20OCTUBRE%20DE%202021.pdf',
    },
    {
      referencia: 'Parkin, M. (2014). <i>Economía</i>. Editorial Pearson.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
