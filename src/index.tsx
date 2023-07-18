import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AppStateProvider } from "./state/AppStateContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
//import { createContext, useContext, FC } from "react"
//import { AppStateContext } from "./state/AppStateContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// //Définissez ensuite un crochet personnalisé appelé useAppState

// export const useAppState = () => {
//   return useContext(AppStateContext)
// }

//<DndProvider backend={Backend}> //Ce fournisseur ajoutera un contexte de glissement à notre application. Cela nous permettra d'utiliser les crochetsuseDrag et useDrop à l'intérieur de nos composants.

root.render(
  <React.StrictMode>
    <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
    </DndProvider>
  </React.StrictMode>
);
