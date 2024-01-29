function create(words) {

   let contentRef = document.getElementById('content');

   for (let word of words){
      let divEl = document.createElement('div');

      let pEl = document.createElement('p');
      pEl.textContent = word;
      pEl.style.display = "none";

      divEl.appendChild(pEl);
      contentRef.appendChild(divEl);

      divEl.addEventListener('click', onClickFn);
   }

   function onClickFn(event){
      let target = event.currentTarget;
      let p = target.children[0];
      p.style.display = (p.style.display == 'block' ? 'none' : 'block');
   }
}