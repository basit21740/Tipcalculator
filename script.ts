/*
 * This is Tip Calculator Program
 *
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */

import promptSync from "prompt-sync"
const prompt = promptSync()

function tipccalc (){
    // Input
    const billString = ("Enter your bill")
    const bill = parseInt(billString)
    const tipString = prompt("Enter the percentage of how much tip you want to give")
    const tip = parseInt(tipString)
    
    // Calculatiions
    var tipValue = bill * (tip/100)
    var finalBill = bill + tipValue
    console.log("Your total bill is " + finalBill + "")

}
tipccalc()
