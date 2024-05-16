export module TodoItemModels {
  export interface TodoItemModel {
    slug: string;
    title: string;
    description?: string;
    completed: boolean;
  }
}
