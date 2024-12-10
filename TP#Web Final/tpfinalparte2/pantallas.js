class pantallas {
  constructor(juego, estado, tiempoinicio, tiempolimite, tiempopaso) {
    this.estado = estado;
    this.tiempoinicio = tiempoinicio;
    this.tiempolimite = tiempolimite;
    this.tiempopaso = tiempopaso;
    this.juego = juego;
  }

  dibujarPantallas() {
    if (this.estado==="juego") { //logica de estados
      this.juego.dibujar();

      this.tiempopaso = millis() - this.tiempoinicio;

      if (this.tiempopaso>=this.tiempolimite) { //si se excede tiempo sin chocarse gana
        this.estado="ganaste";
       cancionAmbiente.stop();
      }
      if (this.juego.personaje.vida === false) {
        this.estado="perder";
        cancionAmbiente.stop();
      }
    } else if (this.estado==="perder") {
      this.mostrarPantallaPerdiste();
    } else if (this.estado==="ganaste") {
      this.mostrarPantallaGanaste();
    } else if (this.estado==="tutorial") {
      this.mostrarPantallaTutorial();
    }
  }
  //PANTALLAS PERDISTE , GANASTE Y TUTORIAL
  mostrarPantallaPerdiste() {
    background(144, 39, 66);
    fill(255)
      textSize(22);
    image(boton[1], 210, 190, 230, 60);

    text(texto[0], 10, 440, 360);
    text(texto[1], 10, 30, 360);
    text(texto[5], 175, 300, 360);
    textSize(100);
    text(texto[4], 140, 180, 360);
  }

  mostrarPantallaGanaste() {
    background(177, 182, 136);
    fill(255);
    textSize(22);

    image(boton[1], 210, 190, 230, 60);

    text(texto[0], 10, 440, 360);
    text(texto[1], 10, 30, 360);
    text(texto[3], 190, 300, 360);
    textSize(100);
    text(texto[2], 150, 180, 360);
  }

  mostrarPantallaTutorial() {
    background(0);
    image(imagen[0], 0, 0, width, height);
    image(imagen[3], 245, 300, 160, 160);
    fill(255)
      textSize(18);
    text(texto[7], 150, 275, 360);

    image(boton[0], 210, 190, 230, 60);
    textSize(40);
    text(texto[6], 150, 180, 360);
  }

  //BOTONES

  detectarBoton(x, y, an, al) {
    return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
  }

  reiniciarJuego() {
    this.estado = "juego";
    this.tiempoinicio = millis();
    this.juego.crearPersonaje();
    this.juego.crearEnemigo();
    if (!cancionAmbiente.isPlaying()) {
      cancionAmbiente.loop(); //música}
  }
}

  //CAMBIO DE ESTADO
  mousePresionado() {
    if (this.estado === "tutorial" && this.detectarBoton(210, 190, 230, 60)) {
      this.reiniciarJuego();
    } else if (this.estado === "ganaste" && this.detectarBoton(210, 190, 230, 60)) {
      this.estado = "tutorial";
    } else if (this.estado === "perder" && this.detectarBoton(210, 190, 230, 60)) {
      this.estado = "tutorial";
    }
  }
}
