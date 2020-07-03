const response = document.getElementById('response');

fiveStarResponse = (stars) =>{ response.value = "Awesome this should be easy!"; serviceVal = stars;};
fourStarResponse = (stars) =>{ response.value = "Is that right? Noted..."; serviceVal = stars;};
threeStarResponse = (stars) =>{ response.value = "Well that's awkward..."; serviceVal = stars;};
twoStarResponse = (stars) =>{ response.value = "I loathe Bad Vibes..."; serviceVal = stars;};
oneStarResponse = (stars) =>{ response.value = "Say less. I got you fam!"; serviceVal = stars;};

calculateTip = () => {
    let wisdom = [
        '"Focus on commitment, not motivation"',
        '"Seek knowledge, not results"',
        '"Make the journey fun"',
        '"Get rid of stagnating thoughts"',
        '"Use your imaginatio"n',
        '"Get rid of distractions"',
        '"Do not rely on others"',
        '"Never fail to try more."',
        '"Do not hesitate when you should act"',
        '"A good reputation is more valuable than money"',
        '"Your thoughts are powerful, make them positive"',
        '"You can become bitter or better as a result of your circumstances"' ];
    friends = document.getElementById('friends');
    billAmount = Number(document.getElementById('amount').value);
    payerAmount = Number(friends.options[friends.selectedIndex].value);
    avgTip =`Average tip for average service: $${Math.floor((billAmount * .2)/payerAmount)}.00` ;
    extraTip = `For a job well done: $${Math.floor(((billAmount * .2) + 10)/payerAmount)}.00`;
    minTip = `This might be too generous: $${Math.floor(((billAmount * .2) / 2)/payerAmount)}.00`;
    noTip = `Here's a tip: ${wisdom[Math.floor(Math.random() * wisdom.length)]}`; 
    tipValue = serviceVal == 'five-stars'? extraTip: (serviceVal == 'four-stars' ? avgTip : (serviceVal == 'three-stars'? minTip:(serviceVal == 'two-stars' ? minTip : noTip)));
    document.querySelector('.tip-query').innerText = tipValue;

    //ONCE FUNCTION RUNS, I WANT THE CALCULATE BUTTON TO CHANGE INTO A RESET BUTTON
    button = document.getElementById('calculate')
    button.innerHTML = 'Reset';
    button.className = 'btn btn-danger btn-lg btn-block';
    button.onclick = reset;
};

const reset = () =>{
    document.getElementById('amount').value = '';
    document.getElementById('response').value ='';
    document.getElementById('friends').value = 'Choose...';
    document.querySelector('.tip-query').innerHTML = 'Enter All values and select Calculate'
    button = document.getElementById('calculate')
    button.innerHTML = 'Calculate';
    button.className = 'btn btn-success btn-lg btn-block';
    button.onclick = calculateTip;
};







