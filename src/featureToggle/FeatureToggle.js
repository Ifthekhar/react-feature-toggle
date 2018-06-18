import axios from 'axios';

Object.prototype.isEnabled = function () {
    return this.enabled;
}

class FeatureToggle {

    constructor(url) {

        this.url = url;
        this.features = [];
    }

    loadFeatures() {
        return axios(this.url);
    }

    getFeature(name)
    {

        const feature = this
            .features
            .find((feature) => {
                if (feature.name === name) 
                    return feature;
                }
            )

        if (feature.depricated) {
            console.log(feature.name + ' this is depricated');
        }
        return feature;
    }
}

export default FeatureToggle;