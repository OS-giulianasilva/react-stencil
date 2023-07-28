import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {

  @Prop() cardTitle : string = "Title"
  @Prop() cardSubtitle : string = "Subtitle"

  render() {
    return (
      <ion-card>
        <ion-card-header>
          <ion-card-title>{this.cardTitle}</ion-card-title>
          <ion-card-subtitle>{this.cardSubtitle}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <slot></slot>
        </ion-card-content>
      </ion-card>
    );
  }

}
