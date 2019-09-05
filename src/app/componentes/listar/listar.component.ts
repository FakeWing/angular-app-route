import { Component, OnInit } from '@angular/core';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public libros: LibrosInterface;
  faTrash=faTrash;
  faPencil=faPencilAlt;
  constructor(private libroServicio: LibrosService) { }

  ngOnInit() {
   this.getLibros();
  }

  public getLibros() {
    this.libroServicio.getLibros().subscribe((libros: LibrosInterface) => (this.libros = libros));

  }
}
