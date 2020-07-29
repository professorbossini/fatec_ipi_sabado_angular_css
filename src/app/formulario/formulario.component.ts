import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  styles: [
    `
      .titulo {
        font-size: 1.5rem;
      }
      .corpo {
        padding: 8px;
        font-size: 1.1rem;
      }
    
    `
  ]
})
export class FormularioComponent {

  valor: number;
  gerarValor(): void {
    this.valor = Math.round(Math.random() * 100) + 1;
  }
  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#EEE6FF',
      padding: '8px',
      width: '20%',
      border: 'none',
      'border-radius': '4px'
    }
  }

  obterClassesRodape() {
    return ['rodape']
  }

  obterClassesValor() {
    return {
      valor: true,
      numeroPar: this.valor % 2 == 0 ? true : false,
      numeroImpar: this.valor % 2 != 0
    }
  }

}
