fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json').then((data)=>{
    
    return data.json();
}).then((completedata)=>{
    
    console.log(completedata);
    let data1="";
    completedata.map((values)=>{
    
       

    data1+=`<div id="infocards">
        <div class="card">
        <h1 class="title">${values.title}</h1>
        <p class="platform">Platform: ${values.platform}</p>
        <p class="genre">Genre: ${values.genre}</p>
        <p class="score">Score: ${values.score}</p>
        <p class="choice">${values.editors_choice}</p>
    </div>`
        });
        document.getElementById('infocards').innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})
