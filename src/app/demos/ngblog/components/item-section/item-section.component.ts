import { Component, Input  } from '@angular/core';
import { Section } from '../../services/models/section';

@Component({
  selector: 'dr-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent {

  @Input() section: Section;

}
