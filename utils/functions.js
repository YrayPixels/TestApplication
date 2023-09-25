import AsyncStorage from "@react-native-async-storage/async-storage";

export async function AddItem(item) {
    const cart_item = await AsyncStorage.getItem('cartitems');
    if (cart_item !== null) {
        let cartItems = JSON.parse(cart_item)
        const existingItem = cartItems.find((existing) => existing.name === item.name);
        if (!existingItem) {
            cartItems.push(item);
            AsyncStorage.setItem('cartitems', JSON.stringify(cartItems))
            return { status: true, message: `Added ${item.name} to  Cart.` };
        } else {
            return { status: false, message: `${item.name} already  in Cart. Not added.` };
        }
    } else {
        let newArray = [];
        newArray.push(item);
        await AsyncStorage.setItem('cartitems', JSON.stringify(newArray));
        return { status: true, message: `Added ${item.name} to Cart.` };
    }
}

export async function deleteItem(itemName) {
    const cart_item = await AsyncStorage.getItem('cartitems');
    if (cart_item !== null) {
        let cartItems = JSON.parse(cart_item)
        const index = cartItems.findIndex((item) => item.name === itemName);
        if (index !== -1) {
            items.splice(index, 1);
            // cartItems.push(item);
            AsyncStorage.setItem('cartitems', JSON.stringify(cartItems))
            return { status: true, message: `Removed ${item.name} from  Cart.` };
        } else {
            return { status: true, message: `Can't remove ${item.name} from  Cart.` };
        }
    }
}