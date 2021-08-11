import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  --black:#010208;
  --blue:#001aee;
  --darkblue:#061254;
  --lightblue:#1530b4;
  --softblue:#9faccc;
  --grey:#455651;
  --white:#f5f5f6;
  --marble:#bd6f49;
  background-color: var(--darkblue);
  color: var(--whte);
  font: 400 16px;
  font-family: 'Roboto', sans-serif;
}
`
