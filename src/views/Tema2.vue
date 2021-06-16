<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Obligaciones y derechos de las partes
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2cnKTwQ85fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Al ser un documento de carácter contractual, el registro hotelero genera unas obligaciones y derechos que las partes deben cumplir.    


    #t_2_1.titulo-segundo
      h2 2.1 Obligaciones y derechos del prestador de servicios
    
    p.mb-4 Todos los prestadores de servicios turísticos tienen obligaciones y derechos. Es necesario conocerlos y estudiarlos.

    h3.titulo-tercero Prestador de servicios turísticos
    p.mb-3  Es toda persona natural o jurídica que habitualmente proporcione, intermedie o contrate directa o indirectamente con el turista la prestación de servicios turísticos y que se encuentre inscrito en el Registro Nacional de Turismo.
    p.mb-5  Conforme la normatividad legal vigente, son obligaciones de los prestadores de servicios turísticos:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-5.mb-5
          .row
            .col-lg-2
              figure.mb-5.my-5
                img(src='@/assets/curso/t2-i1.svg', alt='icono decorativo').align-items-center
            .col-lg-10
              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  | Inscribirse en el Registro Nacional de Turismo.
                li
                  i.fas.fa-check
                  | Actualizar anualmente los datos de su inscripción en el Registro Nacional de Turismo, entre el 1 de enero y el 31 de marzo de cada año.
                li 
                  i.fas.fa-check
                  | El número que corresponda al Registro Nacional de Turismo deberá ser incluido en toda publicidad del prestador de servicios turísticos.
                li 
                  i.fas.fa-check
                  | Enunciar los precios, calidad y cobertura del servicio ofrecido en las pautas publicitarias de estos.
                li 
                  i.fas.fa-check
                  | Suministrar la información que le sea requerida por las autoridades de turismo.
                li 
                  i.fas.fa-check
                  | Dar cumplimiento a las normas sobre conservación del medio ambiente, tanto en el desarrollo de proyectos turísticos como en la prestación de sus servicios.
    .separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2 Obligaciones y derechos del huésped

    p.mb-5 Los turistas, visitantes, viajeros y huéspedes son consumidores o usuarios de servicios turísticos y de alojamiento, como tales tienen derechos que se deben respetar y obligaciones que deben cumplir, a saber:
    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i2.svg", alt='Icono decorativo')
            .col
              p Recibir la información solicitada, de manera amable, respetuosa, correcta, veraz y objetiva.
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i3.svg", alt='Icono decorativo')
            .col
              p Recibir los servicios contratados en los términos ofrecidos y previamente pactados.
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i4.svg", alt='Icono decorativo')
            .col
              p Que la prestación de servicios se realice conforme a la solicitud del cliente, cumpliendo a cabalidad con los servicios ofrecidos y previamente pactados, con calidad y excelencia.
            
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i5.svg", alt='Icono decorativo')
            .col
              p Presentar el documento de identidad de forma física al momento de realizar el check-in y de diligenciar el formato registro hotelero.
        .tarjeta.tarjeta-light-blue.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i6.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Diligenciar y dar la información solicitada en el registro hotelero y por el personal del área de recepción.
        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i7.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Que le sea entregada la documentación que demuestre la autenticidad del contrato de prestación de servicios, indicando términos y condiciones de los servicios ofrecidos.
          
        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i8.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Se debe garantizar a los turistas y huéspedes del establecimiento de alojamiento el derecho a la intimidad, la tranquilidad y la seguridad.

        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i9.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Se debe garantizar a los turistas y huéspedes el derecho al libre acceso a las instalaciones del alojamiento y los servicios que ofrece.

        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i10.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Están obligados a pagar el precio de los servicios contratados, conforme a la tarifa previamente pactada, en el momento del check-out, donde les es presentada la factura para el pago correspondiente a los servicios recibidos.

        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i11.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Derecho a presentar peticiones, quejas, reclamaciones, sugerencias, felicitaciones y denuncias (PQRSFD) y el derecho a obtener respuesta por parte del establecimiento hotelero, en los plazos establecidos por la ley.
    
        .tarjeta.tarjeta-light-blue.p-3.mb-3 
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.h80(src="@/assets/curso/t2-i12.svg", alt='Icono decorativo')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Cuando el establecimiento de alojamiento incurra en el incumplimiento total o parcial de los servicios ofrecidos, el huésped tiene derecho a recibir otro servicio similar o de la misma calidad, o el reembolso o compensación por el servicio incumplido
    
    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.tarjeta.color-primario{background-color: #FFF4E4}
.h80{height: 80px}
</style>
