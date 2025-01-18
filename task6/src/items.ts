
const kathanaImg = '/img/kathana.webp'
const swordImg = '/img/sword.webp'
const crossbowImg = '/img/crossbow.webp'
const helmetHeavyImg = '/img/helmet_heavy.webp'
const bootsHeavyImg = '/img/boots_heavy.webp'
const armorHeavyImg = '/img/armor_heavy.webp'

export type Item = {
    id: number,
    name: string,
    width: number,
    height: number,
    icon: string,
}

export enum ItemRate {
    COMMON,
    RARE,
    EPIC,
    LEGENDARY,
    COLLECTION
}

export const Items: Item[] = [
    {
        id: 1,
        name: 'Арбалет',
        width: 4,
        height: 2,
        icon: crossbowImg,
    },
    {
        id: 2,
        name: 'Броня самурая',
        width: 4,
        height: 8,
        icon: armorHeavyImg,
    },
    {
        id: 3,
        name: 'Катана',
        width: 8,
        height: 1,
        icon: kathanaImg,
    },
    {
        id: 4,
        name: 'Тесак',
        width: 9,
        height: 2,
        icon: swordImg,
    },
    {
        id: 5,
        name: 'Шлем самурая',
        width: 3,
        height: 3,
        icon: helmetHeavyImg,
    },
    {
        id: 6,
        name: 'Ботинки самурая',
        width: 4,
        height: 2,
        icon: bootsHeavyImg,
    }
]