import { create } from 'zustand'

interface ModalStoreState {
  modal: boolean
}

interface ModalStoreActions {
  openModal: () => void
  closeModal: () => void
}

export const useModalStore = create<ModalStoreState & ModalStoreActions>((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}))