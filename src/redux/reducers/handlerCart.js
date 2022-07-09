const cart = [];

const handlerCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if item already exists
            const exists = state.find((x) => x.id === product.id);

            if (exists) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;

                return [
                    ...state, {
                        ...product,
                        qty: 1,
                    }
                ]
            }

        case "DELITEM":
            const exists1 = state.find((x) => x.id === product.id);
            if (exists1.qty === 1) {
                return state.filter((x) => x.id !== exists1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
        case "CLEARCART":
            state = [];
        default:
            return state;

    }
}

export default handlerCart;