function editElement(ref, match, replacer) {
    
    content = ref.textContent;
    result = content.split(match).join(replacer);
    ref.textContent = result;
}