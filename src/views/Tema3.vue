<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Identificación
    .row.mb-5
      .col-lg-8
        p.mb-5  El proceso de identificación, es decir el correspondiente a la verificación de documentación, es uno de los más delicados e importantes, al momento de hacer un registro de un pasajero nacional o extranjero. Un hecho que parece tan cotidiano, como presentar y revisar un documento, es el paso que protege al establecimiento hotelero de ser copartícipe en crímenes como trata de blancas, explotación sexual en menores, tráfico de especies prohibidas, fraude y otros más.
      .col-lg-4
        figure
          img(src='@/assets/curso/t3-i1.jpg', alt='Un pasaporte azul de los Estados Unidos de América')
    
    br
    br
    #t_3_1.titulo-segundo
      .h2 3.1  Identificación de turistas nacionales
    p.mb-5  Los documentos de identificación requeridos para los viajeros, visitantes, turistas colombianos, conforme a la normatividad vigente, son solicitados por los establecimientos de alojamiento y hospedaje, de acuerdo con la edad:
    //-- acordeon
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris custon-accordion")
      .row.justify-content-center(titulo="Cédula de ciudadanía")
        .col-lg-2.mb-5
          figure
            img.h85(src='@/assets/curso/t3-i2.svg', alt='icono decorativo')
            //-- figcaption Leyenda de la imagen
        .col-lg-8
          p.mb-3  Las personas nacionales mayores de 18 años deben presentar cédula de ciudadanía. En Colombia, hay dos formatos válidos de cédula. El primero y más reciente es la cédula de seguridad, personalizada y en policarbonato, y cédula de ciudadanía digital, la cual puede ser portada por el titular del documento en su smartphone, para lo cual se debe descargar la aplicación Cedula Digital Colombia, que se encuentra disponible en las tiendas Appstore y Google Play Store. Será funcional en dispositivos iOS 10.0 y Android 6.0, en adelante. Inició su expedición desde diciembre de 2020.
          p.mb-3  También es válido el formato de cédula de ciudadanía amarilla y con hologramas, que se expide desde mayo de 2000, basado en tecnología AFIS (Automated Fingerprint Identification System), que permite la verificación automática de la identidad de las personas con la comparación de las huellas dactilares. Este sistema impide que se le otorguen dos cédulas con identidades diferentes a una misma persona. 
          p.mb-3  Este documento de identidad posee características físicas y tecnológicas que reducen al máximo las posibilidades de falsificación, entre ellas, holograma laminado, fondo de seguridad antifotográfico, hecho con tintas metálicas, microtexto y código de barras que contiene un algoritmo de seguridad, la información biográfica del ciudadano y la información biométrica de la huella dactilar. (Registraduría Nacional del Estado Civil, 2021)

      div(titulo="Tarjeta de Identidad")
        .row
          .col-lg-2.mb-5
            figure
              img.h85(src='@/assets/curso/t3-i3.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3  Las personas nacionales menores de edad, niños a partir de los 7 años y hasta los 18 años no cumplidos, deben presentar la tarjeta de identidad original.
            p.mb-3  Actualmente existe un formato de tarjeta de identidad vigente: formato azul, con las mismas especificaciones técnicas y condiciones de seguridad que la cédula de ciudadanía amarilla con hologramas.
            p.mb-3  El formato biométrico de tarjeta de identidad trae en su anverso un código de barras bidimensional con la información biométrica del titular, lo cual imposibilita la falsificación del documento. Incluye además fotografía a color, firma, huella dactilar, lugar y fecha de nacimiento y lugar y fecha de expedición, así como microtextos, impresión irisada y papel de seguridad que brinda mayores estándares de invulnerabilidad. (Registraduría Nacional del Estado Civil, 2021)
      
      div(titulo="Registro civil")
        .row
          .col-lg-2.mb-5
            figure
              img.h85(src='@/assets/curso/t3-i4.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3  Las personas nacionales menores infantes, entre los 0 y 2 años no cumplidos, y los niños entre los 2 y 7 años no cumplidos deben presentar copia autenticada del registro civil de nacimiento que indique el número de folio.
            p.mb-3  El registro civil es un instrumento que de manera detallada y fidedigna deja constancia de todos los hechos relativos a la identidad, filiación y estado civil de las personas, desde que nacen hasta que mueren. En este registro se inscriben los nacimientos, reconocimientos de hijos, adopciones, matrimonios, separaciones, divorcios, defunciones y declaraciones de presunción de muerte, entre muchos otros acontecimientos que afectan la vida civil de las personas. (Registraduría Nacional del Estado Civil, 2021)
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p
            span.text-bold NOTA: 
            | no se consideran válidos los documentos que no cumplan lo anteriormente enunciado.

    .separador
    #t_3_1.titulo-segundo
      .h2 3.2  Documentos de identificación extranjeros
    p.mb-5  De la misma forma que con los pasajeros nacionales, los pasajeros extranjeros están en la obligación de presentar su documentación a la hora de un registro. Los documentos válidos para identificación de extranjeros son:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t3-i5.svg", alt='Icono decorativo')
            .col
              .h5 Pasaporte
              p El documento oficial para aquellos visitantes de países extranjeros que estén de visita por turismo o negocios es el pasaporte. Este es expedido por cada país y tiene sus características de seguridad.

        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t3-i6.svg", alt='Icono decorativo')
            .col
              .h5 Cédula de extranjería
              p La cédula de extranjería vigente será el único documento válido de identidad para los agentes diplomáticos, consulares y funcionarios internacionales acreditados ante el Gobierno colombiano, sus familiares y personal de servicio. Así como para los extranjeros residentes en el territorio nacional.

        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t3-i7.svg", alt='Icono decorativo')
            .col
              .h5 Documento Nacional de Identificación (DNI) del país de origen
              p Este documento solo es aceptado para extranjeros de los países miembros de la Comunidad Andina de Naciones (Bolivia, Ecuador y Perú) y debe estar acompañado de la tarjeta andina migratoria. Solo es válido para estancias de turismo, es decir, estancias de máximo noventa (90) días, con aplazamiento una sola vez y por igual tiempo.

    p.mb-5  En el siguiente recurso se pueden observar los diferentes tipos de identificación mencionados.

    h3.titulo-tercero Tipos de identificación nacionales

    SlyderC.mb-5(:datos="datosSlyder") 

    h3.titulo-tercero Tipos de identificación de extranjeros

    SlyderC.mb-5(:datos="datosSlyder2") 

    h3.titulo-tercero Del proceso de verificación migratoria

    .tarjeta.bg-gradient-a.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t3-i19.svg", alt='')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h3.mb-1 Infografía del proceso de verificación migratoria
              p Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/proceso_de_verificación_migratoria.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .cajon.color-primario.p-4.mb-4
      .h5 Parágrafo transitorio
      p En desarrollo de lo dispuesto en el artículo 40 del decreto 834 de 2013 y siguientes, el registro y reporte a través del SIRE será obligatorio a partir del 1 de mayo de 2015, fecha desde la cual no se tendrán como válidas comunicaciones escritas que remitan a la autoridad migratoria para el reporte de extranjeros, salvo las excepciones que se establezcan en la presente resolución.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Cédula de ciudadanía policarbonato',
        imagen: require('@/assets/curso/t3-i8.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cédula de ciudadanía amarilla hologramas',
        imagen: require('@/assets/curso/t3-i9-0.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cédula de ciudadanía amarilla hologramas',
        imagen: require('@/assets/curso/t3-i9.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tarjeta de identidad',
        imagen: require('@/assets/curso/t3-i11.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tarjeta de identidad',
        imagen: require('@/assets/curso/t3-i12.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Registro civil de nacimiento',
        imagen: require('@/assets/curso/t3-13.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Pasaporte',
        imagen: require('@/assets/curso/t3-i14.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cédula de extranjería',
        imagen: require('@/assets/curso/t3-i15.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'DNI Comunidad Andina - Documento Nacional de Identidad (Perú)',
        imagen: require('@/assets/curso/t3-i16.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'DNI Comunidad Andina - Cédula de ciudadanía (Ecuador)',
        imagen: require('@/assets/curso/t3-i17.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'DNI Comunidad Andina - Cédula de identidad (Bolivia)',
        imagen: require('@/assets/curso/t3-i18.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.h80{height: 80px}
.h85{height: 85px}
.cajon.color-primario{background-color: #FFF4E4}
</style>
