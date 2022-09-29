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
        drivers: {
            first: 'Alex',
        },

        //1.1) Метод, який виводить на екран інформацію про автомобіль.
        carInfo: function() {
            console.log(`Виробник - ${this.producer}`)
            console.log(`Модель - ${this.model}`)
            console.log(`Рік випуску - ${this['maked year']}`)
            console.log(`Середня швидкість - ${this['midle speed']} км/год.`)
            console.log(`Об\'єм баку - ${this['fuel tank']} літрів`)
            console.log(`Витрата палива - ${this['fuel consumption']} літрів на 100км.`)
            console.log(`Ім\'я водія - ${this.drivers.first}`)
        },

        //1.2) Додавання ім’я водія у список
        addDriver: function(key, nextDriverName) {
            car.drivers[key] = nextDriverName;
        },

        //1.3) Перевірка водія на наявність його ім’я у списку
        driverReview: function(name) {
            for (driver in this.drivers) {
                if (name == this.drivers[driver]) {
                    return console.log(`Водій ${name} є в списку`)
                } else  {
                    continue
                }
            }

            if (name !== this.drivers[driver]) {
                return console.log(`Водя ${name} немає в списку`)
            } 
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
    car.carInfo()

    // 1.2)
    car.addDriver('second', 'Oleg')
    console.log(car)

    // 1.3)
    car.driverReview('Alex')
    car.driverReview('Vitaliy')
    car.driverReview('Oleg')

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
            return console.log(`Даний час ${this.hour}:${this.minute}:${this.second}`)
        },

        // 2.2) Зміни часу на передану кількість секунд.
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

        // 2.3) Зміни часу на передану кількість хвилин.
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

        // 2.4) Зміни часу на передану кількість годин.
        //Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: 
        //якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно 
        //передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
        changeHours: function(hours) {
            if (hours >= 24) {
                hours = hours % 24;
                return console.log(`Даний час ${hours}:${time.minute}:${time.second}`)
            } else {
                return console.log(`Даний час ${hours}:${time.minute}:${time.second}`)
            }
        }
    }

    // 2.1)
    time.showTime()

    // 2.2)
    time.changeSeconds(10)
    time.changeSeconds(67)

    // 2.3)
    time.changeMinutes(15)
    time.changeMinutes(67)

    // 2.4)
    time.changeHours(23)
    time.changeHours(52)

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
                 return console.log(`Сума дробів =  ${a}/${tempDenominator}`)
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
                return console.log(`Сума дробів =  ${numerator}/${result}`)
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
                 return console.log(`Різниця дробів =  ${a}/${tempDenominator}`)
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
                return console.log(`Різниця дробів =  ${numerator}/${result}`)
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
            return console.log(`Добуток дробів =  ${numerator}/${denominator}`)
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
            return console.log(`Частка дробів =  ${numerator}/${denominator}`)
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
            return console.log(`Cкорочений дріб =  ${a}/${b}`)
        },
    };

    const obj2 = {
        numerator: 1,
        denominator: 12,
    };


    // 3.1) Додавання
    obj1.sum()
     

    // 3.2) Віднімання
    obj1.minus()
    

    // 3.3) Множення
    obj1.multiplication()
    

    // 3.4) Ділення
    obj1.division()
    

    // 3.5) Скорочення
    obj1.abbreviation()
    

    
    
    



    

