define([], () => {
    'use strict';

    class ImagesSetOrder {
        constructor(x, y) {

            this.x = x;
            this.y = y;
            this.order = [];
            this.basicOrder = [];
        }

        getOrder() {
            return this.order;
        }
        setReverseOrder() {
            return this.order.reverse();
        }

        saveOrder() {
            this.basicOrder = this.order;
        }
        shuffle() {
            this.saveOrder();
            let order0 = this.order.slice(0, (Math.floor(this.order.length / 2) + this.order.length % 2));
            let order1 = this.order.slice().reverse().slice(0, (Math.floor(this.order.length / 2) + this.order.length % 2));


            this.order = [];
            for (let i = 0; i < order0.length; i++) {
                this.order.push(order0[i]);
                this.order.push(order1[i]);
            }
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
            this.basicOrder = this.order;
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


    class ImagesSetIteratorBee2 extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let m = 0; m < this.x + this.y - 1; m++) {
                for (let j = 0; j < this.y; j++) {
                    for (let i = 0; i < this.x; i++) {
                        if (i + j === m) {
                            this.order.push([j, i]);
                        }
                    }
                }
            }

        }
    }

    class ImagesSetIteratorChess extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.x; i++) {

                for (let j = i % 2; j < this.y; j += 2) {

                    this.order.push([i, j]);
                }
            }

            for (let i = 0; i < this.x; i++) {

                for (let j = (i + 1) % 2; j < this.y; j += 2) {

                    this.order.push([i, j]);
                }
            }

        }
    }


    class ImagesSetIteratorChess3D extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            for (let i = 0; i < this.x; i++) {

                for (let j = i % 3; j < this.y; j += 3) {

                    this.order.push([i, j]);
                }
            }

            for (let i = 0; i < this.x; i++) {

                for (let j = (i + 1) % 3; j < this.y; j += 3) {

                    this.order.push([i, j]);
                }
            }

            for (let i = 0; i < this.x; i++) {

                for (let j = (i + 2) % 3; j < this.y; j += 3) {

                    this.order.push([i, j]);
                }
            }


        }
    }
    class ImagesSetIteratorRainbow extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            // this.order.push([0, 0]);
            // this.order.push([0, 1]);

            for (let i = 0; i < this.x; i++) {
                for (let j = 0; j < this.y; j++) {
                    this.order.push([i, j]);
                }

            }

        }

    }



    class ImagesSetIteratorRainbow2 extends ImagesSetOrder {
        constructor(x, y) {
            super(x, y);

            // this.order.push([0, 0]);
            // this.order.push([0, 1]);
            for (let j = 0; j < this.y; j++) {

                for (let i = 0; i < this.x; i++) {
                    this.order.push([i, j]);
                }

            }

        }

    }



    class ImagesSetIteratorFactory {
        constructor(x, y, order, shuffled) {
            this.x = x;
            this.y = y;
            this.order = order;
            this.shuffled = shuffled;
        }
        get(shuffled = false) {
            let iterator = null;

            switch (this.order) {
                case 'snail':
                    iterator = new ImagesSetIterator(this.x, this.y);
                    break;
                case 'snake':
                    iterator = new ImagesSetIteratorSnake(this.x, this.y);
                    break;
                case 'snake2':
                    iterator = new ImagesSetIteratorSnake2(this.x, this.y);
                    break;
                case 'bee':
                    iterator = new ImagesSetIteratorBee(this.x, this.y);
                    break;
                case 'bee2':
                    iterator = new ImagesSetIteratorBee2(this.x, this.y);
                    break;
                case 'chess':
                    iterator = new ImagesSetIteratorChess(this.x, this.y);

                    break;
                case 'chess3d':
                    iterator = new ImagesSetIteratorChess3D(this.x, this.y);
                    break;
                case 'rainbow':
                    iterator = new ImagesSetIteratorRainbow(this.x, this.y);
                    break;
                case 'rainbow2':
                    iterator = new ImagesSetIteratorRainbow2(this.x, this.y);
                    break;


            }

            if (shuffled) {
                this.shuffled = true;

                iterator.shuffle();

            }

            return iterator;
        }

        set(order, shuffled = false) {
            this.order = order;
            if (shuffled) {
                this.shuffled = shuffled;
            }



        }
    }

    return {
        ImagesSetIterator,
        ImagesSetIteratorFactory
    }
});