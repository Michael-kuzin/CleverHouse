$('select').each(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});
$('select').change(function(){
	$(this).siblings('p').text( $(this).children('option:selected').text() );
});


// Light on off

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



// selectLight in sidebar off-on

let selectLight = document.getElementsByClassName("select-css");
selectLight[0].addEventListener(
  "change",
  function () {
    if (
      selectLight[0].options[selectLight[0].selectedIndex].value == "Включене"
    ) {
      let pInHeader = document.getElementsByClassName("p-inHeader");
      for (let i = 0; i < pInHeader.length; i++) {
        pInHeader[i].style.color = "yellow";
      }
      let lightInSidebar = document.getElementById("light-inSidebar");
      lightInSidebar.style.color = "yellow";
      let container4 = document.getElementsByClassName("inner-light");
      container4[0].style.background = "#FFD700";
      let div = document.getElementById("light");
      div.setAttribute("style", "color: yellow;");
    } else if (
      selectLight[0].options[selectLight[0].selectedIndex].value == "Виключене"
    ) {
      let pInHeader = document.getElementsByClassName("p-inHeader");
      for (let i = 0; i < pInHeader.length; i++) {
        pInHeader[i].style.color = "grey";
      }
      let lightInSidebar = document.getElementById("light-inSidebar");
      lightInSidebar.style.color = "#A9A9A9";
      let container4 = document.getElementsByClassName("inner-light");
      container4[0].style.background = "black";
      let div = document.getElementById("light");
      div.setAttribute("style", "color: #A9A9A9");
    }
  },
  false
);

// Open-Close Button louver

class LouverO {
  constructor(louverInSidebar, selectLouver, container) {
    this.louverInSidebar = louverInSidebar;
    this.selectLouver = selectLouver;
    this.container = container;
  }

  louverOpen() {
    return () => {
      this.louverInSidebar.style.color = "gold";

      this.selectLouver[1].value = "Відкриті";

      this.container[0].setAttribute(
        "style",
        "background-image:url(656748d6862708930154d37c44bb355e.jpg)"
      );
    };
  }
}
let louverInSidebarss = document.getElementById("louver-inSidebar");
let selectLouverss = document.getElementsByClassName("select-css");
let containerss = document.getElementsByClassName("inner-louver");
let louverO = new LouverO(louverInSidebarss, selectLouverss, containerss);

let louver = document.getElementById("louver-open");

louver.addEventListener("click", louverO.louverOpen());



class LouverC {
  constructor(louverInSidebar, selectLouver, container) {
    this.louverInSidebar = louverInSidebar;
    this.selectLouver = selectLouver;
    this.container = container;
  }

  louverClose() {
    return () => {
      this.louverInSidebar.style.color = "#A9A9A9";

      this.selectLouver[1].value = "Закриті";

      this.container[0].setAttribute(
        "style",
        "background-image:url(closed-aluminium-roller-blinds-background_172990-74.jpg)"
      );
    };
  }
}
let louverInSidebarS = document.getElementById("louver-inSidebar");
let selectLouverS = document.getElementsByClassName("select-css");
let containerS = document.getElementsByClassName("inner-louver");
let louverC = new LouverC(louverInSidebarS, selectLouverS, containerS);

let louverClose = document.getElementById("louver-close");

louverClose.addEventListener("click", louverC.louverClose());



// selectLouver in sidebar close-open

let selectLouver = document.getElementsByClassName("select-css");
selectLouver[1].addEventListener(
  "change",
  function () {
    if (
      selectLouver[1].options[selectLouver[1].selectedIndex].value == "Відкриті"
    ) {
      let pInHeader = document.getElementsByClassName("p-inHeader");
      for (let i = 0; i < pInHeader.length; i++) {
        pInHeader[i].style.color = "gold";
      }
      let louverInSidebar = document.getElementById("louver-inSidebar");
      louverInSidebar.style.color = "gold";
      let selectLouver = document.getElementsByClassName("select-css");
      selectLouver[1].value = "Відкриті";
      let container = document.getElementsByClassName("inner-louver");
      container[0].setAttribute(
        "style",
        "background-image:url(656748d6862708930154d37c44bb355e.jpg)"
      );
    } else if (
      selectLouver[1].options[selectLouver[1].selectedIndex].value == "Закриті"
    ) {
      let pInHeader = document.getElementsByClassName("p-inHeader");
      for (let i = 0; i < pInHeader.length; i++) {
        pInHeader[i].style.color = "grey";
      }
      let louverInSidebar = document.getElementById("louver-inSidebar");
      louverInSidebar.style.color = "#A9A9A9";
      let selectLouver = document.getElementsByClassName("select-css");
      selectLouver[1].value = "Закриті";
      let containe = document.getElementsByClassName("inner-louver");
      containe[0].setAttribute(
        "style",
        "background-image:url(closed-aluminium-roller-blinds-background_172990-74.jpg)"
      );
    }
  },
  false
);

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
 })
})

