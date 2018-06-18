import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FeatureToggleProvider from './featureToggle/FetatureToggleProvider';

ReactDOM.render(
    <FeatureToggleProvider>
    <App/></FeatureToggleProvider>, document.getElementById('root'));
registerServiceWorker();
