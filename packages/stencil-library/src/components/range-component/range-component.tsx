import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'range-component',
  styleUrl: 'range-component.css',
  shadow: true,
})
export class RangeComponent {

  @Prop() label : string
  
  @Event() changeValue : EventEmitter;

  handleValueChange = (event: CustomEvent) => {
    console.log(event.detail);
    this.changeValue.emit(event.detail.value)
  }

  render() {
    return (
      <ion-range label={this.label} onIonChange={this.handleValueChange} ticks="true" snaps="true" min="0" max="2"></ion-range>
    );
  }

}
