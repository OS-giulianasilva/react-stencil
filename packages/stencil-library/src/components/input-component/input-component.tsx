import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

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

  handleInputChange(event: Event) {
    const field = event.target as HTMLInputElement
    this.value = field.value;
    this.valueChange.emit(this.value)
  }

  render() {
    return (
      <ion-input label={this.label} fill="outline" placeholder={this.placeholder} value={this.value} 
      onInput={this.handleInputChange}></ion-input>
    );
  }

}