// selectSignaling in sidebar on-off

let selectSignaling = document.getElementsByClassName("select-css");
selectSignaling[2].addEventListener(
  "change",
  function () {
    let backgroundInterval;
    if (
      selectSignaling[2].options[selectSignaling[2].selectedIndex].value ==
      "Включена"
    ) {
      let pInHeader = document.getElementsByClassName("p-inHeader");
      for (let i = 0; i < pInHeader.length; i++) {
        pInHeader[i].style.color = "red";
      }
      let signalingInSidebar = document.getElementById("signaling-inSidebar");
      signalingInSidebar.style.color = "red";
      let $div2blink = $("#divtoBlink");
      backgroundInterval = setInterval(function () {
        $div2blink.toggleClass("backgroundRed");
      }, 900);
      selectSignaling[2].addEventListener(
        "change",
        function () {
          if (
            selectSignaling[2].options[selectSignaling[2].selectedIndex]
              .value == "Виключена"
          ) {
            let pInHeader = document.getElementsByClassName("p-inHeader");
            for (let i = 0; i < pInHeader.length; i++) {
              pInHeader[i].style.color = "grey";
            }
            signalingInSidebar.style.color = "#A9A9A9";
            clearInterval(backgroundInterval);
          }
        },
        false
      );
    }
  },
  false
);


// TV on-off

class TvOn {
  constructor(p, div, selectTv, tvInSidebar, container) {
    this.p = p;
    this.div = div;
    this.selectTv = selectTv;
    this.tvInSidebar = tvInSidebar;
    this.container = container;
  }

  tvOn() {
    return () => {
      this.p.style.display = "block";
      this.p.style.color = "#284bfa";
      this.div.setAttribute("style", "color: blue;");
      this.selectTv[3].value = "Включений";
      this.tvInSidebar.style.color = "blue";
      this.container[0].setAttribute(
        "style",
        "background-image:url(SMPTE_Color_Bars.svg.png)"
      );
    };
  }
}
let pTv = document.getElementById("p");
let divTv = document.getElementById("tv");
let selectTv = document.getElementsByClassName("select-css");
let tvInSidebarTv = document.getElementById("tv-inSidebar");
let containerTv = document.getElementsByClassName("additionall-component");
let tvOnInst = new TvOn(pTv, divTv, selectTv, tvInSidebarTv, containerTv);

let tvOn = document.getElementById("TV-on");

tvOn.addEventListener("click", tvOnInst.tvOn());



class TvOff {
  constructor(p, div, selectTv, tvInSidebar, container) {
    this.p = p;
    this.div = div;
    this.selectTv = selectTv;
    this.tvInSidebar = tvInSidebar;
    this.container = container;
  }

  tvOff() {
    return () => {
      this.p.style.display = "none";
      this.div.setAttribute("style", "color:#A9A9A9;");
      this.selectTv[3].value = "Виключений";
      this.tvInSidebar.style.color = "#A9A9A9";
      this.container[0].setAttribute("style", "background:black");
    };
  }
}
let pTvf = document.getElementById("p");
let divTvf = document.getElementById("tv");
let selectTvf = document.getElementsByClassName("select-css");
let tvInSidebarTvf = document.getElementById("tv-inSidebar");
let containerTvf = document.getElementsByClassName("additionall-component");
let tvOffInst = new TvOff(
  pTvf,
  divTvf,
  selectTvf,
  tvInSidebarTvf,
  containerTvf
);

let tvOff = document.getElementById("TV-off");

tvOff.addEventListener("click", tvOffInst.tvOff());



// selectTv in sidebar off-on

