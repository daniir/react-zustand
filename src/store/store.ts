import { create } from 'zustand'
import { product, State } from '../types/index'

export const useStore = create<State>((set) => ({
    myList: [],
    addItem: (payload: product) => set(
        (state) => ({ myList: [...state.myList, payload] })
    ),
    removeItem: (id: string) => set(
        (state) => ({ myList: state.myList.filter(e => e.id !== id) })
    ),
    addOne: (id: string) => set(
        (state) => ({
            myList: state.myList.map(
                e => e.id === id ?
                {
                    ...e,
                    quantity: e.quantity + 1
                }
                : e
            )
        })
    ),
    removeOne: (id: string) => set(
        (state) => ({
            myList: state.myList.map(
                e => e.id === id && e.quantity > 1 ?
                {
                    ...e,
                    quantity: e.quantity - 1
                }
                : e
            )
        })
    ),
    clearList: () => set(
        (state) => ({myList: []})
    ),
}))