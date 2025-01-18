import React from "react"
import { ItemInInventory } from "./inventory"

const colors = ['gray', 'yellow', 'orange', 'red', 'green']

export const Item: React.FC<{Item: ItemInInventory}> = ({ Item }) => {
    const { X, Y, item, rate } = Item;
    const style: React.CSSProperties = {
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: colors[rate],
        boxSizing: 'border-box',
        position: 'absolute',
        top: `${Y * 75}px`,
        left: `${X * 75}px`,
        width: `${(item.width) * 75}px`,
        height: `${item.height * 75}px`,
    }
    return (
        <img style={style} src={item.icon} alt={item.name}/>
    )
}