//Мінімум
//1)Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
  //обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    const car = {
        producer: "Japan",
        model: "Mazda",
        'maked year': 1998,
        'midle speed': 120,
        'fuel tank': 50,
        'fuel consumption': 8,
        drivers: 'Alex',

        //1.1) Метод, який виводить на екран інформацію про автомобіль.
        carInfo: function() {
            return `            Виробник - ${this.producer};
            Модель - ${this.model};
            Рік випуску - ${this['maked year']};
            Середня швидкість - ${this['midle speed']} км/год.;
            Об\'єм баку - ${this['fuel tank']} літрів;
            Витрата палива - ${this['fuel consumption']} літрів на 100км;
            Ім\'я водія - ${this.drivers}`
        },

        //1.2) Додавання ім’я водія у список
        addDriver: function(nextDriverName) {
            car.drivers = car.drivers + ', ' + nextDriverName;
            return car.drivers;
        },

        //1.3) Перевірка водія на наявність його ім’я у списку
        driverReview: function(name) {
            let array_drivers = car.drivers.split(', ');
            for (let i = 0; i < array_drivers.length; i++) {
                if (array_drivers[i] == name) {
                    return `Водій ${name} є в списку`
                } else {
                    continue
                }
            }
            return `Водя ${name} немає в списку`
        },

        //1.4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
             //Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
        calculate: function(distance) {
            let time = (distance / this['midle speed']);
                time = Math.floor(time + (time / 4));
            let fuel = ((100 * this['fuel consumption']) / this['midle speed']);
                fuel = Math.ceil((distance / 100) * fuel);
            return console.log(`Дану відстань Ви проїдете за ${time} годин, Вам потрібно ${fuel} літрів топлива`)
        },
    };

    // 1.1) 
    console.log(car.carInfo()) 

    // 1.2)
    console.log(car.addDriver('Oleg'));
    console.log(car.addDriver('Maxum'));
    

    // 1.3)
    console.log(car.driverReview('Alex'))
    console.log(car.driverReview('Vitaliy'))
    console.log(car.driverReview('Oleg'))
    console.log(car.driverReview('Kolya'))

    // 1.4)
    car.calculate(1200)

//Норма   
// 2)Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    const time = {
        hour: 15,
        minute: 25,
        second: 36,
      
        // 2.1) Для виведення часу на екран.
        showTime: function() {
            return `Даний час ${this.hour}:${this.minute}:${this.second}`
        },

        // 2.2) Зміни часу на передану кількість секунд.
        changeSeconds: function(seconds) {
            if (seconds != Number(seconds)) {
                return 'Введіть число!';
            } else if ((seconds + this.second) >= 60 && (seconds + this.second) < 3600) {
                time.minute = time.minute + Math.floor((seconds + this.second)  / 60);
                time.second = (seconds + this.second) % 60;
                return 
            } else {
                time.second = seconds + this.second;
                return 
            }
        },

        // 2.3) Зміни часу на передану кількість хвилин.
        changeMinutes: function(minutes) {
            if (minutes != Number(minutes)) {
                return 'Введіть число!';
            } else if ((minutes + this.minute) >= 60 && (minutes + this.minute) < 1440) {
                time.hour = time.hour + Math.floor((minutes + this.minute) / 60);
                time.minute = (minutes + this.minute) % 60;
                return
            } else {
                time.minute = minutes + this.minute
                return 
            }
        },

        // 2.4) Зміни часу на передану кількість годин.
        //Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: 
        //якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно 
        //передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
        changeHours: function(hours) {
            if ((hours + this.hour) >= 24) {
                time.hour = (hours + this.hour) % 24;
                return 
            } else {
                time.hour += hours;
                return 
            }
        }
    }

    // 2.1)
    console.log(time.showTime()) 

    // 2.2)
    time.changeSeconds(10)
    console.log(time.showTime())

    // 2.3)
    time.changeMinutes(20)
    console.log(time.showTime())

    // 2.4)
    time.changeHours(4)
    console.log(time.showTime())

//Максимум
// 3) Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
    const obj1 = {
        numerator: 3,
        denominator: 9,

        // 3.1) Складання 2-х об'єктів-дробів.
        sum: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;

            let tempNumerator = this.numerator;
            let tempDenominator = this.denominator;
            
            if (tempDenominator == b) {
                a = tempNumerator + a;
                 return `Сума дробів =  ${a}/${tempDenominator}`;
            } else {
                let result = b * tempDenominator
                a = a * (result / b)
                tempNumerator = tempNumerator * (result / tempDenominator)
                let numerator = a + tempNumerator;

                // Округлення результату додавання
                for (let i = 1; i < result; i++) {
                    if (numerator % i == 0 &&  result % i == 0) {
                        numerator = numerator / i, 
                        result = result / i;
                    } 
                }
                return `Сума дробів =  ${numerator}/${result}`;
            }
        },

        // 3.2) Віднімання 2-х об'єктів-дробів.
        minus: function() {
            let a = obj2.numerator;
            let b = obj2.denominator;

            let tempNumerator = this.numerator;
            let tempDenominator = this.denominator;


            if (tempDenominator == b) {
                a = this.numerator - a;
                 return `Різниця дробів =  ${a}/${tempDenominator}`
            } else {
                let result = b * tempDenominator
                a = a * (result / b)
                tempNumerator = tempNumerator * (result / tempDenominator)
                let numerator = tempNumerator - a;

                // Округлення результату віднімання
                for (let i = 1; i < result; i++) {
                    if (numerator % i === 0 &&  result % i === 0) {
                        numerator = numerator / i, 
                        result = result / i;
                    } 
                }
                return `Різниця дробів =  ${numerator}/${result}`
            }
        },

        // 3.3) Множення 2-х об'єктів-дробів.
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
            return `Добуток дробів =  ${numerator}/${denominator}`
        },

        // 3.4) Ділення 2-х об'єктів-дробів.
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
            return `Частка дробів =  ${numerator}/${denominator}`
        },

        // 3.5) Скорочення об'єкта-дробу.
        //(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)
        //з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
        abbreviation: function() {
            let a = this.numerator;
            let b = this.denominator;

            for (let i = 1; i < b; i++) {
                if (a % i === 0 &&  b % i === 0) {
                    a = a / i, 
                    b = b / i;
                } 
            }
            return `Cкорочений дріб =  ${a}/${b}`
        },
    };

    const obj2 = {
        numerator: 1,
        denominator: 12,
    };


    // 3.1) Додавання
    console.log(obj1.sum()) 
     

    // 3.2) Віднімання
    console.log(obj1.minus())
    

    // 3.3) Множення
    console.log(obj1.multiplication())
    

    // 3.4) Ділення
    console.log(obj1.division())
    

    // 3.5) Скорочення
    console.log(obj1.abbreviation())
    

    
    
    



    

