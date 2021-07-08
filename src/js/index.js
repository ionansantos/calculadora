const calc = {
    data() {
        return {
            valorCorrente: '',
            operadorClicado: false,
            operador: null,
            numeroAnterior: null,
        }
    },
    methods: {
        /**
         * Método responsável por limpar o display da 'Calculadora':
         */
        Clear() {
            this.valorCorrente = ''
        },
        /**
         * Método responsável por colocar o sinal '-' ou '+' para a realização
         * de cálculos operacionais.
         */
        sinal() {
            this.valorCorrente = this.valorCorrente.charAt(0) === '-' ?
                this.valorCorrente.slice(1) :
                `-${this.valorCorrente}`;

        },
        // Método responsávelpor realizar operações de 'porcentagem'
        porcentagem() {
            this.valorCorrente = `${parseFloat(this.valorCorrente) /100}`
        },
        // Método responsável por juntar os números no display da Calculadora:
        adicionar(numero) {
            if (this.operadorClicado) {
                this.valorCorrente = ''
                this.operadorClicado = false
            }
            this.valorCorrente = `${this.valorCorrente}${numero}`

        },
        setarValor() {
            this.numeroAnterior = this.valorCorrente;
            this.operadorClicado = true;    
        },
        // Método responsável por adicionar 'ponto' no display da Calculadora:
        ponto() {
            if (this.valorCorrente.indexOf('.') === -1) {
                this.adicionar('.');
            }
        },
        dividir() {
            this.operador = (num1, num2) => num1 / num2;
            this.setarValor();
        },
        somar() {
            this.operador = (num1, num2) => num1 + num2;
            this.setarValor();
        },
        diminuir() {
            this.operador = (num1, num2) => num1 - num2;
            this.setarValor();
        },
        
        multiplicar() {
            this.operador = (num1, num2) => num1 * num2;
            this.setarValor();
        },
        resultado() {
            this.valorCorrente = `${this.operador(
              parseFloat(this.numeroAnterior),
              parseFloat(this.valorCorrente),
            )}`;
            this.numeroAnterior = null;
        },
    }
}

export default calc