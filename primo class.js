class User {
    constructor(_firstName,_lastName,_age,_location){
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.age=_age;
        this.location=_location;
    }
    ageComparison(otherUser){
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
        }
    }
}



const gigi = new User('Gigi','Bianchi', 30, 'Milano');
console.log(gigi);
const franco = new User('Franco','Rossi', 40, 'Roma');
console.log(franco);

console.log(gigi.ageComparison(franco));
console.log(franco.ageComparison(gigi));