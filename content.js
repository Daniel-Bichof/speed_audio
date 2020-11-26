const interval = setInterval(() => {
    const header = document.querySelector("header")
    if(header){
        console.log(header)
        clearInterval(interval)
    

        //criando o botão 1.2x
        const button12x = document.createElement("button")
        button12x.innerHTML = "1.2x"
        button12x.classList.add("oneTimesButton")
        header.appendChild(button12x)
        //tornado 1.2x clicavel
        button12x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            
            for(const audio of audios){
                audio.playbackRate = 1.2
                button12x.style.color = 'skyblue'
            }
            button12x.style.color = 'gray'
            
        })

        const button15x = document.createElement("button")
        button15x.innerHTML = "1.5x"
        button15x.classList.add("oneDotFiveTimesButton")
        header.appendChild(button15x)
        //tornado 1x clicavel
        button15x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            //usando o forEach() ao inves for(){} para praticar
            audios.forEach((audio) => {
                audio.playbackRate = 1.5
            })
            
        })
        
        
        //criando o botão 2x
        const button2x = document.createElement("button")
        button2x.innerHTML = ' 2x '
        button2x.classList.add("twoTimesButton")
        header.appendChild(button2x)

        button2x.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            
            for(const audio of audios){
                audio.playbackRate = 2
            }
        })


    }
},1000)
 