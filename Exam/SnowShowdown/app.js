window.addEventListener("load", solve);

function solve() {

  let inputs = {
    snowmanName: document.getElementById('snowman-name'),
    height: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creator: document.getElementById('creator-name'),
    attribute: document.getElementById('special-attribute')
  };
  
  let addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', onAddClick);

  let previewList = document.querySelector('.snowman-preview');
  let snowList = document.querySelector('.snow-list');
  let main = document.getElementById('hero');
  let body = document.querySelector('.body');
  let imgRef = document.getElementById('back-img');

  function onAddClick(event){
    event.preventDefault();

    let snowmanName = inputs.snowmanName.value;
    let height = Number(inputs.height.value);
    let location = inputs.location.value;
    let creator = inputs.creator.value;
    let attribute = inputs.attribute.value;

    if (
      inputs.snowmanName.value == '' ||
      inputs.height.value == '' ||
      inputs.location.value == '' ||
      inputs.creator.value == '' ||
      inputs.attribute.value == ''
    ) {
      return;
    }

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    let result = createPreviewList(snowmanName, height, location, creator, attribute);
    previewList.appendChild(result);

  }

  function createPreviewList(snowmanName, height, location, creator, attribute) {

    let element = e ('li');
    element.className = 'snowman-info';
    let articleEl = e ('article');
    articleEl.appendChild(e('p',`Name: ${snowmanName}`));
    articleEl.appendChild(e('p',`Height: ${height}`));
    articleEl.appendChild(e('p',`Location: ${location}`));
    articleEl.appendChild(e('p',`Creator: ${creator}`));
    articleEl.appendChild(e('p',`Attribute: ${attribute}`));

    element.appendChild(articleEl);
    
    let divEl = e ('div');
    divEl.className = 'btn-container';

    let editBtn = e ('button', 'Edit');
    editBtn.className = 'edit-btn';
    divEl.appendChild(editBtn);
    editBtn.addEventListener('click', () => onEditClick(snowmanName, height, location, creator, attribute))

    let nextBtn = e ('button', 'Next');
    nextBtn.className = 'next-btn';
    divEl.appendChild(nextBtn);
    nextBtn.addEventListener('click', () => onNextClick(snowmanName, height, location, creator, attribute))

    element.appendChild(divEl);

    return element;

  }

  function onNextClick(snowmanName, height, location, creator, attribute) {

    previewList.textContent = '';

    let result = createSnowList(snowmanName, height, location, creator, attribute);
    snowList.appendChild(result);

  }

  function createSnowList(snowmanName, height, location, creator, attribute){
    let element = e ('li');
    element.className = 'snowman-content';
    let articleEl = e ('article');
    articleEl.appendChild(e('p',`Name: ${snowmanName}`));
    articleEl.appendChild(e('p',`Height: ${height}`));
    articleEl.appendChild(e('p',`Location: ${location}`));
    articleEl.appendChild(e('p',`Creator: ${creator}`));
    articleEl.appendChild(e('p',`Attribute: ${attribute}`));     
    
    let sendBtn = e ('button', 'Send');
    sendBtn.className = 'send-btn';
    articleEl.appendChild(sendBtn);
    sendBtn.addEventListener('click', onSendClick)

    element.appendChild(articleEl);  

    return element;
  }

  function onSendClick(event) {
    snowList.textContent = '';
    main.remove();

    imgRef.removeAttribute('hidden');

    //let h1 = e('h1','Snow Showdown');
    //body.appendChild(h1);

    let backBtn = e ('button', 'Back');
    backBtn.className = 'back-btn';
    body.appendChild(backBtn)
    backBtn.addEventListener('click', onBackClick);

  }

  function onBackClick(event){
    event.target.remove();
    imgRef.setAttribute('hidden', '')
    body.appendChild(main);
    addBtn.disabled = false;
  }

  function onEditClick(snowmanName, height, location, creator, attribute) {

    previewList.textContent = '';

    inputs.snowmanName.value = snowmanName;
    inputs.height.value = height;
    inputs.location.value = location;
    inputs.creator.value = creator;
    inputs.attribute.value = attribute;

    addBtn.disabled = false;
  }

  function e (type, content) {

    let element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    return element;
  }

}
