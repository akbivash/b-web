import { MouseEventHandler } from 'react'
import {create} from 'zustand'

interface Components {
    isSidebarOpen:boolean,
    hanldeSidebar:MouseEventHandler<HTMLDivElement>,
    closeSidebar:() => void
}

 const useComponents = create<Components>((set) => ({
    isSidebarOpen:false ,
    hanldeSidebar:() => set((state) => ({...state, isSidebarOpen:!state.isSidebarOpen})),
    closeSidebar:() => set((state) => ({...state, isSidebarOpen:false}))
}))

export default useComponents