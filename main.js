$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});


let checkbox = document.getElementById('on');

checkbox.addEventListener('click',() => {
  if(checkbox.checked == true) {
		let pInHeader = document.getElementsByClassName('p-inHeader')
		for (let i = 0; i < pInHeader.length; i++) {
			pInHeader[i].style.color = 'yellow'
		}
		let selectLight = document.getElementsByClassName('select-css')
		selectLight[0].value = 'Включене';
		let lightInSidebar = document.getElementById('light-inSidebar')
		lightInSidebar.style.color = 'yellow';
		let container4 = document.getElementsByClassName('inner-light')
		container4[0].style.background = '#FFD700';
    let div = document.getElementById('light')
    div.setAttribute('style','color: yellow;')
  } else if (checkbox.checked != true) {
		let pInHeader = document.getElementsByClassName('p-inHeader')
		for (let i = 0; i < pInHeader.length; i++) {
			pInHeader[i].style.color = 'grey'
		}
		let selectLight = document.getElementsByClassName('select-css')
		selectLight[0].value = 'Виключене';
		let lightInSidebar = document.getElementById('light-inSidebar')
		lightInSidebar.style.color = '#A9A9A9';
		let container4 = document.getElementsByClassName('inner-light')
		container4[0].style.background = 'black';
    let div = document.getElementById('light')
    div.setAttribute('style','color: #A9A9A9')
  }
})

let selectLight = document.getElementsByClassName('select-css')
selectLight[0].addEventListener('change',function () {
			if (selectLight[0].options[selectLight[0].selectedIndex].value == "Включене") {
				let pInHeader = document.getElementsByClassName('p-inHeader')
				for (let i = 0; i < pInHeader.length; i++) {
					pInHeader[i].style.color = 'yellow'
				}
				let lightInSidebar = document.getElementById('light-inSidebar')
				lightInSidebar.style.color = 'yellow';
				let container4 = document.getElementsByClassName('inner-light')
				container4[0].style.background = '#FFD700';
				let div = document.getElementById('light')
				div.setAttribute('style','color: yellow;')
			} else if (selectLight[0].options[selectLight[0].selectedIndex].value == "Виключене") {
				let pInHeader = document.getElementsByClassName('p-inHeader')
				for (let i = 0; i < pInHeader.length; i++) {
					pInHeader[i].style.color = 'grey'
				}
				let lightInSidebar = document.getElementById('light-inSidebar')
				lightInSidebar.style.color = '#A9A9A9';
				let container4 = document.getElementsByClassName('inner-light')
				container4[0].style.background = 'black';
				let div = document.getElementById('light')
				div.setAttribute('style','color: #A9A9A9')
			}
  },
  false)

let louver = document.getElementById('louver-open')

louver.addEventListener('click', () => {
	let pInHeader = document.getElementsByClassName('p-inHeader')
	for (let i = 0; i < pInHeader.length; i++) {
		pInHeader[i].style.color = 'gold'
	}
	let louverInSidebar = document.getElementById('louver-inSidebar')
	louverInSidebar.style.color = 'gold';
	let selectLouver = document.getElementsByClassName('select-css')
	selectLouver[1].value = 'Відкриті';
	let container = document.getElementsByClassName('inner-louver')
	container[0].setAttribute('style', 'background-image:url(656748d6862708930154d37c44bb355e.jpg)')
})

let louver2 = document.getElementById('louver-close')

louver2.addEventListener('click', () => {
	let pInHeader = document.getElementsByClassName('p-inHeader')
	for (let i = 0; i < pInHeader.length; i++) {
		pInHeader[i].style.color = 'grey'
	}
	let louverInSidebar = document.getElementById('louver-inSidebar')
	louverInSidebar.style.color = '#A9A9A9';
	let selectLouver = document.getElementsByClassName('select-css')
	selectLouver[1].value = 'Закриті';
	let containe = document.getElementsByClassName('inner-louver')
	containe[0].setAttribute('style', 'background-image:url(closed-aluminium-roller-blinds-background_172990-74.jpg)')
})

