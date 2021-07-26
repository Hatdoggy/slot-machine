import items from './items.json'

  const shuffle = ([...arr])=>{
    let m = arr.length;

    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }

    return arr;
  }

  const createImg = (pool,boxesClone,door,ctr)=>{
    const box = document.createElement("div");
    const img = document.createElement("img");

    box.classList.add("box",'trans');

    img.src = pool[ctr].src;
    img.alt = pool[ctr].alt;
    img.classList.add('w-80','trans');

    box.appendChild(img);
    box.style.width = "100%";
    box.style.height = door.clientHeight + "px";
    boxesClone.appendChild(box);
  }

  async function spin(ctr) {

    const doors = document.querySelectorAll(".door");    
    init(false, 1, 2,ctr);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }

  }  

  export default spin;
  
let pool = [];

export const init = (firstInit = true, groups = 1, duration = 1,ctr)=>{

  const doors = document.querySelectorAll(".door");
  if(!ctr){
   pool.push(items[0])
  }

    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        if(ctr>1){
          console.log('You went here')
          pool.push(...shuffle(arr,ctr))
        }else{
          pool.push(...arr)
        }     
      }     

      for (let i = pool.length - 1; i >= 0; i--) {
        createImg(pool,boxesClone,door,i)
      }

      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
    }
  }

/* Link functions */

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1] || '');
}

// let ffdomain = 'https://' + getURLParameter('ffdomain');
// let session = getURLParameter('session');
// let fluxf = getURLParameter('fluxf');
// let fluxffn = getURLParameter('fluxffn');

let ffdomain = 'https://somedomain.tld';
let session = 'abcd';
let fluxf = 'summin';
let fluxffn = 'summinelse';

export function ActionRedirect(action){
  window.location.replace(ffdomain + '/?flux_action=' + action + '&flux_f=' + fluxf + '&flux_ffn=' + fluxffn + '&flux_sess=' + session);
}