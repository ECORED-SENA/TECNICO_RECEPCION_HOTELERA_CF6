export default {
  global: {
    componenteFormativo: 'Principios normativos',
    descripcionCurso:
      'Este material integra el marco normativo y las regulaciones establecidas para el proceso de registro hotelero en establecimientos de alojamiento y hospedaje en Colombia, soportado en la normatividad vigente.<br/><br/>Le invitamos a que consulte y se apropie de dicha normatividad en Colombia, para el registro hotelero, obligaciones y derechos del huésped y la documentación requerida para nacionales y extranjeros.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Registro hotelero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Jurisprudencia',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Obligaciones y derechos de las partes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Obligaciones y derechos del prestador de servicios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Obligaciones y derechos del huésped',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificación de turistas nacionales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Documentos de identificación extranjeros',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Amparo Virginia Moreno antero',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios y Gestión Empresarial',
      },
      {
        nombre: 'Harbey Enrique Castelblanco',
        cargo: 'Experto temático',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Colombia Ágil. (s. f.). Tarjeta de registro hotelero.',
      link:
        'http://www.colombiaagil.gov.co/tramites/intervenciones/tarjeta-de-registro-hotelero',
    },
    {
      referencia:
        'Decreto 1074 de 2015. [Ministerio de Comercio, Industria y Turismo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'Decreto 1964 de 2016. [Ministerio de comercio, industria y turismo]. Por el cual se modifican los artículos 2.2.4.4.12.4. 2.2.4.7.2. del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Diciembre 6 de 2016. ',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=30030222',
    },
    {
      referencia:
        'Decreto 2119 de 2018. [Departamento Administrativo de la Función Pública]. Por medio del cual se reglamenta la prestación del servicio de alojamiento turístico y se modifican la Sección 12 del Capítulo 4 del Título 4 de la Parte 2 del Libro 2 y el parágrafo del artículo 2.2.4.7.2. del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Noviembre 15 de 2018.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=89402',
    },
    {
      referencia:
        'Ley 679 de 2001. Por medio de la cual se expide un estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores, en desarrollo del artículo 44 de la Constitución. Agosto 4 de 2001. DO. Nº 44.509.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_0679_2001.htm',
    },
    {
      referencia:
        'Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. Julio 10 de 2012. DO. Nº 48.487.',
      link:
        'https://www.redjurista.com/Documents/ley_1558_de_2012_congreso_de_la_republica.aspx#/',
    },
    {
      referencia:
        'Registraduría Nacional del Estado Civil. (s. f.). Cédula de Ciudadanía.',
      link: 'https://www.registraduria.gov.co/-Cedula-de-Ciudadania,3689-.html',
    },
    {
      referencia:
        'Registraduría Nacional del Estado Civil. (s. f.). Tarjeta de Identidad.',
      link: 'https://www.registraduria.gov.co/-Tarjeta-de-Identidad,3688-.html',
    },
    {
      referencia:
        'Registraduría Nacional del Estado Civil. (s. f.). Registro Civil.',
      link: 'https://www.registraduria.gov.co/-Registro-Civil,3686-.html',
    },
  ],
  glosario: [
    {
      termino: 'Check-in',
      significado:
        'En hotelería, expresión inglesa para registro de entrada de huéspedes, mediante el proceso de inscripción que se realiza en la recepción a la llegada del cliente, en el que se registran sus datos personales y se le asigna un número de habitación.',
    },
    {
      termino: 'Check-out',
      significado:
        'En hotelería, expresión inglesa para registro de salida de huéspedes, mediante proceso de liquidación de gastos que se realiza en la recepción de un establecimiento de alojamiento cuando el cliente deja su habitación.',
    },
    {
      termino: 'Colombia Co.',
      significado:
        'La Marca País es un esfuerzo conjunto entre el gobierno nacional y el sector privado para potenciar y comunicar las cualidades que tiene Colombia. También se encarga de promover el turismo nacional y de celebrar, con nuestros compatriotas y con el mundo entero, todos los hechos que enaltecen al país.',
    },
    {
      termino: 'Establecimiento de alojamiento',
      significado:
        'Establecimiento abierto al público en general, dedicado de manera habitual a proporcionar hospedaje temporal mediante precio, con o sin otros servicios complementarios.',
    },
    {
      termino: 'Extranjero',
      significado:
        'Persona que no es nacional de un Estado determinado, el término abarcaría el apátrida, el asilado, el refugiado y el trabajador migrante.',
    },
    {
      termino: 'Huésped',
      significado: 'Persona que se aloja en un establecimiento de alojamiento.',
    },
    {
      termino: 'Migración',
      significado:
        'Movimiento de población hacia el territorio de otro estado o dentro del mismo que abarca todo movimiento de personas sea cual fuere su tamaño, su composición o sus causas; incluye migración de refugiados, personas desplazadas, personas desarraigadas, migrantes económicos.',
    },
    {
      termino: 'MINCIT',
      significado: 'Ministerio de Comercio, Industria y Turismo de Colombia.',
    },
    {
      termino: 'Prestador de servicios turísticos',
      significado:
        'Es toda persona natural o jurídica que habitualmente proporcione, intermedie o contrate directa o indirectamente con el turista la prestación de servicios turísticos y que se encuentre inscrito en el Registro Nacional de Turismo.',
    },
    {
      termino: 'PROCOLOMBIA',
      significado:
        'Es la entidad encargada de promover el turismo, la inversión extranjera en Colombia, las exportaciones no minero energéticas y la imagen del país.',
    },
    {
      termino: 'Tarjeta de registro hotelero',
      significado:
        'En hotelería, documento donde se recogen los datos del cliente previo a su registro en el establecimiento de alojamiento.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones.Julio 10 de 2012. DO.Nº 48.487.',
      tipo: 'Documento',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/leyes/ley-1558-de-2012-4.aspx',
    },
    {
      texto:
        'Decreto 1074 de 2015. [Ministerio de Comercio, Industria y Turismo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Mayo 26 de 2015.',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=76608',
    },
    {
      texto:
        'Decreto 1964 del 06 de diciembre de 2016. [Ministerio de Comercio, Industria y Turismo]. Por el cual se modifican los artículos 2.2.4.4.12.4. 2.2.4.7.2. del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.Diciembre 6 de 2016.',
      tipo: 'Documento',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%201964%20DEL%2006%20DE%20DICIEMBRE%20DE%202016.pdf',
    },
    {
      texto:
        'Decreto 2119 de 2018. [Departamento Administrativo de la Función Pública]. "Por medio del cual se reglamenta la prestación del servicio de alojamiento turístico y se modifican la Sección 12 del Capítulo 4 del Título 4 de la Parte 2 del Libro 2 y el parágrafo del artículo 2.2.4.7.2.del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.Noviembre 15 de 2018. ',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=89402',
    },
    {
      texto:
        'Ley 679 de 2001. Por medio de la cual se expide un estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores, en desarrollo del artículo 44 de la Constitución.Agosto 4 de 2001. DO.N° 44.509',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=18309',
    },
  ],
}

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

