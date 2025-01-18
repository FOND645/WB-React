import { Item, ItemRate, Items } from "./items.ts";

export type ItemInInventory = {
    X: number,
    Y: number,
    item: Item,
    rate: ItemRate,
}

type ItemInBackUp = Omit<ItemInInventory, 'item'> & {
    itemId: number,
}

type InventoryBackUp = {
    width: number,
    height: number,
    items: ItemInBackUp[],    
}

const invBU = {
    width: 12,
    height: 12,
    items: [
      { X: 0, Y: 0, rate: 0, itemId: 1 },
      { X: 4, Y: 0, rate: 2, itemId: 6 },
      { X: 0, Y: 2, rate: 3, itemId: 2 },
      { X: 4, Y: 2, rate: 4, itemId: 3 },
      { X: 4, Y: 3, rate: 3, itemId: 5 },
      { X: 7, Y: 3, rate: 0, itemId: 6 },
      { X: 4, Y: 6, rate: 4, itemId: 3 },
      { X: 4, Y: 7, rate: 1, itemId: 5 },
      { X: 0, Y: 10, rate: 0, itemId: 4 }
    ]
}

class Inventory {
    items: ItemInInventory[] = [];
    itemsField: (ItemInInventory | undefined)[][] = [[]];
    width: number = 0;
    height: number = 0;

    constructor(jsonInv: string) {
        this.parseJSONinv(jsonInv);
    }

    parseJSONinv(jsonInv: string): void {
        const invData = JSON.parse(jsonInv) as InventoryBackUp;
        this.itemsField = Array(invData.width).fill(undefined).map(() => new Array(invData.height).fill(undefined));
        this.items = invData.items.map(Item => {
            const { X, Y, rate, itemId } = Item;
            const item = Items.find(I => I.id === itemId);
            if (!item) throw new Error(`Unknown item!\n${JSON.stringify(Item, null, 2)}`)
            return {
                X,
                Y,
                rate,
                item,
            }
        });

        console.log(this.itemsField);
        console.log(this.items)

        this.items.forEach(Item => {
            const { X, Y, item } = Item;
            for (let IX = X; IX < X + item.width; IX++) {
                for (let IY = Y; IY < Y + item.height; IY++) {
                    console.log(IX, X + item.width);
                    console.log(IY, Y + item.height);
                    console.log(Item);
                    if (this.itemsField[IX][IY]) throw new Error(`Items collision in backup!
                        ItemA: ${JSON.stringify({
                            X,
                            Y,
                            item,
                        }, null, 2)}

                        ItemB: ${JSON.stringify(this.itemsField[IX][IY], null, 2)}`);
                    this.itemsField[IX][IY] = Item;
                }
            }
            console.log("-----------------");
        })
    }
}

export const inventory = new Inventory(JSON.stringify(invBU));