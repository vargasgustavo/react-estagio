import React from 'react';

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
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
  },
  {
    label: "",
    value: "",
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
    console.log("Estado Selecionado!!");
    this.setState({ estado: e.target.value });
    this.setState({ cidade: e.target.value });
  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <h1>Selecione o estado:</h1>
          <select value={this.state.estado} onChange={this.handleChange}>
            {optionsestados.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <h1>Selecione a cidade:</h1>
          <select value={this.state.cidade} onChange={this.handleChange}>
            {optionscidades.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default App;