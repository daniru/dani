import moment from 'moment-es6';
import { Section } from './section';

export interface Blog {
  $key: string | null;
  key: string;
  title: string;
  date_created?: moment.Moment | string | null;
  date_published?: moment.Moment | string | null;
  tags: string[];
  github?: string;
  sections: Section[];
}
