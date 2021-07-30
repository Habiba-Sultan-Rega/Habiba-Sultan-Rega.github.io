String.prototype.filter = function(...bannedWords) {
    return bannedWords.reduce((acc, element) => acc.replace(element, '').trim(), this);
}

Array.prototype.bubbleSort = function () {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return this;
}

 var Person = function() {};

 Person.prototype.initialize = function (name, age) {
     this.name = name;
     this.age = age;
 }
Person.prototype.describe= function()
    {
        return this.name + ', '+this.age + ' years old.';
    }

var Teacher = function(){};

Teacher.prototype = new Person();

Teacher.prototype.teach= function(course)
{
    console.log(`${this.name} is now teaching ${course}`);
    return `${this.name} is now teaching ${course}`;
}

var teacher = new Teacher();
teacher.initialize("Aziza", 25);
teacher.teach("WAP");
