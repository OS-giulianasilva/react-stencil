import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'label-component',
  styleUrl: 'label-component.css',
  shadow: true,
})
export class LabelComponent {

  @Prop() label: string = "Default Label"

  render() {
    return (
      <ion-label>{this.label}</ion-label>
    );
  }

}
