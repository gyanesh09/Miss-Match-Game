cardArray=[
    {
        name:'spyder',
        img:'image/spyder.png'
    },
    {
        name:'spyder',
        img:'image/spyder.png'
    },
    
    {
        name:'butterfly',
        img:'image/butterfly.png'
    },
    {
        name:'butterfly',
        img:'image/butterfly.png'
    },
    {
        name:'beetle',
        img:'image/beetle.jfif'
    },
    {
        name:'beetle',
        img:'image/beetle.jfif'
    },
    {
        name:'cockroach',
        img:'image/cockroach.jfif'
    },
    {
        name:'cockroach',
        img:'image/cockroach.jfif'
    },
    {
        name:'snake',
        img:'image/snake.png'
    },
    {
        name:'snake',
        img:'image/snake.png'
    },
    {
        name:'ant',
        img:'image/ant.png'
    },
    {
        name:'ant',
        img:'image/ant.png'
    },
]



function load_cards()
{
    sucsound=document.getElementById("startup");
    sucsound.play();
    const grid=document.querySelector(".grid");
    cardArray.sort(() => Math.random() - 0.5);
    console.log(2);
    cardpush=[];
    for (i=0;i<cardArray.length;i++)
    {
        var card=document.createElement('img');
        card.setAttribute('src','image/pumpkin.png');
        card.setAttribute('class','cardimg');
        card.setAttribute('id',i)
        card.addEventListener('click', flipCard)
        console.log(card);
        grid.appendChild(card);
    }

    function flipCard()
    {
        var card_id=this.getAttribute('id')
        console.log(card_id)
       
        this.setAttribute('src',cardArray[card_id].img)
        cardpush.push(card_id)
        setTimeout(checkMatch,500)
        
    }
    cardswon=0
    function checkMatch()
    {

        if (cardpush.length>=2)
        {
            console.log(cardpush[0])
            if (cardpush[0]==cardpush[1])
            {   document.getElementById(cardpush[0]).setAttribute('src','image/pumpkin.png');
                document.getElementById(cardpush[1]).setAttribute('src','image/pumpkin.png');
                cardpush=[]
                alert("Don't be smart Dude :)")
        
            }
            else if (cardArray[cardpush[0]].name===cardArray[cardpush[1]].name)
            {

                document.getElementById(cardpush[0]).setAttribute('src','image/correct.png');
                document.getElementById(cardpush[1]).setAttribute('src','image/correct.png');
                document.getElementById(cardpush[0]).removeEventListener('click',flipCard);
                document.getElementById(cardpush[1]).removeEventListener('click',flipCard);
                sucsound=document.getElementById("success");
                sucsound.play();
                console.log(sucsound)
                cardswon+=2
                cardpush=[]
                document.getElementById("updatedscore").innerHTML=cardswon+'/12';
                if (cardswon==cardArray.length)
                {
                sucsound=document.getElementById("won");
                sucsound.play();
                console.log(won)
                clearInterval(timerint);
                alert("You Are great Man!! You Won")
                }
            }
            else
            {
                document.getElementById(cardpush[0]).setAttribute('src','image/pumpkin.png');
                document.getElementById(cardpush[1]).setAttribute('src','image/pumpkin.png');
                sucsound=document.getElementById("wrong-move");
                sucsound.play();
                cardpush=[]
            }

        }
        
    }
    strt_mins=1;
    time=strt_mins*60
    timerint=setInterval(timer,1000)
    function timer(){
        console.log(time)
        time--
        mins=Math.floor(time/60);
        seconds=time%60;
        
        if (seconds<10)
            seconds='0'+ seconds;
        console.log(mins,seconds)    
        if (mins==0 && seconds==00){
            alert("GAME OVER !! YOU LOST");
            clearInterval(timerint);
        }


        document.getElementById("timer").innerHTML=`${mins}:${seconds}`;

    }

}