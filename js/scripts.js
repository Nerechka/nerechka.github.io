
alert('А ты уже узнал код доступа у хозяйки сайта?');
function showMessage() {
alert('Oops! Mistake!');
    year = prompt('Попробуй ещё раз:', '');
}
let year = prompt('Prove it!', '');

while (year !== 'Sunflower!'){
   showMessage();
if (year === 'Sunflower!') break;
} 
alert( 'Lucky you are!)');