let selectLouver = document.getElementsByClassName('select-css')
selectLouver[1].addEventListener('change',function () {
			if (selectLouver[1].options[selectLouver[1].selectedIndex].value == "Відкриті") {
				let pInHeader = document.getElementsByClassName('p-inHeader')
				for (let i = 0; i < pInHeader.length; i++) {
					pInHeader[i].style.color = 'gold'
				}
				let louverInSidebar = document.getElementById('louver-inSidebar')
				louverInSidebar.style.color = 'gold';
				let selectLouver = document.getElementsByClassName('select-css')
				selectLouver[1].value = 'Відкриті';
				let container = document.getElementsByClassName('inner-louver')
				container[0].setAttribute('style', 'background-image:url(656748d6862708930154d37c44bb355e.jpg)')
			} else if (selectLouver[1].options[selectLouver[1].selectedIndex].value == "Закриті") {
				let pInHeader = document.getElementsByClassName('p-inHeader')
				for (let i = 0; i < pInHeader.length; i++) {
					pInHeader[i].style.color = 'grey'
				}
				let louverInSidebar = document.getElementById('louver-inSidebar')
				louverInSidebar.style.color = '#A9A9A9';
				let selectLouver = document.getElementsByClassName('select-css')
				selectLouver[1].value = 'Закриті';
				let containe = document.getElementsByClassName('inner-louver')
				containe[0].setAttribute('style', 'background-image:url(closed-aluminium-roller-blinds-background_172990-74.jpg)')
			}
  },
  false)

//signaling-on and off
let signalingOn = document.getElementById('signaling-on')

signalingOn.addEventListener('click',() => {
	let pInHeader = document.getElementsByClassName('p-inHeader')
	for (let i = 0; i < pInHeader.length; i++) {
		pInHeader[i].style.color = 'red'
	}
	let signalingInSidebar = document.getElementById('signaling-inSidebar')
	signalingInSidebar.style.color = 'red';
	let selectSignaling = document.getElementsByClassName('select-css')
	selectSignaling[2].value = 'Включена';
	let $div2blink = $("#divtoBlink")
	let backgroundInterval = setInterval(function(){
    $div2blink.toggleClass("backgroundRed");
 },800)

 let signalingOff = document.getElementById('signaling-off')
 signalingOff.addEventListener('click',() => {
	 let pInHeader = document.getElementsByClassName('p-inHeader')
 	for (let i = 0; i < pInHeader.length; i++) {
 		pInHeader[i].style.color = 'grey'
 	}
	 let selectSignaling = document.getElementsByClassName('select-css')
	 selectSignaling[2].value = 'Виключена';
	 let signalingInSidebar = document.getElementById('signaling-inSidebar')
 	signalingInSidebar.style.color = '#A9A9A9';
	clearInterval(backgroundInterval)
	$div2blink.style.background = '#666666'
 })
})


let selectSignaling = document.getElementsByClassName('select-css')
selectSignaling[2].addEventListener('change',function () {
		let backgroundInterval;
			if (selectSignaling[2].options[selectSignaling[2].selectedIndex].value == "Включена") {
				let pInHeader = document.getElementsByClassName('p-inHeader')
				for (let i = 0; i < pInHeader.length; i++) {
					pInHeader[i].style.color = 'red'
				}
				let signalingInSidebar = document.getElementById('signaling-inSidebar')
				signalingInSidebar.style.color = 'red';
				let $div2blink = $("#divtoBlink")
				 backgroundInterval = setInterval(function(){
			    $div2blink.toggleClass("backgroundRed");
			 },900)
			 selectSignaling[2].addEventListener('change',function () {
				 	if (selectSignaling[2].options[selectSignaling[2].selectedIndex].value == "Виключена") {
						let pInHeader = document.getElementsByClassName('p-inHeader')
						for (let i = 0; i < pInHeader.length; i++) {
							pInHeader[i].style.color = 'grey'
						}
							signalingInSidebar.style.color = '#A9A9A9';
							clearInterval(backgroundInterval)
					 }
			 },false)
  }
},
  false)
