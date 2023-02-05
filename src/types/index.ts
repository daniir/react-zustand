export type product = {
    id: string,
    name: string,
    quantity: number,
}

export type productForm = {
    name: string,
    quantity: number,
}

export interface State {
    myList: Array<product> | [],
    addItem: (payload: product) => void,
    removeItem: (id: string) => void,
    addOne: (id: string) => void,
    removeOne: (id: string) => void,
    clearList: () => void,
}