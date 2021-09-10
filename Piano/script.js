const sounds=[
    {
        "key":'C4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'C4#',
        "scale":'S4',
        "white":false
    },
    {
        "key":'D4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'D4#',
        "scale":'S4',
        "white":false
    },
    {
        "key":'E4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'F4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'F4#',
        "scale":'S4',
        "white":false
    },
    {
        "key":'G4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'G4#',
        "scale":'S4',
        "white":false
    },
    {
        "key":'A4',
        "scale":'S4',
        "white":true
    },
    {
        "key":'A4#',
        "scale":'S4',
        "white":false
    },
    {
        "key":'B4',
        "scale":'S4',
        "white":true
    },
   
   
    {
        "key":'C5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'C5#',
        "scale":'S5',
        "white":false
    },
    {
        "key":'D5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'D5#',
        "scale":'S5',
        "white":false
    },
    {
        "key":'E5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'F5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'F5#',
        "scale":'S5',
        "white":false
    },
    {
        "key":'G5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'G5#',
        "scale":'S5',
        "white":false
    },
    {
        "key":'A5',
        "scale":'S5',
        "white":true
    },
    {
        "key":'A5#',
        "scale":'5',
        "white":false
    },
    {
        "key":'B5',
        "scale":'S5',
        "white":true
    }

   


 ]


sounds.forEach(sound=>{
    const btn= document.createElement('button')
    btn.classList.add('keys')
    btn.classList.add(sound["scale"])
    if(sound["white"]==true) {
        btn.classList.add('white')
    }
    else {
        btn.classList.add('black')
    }
    const label= document.createElement('div')
    label.classList.add('label')
    label.innerText=sound["key"]
    btn.appendChild(label)
    btn.addEventListener('click',(e)=>{
        if(!e.repeat){
            stopsounds()  // if it was a music player
            document.getElementById(sound["key"]).play()
        }
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopsounds(){
    sounds.forEach(sound=>{
        const note= document.getElementById(sound["key"])
        note.pause()
        note.currentTime=0; //for songs ( notes have 0 time)
    })
}