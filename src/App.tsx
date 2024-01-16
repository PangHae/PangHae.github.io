import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from '@/components/layout/Base';
import Home from '@/pages/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
