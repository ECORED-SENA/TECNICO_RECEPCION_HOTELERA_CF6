<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-6
        p.mb-5 En Colombia, todos los prestadores de servicios turísticos de alojamiento y hospedaje turístico, como hoteles, centros vacacionales y servicios de alojamiento prestados por clubes sociales, están obligados a documentar el ingreso de huéspedes al establecimiento, mediante el documento registro hotelero o tarjeta de registro hotelero (TRH), que recopila la información requerida para el ingreso del cliente al hotel, en el momento del registro (check-in).
        .row
          .col-lg-8
            a.anexo.mb-5(href="https://blogdelhotel.wordpress.com/2015/09/24/procedimientos-check-in/b" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p
                  span.text-bold Enlace web. <br>
                  | Procedimientos-check-in, Blogdelhotel.

      .col-lg-6 
        figure.mb-5
          img(src="@/assets/curso/t0-i1.jpg", alt="Pareja realizando checkin en la recepción del hotel")


      br
      br
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
