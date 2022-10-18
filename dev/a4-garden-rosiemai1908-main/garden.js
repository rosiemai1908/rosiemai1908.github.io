export default class Garden {
  constructor(gardenEl, controlsEl) {
    this.gardenEl = gardenEl;
    this.controlsEl = controlsEl;
    this.activeShape = {}; //empty because it'll be change later
    // this.activeShape = {width, height, color, x, y, type, radius}
    this.mousePos = {x: 0, y: 0};
    this.activeShapeEl = null;
    this.initInteraction();
  }

  initInteraction(e) { //mouse moving - udate x and y, click - place the shape and make a new element, input changes - update values activeShape - apply updated values to activeShapeEl
    this.gardenEl.addEventListener('click', () => { //
        this.placeShape();
    })

    this.gardenEl.addEventListener('mousemove', (e) => {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
      this.renderShape();
      console.log(this.mousePos);
    });

    let inputEl = this.controlsEl.querySelectorAll('input');
    inputEl.forEach((el) => {
      el.addEventListener('input', () => {
        this.setShape();
        this.renderShape();
      })
    })
  }

  setShape() {
    this.activeShape = {};
    this.activeShape.type = this.controlsEl.querySelector('input[name="shape"]:checked').value;

    if (this.activeShape.type === 'circle') {
      this.activeShape.radius = parseInt(document.querySelector('input[name="circle-radius"]').value);
      this.activeShape.color = document.querySelector('input[name="circle-color"]').value;
    } else {
      this.activeShape.width = parseInt(document.querySelector('input[name="rectangle-width"]').value);
      this.activeShape.height = parseInt(document.querySelector('input[name="rectangle-height"]').value);
      this.activeShape.color = document.querySelector('input[name="rectangle-color"]').value;       
    }
  }

  renderShape() {
    if (this.activeShapeEl === null) {
      this.activeShapeEl = document.createElement('div');
      this.gardenEl.appendChild(this.activeShapeEl);
    }

    this.activeShapeEl.style.backgroundColor = this.activeShape.color;
    this.activeShapeEl.style.position = 'absolute';

    if (this.activeShape.type === 'circle') {
      this.activeShapeEl.style.height = `${this.activeShape.radius * 2}px`;
      this.activeShapeEl.style.width = `${this.activeShape.radius * 2}px`;
      this.activeShapeEl.style.borderRadius = '100%';
      this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.radius}px`;
      this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.radius}px`;
    } else {
    this.activeShapeEl.style.height = `${this.activeShape.height}px`;
    this.activeShapeEl.style.width = `${this.activeShape.width}px`
    this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.width / 2}px`;
    this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.height / 2}px`;
    }
  }

  placeShape() { //create element with all the same properties of activeShape
    this.activeShapeEl = null;
    this.renderShape();
  }

  clear() {
    this.gardenEl.innerHTML = {};
    this.activeShapeEl = null;
    this.renderShape();
  }
}
