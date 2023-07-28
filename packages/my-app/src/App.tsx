// App.tsx
import './App.css';
import { useState } from 'react';
import { ButtonType } from './types';
import { ButtonComponent, CardComponent, ListComponent, RadioComponent, RangeComponent, defineCustomElements } from 'react-library';

defineCustomElements();

function App() {

  const [buttonSize, setButtonSize] = useState(0)
  const [buttonColor, setButtonColor] = useState("primary")
  const [buttonArray, setButtonArray] = useState<ButtonType[]>([])
  const radioOptions = ["primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark"]

  const changeButtonSize = (value: number) => {
    setButtonSize(value);
  }

  const changeButtonColor = (color: string) => {
    setButtonColor(color);
  }

  const addButtonToArray = () => {
    const newButton = {
      size:buttonSize,
      color:buttonColor
    }
    setButtonArray([...buttonArray, newButton])
  }


  return (
    <div className="App">
      <CardComponent>
        <RadioComponent options={[...radioOptions]} onChangeValue={(event) => changeButtonColor(event.detail)}></RadioComponent>
        <RangeComponent label="Button Size: " onChangeValue={(event) => changeButtonSize(event.detail)}></RangeComponent>
        <ButtonComponent name="My Button" size={buttonSize} color={buttonColor} onClick={() => addButtonToArray()}></ButtonComponent>
      </CardComponent>
      <ListComponent>
        {buttonArray.map((item : any) => 
          <ButtonComponent name="My Button" size={item.size} color={item.color}></ButtonComponent>
        )}
      </ListComponent>
    </div>
  );
}

export default App;