const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts:[]
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Appetizer: ${appetizer.name}, Main Course: ${main.name}, Dessert: ${dessert.name}, Total Price: ${totalPrice}`;
    },
};

menu.addDishToCourse('appetizers', 'Salad', 4.00);
menu.addDishToCourse('appetizers', 'Wings', 4.50);
menu.addDishToCourse('appetizers', 'Fries', 5.00);

menu.addDishToCourse('mains', 'steak', 12.50);
menu.addDishToCourse('mains', 'chicken', 9.95);
menu.addDishToCourse('mains', 'hamburger', 8.95);

menu.addDishToCourse('desserts', 'ice cream', 3.50);
menu.addDishToCourse('desserts', 'brownie', 2.50);
menu.addDishToCourse('desserts', 'cookie', 3.00);

let meal = menu.generateRandomMeal();
console.log(meal);