let selectTV = document.getElementsByClassName("select-css");

if (selectTV[3].options[selectTV[3].selectedIndex].value == "Виключений") {
  let p = document.getElementById("p");
  p.style.display = "none";
}

selectTV[3].addEventListener(
  "change",
  function () {
    if (selectTV[3].options[selectTV[3].selectedIndex].value == "Включений") {
      let p = document.getElementById("p");
      p.style.display = "block";
      let div = document.getElementById("tv");
      div.setAttribute("style", "color: blue;");
      let tvInSidebar = document.getElementById("tv-inSidebar");
      tvInSidebar.style.color = "blue";
      let container = document.getElementsByClassName("additionall-component");
      container[0].setAttribute(
        "style",
        "background-image:url(SMPTE_Color_Bars.svg.png)"
      );
    } else if (
      selectTV[3].options[selectTV[3].selectedIndex].value == "Виключений"
    ) {
      let p = document.getElementById("p");
      p.style.display = "none";
      let div = document.getElementById("tv");
      div.setAttribute("style", "color:#A9A9A9;");
      let tvInSidebar = document.getElementById("tv-inSidebar");
      tvInSidebar.style.color = "#A9A9A9";
      let container = document.getElementsByClassName("additionall-component");
      container[0].setAttribute("style", "background:black");
    }
  },
  false
);



//  selectOfChannel in tv block change

let selectOfChannel = document.getElementById("channel");

selectOfChannel.addEventListener(
  "change",
  function () {
    let p = document.getElementById("p");
    if (selectOfChannel.options[selectOfChannel.selectedIndex].value == "int") {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    } else if (
      selectOfChannel.options[selectOfChannel.selectedIndex].value == "nv"
    ) {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    } else if (
      selectOfChannel.options[selectOfChannel.selectedIndex].value == "onepls"
    ) {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    } else if (
      selectOfChannel.options[selectOfChannel.selectedIndex].value == "tet"
    ) {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    } else if (
      selectOfChannel.options[selectOfChannel.selectedIndex].value == "ukr"
    ) {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    } else if (
      selectOfChannel.options[selectOfChannel.selectedIndex].value == "choose"
    ) {
      p.innerHTML = `${
        selectOfChannel.options[selectOfChannel.selectedIndex].innerHTML
      }`;
    }
  },
  false
);



// butDeleteElm delete elem from page


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
		alert("Такого елементу не існує або він введений з маленької букви")
		alert(`Список елементів
Світло
Сигналізація
Жалюзі
Телевізор
Введіть будь ласка один з цих елементів(з великої букви)`)
	}
})


// butAddElm add elm on page


let butAddElm = document.getElementById('add-elm')

butAddElm.addEventListener('click',() => {
	let input = document.getElementById('elm-toAdd');
	let divTv = document.getElementsByClassName('additionall-component')
	let selectSide = document.getElementsByClassName('select-css')
	let str = `  <div class="inner-newComponent">
				<div class="container20">
					<button id="newComp-on">Включити</button>
				</div>


				<div class=container13>
					<h1 id="newComp">${input.value}
					</div>

					<div class="container20">
						<button id="newComp-off">Виключити</button>
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
		let newCompOn = document.getElementById('newComp-on')

		newCompOn.addEventListener('click',() => {
			let h = document.getElementById('newComp')
			h.style.color = 'orange'
			let selectNewComp = document.getElementsByClassName('select-css')
			selectNewComp[4].value = 'Включений';
		})

		let newCompOff = document.getElementById('newComp-off')

		newCompOff.addEventListener('click',() => {
			let h = document.getElementById('newComp');
			h.style.color = '#A9A9A9';
			let selectNewComp = document.getElementsByClassName('select-css')
			selectNewComp[4].value = 'Виключений';
		})

		let selectNewComponent = document.getElementsByClassName('select-css')

		selectNewComponent[4].addEventListener('change',function () {
				if (selectNewComponent[4].options[selectNewComponent[4].selectedIndex].value == "Включений") {
					let h = document.getElementById('newComp')
					h.style.color = 'orange'
				} else if (selectNewComponent[4].options[selectNewComponent[4].selectedIndex].value == "Виключений") {
					let h = document.getElementById('newComp');
					h.style.color = '#A9A9A9';
				}
		},false)
})
