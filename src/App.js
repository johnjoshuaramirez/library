import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
import BookContainer from './components/BookContainer';
import BookForm from './components/BookForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <BookContainer />
        <BookForm />
      </div>
    </Provider>
  );
}

export default App;
