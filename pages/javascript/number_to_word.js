function convertToWords() {
    let numberInput = document.querySelector('#numberInput').value;
    let outputField = document.querySelector('#result');

    let oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                       'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    let tenth = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numberInput.toString().length > 7) {
        return outputField.innerHTML = 'overlimit';
    }
    console.log(numberInput);
    
    let num = ('0000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if (!num) {
        return;
    }

    let output = num[1] != 0 ? (oneToNineteen[Number(num[1])] || `${tenth[num[1][0]]} ${oneToNineteen[num[1][1]]}` )+' million dollars' : ''; 
  
    output += num[2] != 0 ? (oneToNineteen[Number(num[2])] || `${tenth[num[2][0]]} ${oneToNineteen[num[2][1]]}` )+' hundred dollars' : ''; 
    output += num[3] != 0 ? (oneToNineteen[Number(num[3])] || `${tenth[num[3][0]]} ${oneToNineteen[num[3][1]]}`)+' thousand dollars' : ''; 
    output += num[4] != 0 ? (oneToNineteen[Number(num[4])] || `${tenth[num[4][0]]} ${oneToNineteen[num[4][1]]}`) +' hundred dollars': ''; 
    output += num[5] != 0 ? (oneToNineteen[Number(num[5])] || `${tenth[num[5][0]]} ${oneToNineteen[num[5][1]]} `) : ''; 

    outputField.innerHTML = output;
}