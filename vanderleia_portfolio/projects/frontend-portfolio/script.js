const data = [
  {name: 'Portfolio Principal', link: '../../index.html'},
  {name: 'API Flask (local)', link: '../backend-api/'}
];
const list = document.getElementById('project-list');
if(list){
  data.forEach(p=>{
    const li = document.createElement('li');
    li.innerHTML = `<a href="${p.link}">${p.name}</a>`;
    list.appendChild(li);
  });
}
