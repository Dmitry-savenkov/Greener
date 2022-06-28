// Lib
import React from 'react';
import { Provider } from 'react-redux';
import store, { persist } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

//Components
import ThemesContextProvider from './src/context/ThemeContext';
import NavigationMainContainer from './src/navigation/NavigationMainContainer';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <ThemesContextProvider>
          <NavigationMainContainer />
        </ThemesContextProvider>
      </PersistGate>
    </Provider>
  );
}
