class TvOff {
  constructor(p,div,selectTv,tvInSidebar,container) {
    this.p = p;
    this.div = div;
    this.selectTv = selectTv;
    this.tvInSidebar = tvInSidebar;
    this.container = container;
  }

  tvOff() {
    return () => {
      this.p.style.display = 'none';
      this.div.setAttribute('style','color:#A9A9A9;')
      this.selectTv[3].value = 'Виключений';
      this.tvInSidebar.style.color = '#A9A9A9';
      this.container[0].setAttribute('style', 'background:black')
   }
  }
}
let pTvf = document.getElementById("p");
let divTvf = document.getElementById('tv')
let selectTvf = document.getElementsByClassName('select-css')
let tvInSidebarTvf = document.getElementById('tv-inSidebar')
let containerTvf = document.getElementsByClassName('additionall-component')
let tvOffInst = new TvOff(pTvf,divTvf,selectTvf,tvInSidebarTvf,containerTvf)

let tvOff = document.getElementById('TV-off')

tvOff.addEventListener('click',tvOffInst.tvOff())




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
