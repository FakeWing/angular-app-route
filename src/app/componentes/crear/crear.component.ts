import { Component, OnInit } from '@angular/core';
import { LibrosInterface, LibroClase } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public libro: LibrosInterface;
  constructor(private libroServicio: LibrosService) { }
  nuevoLibro = new LibroClase();
  ngOnInit() {
    this.getLibro(0);
  }

  public getLibro(id: number) {
    var libroObservable = this.libroServicio.getLibro(id);
    libroObservable.subscribe(libroObtenido => this.libro = libroObtenido);
  }

  public postLibro() {
    var libroObservable = this.libroServicio.postLibro(this.nuevoLibro);
    libroObservable.subscribe(libroObtenido => {
      this.nuevoLibro = libroObtenido;
    });
  }
}
