export class Background {
    document;

    constructor(document) {
        this.document = document;
    }

    start() {
        const body = this.document.querySelector("body");   
        body.classList.add("space");
    }
}