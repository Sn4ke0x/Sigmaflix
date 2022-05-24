$(".owl-carousel").owlCarousel({
  loop: true /*faz com que navegue infinitamente na seleçao de filmes*/,
  margin: 10,
  nav: false /* ira desativar botao de navegaçao*/,
  responsive: {
    //  ira definir a responsividade em determinados valores em px
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
