// Get value from birthday input
// make enter button take in birthday input
// each character willbe a conditional
// Silver surfer: March 21 – April 19
// Mr fantastic: April 20 – May 20
// thanos: May 21 – June 20
// storm: June 21 – July 22
// ironman: July 23 – August 22
// wolverine: August 23 – September 22
// magneto: September 23 – October 22
// dr doom: October 23 – November 21
// human torch: November 22 – December 21
// cap america: December 22 – January 19
// galctus: January 20 – February 18
// dust: February 19 – March 20
// 2026-08-16

document.querySelector('.submit').addEventListener('click', getHero)



function getHero() {
    
    let input = document.querySelector('.birthday').value
    let month = input.split('-')[1]
    let day = input.split('-')[2]
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        document.querySelector('.result').innerText = 'Your hero is Silver Surfer'
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        document.querySelector('.result').innerText = 'Your hero is Spider-Man'
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        document.querySelector('.result').innerText = 'Your villian is Thanos'
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        document.querySelector('.result').innerText = 'Your hero is Storm' 
    } else if ((month == 7 && day >= 21) || (month == 8 && day <= 22)) {
        document.querySelector('.result').innerText = 'Your hero is Ironman'
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        document.querySelector('.result').innerText = 'Your hero is Wolverine'
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        document.querySelector('.result').innerText = 'Your villian Magneto'
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        document.querySelector('.result').innerText = 'Your villian is Dr. DOOM'
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        document.querySelector('.result').innerText = 'Your hero is Human Torch'
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        document.querySelector('.result').innerText = 'Your hero is Black Panther'
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        document.querySelector('.result').innerText = 'Your hero is Thor'
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        document.querySelector('.result').innerText = 'Your hero is Hulk'
    }
}
