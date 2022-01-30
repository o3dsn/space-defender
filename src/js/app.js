import { Background }  from "./background.js";
import { Spaceship } from "./spaceship.js";

const background = new Background(document);
background.start();
const spaceship = new Spaceship(document);
spaceship.start();