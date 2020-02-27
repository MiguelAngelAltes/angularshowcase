// decorador
import { NgModule }             from '@angular/core';

// módulos
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

// componentes
import { AppComponent }         from './app.component';
import { CalculatorComponent }  from './components/calculator/calculator.component';
import { RelojComponent }       from './components/reloj/reloj.component';
import { BoxComponent }         from './components/box/box.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent,RelojComponent, BoxComponent],
  imports:      [BrowserModule, FormsModule],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule { }
