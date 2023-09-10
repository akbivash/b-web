import {create} from 'zustand'

interface Components {
    isSidebarOpen:boolean,
    hanldeSidebar:(state:any) => void
}

 const useComponents = create<Components>((set) => ({
    isSidebarOpen:false ,
    hanldeSidebar:() => set((state) => ({...state, isSidebarOpen:!state.isSidebarOpen}))
}))

export default useComponents