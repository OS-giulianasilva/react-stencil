// App.tsx
import './App.css';
import { useState } from 'react';
import { ButtonType } from './types';
import { ButtonComponent, CardComponent, InputComponent, LabelComponent, ListComponent, RadioComponent, RangeComponent, defineCustomElements } from 'react-library';

defineCustomElements();
const radioOptions = ["primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"]

function App() {

  const [buttonSize, setButtonSize] = useState(0)
  const [buttonColor, setButtonColor] = useState("primary")
  const [buttonName, setButtonName] = useState("My Button")
  const [buttonArray, setButtonArray] = useState<ButtonType[]>([])

  const changeButtonSize = (size: number) => {
    setButtonSize(size);
  }

  const changeButtonColor = (color: string) => {
    setButtonColor(color);
  }

  const addButtonToArray = () => {
    const newButton: ButtonType = {
      name: buttonName,
      size: buttonSize,
      color: buttonColor
    }
    setButtonArray([...buttonArray, newButton])
  }

  const changeButtonName = (name: string) => {
    setButtonName(name);
  }


  return (
    <div className="App">
      <CardComponent cardTitle='Button Generator' cardSubtitle='Configure your button and add it to the list'>
        <LabelComponent label="Button name:"></LabelComponent>
        <InputComponent placeholder='Insert a button name' value="My Button" onValueChange={(event) => changeButtonName(event.detail)}></InputComponent>
        <LabelComponent label="Choose a color:"></LabelComponent>
        <RadioComponent options={[...radioOptions]} onChangeValue={(event) => changeButtonColor(event.detail)}></RadioComponent>
        <RangeComponent label="Choose a button size: " onChangeValue={(event) => changeButtonSize(event.detail)}></RangeComponent>
        <ButtonComponent name={buttonName} size={buttonSize} color={buttonColor} onClick={() => addButtonToArray()}></ButtonComponent>
      </CardComponent>
      <ListComponent>
        {buttonArray.map((item : any) => 
          <ButtonComponent name={item.name} size={item.size} color={item.color}></ButtonComponent>
        )}
      </ListComponent>
    </div>
  );
}

export default App;