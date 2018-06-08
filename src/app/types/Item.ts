/* Type for reddit response items */
export class Item {
  key: string;
  parentKey: string;
  kind: string;
  data: {
    depth: number,
    replies: any,
    id: string,
    parent_id: string;
  }
}
