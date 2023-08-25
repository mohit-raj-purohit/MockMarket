import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { clearCart } from '../actions';


export interface CartItem {
	id: number;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			state.items.push(action.payload);
		},
		deleteItem: (state) => {
			state.items = [];
		}
	},
	extraReducers(builder) {
		builder.addCase(clearCart, () => {
			return initialState;
		});
	},
});


export const {addItem, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;
