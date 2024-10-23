import { create } from "zustand";


interface cart {
  id:number,
image:any,
  title:string,
  price:number,
  Detail:string,
  Description:string
}

interface myarray{
  [key: string]: cart;
}
type counter:number
export const useCounter = create((set) => {
  return {
    counter: 0,
    incrCounter: () => set((state:number) => ({ counter: state.counter + 1 })),
  };
});