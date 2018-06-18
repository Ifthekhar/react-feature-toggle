import React, {Component} from 'react';
import {FeatureToggleContext} from './toggleContext';
import FeatureToggle from './FeatureToggle';

class FeatureToggleProvider extends Component {

    constructor(props) {
        super(props);
        const featureToggler = new FeatureToggle('http://localhost:3001/features');
        featureToggler
            .loadFeatures()
            .then((response) => {

                featureToggler.features = response.data;
                this.setState({features: featureToggler});
            })
    }

    render() {
        return (

            <FeatureToggleContext.Provider value={this.state}>
                {this.props.children}
            </FeatureToggleContext.Provider>
        )
    }
}
export default FeatureToggleProvider;