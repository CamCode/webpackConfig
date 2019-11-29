export class Slide {
	constructor(imgs, links, type ) {
        this.imgs = imgs;
        this.links = links;
        this.type = type;
    }
    // createSlide() {
    //     const element = document.createElement('div');
    //     // Lodash, currently included via a script, is required for this line to work
    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //     return element;
    // }
}