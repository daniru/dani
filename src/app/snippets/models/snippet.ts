import moment from 'moment-es6';

export class Snippet {
  $key: string | null;
  title: string;
  date_created: moment.Moment | string;
  date_published: moment.Moment | string | null;
  date_reviewed: moment.Moment | string | null;
  language: string;
  category: string;
  description: string;
  code: string;
  extension: string;
}
