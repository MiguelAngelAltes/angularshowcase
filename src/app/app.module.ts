// decorador
import { NgModule }                       from '@angular/core';

// módulos
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms';
import { MatTableModule }                 from '@angular/material/table';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';

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

// services
import { ConversorTemperaturaService }    from './services/conversor-temperatura.service';

// pipes
import { CharCounterPipe }                from './pipes/char-counter.pipe';
import { ReversePipe }                    from './pipes/reverse.pipe';
import { TrimestrePipe }                  from './pipes/trimestre.pipe';
import { Material1Component } from './components/material1/material1.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent,RelojComponent, BoxComponent, TemperaturaConverterComponent, ConversorDivisasComponent, PipeShowcaseComponent, CharCounterPipe, ReversePipe, TrimestrePipe, List1Component, List2Component, VendingMachineComponent, Material1Component],
  imports:      [BrowserModule, FormsModule, BrowserAnimationsModule, MatTableModule],
  providers:    [ConversorTemperaturaService],
  bootstrap:    [AppComponent]
})
export class AppModule { }
