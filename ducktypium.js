class Ducktypium {
    constructor(color) {
        if (['red', 'blue', 'yellow'].includes(color)) {
            this.color = color;
            this.calibrationSequence = [];
        } else {
            throw new Error('Bad color created');
        }
    }

    refract(color) {
        if (['red', 'blue', 'yellow'].includes(color)) {
            if(color === this.color) {
                return color;
            } else {
                switch(this.color) {
                    case 'red':
                        return color === 'blue' ? 'purple' : 'orange';
                    case 'blue':
                        return color === 'red' ? 'purple' : 'green';
                    default:
                        return color === 'red' ? 'orange' : 'green';
                }
            }
        } else {
            throw new Error('Bad color created');
        }
    }

    calibrate(data) {
        let raw = data.sort();
        this.calibrationSequence = raw.map(element => {
            return element * 3;
        });
    }
}
