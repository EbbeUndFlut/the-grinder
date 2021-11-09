class KeyControls {
	constructor() {
		this.keys = {};
		document.addEventListener(
			"keydown",
			(e) => {
				if ([37, 38, 39, 40].indexOf(e.which) >= 0) {
					e.preventDefault();
				}
				this.keys[e.which] = true;
			},
			false
		);
		document.addEventListener(
			"keyup",
			(e) => {
				this.keys[e.which] = false;
			},
			false
		);
	}

    get action() {
        return this.keys[32]
    }
}
export default KeyControls;
