import { Section } from './section';

export interface Blog {
  key: string;
  header: string | null;
  github: string;
  title: string;
  date_created: Date;
  date_published: Date | null;
  sections: Section[];
}
