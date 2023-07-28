import { Component, Prop, State, Watch, h } from '@stencil/core';
import { ButtonSize } from '../enums';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  // shadow: true,
})
export class ButtonComponent {

  @Prop() name: string;
  @Prop({ mutable: true }) color: string = "primary";
  @Prop({ mutable: true }) size: number;
  @State() bSize: string;

  @Watch('size')
  formatSize() {
    console.log("formatSize")
    this.bSize = ButtonSize[this.size]
  }

  render() {
    return (
      <ion-button size={ButtonSize[this.size]} color={this.color}>{this.name}</ion-button>
    );
  }

}
