const socket = io();
const c = document.getElementById('containerb')
// const format = require('./utils/message');

socket.on('message', message => {
  output(message);
});
socket.on('sendermessage', (msg) =>{
  console.log(`This is from server ${msg.text}`);

})

 
const send = document.getElementById('login');
const recieve = document.getElementById('reciever');
const sender = document.getElementById('sender');
const toggle = document.getElementById('toggle');
const msgbox = document.getElementById('messagebox')

send.addEventListener('click', e =>{ 
  e.preventDefault(); 
  const msg = msgbox.value;
  socket.emit('chatmessage', msg);
  msgbox.value = '';
  msgbox.focus();
  trial(msg);
});
function output(message){
  flush = document.createElement('div');
  flush.className = 'flush';
  flush.id = 'flushed';
  flush.innerHTML = `${message.text}`;
  var a = document.getElementById('containerb');
  var b = document.getElementById('bbanner');
  a.insertBefore(flush, b);
};
function trial(msg){
  const a = document.getElementById('messagebox');
  var newdiv = document.createElement('div');
  var newdivsend = document.createElement('div');
  var newdivdiv = document.createElement('div');
  newdiv.className = 'sender'
  newdivsend.id = 'sender'
  var newdivtext = document.createTextNode(`${msg.username}`);
  newdivsend.append(newdivtext);
  newdivdiv.innerHTML = `<p>${msg}</p>`;
  newdiv.appendChild(newdivsend);
  newdiv.appendChild(newdivdiv);
  var recieve = document.getElementById('containerb');
  var form = document.getElementById('msgbox');
  recieve.insertBefore(newdiv, form); 
}

