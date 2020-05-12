new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Clicou no botão!');
        },
        atualizaValor(e) {
            this.valor = e.target.value
        },
    },
})