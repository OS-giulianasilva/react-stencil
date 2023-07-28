import { Component, Prop, Watch, h } from '@stencil/core';
import { ButtonSize } from '../enums';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  // shadow: true,
})
export class ButtonComponent {

  @Prop() name: string;
  @Prop() color: string;
  @Prop() size: number;

  @Watch('size')
  formatSize() {
    console.log("formatSize")
  }

  render() {
    return (
      <ion-button size={ButtonSize[this.size]} color={this.color}>{this.name}</ion-button>
    );
  }

}
