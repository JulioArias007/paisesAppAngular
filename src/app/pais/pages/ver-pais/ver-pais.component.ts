import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  elementosPaises!: Country[];

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({idPais}) => this.paisService.getPaisPorAlpha(idPais)),
      tap(console.log)
    )
    .subscribe(paises => this.elementosPaises = paises);
    /* this.activateRoute.params.subscribe(
      ({idPais}) => {
        console.log(idPais);
        this.paisService.getPaisPorAlpha(idPais)
        .subscribe(paises =>{
          console.log(paises);
        })
      }
    ) */

  }
}
