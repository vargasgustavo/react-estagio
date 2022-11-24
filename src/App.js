import React from 'react';
import { Select } from '@mui/material';

const optionsestados = [
  {
    label: "Minas Gerais",
    value: "mg",
  },
  {
    label: "Sâo Paulo",
    value: "sp",
  },
  {
    label: "Espírito Santo",
    value: "es",
  },
  {
    label: "Rio de Janeiro",
    value: "rj",
  },
];

const optionscidades = [
  {
    label: "Indaiatuba",
    value: "indaiatuba",
  },
  {
    label: "Campinas",
    value: "campinas",
  },
  {
    label: "São Paulo",
    value: "saopaulo",
  },
  {
    label: "Ouro Preto",
    value: "ouropreto",
  },
  {
    label: "Belo Horizonte",
    value: "belohorizonte",
  },
  {
    label: "Niterói",
    value: "niteroi",
  },
  {
    label: "São Gonçalo",
    value: "saogoncalo",
  },
  {
    label: "Duque de Caxias",
    value: "duquedecaxias",
  },
  {
    label: "Magé",
    value: "mage",
  },
  {
    label: "Vitória",
    value: "vitoria",
  },
  {
    label: "Vila Velha",
    value: "vilavelha",
  },
  {
    label: "Serra",
    value: "serra",
  },
  {
    label: "Guarapari",
    value: "guarapari",
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "São Paulo",
    };

    this.state = {
      cidade: "Campinas",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ estado: e.target.value })
    this.setState({ cidade: e.target.value })
  }

  onSelect(e) {
    
  }

  onLoad(e) {

  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <h1>Selecione o estado:</h1>
          <Select value={this.state.estado} onChange={this.handleChange}>
            {optionsestados.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Select>
          <h1>Selecione a cidade:</h1>
          <Select value={this.state.cidade} onChange={this.handleChange}>
            {optionscidades.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>
      </div>
    );
  }
}

export default App;