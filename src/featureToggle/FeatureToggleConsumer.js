import React, {Component} from 'react';
import {FeatureToggleContext} from './toggleContext';

class FeatureToggle extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <FeatureToggleContext.Consumer>
            {(context) => {
                if (context) {
                    let canRender = context
                        .features
                        .getFeature(this.props.featureName);
                    if (canRender.isEnabled()) {
                        return this.props.children;
                    }
                }
            }}

        </FeatureToggleContext.Consumer>

    }
}

export default FeatureToggle;