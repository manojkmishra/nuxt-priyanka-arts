export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Priyanka Arts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' },
      { rel:"stylesheet", type:"text/css", href:'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
    ],
    script: [
      {src: '/vendor/jquery/jquery.min.js', type: "text/javascript"},
      {src: '/vendor/jquery.easing/jquery.easing.min.js', type: "text/javascript"},
      {src: '/vendor/owl.carousel/owl.carousel.min.js', type: "text/javascript"},
      {src: '/vendor/aos/aos.js', type: "text/javascript"},
      {src: '/vendor/venobox/venobox.min.js', type: "text/javascript"},
      {src: '/vendor/isotope-layout/isotope.pkgd.min.js', type: "text/javascript"},
      {src: '/vendor/php-email-form/validate.js', type: "text/javascript"},
      {src: 'vendor/bootstrap/js/bootstrap.bundle.min.js', type: "text/javascript"}
  ],

  },
   // Global CSS (https://go.nuxtjs.dev/config-css)
  //'~/assets/css/style.css'
  css: [
    '~/assets/animate.css/animate.min.css',
    '~/assets/owl/owl.carousel.min.css',
    '~/assets/aos/aos.css',
    '~/assets/icofont/icofont.min.css',
    '~/assets/boxicons/css/boxicons.min.css',
    '~/assets/venobox/venobox.css',
    '~/assets/bootstrap/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }


}
