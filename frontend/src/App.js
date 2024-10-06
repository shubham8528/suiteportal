
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Protection from './utils/protection';
import { protectedRoutes } from './utils/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {protectedRoutes?.map((route) => (
          <Route
            keys={route.id}
            path={route.path}
            element={
              route.isProtected ? (
                <>
                  <Protection>{route.data}</Protection>
                </>
              ) : (
                route.data
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
