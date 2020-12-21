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


// TV on-off
let tvOn = document.getElementById('TV-on')

tvOn.addEventListener('click',() => {
	let p = document.getElementById("p");
	p.style.display = 'block';
	p.style.color = '#284bfa';
	let div = document.getElementById('tv')
	div.setAttribute('style','color: blue;')
	let selectTv = document.getElementsByClassName('select-css')
	selectTv[3].value = 'Включений';
	let tvInSidebar = document.getElementById('tv-inSidebar')
	tvInSidebar.style.color = 'blue';
	let container = document.getElementsByClassName('additionall-component')
	container[0].setAttribute('style', 'background-image:url(SMPTE_Color_Bars.svg.png)')
})

let tvOff = document.getElementById('TV-off')

tvOff.addEventListener('click',() => {
	let p = document.getElementById("p");
	p.style.display = 'none';
	let div = document.getElementById('tv')
	div.setAttribute('style','color:#A9A9A9;')
	let selectTv = document.getElementsByClassName('select-css')
	selectTv[3].value = 'Виключений';
	let tvInSidebar = document.getElementById('tv-inSidebar')
	tvInSidebar.style.color = '#A9A9A9';
	let container = document.getElementsByClassName('additionall-component')
	container[0].setAttribute('style', 'background:black')
})

let selectTV = document.getElementsByClassName('select-css');

if (selectTV[3].options[selectTV[3].selectedIndex].value == "Виключений") {
	let p = document.getElementById("p");
	p.style.display = 'none';
}

selectTV[3].addEventListener('change',function () {
	if (selectTV[3].options[selectTV[3].selectedIndex].value == "Включений") {
		let p = document.getElementById("p");
		p.style.display = 'block';
		let div = document.getElementById('tv')
		div.setAttribute('style','color: blue;')
		let tvInSidebar = document.getElementById('tv-inSidebar')
		tvInSidebar.style.color = 'blue';
		let container = document.getElementsByClassName('additionall-component')
		container[0].setAttribute('style', 'background-image:url(SMPTE_Color_Bars.svg.png)')
	} else if (selectTV[3].options[selectTV[3].selectedIndex].value == "Виключений") {
		let p = document.getElementById("p");
		p.style.display = 'none';
		let div = document.getElementById('tv');
		div.setAttribute('style','color:#A9A9A9;');
		let tvInSidebar = document.getElementById('tv-inSidebar');
		tvInSidebar.style.color = '#A9A9A9';
		let container = document.getElementsByClassName('additionall-component');
		container[0].setAttribute('style', 'background:black');
	 }
},false);


let selectOfChannel = document.getElementById("channel");

selectOfChannel.addEventListener('change',function () {
	let p = document.getElementById("p");
	if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "int") {
		p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
	 } else if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "nv") {
		 p.innerHTML = `${
         selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
       }`;
	 } else if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "onepls") {
		 p.innerHTML = `${
         selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
       }`;
	 } else if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "tet") {
		 p.innerHTML = `${
         selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
       }`;
	 } else if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "ukr") {
		 p.innerHTML = `${
         selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
       }`;
	 } else if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "choose") {
		 p.innerHTML = `${
         selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
       }`;
	 }
},false)


let butDeleteElm = document.getElementById('delete-elm');

butDeleteElm.addEventListener('click',() => {
	let input = document.getElementById('elm-todelete');

	if (input.value == 'Світло') {
		let light = document.getElementsByClassName('inner-light');
		light[0].style.display = 'none';
	} else if (input.value == 'Сигналізація') {
		let signaling = document.getElementsByClassName('inner-signaling');
		signaling[0].style.display = 'none';
	} else if (input.value == 'Жалюзі') {
		let louver = document.getElementsByClassName('inner-louver');
		louver[0].style.display = 'none';
	} else if (input.value == 'Телевізор') {
		let tv = document.getElementsByClassName('additionall-component');
		tv[0].style.display = 'none';
	} else {
		alert("ne sus")
	}
})

let butAddElm = document.getElementById('add-elm')

butAddElm.addEventListener('click',() => {
	let input = document.getElementById('elm-toAdd');
	let divTv = document.getElementsByClassName('additionall-component')
	let selectSide = document.getElementsByClassName('select-css')
	let str = `  <div class="inner-newComponent">
				<div class="container20">
					<button id="signaling-on">Включити</button>
				</div>


				<div class=container13>
					<h1 id="newComp">${input.value}
					</div>

					<div class="container20">
						<button id="signaling-off">Виключити</button>
					</div>
		</div>`
let str2 = `<div id="newComponent-inSidebar">
	${input.value}
</div>


<select class="select-css">
	<option>Виключений</option>
	<option>Включений</option>
</select>`
		selectSide[3].insertAdjacentHTML('afterend',`${str2}`)
		divTv[0].insertAdjacentHTML('afterend',`${str}`)
})
