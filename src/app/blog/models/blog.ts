import moment from 'moment-es6';
import { Section } from './section';

export interface Blog {
  key: string;
  header: string | null;
  title: string;
  date_created: moment.Moment;
  date_published: moment.Moment | null;
  sections: Section[];
}
