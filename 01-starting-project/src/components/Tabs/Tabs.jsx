export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  //const ButtonsContainer = buttonsContainer; //might be menu, div, component or anything that the dev wants
  //must be accepted as a prop with upper case first char or be remapped to a constant with upc char
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}