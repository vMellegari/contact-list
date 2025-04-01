import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contato'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Vinicius Mellegari',
      phone: '(41) 00000-0000',
      email: 'vini.a.mellegari@gmail.com'
    },
    {
      id: 2,
      name: 'Joao Pedro',
      phone: '(41) 11111-1111',
      email: 'joao.pedro@gmail.com'
    },
    {
      id: 3,
      name: 'Maria Clara',
      phone: '(41) 22222-2222',
      email: 'maria.clara@gmail.com'
    },
    {
      id: 4,
      name: 'Ana Beatriz',
      phone: '(41) 33333-3333',
      email: 'ana.beatriz@gmail.com'
    },
    {
      id: 5,
      name: 'Lucas Silva',
      phone: '(41) 44444-4444',
      email: 'lucas.silva@gmail.com'
    },
    {
      id: 6,
      name: 'Fernanda Souza',
      phone: '(41) 55555-5555',
      email: 'fernanda.souza@gmail.com'
    },
    {
      id: 7,
      name: 'Joao Carlos',
      phone: '(41) 66666-6666',
      email: 'joao.carlos@gmail.com'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const exists = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (exists) {
        alert('Já existe um contato com esse nome.')
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const index = state.itens.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload)
      ]
    }
  }
})

export const { register, edit, remove } = contactSlice.actions
export default contactSlice.reducer
