const lists = document.querySelector('#categories');
const listsItem = document.querySelectorAll('.item')
console.log('category :', listsItem.length);

listsItem.forEach(item => {
    console.log(item.querySelector('h2').textContent);
    console.log(item.querySelectorAll('ul > li').length)
})

