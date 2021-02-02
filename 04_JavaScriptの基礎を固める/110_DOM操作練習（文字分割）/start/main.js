document.addEventListener('DOMContentLoaded', function () {
    // const title = document.querySelector('.animate-title').textContent;
    const title = document.querySelector('.animate-title');
    // console.log(title);

    // let str = title.trim();
    let str = title.innerHTML.trim().split("");
    // console.log(str);
    // console.log(str2);

    // let titleText = "";

    // for (el of str) {
    //     el = el.replace(' ', '&nbsp;');
    //     titleText += `<span class="char">${el}</span>`;
    // }
    
    // title.innerHTML = titleText;

    title.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(" ", "&nbsp;");
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
    
});