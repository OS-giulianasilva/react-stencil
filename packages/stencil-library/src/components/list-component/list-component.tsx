import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-component',
  styleUrl: 'list-component.css',
  shadow: true,
})
export class ListComponent {

  render() {
    return (
      <ul>
        <slot></slot>
      </ul>
    );
  }

}
