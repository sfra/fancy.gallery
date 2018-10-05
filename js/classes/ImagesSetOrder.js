define([], () => {
    'use strict';
    class ImagesSetOrder {
        constructor(x, y) {

            this.x = x;
            this.y = y;

            // this.getOrder = () => {
            //     return this.order;
            // };

            // this.setReverseOrder = () => {
            //     return this.order.reverse();
            // };

            this.order = [];
        }

        getOrder() {
            return this.order;
        }
        setReverseOrder() {
            return this.order.reverse();
        }
    }

    class ImagesSetIterator extends ImagesSetOrder {

        constructor(x, y) {
            super(x, y);

            let direction = [1, 0] /* direction expressed by right,bottom */ ,
                current = 0,
                xi = 0,
                yi = 0;
            const visited = [];

            while (this.order.length < this.x * this.y) {

                if (visited[xi] === undefined) {
                    (visited[xi] = []);
                }

                current += 1;

                switch (direction.join()) {
                    case '1,0':
                        if (xi >= this.x || visited[xi][yi] !== undefined) {
                            xi -= 1;
                            yi += 1;
                            direction = [0, 1];
                        } else {
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
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
                            this.order.push([xi, yi]);
                            visited[xi][yi] = true;
                            yi -= 1;
                        }
                        break;
                }
            }
        }
    }

    class ImagesSetIteratorSnake extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.x; i++) {
                if (i % 2 === 0) {
                    for (let j = 0; j < this.y; j++) {
                        this.order.push([i, j]);
                    }
                }

                if (i % 2 === 1) {
                    for (let j = this.y - 1; j >= 0; j--) {
                        this.order.push([i, j]);
                    }
                }
            }
        }
    }



    class ImagesSetIteratorSnake2 extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.y; i++) {
                if (i % 2 === 0) {
                    for (let j = 0; j < this.x; j++) {
                        this.order.push([j, i]);
                    }
                }

                if (i % 2 === 1) {
                    for (let j = this.x - 1; j >= 0; j--) {
                        this.order.push([j, i]);
                    }
                }
            }
        }
    }


    class ImagesSetIteratorBee extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let m = 0; m < this.y + this.x - 1; m++) {
                for (let j = 0; j < this.x; j++) {
                    for (let i = 0; i < this.y; i++) {
                        if (i + j === m) {
                            this.order.push([j, i]);
                        }
                    }
                }
            }

        }
    }





    class ImagesSetIteratorFactory {
        constructor(x, y, order) {
            this.x = x;
            this.y = y;
            this.order = order;

        }
        get() {
            switch (this.order) {
                case 'snail':
                    return new ImagesSetIterator(this.x, this.y);
                case 'snake':
                    return new ImagesSetIteratorSnake(this.x, this.y);
                case 'snake2':
                    return new ImagesSetIteratorSnake2(this.x, this.y);
                case 'bee':
                    return new ImagesSetIteratorBee(this.x, this.y);

            }
        }
        set(order) {
            this.order = order;
        }
    }

    return {
        ImagesSetIterator,
        ImagesSetIteratorFactory
    }
});