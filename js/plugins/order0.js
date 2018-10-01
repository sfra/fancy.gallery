define([], () => {
    const order = (x, y, index) => {
        let direction = null;
        if (!index % 2) {
            direction = {
                x: 1,
                x: y
            };
        }


        return [parseInt(index / x), index % x];

    };

    return order;

});