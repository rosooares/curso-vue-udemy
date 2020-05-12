new Vue({
  el: '#desafio',
  data: {
    nome: 'Roberta',
    idade: 20,
    imagem: 'https://imagepng.org/wp-content/uploads/2017/10/coracao.png',
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },
    funcRandom() {
      return Math.random()
    },
  },
})