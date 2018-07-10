import React from 'react';
import { Route } from 'react-router-dom';
import ContentPortal from './ContentPortal/ContentPortal.jsx';

import './variables.scss';
import './app.scss';

const App = () => <Route component={ContentPortal} />

export default App
