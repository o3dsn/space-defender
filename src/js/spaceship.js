export class Spaceship {
  document;

  constructor(document) {
    this.document = document;
  }

  start() {
    console.log("spaceship on");
    const body = this.document.querySelector("body");
    const spaceship = this.create(body);
    this.controls(body, spaceship);
    this.shoot(body, spaceship);
  }

  create(body) {
    const spaceship = this.document.createElement("div");
    spaceship.style.width = "94px";
    spaceship.style.height = "78px";
    spaceship.style.backgroundImage = "url('./assets/spaceship.png')";
    spaceship.style.backgroundRepeat = "no-repeat";
    spaceship.style.backgroundPosition = "center";
    spaceship.style.position = "absolute";
    spaceship.style.bottom = "10%";
    spaceship.style.left = "50%";
    body.appendChild(spaceship);
    return spaceship;
  }

  controls(body, spaceship) {
    const speed = 2;
    body.addEventListener('keydown', (event) => {
      const { style } = spaceship;
      const spaceshipPosition = parseInt(style.left);
      const spaceShipMinRange = spaceshipPosition > 2;
      const spaceShipMaxRange = spaceshipPosition < 92;
      if (event.key == 'a' && spaceShipMinRange) style.left = `${spaceshipPosition - speed}%`;
      if (event.key == 'd' && spaceShipMaxRange) style.left = `${spaceshipPosition + speed}%`;
    });
  }

  shoot(body, spaceship) {
    body.addEventListener('click', () => {
      console.log('fire!!!');
      const { style } = spaceship;
      const spaceshipPositionY = parseInt(style.bottom);
      const spaceshipPositionX = parseInt(style.left);
      const shot = this.document.createElement('div');
      shot.style.width = "15px";
      shot.style.height = "15px";
      shot.style.backgroundImage = "url('./assets/fire.png')";
      shot.style.backgroundRepeat = "no-repeat";
      shot.style.backgroundPosition = "center";
      shot.style.backgroundSize = "contain";
      shot.style.position = "absolute";
      shot.style.bottom = `${spaceshipPositionY + 8.5}%`;
      console.log(spaceshipPositionX);
      shot.style.left = `${spaceshipPositionX + 2.1}%`;
      body.appendChild(shot);
      let firePositionY = parseInt(shot.style.bottom);
      console.log(firePositionY);
      const interval = setInterval(() => {
        // firePositionY++;
        shot.style.bottom = `${firePositionY + 8.5}%`;
        console.log(firePositionY);
       
        if(firePositionY >= 85) {
          clearInterval(interval)
          shot.remove();
        }
        firePositionY = firePositionY + 5;
      }, 1000);
    });
  }

}