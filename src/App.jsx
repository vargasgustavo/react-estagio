import React from "react";
import { InputLabel, Select, Box, MenuItem, FormControl } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
// import { Background, Main } from "./style/styles";

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
];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "Estado",
    };

    this.state = {
      cidade: "Cidade",
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ estado: e.target.value });
    this.setState({ cidade: e.target.value });
  }

  onSelect(e) {}

  onLoad(e) {}


  render() {
    return (
      <div id="App">
        {/* <Main> */}
        {/* <Background> */}
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth sx={{ marginTop: 8 }}>
            <div className="select-container">
              <InputLabel sx={{ marginLeft: 10 }} id="demo-simple-select-label">
                Selecione o estado:
              </InputLabel>
              <Select
                sx={{
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 5,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                label="Selecione o estado:"
                value={this.state.estado}
                onChange={this.handleChange}
              >
                {optionsestados.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
              <InputLabel
                sx={{ marginTop: 12, marginLeft: 10 }}
                id="demo-simple-select-label"
              >
                Selecione a cidade:
              </InputLabel>
              <Select
                sx={{
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
                  marginRight: 10,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                label="Selecione a cidade:"
                value={this.state.cidade}
                onChange={this.handleChange}
              >
                {optionscidades.map((option) => (
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
            </div>
          </FormControl>
        </Box>
        {/* </Background> */}
        {/* </Main> */}
      </div>
    );
  }
}

export default App;
