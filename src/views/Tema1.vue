<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-down")
      .titulo-principal__numero
        span 1
      h1 Registro hotelero
    .row.mb-4
      .col-lg-7(data-aos="fade-left")
        p.mb-3  La tarjeta de registro hotelero es el documento que prueba la existencia del contrato de hospedaje, según lo establece el 
          span.text-bold artículo 81 
          | de la 
          span.text-bold Ley 300 de 1996 
          | (ver documento anexo). De acuerdo con la normatividad colombiana, los establecimientos de alojamiento y hospedaje, excluidos los establecimientos que prestan servicios de alojamiento por horas, deberán diligenciar, por cada huésped, la información solicitada en la Tarjeta de Registro Hotelero (Ministerio de Comercio, 2016).
        .row
          .col-lg-8
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1_Ley_300_de_1996.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p
                    span.text-bold Anexo. 
                    | Ley 300 de 1996. Ley General de Turismo <br> República de Colombia

        p-mb-5  Dicha tarjeta incluye, además de los datos del establecimiento, información y datos generales de quien toma el servicio. La información solicitada llega a incluir un formato con diferentes campos. En efecto, el documento implica llenar espacios para:
      
      .col-lg-5(data-aos="fade-right")
        figure.mb-5
          img(src="@/assets/curso/t1-i1.jpg", alt="Pareja realizando check-in en la recepción del hotel")
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario--borde.mb-5.p-3.py-5(data-aos="fade-up")
          .row.justify-content-center
            .col-lg-5
              ul.lista-ul--color.zebra(data-aos="slide-left")
                li 
                  i.fas.fa-check-circle
                  | Número o nombre de la habitación.
                li
                  i.fas.fa-check-circle
                  | Tipo de identificación.
                li 
                  i.fas.fa-check-circle
                  | Número de identificación.
                li 
                  i.fas.fa-check-circle
                  | Nombre (s), apellido, segundo apellido o de casada.
                li 
                  i.fas.fa-check-circle
                  | Fecha de nacimiento.
                li
                  i.fas.fa-check-circle
                  | Género.
                li 
                  i.fas.fa-check-circle
                  | Nacionalidad.
                li 
                  i.fas.fa-check-circle
                  | Principal motivo del viaje.
                li 
                  i.fas.fa-check-circle
                  | Categoría visa o permiso de ingreso.
                li
                  i.fas.fa-check-circle
                  | Número de visa.
                li 
                  i.fas.fa-check-circle
                  | Fecha expedición visa.
                li 
                  i.fas.fa-check-circle
                  | Vencimiento visa.
                li 
                  i.fas.fa-check-circle
                  | Profesión.
              
            .col-lg-5
              ul.lista-ul--color.zebra(data-aos="slide-right")
                li 
                  i.fas.fa-check-circle
                  | Ocupación u oficio.
                li
                  i.fas.fa-check-circle
                  | País de residencia.
                li 
                  i.fas.fa-check-circle
                  | Departamento/estado/provincia de residencia.
                li 
                  i.fas.fa-check-circle
                  | Ciudad de residencia.
                li 
                  i.fas.fa-check-circle
                  | País de procedencia.
                li
                  i.fas.fa-check-circle
                  | Departamento/estado/provincia de procedencia.
                li 
                  i.fas.fa-check-circle
                  | Ciudad de procedencia.
                li 
                  i.fas.fa-check-circle
                  | País de destino.
                li 
                  i.fas.fa-check-circle
                  | Departamento/estado/provincia de destino.
                li
                  i.fas.fa-check-circle
                  | Ciudad de destino.
                li 
                  i.fas.fa-check-circle
                  | Fecha de entrada (check-in).
                li 
                  i.fas.fa-check-circle
                  | Fecha de salida (check-out).
                li 
                  i.fas.fa-check-circle
                  | Número de acompañantes.
    p.mb-5(data-aos="slide-left")  Además, en la tarjeta también debe figurar el tipo de acomodación, la tarifa, el número total de noches, el medio de pago y el medio de reserva.
    br
    br
    #t_1_1.titulo-segundo
      h2 1.1 Jurisprudencia
    p.mb-5  Como se mencionó anteriormente, la tarjeta de registro hotelero es la prueba del contrato de hospedaje y está soportada jurídicamente en las siguientes leyes, decretos y resoluciones, emanados del Ministerio de Industria, Comercio y Turismo.
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Ley 1558 de 2012")
        .col-lg-2.mb-5
          figure
            img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
            //-- figcaption Leyenda de la imagen
        .col-lg-8
          p.mb-3 Por la cual se modifica la Ley 300 De 1996 - Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones". Ver documento anexo.
          .row
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2_1-1-1_Ley_1558_de_2012.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p
                    span.text-bold Anexo. 
                    | Ley 1558 de 2012.<br> República de Colombia
            .col-lg-4
        .col-12
          p.mb-3  
            span.text-bold.text-italic Artículo 32. 
            | Estadísticas. El Departamento Administrativo Nacional de Estadística, DANE, llevará el registro de las estadísticas relacionadas con el sector turístico y de manera mensual entregará la información correspondiente, según los diferentes renglones de la actividad que de común acuerdo se determine con el Ministerio de Comercio, Industria y Turismo.
          
          
          p.mb-3  
            span.text-bold.text-italic  Parágrafo. 
            | La información contenida en las tarjetas de registro hotelero será remitida al DANE con el fin de que elabore información estadística sobre visitas de nacionales y extranjeros, en los términos y condiciones que señale el reglamento que expida el Ministerio de Comercio, Industria y Turismo, quien deberá facilitar las condiciones técnicas para su cumplimiento. El manejo de esta información por parte del DANE se deberá realizar con la debida reserva, y, en consecuencia, la información contenida en las tarjetas de registro hotelero no podrá darse a conocer al público sino únicamente en resúmenes numéricos, que no hagan posible deducir de ellos información alguna de carácter individual que pudiera utilizarse para fines comerciales, de tributación fiscal, de investigación judicial o cualquier otra diferente al propiamente estadístico.
        
        

      div(titulo="Decreto 1074 de 2015")
        .row
          .col-lg-2.mb-5
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3 Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, estableció los requisitos de la Tarjeta de Registro Hotelero que deben diligenciar los propietarios o administradores de los edificios, conjuntos residenciales y demás inmuebles destinados, en todo o en parte, a la prestación permanente u ocasional de servicios de vivienda turística. Ver documento anexo.
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3_1-1-2_ Decreto1074_de_2015.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p
                      span.text-bold Anexo. 
                      | Decreto 1074 de 2015. <br> República de Colombia
              .col-lg-4
          .col-12
            p.mb-3  
              span.text-bold.text-italic Artículo 2.2.4.4.12.3 del Decreto 1074 de 2015, establece: <br>
              | “Tarjeta de Registro Hotelero. Para efectos estadísticos de las autoridades nacionales, el Ministerio de Comercio, Industria y Turismo gestionará el desarrollo de un software para el diligenciamiento de la Tarjeta de Registro Hotelero, cuya información será la que determinen de común acuerdo el Departamento Administrativo Nacional de Estadística - DANE y el Ministerio de Comercio, Industria y Turismo.
            p.mb-3  
              span.text-bold.text-italic  Parágrafo Transitorio:<br>
              | Hasta tanto el Ministerio de Comercio, Industria y Turismo realice los desarrollos tecnológicos necesarios para la implementación de la Tarjeta de Registro Hotelero, los prestadores del servicio de alojamiento turístico llevarán un registro de información, que cumpla con las disposiciones en materia de protección y manejo de datos personales que permita establecer ante las autoridades la existencia del contrato de hospedaje y que como mínimo contenga el nombre completo del huésped, tipo y número de identificación, nacionalidad, fecha de ingreso y fecha de salida.

      div(titulo="Decreto 1964 de 2016")
        .row
          .col-lg-2.mb-5
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3 Por el cual se modifican los artículos 2.2.4.4.12.4. 2.2.4.7.2. del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.
            p.mb-3 
              span.text-bold.text-italic Artículo 1°.<br>
              | Modifíquese artículo 2.2.4.4.1 del 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, el cual quedará así:
              //-- AQUI VIENEN LOS ICONOS
          p.mb-5  
            span.text-bold.text-italic Artículo 2.2.4.4.12.4. <br>
            | Tarjeta de Registro Hotelero. Establecimientos de alojamiento y hospedaje, excluidos los establecimientos que prestan servicio de alojamiento por horas, deberán diligenciar, por cada huésped, la información solicitada en la Tarjeta de Registro Hotelero, la cual deberá contener la siguiente información:
          .row
            .col-lg-6
              .tarjeta-avatar-b.mb-5.align-items-center
                img.h80(src='@/assets/curso/t1-ic1.svg' alt='icono decorativo')
                .tarjeta
                  p.text-bold Identificación del establecimiento de alojamiento.
              .tarjeta-avatar-b.mb-5.align-items-center
                img.h80(src='@/assets/curso/t1-ic2.svg' alt='icono decorativo')
                .tarjeta
                  p.text-bold Información y datos generales del huésped.
              .tarjeta-avatar-b.mb-5.align-items-center
                img.h80(src='@/assets/curso/t1-ic3.svg' alt='icono decorativo')
                .tarjeta
                  p.text-bold Características de llegada y estancia.

            .col-lg-6
              .tarjeta-avatar-b.mb-5.align-items-center
                img.h80(src='@/assets/curso/t1-ic4.svg' alt='icono decorativo')
                .tarjeta
                  p.text-bold Información de infraestructura.
              .tarjeta-avatar-b.mb-5.align-items-center
                img.h80(src='@/assets/curso/t1-ic5.svg' alt='icono decorativo')
                .tarjeta
                  p.text-bold Datos de los acompañantes: persona/acompañante.           

          .cajon.color-primario.p-4.mb-4
            p * (Para información detallada de cada uno de los ítems, debe remitirse al Decreto 1964 de 2016 y los artículos modificados). La información de las Tarjetas de Registro Hotelero deberá ser conservada por un término mínimo de cinco (5) años contados a partir la fecha salida (check-out) de cada uno de los huéspedes.
          
          p.mb-3  
            span.text-bold.text-italic  Parágrafo 1:<br>
            | Los establecimientos de alojamiento y hospedaje de que trata el presente artículo deberán adoptar procedimientos para solicitar, a más tardar en el momento de la recolección de sus datos, la autorización del titular para el tratamiento de los mismos e informarle los datos personales que serán recolectados, así como todas finalidades específicas del tratamiento para las cuales se obtiene el consentimiento, de conformidad con la Ley 1581 de 2012 y sus disposiciones reglamentarias.

      div(titulo="Resolución, por la cual se implementa el artículo 2.2.4.4.12.3, del Decreto 1074 de 2015")
        .row
          .col-lg-2.mb-5
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3 Considerando que el Decreto 1074 de 2015, Único Reglamentario Sector Comercio, Industria y Turismo, establece que es función del Ministerio de Comercio, Industria y Turismo formular y ejecutar la política turística, así como los planes y programas que la conformen, con el fin de fortalecer la competitividad y sostenibilidad de los productos y destinos turísticos colombianos.
          p.text-bold Que el artículo 2.2.4.4.12.3 del Decreto 1074 de 2015, establece:
          p.mb-3  “Tarjeta de Registro Hotelero. Para efectos estadísticos de las autoridades nacionales, el Ministerio de Comercio, Industria y Turismo gestionará el desarrollo de un software para el diligenciamiento de la Tarjeta de Registro Hotelero, cuya información será la que determinen de común acuerdo el Departamento Administrativo Nacional de Estadística - DANE y el Ministerio de Comercio, Industria y Turismo.
          p.mb-3  Qué el Ministerio de Comercio, Industria y Turismo para dar cumplimiento a lo ordenado en el parágrafo transcrito, viene trabajando en la implementación del sistema tecnológico, a través de un software para el diligenciamiento de la Tarjeta de Registro Hotelero.
          p.mb-3  Que, conforme a lo anterior, el Ministerio de Comercio, Industria y Turismo ha identificado para el desarrollo e implementación del software del proyecto de la Tarjeta de Registro Hotelero, cuatro fases que permitirán cumplir con el 100 % de su implementación en las fechas fijadas en el Decreto, y de las cuales las dos etapas iniciales ya fueron desarrolladas.
          p.mb-3  Que de común acuerdo el Ministerio de Comercio, Industria y Turismo y el Departamento Administrativo Nacional de Estadística – DANE definieron los campos que debe contener la Tarjeta de Registro Hotelero, de acuerdo con las estadísticas requeridas por el sector turístico.
          p.mb-3  Que los prestadores de servicios turísticos definidos en el Decreto 1074 de 2015 para el sector de alojamiento y hospedaje turístico deberán adoptar las condiciones técnicas y las medidas necesarias para la protección de datos personales conforme a la Ley 1581 de 2012, requeridos para la implementación del software de la Tarjeta de Registro Hotelero.



      div(titulo="Decreto 2119 de 15 noviembre de 2018")
        .row
          .col-lg-2.mb-5
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-4 Por medio del cual se reglamenta la prestación del servicio de alojamiento turístico y se modifican la Sección 12 del Capítulo 4 del Título 4 de la Parte 2 del Libro 2 y el parágrafo del artículo 2.2.4.7.2. del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Ver documento anexo.
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo4_1-1-5_ Decreto_2119_de_2018.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p
                      span.text-bold Anexo. 
                      | Decreto 2119 de 15 noviembre de 2018. <br> República de Colombia
              .col-lg-4
        .row.mb-5
          .col-lg-7
            p.text-bold.text-italic Artículo 2.2.4.4.12.3.
            p.mb-3  Tarjeta de Registro Hotelero. Para efectos estadísticos de las autoridades nacionales, el Ministerio de Comercio, Industria y Turismo gestionará el desarrollo de un software para el diligenciamiento de la Tarjeta de Registro Hotelero, cuya información será la que determinen de común acuerdo el Departamento Administrativo Nacional de Estadística – DANE y el Ministerio de Comercio, Industria y Turismo.
            p.mb-4  Este decreto deja transitoriamente (mientras se desarrolla una plataforma digital) como información obligatoria para el registro hotelero solo cinco campos: 
            .row.justify-content-center.mb-4
              .col-lg-4
                ul.lista-ul--color.text-bold
                  li 
                    i.fas.fa-check
                    | Nombre
                  li
                    i.fas.fa-check
                    | Identificación
                  li 
                    i.fas.fa-check
                    | Nacionalidad
              .col-lg-4
                ul.lista-ul--color.text-bold
                  li 
                    i.fas.fa-check
                    | Fecha de llegada
                  li
                    i.fas.fa-check
                    | Fecha de salida

          .col-lg-5.mb-5
            figure
              img(src='@/assets/curso/t1-i5.png', alt='Pareja hablando con recepcionista en el lobby del hotel')
          .cajon.color-primario.p-4
            p También establece los criterios para la plataforma tecnológica que el Ministerio de Comercio, Industria y Turismo está desarrollando, lo cual permitirá el diligenciamiento sistematizado de la tarjeta, información que además estará conectada al DANE (Departamento Administrativo Nacional de Estadística) para el seguimiento estadístico. (Colombia Ágil, 2021)


      div.mb-5(titulo="Otras normas")
        .row
          .col-lg-2.mb-5
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='icono decorativo')
              //-- figcaption Leyenda de la imagen
          .col-lg-8
            p.mb-3 Existen otras normas que se deberá conocer y tener en cuenta al momento de efectuar un registro hotelero. Hablamos específicamente de las leyes 679 del 3 de agosto de 2001 y Ley 1336 de 2009, mediante la cual se dictan disposiciones para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores de edad. Ver documento anexo.
            p.mb-3 Ley 985 de agosto 26 de 2005, por medio de la cual se adoptan medidas contra la trata de personas y normas para la atención y protección de las víctimas de esta. Ver documento anexo.
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo5_1-1-6_Ley_679_de_2001.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p
                      span.text-bold Anexo. 
                      | Ley 679 de 2001.<br> República de Colombia            
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo6_1-1-6_Ley_985_de_2005.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p
                      span.text-bold Anexo. 
                      | Ley 985 de 2005.<br> República de Colombia

        
            //--.row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p
                      span.text-bold Anexo. 
                      | Decreto 1074 de 2015. <br> República de Colombia
              .col-lg-4
          .col-12 
            p.mb-3  Como se puede ver, la responsabilidad del establecimiento hotelero, y por ende del personal que en ellos labora, se hace extensiva a la prevención de esta tipología de crímenes trasnacionales que lastimosamente se complejiza aún más en los centros de alta afluencia de turistas nacionales y extranjeros.

    h3.titulo-tercero Colofón
    p.mb-4  Hay varios hechos destacables dentro de la normatividad, como puede ver a continuación:
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t1-i3.svg', alt='icono decorativo')

      .col-lg-10
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | El registro hotelero es el documento que se usa como prueba del contrato de hospedaje.
          li
            i.fas.fa-check
            | El registro de pasajeros es obligatorio para los establecimientos de alojamiento.
          li 
            i.fas.fa-check
            | El registro hotelero provee información de carácter legal, estadístico y migratorio.
          li 
            i.fas.fa-check
            | Actualmente se desarrolla en Colombia un sistema de información que pretende consolidar dicha información y entregarla de forma segura a las entidades autorizadas para el manejo de esta.
          li 
            i.fas.fa-check
            | El registro hotelero recauda información personal, tanto de nacionales como de extranjeros, por lo que debe cumplir la normatividad de protección de datos establecida en Colombia y otras jurisdicciones.
          li 
            i.fas.fa-check
            | Los prestadores turísticos deben adoptar las medidas técnicas para la implementación de la plataforma.
    p.mb-5(data-aos="fade-right")  Con respecto a estos hechos, se anticipa que la plataforma que está desarrollando el Ministerio de Industria, Comercio y Turismo se podrá integrar a los diferentes sistemas PMS, para automatizar el proceso. A continuación, se puede observar un esquema gráfico al respecto:

    .row.justify-content-center
      .col-lg-8
        .titulo-quinto
          h4 Normatividad asociada al registro hotelero en colombia
        figure
          img(src='@/assets/curso/t1-i4.svg', alt='infografia linea de tiempo de normatividad asociada al registro hotelero en colombia')
          figcaption.text-bold Normatividad asociada al registro hotelero en Colombia

  
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

<style lang="sass" scoped>
.h80{height: 80px}
.cajon.color-primario{background-color: #F9EEDE}
.color-primario--borde{background-color: #FFF4E4; border: 10px solid #FF9800;}
.titulo-quinto > *{border-bottom: 4px solid #FF9800;}
</style>
