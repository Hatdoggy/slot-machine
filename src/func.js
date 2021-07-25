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

    box.classList.add("box");

    img.src = pool[ctr].src;
    img.alt = pool[ctr].alt;
    img.classList.add('w-80');

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

const setListener = (boxesClone,door)=>{
  boxesClone.transitionstart = ()=>{
    door.dataset.spinned = "1";
    this.querySelectorAll(".box").forEach((box) => {
      box.style.filter = "blur(1px)";
    });  
  }

  boxesClone.transitionend = ()=>{
    this.querySelectorAll(".box").forEach((box, index) => {
      box.style.filter = "blur(0)";
    });    
  }
}

export const init = (firstInit = true, groups = 1, duration = 1,ctr)=>{

  const doors = document.querySelectorAll(".door");

    for (const door of doors) {
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);

      const pool = [];
      pool.push(items[0])

      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        if(ctr>1){
          pool.push(...shuffle(arr,ctr))
        }else{
          pool.push(...arr)
        }
        setListener(boxesClone,door)
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
