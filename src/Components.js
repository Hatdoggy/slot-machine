import {useEffect} from 'react';
import spin,{init,ActionRedirect} from './func.js';
import {mainPop,main,footer,popWin,popUp} from './text.json'

const months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

const today = new Date();
const dd = String(today.getDate()+1).padStart(2, '0');
const mm = months[today.getMonth()];
const yyyy = today.getFullYear();

const Head = (props)=>{
	return(
		<header className="flx flx-jc-sb flx-ai-ce w-100 h-10">
			<div className="flx flx-ai-ce w-50 ">
				<p className="w-auto mont-b txt-wht">Spins left</p>
				<p className="w-50 m-l-2 rob bg-main txt-wht p-5 txt-al-ce brd-50">{props.pop.ctr}</p>
			</div>
			<div className="flx flx-jc-end flx-ai-ce m-l-auto w-50">
				<p className="w-auto mont-b txt-wht">Your wallet</p>
				<p className="w-50 m-l-2 rob bg-main txt-wht p-5 txt-al-ce brd-50">${props.pop.cash}</p>
			</div>
		</header>
	)
}

const Slot = ()=>{
	return(
		<section className="flx flx-jc-sb flx-ai-ce h-90 w-100 m-t-2 doors">
			<span className="brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans">
				<div className="boxes"></div>
			</span>
			<span className="brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans m-l-2 m-r-2">
				<div className="boxes"></div>
			</span>
			<span className="brd-50 bg-wht h-100 w-30 shdw door ovr-hide trans">
				<div className="boxes"></div>
			</span>
		</section>
	)
}

const Mes = (props)=>{
	const upd =async()=>{
		let {show,pop} = props;

		spin(pop.ctr).then(res=>{
			if(pop.ctr>1){
				setTimeout(()=>{
					show({
						...pop,
						mes:true,
						ctr:[pop.ctr-1],
				 		cash:[pop.cash-20]		
					});
				},2000)
			}else{
				setTimeout(()=>{
					show({
						...pop,
						ctr:[pop.ctr-1],
						cash:[pop.cash+1000],
						win:true
					});	
				},3500)		
			}		
		})

	}

	return(
		<div className="flx flx-col flx-jc-ce flx-ai-ce m-t-2 mes">
			<button className="brd-50 btn-clr mont-b w-30 flx pulse" onClick={()=>upd()}>Spin<i className="fas fa-sync m-l-auto txt-wht" id="exit"></i></button>
			<p className="txt-al-ce txt-wht rob w-50 p-20">{main}</p>			
		</div>
	)
}

const Main = (props)=>{
	useEffect(()=>{
		init()
	},[])
	return(
		<main className="w-vw flx flx-col flx-ai-ce flx-jc-ce h-90">
			<img src="./img/logo.png" alt="logo" className="logo m-t-2"/>
			<div className="m-t-2 brd-50 h-80 w-50 flx flx-jc-ce flx-ai-ce w-100 cont">
				<div className="bg-glass flx flx-col flx-jc-sa flx-ai-ce p-20 brd-50 h-90 brd-wht w-80">
					<Head pop={props.pop}/>
					<Slot/>
				</div>
			</div>
			<Mes show={props.show} pop={props.pop}/>
		</main>
	)
}

const MobMain = (props)=>{
	useEffect(()=>{
		init()
	})	
	return(
		<main className="w-vw flx flx-ai-ce flx-jc-ce h-90">
			<div className="brd-50 h-80 w-50 flx flx-jc-ce flx-ai-ce w-100 cont">
				<div className="bg-glass flx flx-col flx-jc-ce flx-ai-ce p-20 brd-50 h-90 brd-wht w-80">
					<Head pop={props.pop}/>
					<Slot/>
				</div>
			</div>

			<div className="flx flx-col flx-jc-ce flx-ai-ce w-50">
				<img src="./img/logo.png" alt="logo" className="logo m-t-2"/>			
				<Mes show={props.show} pop={props.pop}/>				
			</div>
		</main>
	)	
}

const Foot = ()=>{
	return(
		<footer className="flx flx-jc-ce flx-ai-ce h-10 bg-main">
				<img src="./img/18.png" alt="18" className="warn"/>
				<span className="rob w-70 txt-wht m-l-2">We use cookies to optimize your experience of this site - Leave if you are not okay with cookies
				This is a 3rd-party ad and is not hosted by Spin Casino</span>		
		</footer>
	)
}

const PopUp = (props)=>{

	useEffect(()=>{
		setTimeout(()=>{
			props.show({
				...props.pop,
				mes:false,
				win:false
			})
		},2000)
	})

	return(
		<main className="bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade z-top">
			<div className="w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 brd-50 txt-wht bg-rev shdw trans pop">
				<h4 className="rob">{popUp.header}</h4>
				<h1 className="mont-b m-t-5 h-50">-20</h1>
				<p className="mont-r m-t-5 brd-50 p-10 txt-al-ce brd-wht w-50 flx">Your Wallet <span className="mont-b m-l-auto">${props.pop.cash}</span></p>
				<p className="rob m-t-2">Spins left: {props.pop.ctr}</p>
			</div>
		</main>
	)
}

const Win = ()=>{
	return(
		<main className="bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade z-top">
			<div className="w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 h-80 brd-50 txt-wht bg-rev shdw trans popWin">
				<h4 className="mont-b">CONGRATULATIONS</h4>
				<p className="rob m-t-5 txt-al-ce W-50">{popWin.desc}</p>
				<img src="./img/logo.png" alt="logo" className="m-t-5"/>
				<button className="mont-b btn-wht brd-50 w-50 m-t-10 pulse product-button"  data-product-id="1" onClick={elem=>ActionRedirect(elem.target.dataset.productId)}>Claim my bonus!</button>
			</div>
		</main>
	)
}

const MainPop = (props)=>{

	return(
		<main className="bg-pop pos-abs w-100 h-vh flx flx-jc-ce flx-ai-ce fade z-top">
			<div className="w-30 flx flx-col flx-jc-ce flx-ai-ce p-50 brd-50 txt-wht bg-rev shdw trans pop">
				<h4 className="mont-b">{mainPop.header}</h4>
				<p className="rob m-t-2 txt-al-ce">{mainPop.desc + `${mm} ${dd} ${yyyy}`}</p>
				<button className="mont-b btn-wht brd-50 w-50 m-t-10 pulse" onClick={()=>props.hide(false)}>LETS GO!</button>
			</div>
		</main>
	)
}

export default Main;
export {Foot,PopUp,Win,MobMain,MainPop}