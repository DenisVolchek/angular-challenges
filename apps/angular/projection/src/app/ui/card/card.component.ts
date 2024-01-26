import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent, NgTemplateOutlet],
})
export class CardComponent {
  @Output() add = new EventEmitter<void>();

  @Input() list: any[] | null = null;
  @Input() template?: TemplateRef<any>;

  constructor() {}
}
