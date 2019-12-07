new Vue({

  el:"#desafio",
  data:{
    idade: "33",
    nome: "Saulo",
    imagem: "exemplo.jpg"
  },
  methods:{
    triploIdade: function(){
      return this.idade * 3
    },
    randomico:  function(){
      return Math.random()
    }
  }
})
