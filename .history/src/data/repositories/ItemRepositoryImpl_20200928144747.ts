import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  id: number = 0;
  name: string = "";
}

let memoryList = [{
  "id": 1,
  "name": "Sample 1",
}, {
  "id": 2,
  "name": "Sample 2",
 
}]

export class ItemRepositoryImpl implements ItemRepository {

  async GetItems(): Promise<Item[]> {
    var jsonString = JSON.stringify(memoryList)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: ItemDTO) => new Item(todoItem.id, todoItem.name));
  }
  async AddTodo(data:Item){
    
    memoryList.push(data)
   \
  }

  async DeleteTodo(data:Item) {
    console.log(data)
  }
}
