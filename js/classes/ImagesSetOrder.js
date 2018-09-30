define([], () => {
    'use strict';
    const ImagesSetOrder = function () {

    };

    const ImagesSetIterator = function (_x, _y) {

        let x = _x,
            y = _y,
            direction = [1, 0] /* direction expressed by right,bottom */ ,
            current = 0,
            xi = 0,
            yi = 0;
        const order = [],
            visited = [];



        while (order.length < x * y) {

            if (visited[xi] === undefined) {
                (visited[xi] = []);
            }

            current += 1;

            switch (direction.join()) {
                case '1,0':
                    if (xi >= x || visited[xi][yi] !== undefined) {
                        xi -= 1;
                        yi += 1;
                        direction = [0, 1];
                    } else {
                        order.push([xi, yi]);
                        visited[xi][yi] = true;
                        xi += 1;
                    }
                    break;
                case '0,1':
                    if (yi >= y || visited[xi][yi]) {
                        yi -= 1;
                        xi -= 1;
                        direction = [-1, 0];
                    } else {
                        order.push([xi, yi]);
                        visited[xi][yi] = true;
                        yi += 1;
                    }
                    break;
                case '-1,0':
                    if (xi < 0 || visited[xi][yi]) {
                        xi += 1;
                        yi -= 1;
                        direction = [0, -1];
                    } else {
                        order.push([xi, yi]);
                        visited[xi][yi] = true;
                        xi -= 1;
                    }
                    break;
                case '0,-1':
                    if (yi < 0 || visited[xi][yi]) {
                        yi += 1;
                        xi += 1;
                        direction = [1, 0];

                    } else {
                        order.push([xi, yi]);
                        visited[xi][yi] = true;
                        yi -= 1;
                    }
                    break;
            }

        }

        this.getOrder = () => {
            return order;
        };
        this.getReverseOrder = () => {
            return order.reverse();
        };

    };

    const ImagesSetIteratorSnake = function (_x, _y) {
        const order = [],
            visited = [];

        this.getOrder = () => {
            return order;
        };

        this.getReverseOrder = () => {
            return order.reverse();
        };

    };

    return {
        ImagesSetIterator,
        ImagesSetIteratorSnake
    };
});