import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SlackPortfolio from './pages/SlackPortfolio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SlackPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
