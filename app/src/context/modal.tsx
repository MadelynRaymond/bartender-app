import React from "react"

export type ModalContextType = {
    isOpen: boolean,
    setModalOpen: () => void,
    setModalClosed: () => void
}

export const ModalContext = React.createContext<ModalContextType | null>(null)

type ModalContextProps = {
    value?: ModalContextType
    children?: React.ReactNode
}
const ModalProvider = ({children}: ModalContextProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    const setModalOpen = () => setIsOpen(true)

    const setModalClosed = () => setIsOpen(false)


    return <ModalContext.Provider value={{isOpen, setModalOpen, setModalClosed}}>{children}</ModalContext.Provider>
}

export default ModalProvider