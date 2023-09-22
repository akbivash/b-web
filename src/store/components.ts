import {create} from 'zustand'

interface Components {
    isSidebarOpen:boolean,
    hanldeSidebar:(state:any) => void,
    closeSidebar:() => void
}

 const useComponents = create<Components>((set) => ({
    isSidebarOpen:false ,
    hanldeSidebar:() => set((state) => ({...state, isSidebarOpen:!state.isSidebarOpen})),
    closeSidebar:() => set((state) => ({...state, isSidebarOpen:false}))
}))

export default useComponents