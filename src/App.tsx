// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import{
//   AppContainer,
//   ColumnContainer,
//   ColumnTitle,
//   CardContainer
// } from "./styles"

import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./CustomDragLayer"

// export const App = () => {
//   return (
//     <AppContainer>
//       <ColumnContainer>
//         <ColumnTitle>Todo:</ColumnTitle>
//         <CardContainer>FirstItem</CardContainer>
//         <CardContainer>SecondtItem</CardContainer>
//         <CardContainer>ThirdItem</CardContainer>
//       </ColumnContainer>
//      </AppContainer>
//   )
// }

//afficher le composant Column

export const App = () => {
  const { lists, dispatch } = useAppState()
  return(
    <AppContainer>
      <CustomDragLayer />
      { lists.map((list) =>(
      <Column text={list.text} key={list.id} id={list.id} />
    ))}
      <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  )    
}
