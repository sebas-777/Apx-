const form = document.querySelector('.form');


function handleSubmit(e) {
    e.preventDefault();

const data = new FormData(form);
const json = Object.fromEntries(data.entries());
console.log(json);
    
}

function main() {
    
    form.addEventListener('submit', handleSubmit);
}

main();