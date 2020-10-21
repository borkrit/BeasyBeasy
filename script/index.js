console.log(1)

const $nav = document.getElementsByTagName('nav');
let $ul = document.getElementById('ul');
console.log($ul)
addEventListener('click',()=>{
    $ul.classList.toggle('open')
})