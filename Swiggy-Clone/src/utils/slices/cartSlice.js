import { createSlice,current } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        totalAmount: 0
    },
    reducers:{
        addItem:(State,action) =>{
            // Mutating Data
            const { id :ItemId, price, defaultPrice } = action.payload.info;

            const find = State.items.find((res) => res.info.id === ItemId);

            if(find){
                 find.quantity +=1;
            }
            else{
                  State.items.push({...action.payload, quantity: 1 });
            }
            
            State.totalAmount +=  (price || defaultPrice)/100;
            // console.log(current(State.items))
        },
        removeItem: (state,action) => {
            const { id: deleteId } = action.payload.info
            console.log(deleteId)

            // state.items.pop();
            const { items: existingItems } = state
            
            state.items = existingItems.filter((res) => res.info.id !== deleteId);

            let sum = 0;
            state.items.map((res) => {
              let totalSum  =   res.quantity*((res.info.price || res.info.defaultPrice)/100);
                sum += totalSum;
            })

            state.totalAmount = sum;
        },
        increaseQuantity: (state, action) => {
            const itemId  = action.payload.info;
            const item = state.items.find((res) => res.info.id === itemId);
            if (item) {
                item.quantity += 1;
            }
            state.totalAmount += (item.price || item.defaultPrice)/100
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload.info;
            const itemIndex = state.items.findIndex((res) => res.info.id === itemId);

            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                item.quantity -= 1;
                state.totalAmount -= (item.price || item.defaultPrice)/100
                if (item.quantity === 0) {
                    state.items.splice(itemIndex, 1);
                }
            }

        },

        clearItem: (State) =>{
            State.items = [];
            State.totalAmount = 0;
        }
    }
});


export const {addItem,removeItem,clearItem} = cartSlice.actions;
export default cartSlice.reducer;