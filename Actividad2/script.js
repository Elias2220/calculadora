class Calculadora extends HTMLElement {
    constructor() {
        super();

        // Adjuntar shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Clonar el contenido de la plantilla
        const template = document.getElementById('calculadora-template').content.cloneNode(true);

        // Crear y adjuntar estilos
        const style = document.createElement('style');
        style.textContent = `
            .calculadora-terrenal {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 15px;
                max-width: 350px;
                margin: auto;
                padding: 25px;
                border: 1px solid #ccc;
                border-radius: 15px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .calculadora-terrenal input {
                grid-column: span 4;
                padding: 15px;
                font-size: 1.6em;
                text-align: right;
            }

            .calculadora-terrenal button {
                padding: 20px;
                font-size: 1.4em;
                border: none;
                border-radius: 5px;
                background-color: #f0f0f0;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .calculadora-terrenal button:hover {
                background-color: #ddd;
            }

            #igual {
                grid-column: span 1;
                grid-row: span 2;
            }

            #mas {
                grid-column: span 1;
                grid-row: span 2;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(template);

        // Inicializar variables
        this.display = shadow.getElementById('display');
        this.buttons = shadow.querySelectorAll('button');
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';

        // Añadir event listeners a los botones
        this.buttons.forEach(button => {
            button.addEventListener('click', () => this.onButtonClick(button));
        });
    }

    onButtonClick(button) {
        const value = button.textContent;
        if (!isNaN(value) || value === '.') {
            this.appendNumber(value);
        } else if (value === '=') {
            this.calculate();
        } else if (value === 'C') {
            this.clear();
        } else {
            this.setOperator(value);
        }
    }

    appendNumber(number) {
        if (this.currentValue.includes('.') && number === '.') return;
        this.currentValue += number;
        this.updateDisplay();
    }

    setOperator(operator) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    calculate() {
        let result;

        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '^':
                result = Math.pow(prev, current);
                break;
            case '√':
                result = Math.sqrt(current);
                break;
            default:
                return;
        }

        this.currentValue = result;
        this.operator = '';
        this.previousValue = '';
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '';
        this.previousValue = '';
        this.operator = '';
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.value = this.currentValue;
    }
}

customElements.define('calculadora-terrenal', Calculadora);
