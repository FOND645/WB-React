import { Item, Items } from "./items";

type InvBackUp = {
    width: number,
    height: number,
    items: {
        X: number,
        Y: number,
        itemId: number,
        rate: ItemRating,
    }[],
}

enum ItemRating {
    COMMON,
    UNIQ,
    EPIC,
    COLLECTION
}

type ItemInInv = {
    X: number,
    Y: number,
    item: Item,
    rate: ItemRating,
}

type Inv = {
    width: number;
    height: number;
    field: (ItemInInv | null)[][];
    items: ItemInInv[]
}

export function parseJSONinv(jsonInv: string): Inv {
    const invData = JSON.parse(jsonInv) as InvBackUp;
    const field: (ItemInInv | null)[][] = Array(invData.width).fill(Array(invData.height).fill(null));
    const items: ItemInInv[] = [];
    invData.items.forEach(itemBackUp => {
        const item = Items.find(item => itemBackUp.itemId === item.id);
        if (!item) throw new Error('Unknown item!');
        let { X, Y } = itemBackUp;
        for (; X <= X + item.width; X++) {
            for (; Y <= Y + item.height; Y++) {
                if (X >= invData.width || Y >= invData.width) throw new Error('Item is out of inv!');
                if (field[X][Y]) {
                    throw Error('Items collision!');
                } else {
                    const itemInInv: ItemInInv = {
                        X: itemBackUp.X,
                        Y: itemBackUp.Y,
                        rate: itemBackUp.rate,
                        item,
                    };
                    field[X][Y] = itemInInv;
                    items.push(itemInInv);
                }
            }
        }
    })
    return {
        width: invData.width,
        height: invData.height,
        field,
        items: items, 
    }
}

export function getDOMImgForItem(item: ItemInInv): HTMLImageElement {
    const img = document.createElement('img');
    const { style } = img;
    style.gridColumnStart = item.X.toString();
    style.gridColumnEnd = (item.X + item.item.width).toString();

    style.gridRowStart = item.Y.toString();
    style.gridRowEnd = (item.Y + item.item.height).toString();

    img.src = item.item.icon;
    return img;
}