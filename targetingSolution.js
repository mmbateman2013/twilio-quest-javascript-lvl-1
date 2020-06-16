class TargetingSolution {
    constructor(coords) {
        this.coords = coords;
    }

    target() {
        return `(${this.coords.x}, ${this.coords.y}, ${this.coords.z})`;
    }
}