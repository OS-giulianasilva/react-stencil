import { Component, Event, EventEmitter, Prop, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'radio-component',
  styleUrl: 'radio-component.css',
  // shadow: true, WHY?????
})
export class RadioComponent {

  @Prop() options: string[];
  @State() value: string = "primary";
  @Event() changeValue: EventEmitter;

  @Listen('ionChange')
  ionChangeHandler(event: CustomEvent){
    const field = event.target as HTMLInputElement
    this.changeValue.emit(field.value);
  }

  render() {
    return (
      <ion-radio-group value={this.value}>
        {this.options.map((option) =>
          <div>
            <ion-radio value={option} color={option} label-placement="end">{option} </ion-radio> <br />
          </div>
        )}
      </ion-radio-group>
    );
  }

}
