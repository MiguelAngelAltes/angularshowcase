// decorador
import { NgModule }                       from '@angular/core';

// módulos
import { BrowserModule }                  from '@angular/platform-browser';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { FormsModule }                    from '@angular/forms';

// módulos de material
import { MatTableModule }                 from '@angular/material/table';
import { MatInputModule }                 from '@angular/material/input';
import { MatDatepickerModule }            from '@angular/material/datepicker';
import { MatNativeDateModule }            from '@angular/material/core';

// componentes
import { AppComponent }                   from './app.component';
import { CalculatorComponent }            from './components/calculator/calculator.component';
import { RelojComponent }                 from './components/reloj/reloj.component';
import { BoxComponent }                   from './components/box/box.component';
import { TemperaturaConverterComponent }  from './components/temperatura-converter/temperatura-converter.component';
import { ConversorDivisasComponent }      from './components/conversor-divisas/conversor-divisas.component';
import { PipeShowcaseComponent }          from './components/pipe-showcase/pipe-showcase.component';
import { List1Component }                 from './components/list1/list1.component';
import { List2Component }                 from './components/list2/list2.component';
import { VendingMachineComponent }        from './components/vending-machine/vending-machine.component';
import { Material1Component }             from './components/material1/material1.component';
import { Material3Component }             from './components/material3/material3.component';

// services
import { ConversorTemperaturaService }    from './services/conversor-temperatura.service';

// pipes
import { CharCounterPipe }                from './pipes/char-counter.pipe';
import { ReversePipe }                    from './pipes/reverse.pipe';
import { TrimestrePipe }                  from './pipes/trimestre.pipe';

@NgModule({
  declarations: [AppComponent, 
                 CalculatorComponent,
                 RelojComponent, 
                 BoxComponent, 
                 TemperaturaConverterComponent, 
                 ConversorDivisasComponent, 
                 PipeShowcaseComponent, 
                 CharCounterPipe, 
                 ReversePipe, 
                 TrimestrePipe, 
                 List1Component, 
                 List2Component, 
                 VendingMachineComponent, 
                 Material1Component, 
                 Material3Component],
  imports:      [BrowserModule, 
                 FormsModule, 
                 BrowserAnimationsModule,
                 MatNativeDateModule,
                 MatTableModule,
                  MatDatepickerModule,
                 MatInputModule
                 ],
  providers:    [ConversorTemperaturaService],
  bootstrap:    [AppComponent]
})
export class AppModule { }