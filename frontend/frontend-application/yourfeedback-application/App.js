import StackSwitcher from './navigations/StackSwitcher';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackSwitcher />
      </PersistGate>
    </Provider>
  );
}

