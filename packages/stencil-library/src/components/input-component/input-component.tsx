import { Component, Event, EventEmitter, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-component',
  styleUrl: 'input-component.css',
  shadow: true,
})
export class InputComponent {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() value: string;
  @Event() valueChange: EventEmitter;

  @Listen('ionInput')
  handleInputChange(event: CustomEvent) {
    const field = event.detail
    this.valueChange.emit(field.value)
  }

  render() {
    return (
      <ion-input 
        label={this.label} 
        fill="outline" 
        placeholder={this.placeholder} 
      >
      </ion-input>
    );
  }

}
