/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return '${firstName.charAt(0)}. ${lastName}';
};
console.log(printTeacher("John", "Doe"));
// Implémentation de la classe
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Exemple d'utilisation
var student = new StudentClass("Alice", "Dupont");
console.log(student.displayName()); // Affiche "Alice"
console.log(student.workOnHomework()); // Affiche "Currently working"

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBT0YsSUFBTSxTQUFTLEdBQWM7SUFDM0IsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGVBQWUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBT3ZCLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQVMsRUFBRSxRQUFRO0lBQzlELE9BQU8scUNBQXFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFjekMsOEJBQThCO0FBQzlCO0lBQ0Usc0JBQW9CLFNBQWlCLEVBQVUsUUFBZ0I7UUFBM0MsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBRyxDQUFDO0lBRW5FLHFDQUFjLEdBQWQ7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCx3QkFBd0I7QUFDeEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7QUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLDhCQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG5cdHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSBsYXN0TmFtZTogc3RyaW5nO1xuXHRmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuXHR5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcblx0bG9jYXRpb246IHN0cmluZztcblx0W2tleTogc3RyaW5nXTogYW55O1xufVxuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG5cdG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5jb25zdCBkaXJlY3RvcjE6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJyxcbiAgbG9jYXRpb246ICdMb25kb24nLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBudW1iZXJPZlJlcG9ydHM6IDE3LFxufTtcblxuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuXHQoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT4ge1xuXHRyZXR1cm4gJyR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9Jztcbn07XG5cbmNvbnNvbGUubG9nKHByaW50VGVhY2hlcihcIkpvaG5cIiwgXCJEb2VcIikpO1xuXG5cbi8vIEludGVyZmFjZSBkw6ljcml2YW50IGxlIGNvbnN0cnVjdGV1clxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gIG5ldyAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBTdHVkZW50Q2xhc3NJbnRlcmZhY2U7XG59XG5cbi8vIEludGVyZmFjZSBkw6ljcml2YW50IGxhIGNsYXNzZVxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG4vLyBJbXBsw6ltZW50YXRpb24gZGUgbGEgY2xhc3NlXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nLCBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmcpIHt9XG5cbiAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDdXJyZW50bHkgd29ya2luZ1wiO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuLy8gRXhlbXBsZSBkJ3V0aWxpc2F0aW9uXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcyhcIkFsaWNlXCIsIFwiRHVwb250XCIpO1xuY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKTsgLy8gQWZmaWNoZSBcIkFsaWNlXCJcbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7IC8vIEFmZmljaGUgXCJDdXJyZW50bHkgd29ya2luZ1wiXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=