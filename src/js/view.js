export default class View {
    constructor() {
        // İnterfeysdən lazım olan html elementlər
        this.display = document.getElementById('display');
        this.increaseButton = document.getElementById('increaseButton');
        this.decreaseButton = document.getElementById('decreaseButton');
    }

    // Bu metod increaseButton elementinə listener asmaq üçündü
    // və listener asanda, callback kimi, nə funksiya ona versək
    // o funksiyani click olanda buttona çağıracaq
    listenIncreaseButton(callback) {
        this.increaseButton.onclick = function() {
            callback();
        }
    }

    // Bu metod decreaseButton elementinə listener asmaq üçündü
    // və listener asanda, callback kimi, nə funksiya ona versək
    // o funksiyani buttona click olanda çağıracaq
    listenDecreaseButton(callback) {
        this.decreaseButton.onclick = function() {
            callback();
        }
    }

    // Bu funksiya inputun içərisindəki dəyəri yeniləmək
    // üçündü, nə dəyər versən,onu da yazacaq ora
    refreshDisplay(value) {
        this.display.value = value;
    }
}