class fondo {
  constructor(imagenFondo) {
    this.imagen = imagenFondo;
  }

  dibujar() {
    image(this.imagen, 0, 0, width, height);
  }
}
