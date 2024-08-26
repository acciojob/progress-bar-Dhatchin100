//your JS code here. If required.
//your JS code here. If required.
const prevBtn=document.getElementById('prev')
const nextBtn=document.getElementById('next')

let currentCircleCount=1

nextBtn.addEventListener('click',()=>{
	if(currentCircleCount+1<=5){
		const currentCircle=document.getElementById(`circle-${currentCircleCount+1}`)
		currentCircle.classList.add('active')
	
		const currentLine=document.getElementById(`line-${currentCircleCount+1}`)
		currentLine.classList.add('line-active')
		
		++currentCircleCount
	}

	if(currentCircleCount==5){
		nextBtn.setAttribute("disabled","")
	}else{
		nextBtn.removeAttribute("disabled")
	}

	if(currentCircleCount>1){
		prevBtn.removeAttribute("disabled")
	}
})

prevBtn.addEventListener('click',()=>{
	if(currentCircleCount>1){
		const currentCircle=document.getElementById(`circle-${currentCircleCount}`)
		currentCircle.classList.remove('active')

		const currentLine=document.getElementById(`line-${currentCircleCount}`)
		currentLine.classList.remove('line-active')
		
		--currentCircleCount
	}

	if(currentCircleCount==1){
		prevBtn.setAttribute("disabled","")
	}else{
		prevBtn.removeAttribute("disabled")
	}

	if(currentCircleCount<5){
		nextBtn.removeAttribute("disabled")
	}
})