textarea.addEventListener('keydown', ParseTextArea);
generateButton.addEventListener('click', Tagify);

function ParseTextArea() {
    //let tags = textarea.value.split(/\s+/);
    let tags = textarea.value.split(' ');
    let tagCount = tags.length;
    tagCountDiv.textContent = `Tags: ${tagCount}`;

    console.log(tagCount);
}

function Tagify() {
    console.log(textarea.value.pop);
    let string = textarea.value;
    if(string.slice(-1) == ' ') {
        string = string.slice(0,-1);
    }
    string = string.replaceAll('#', '');
    textarea.value = '#' + string.replaceAll(' ', ' #');
}