import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [//componentes y pipes
        HeroeComponent,
        ListadoComponent
    ],
    exports: [// lo que se va a ver desde afuera del modulo
        ListadoComponent
    ],
    imports: [//modulos
        CommonModule
    ]
})
export class HeroesModule {}