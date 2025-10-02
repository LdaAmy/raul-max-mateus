new Vue({
  el: '#app',
  data: {
    ad: true,
    ad2: false,
    ad3: false,
    musicas: [
      { nome: 'Musica 1' },
      { nome: 'Musica 2' },
      { nome: 'Musica 3' },
      { nome: 'Musica 4' },
      { nome: 'Musica 5' },
      { nome: 'Musica 6' },
      { nome: 'Musica 7' },
      { nome: 'Musica 8' },
      { nome: 'Musica 9' },
      { nome: 'Musica 10' },
    ]
  },
  methods: {
    close(){
      this.ad = false
      this.ad2 = true
      this.ad3 = true
    }
  }
});

function redirecionar() {
            window.location.href = "index2.html";
        }

