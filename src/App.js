import React, {Component} from 'react';
import './App.css';
import FeatureToggle from './featureToggle/FeatureToggleConsumer';

const NewFetureElement = () => (
  <span>I am a new element</span>
);

const OledFeatureElement = () => (
  <span>I am an old feature element</span>
);

class App extends Component {
  render() {
    return (
      <div>
        <FeatureToggle featureName={'feature1'}>
          <NewFetureElement/>
        </FeatureToggle>
        <OledFeatureElement/>
      </div>
    );
  }
}

export default App;
