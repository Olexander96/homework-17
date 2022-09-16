//1)
    /*const car = {
        producer: "Japan",
        model: "Mazda",
        'maked year': 1998,
        'midle speed': 120,
        'fuel tank': 50,
        'fuel consumption': 8,
        driver: 'Alex',

        carInfo: function() {
            console.log(`Виробник - ${this.producer}`)
            console.log(`Модель - ${this.model}`)
            console.log(`Рік випуску - ${this['maked year']}`)
            console.log(`Середня швидкість - ${this['midle speed']} км/год.`)
            console.log(`Об\'єм баку - ${this['fuel tank']} літрів`)
            console.log(`Витрата палива - ${this['fuel consumption']} літрів на 100км.`)
            console.log(`Ім\'я водія - ${this.driver}`)
        },

        addDriver: function() {
            car.secondDriver = 'Oleg';
        },

        driverReview: function(name) {
            if (name == car.driver) {
                return console.log(`Водій ${name} є в списку`)
            } else if (name != car.driver) {
                return console.log(`Водія ${name} немає в списку`)
            }
        },

        calculate: function(distance) {
            let time = (distance / this['midle speed']);
                time = Math.floor(time + (time / 4));
            let fuel = ((100 * this['fuel consumption']) / this['midle speed']);
                fuel = Math.ceil((distance / 100) * fuel);
            return console.log(`Дану відстань Ви проїдете за ${time} годин, Вам потрібно ${fuel} літрів топлива`)
        },
    };*/

    // 1.1) 
    // car.carInfo()

    // 1.2)
    // car.addDriver()
    // console.log(car)

    // 1.3)
    // car.driverReview('Alex')
    // car.driverReview('Vitaliy')

    // 1.4)
    // car.calculate(1200)

// 2)
    /*const time = {
        hour: 15,
        minute: 25,
        second: 36,

        showTime: function() {
            return console.log(`Даний час ${this.hour}:${this.minute}:${this.second}`)
        },

        changeSeconds: function(seconds) {
            if (seconds != Number(seconds)) {
                return console.log('Введіть число!')
            } else if (seconds >= 60 && seconds < 3600) {
                time.minute = time.minute + Math.floor(seconds / 60);
                seconds = seconds % 60;
                return console.log(`Даний час ${time.hour}:${time.minute}:${seconds}`)
            } else {
                return console.log(`Даний час ${time.hour}:${time.minute}:${seconds}`)
            }
        },

        changeMinutes: function(minutes) {
            if (minutes != Number(minutes)) {
                return console.log('Введіть число!')
            } else if (minutes >= 60 && minutes < 1440) {
                time.hour = time.hour + Math.floor(minutes / 60);
                minutes = minutes % 60;
                return console.log(`Даний час ${time.hour}:${minutes}:${time.second}`)
            } else {
                return console.log(`Даний час ${time.hour}:${minutes}:${time.second}`)
            }
        },

        changeHours: function(hours) {
            if (hours >= 24) {
                hours = hours % 24;
                return console.log(`Даний час ${hours}:${time.minute}:${time.second}`)
            } else {
                return console.log(`Даний час ${hours}:${time.minute}:${time.second}`)
            }
        }
    }*/

    // 2.1)
    // time.showTime()

    // 2.2)
    // time.changeSeconds(10)
    // time.changeSeconds(67)

    // 2.3)
    // time.changeMinutes(15)
    // time.changeMinutes(67)

    // 2.4)
    // time.changeHours(23)
    // time.changeHours(52)

// 3) 
    const obj1 = {
        numerator: 3,
        denominator: 9,

        sum: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;
            
            if (this.denominator == b) {
                a = this.numerator + a;
                 return console.log(`Сума дробів =  ${a}/${this.denominator}`)
            } else {
                let result = b * this.denominator
                a = a * (result / b)
                this.numerator = this.numerator * (result / this.denominator)
                let numerator = a + this.numerator;

                // Округлення результату додавання
                for (let i = 1; i < result; i++) {
                    if (numerator % i === 0 &&  result % i === 0) {
                        numerator = numerator / i, 
                        result = result / i;
                    } 
                }
                return console.log(`Сума дробів =  ${numerator}/${result}`)
            }
        },

        minus: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;
            if (this.denominator == b) {
                minused = this.numerator - a;
                 return console.log(`Різниця дробів =  ${a}/${this.denominator}`)
            } else {
                let result = b * this.denominator
                a = a * (result / b)
                this.numerator = this.numerator * (result / this.denominator)
                let numerator = this.numerator - a;

                // Округлення результату віднімання
                for (let i = 1; i < result; i++) {
                    if (numerator % i === 0 &&  result % i === 0) {
                        numerator = numerator / i, 
                        result = result / i;
                    } 
                }
                return console.log(`Різниця дробів =  ${numerator}/${result}`)
            }
        },

       multiplication: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;

            numerator = this.numerator * a;
            denominator = this.denominator * b;

            // Округлення результату множення
            for (let i = 1; i < denominator; i++) {
                if (numerator % i === 0 &&  this.denominator % i === 0) {
                    numerator = numerator / i, 
                    denominator = denominator / i;
                } 
            }
            return console.log(`Добуток дробів =  ${numerator}/${denominator}`)
        },

        division: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;

            numerator = this.numerator * b;
            denominator = this.denominator * a;

            // Округлення результату ділення
            for (let i = 1; i < denominator; i++) {
                if (numerator % i === 0 &&  this.denominator % i === 0) {
                    numerator = numerator / i, 
                    denominator = denominator / i;
                } 
            }
            return console.log(`Частка дробів =  ${numerator}/${denominator}`)
        },

        abbreviation: function() {
            let a = this.numerator;
            let b = this.denominator;

            for (let i = 1; i < b; i++) {
                if (a % i === 0 &&  b % i === 0) {
                    a = a / i, 
                    b = b / i;
                } 
            }
            return console.log(`Cкорочений дріб =  ${a}/${b}`)
        },
    };

    const obj2 = {
        numerator: 1,
        denominator: 12,
    };


    // 3.1) Додавання
    // obj1.sum()
     

    // 3.2) Віднімання
    // obj1.minus()
    

    // 3.3) Множення
    // obj1.multiplication()
    

    // 3.4) Ділення
    // obj1.division()
    

    // 3.5) Скорочення
    //obj1.abbreviation()
    

    
    
    



    

