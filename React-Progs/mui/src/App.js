import Button from '@mui/material/Button';
import StyledComp from './Styled_Comp';
function App() {
  let text1 = ["hello", "frew", "rv", "btrbr"];
  let color1 = ["yellow", "white", "red", "blue", "orange"];
  return (
    <>
      <Button variant="contained" color="primary">Dev-1</Button>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <hr /><hr /><hr />

      {
        text1.map((val, index) => (<>
          <StyledComp key={index} text={val} color_1={color1[index]} /></>
        ))
      }
    </>
  );
}

export default App;
