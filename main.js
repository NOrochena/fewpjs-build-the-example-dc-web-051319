// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal = document.getElementById('modal')
let errorModalMessage = document.getElementById('modal-message')
errorModal.classList.add('hidden')

let likes = document.getElementsByClassName('like')
for (let like of likes) {
  like.addEventListener('click', function(){
    // let articleId = like.parentElement.parentElement.parentElement.id
    mimicServerCall()
    .then(function(){
      if (like.children[0].innerText === EMPTY_HEART) {
      like.children[0].classList.add('activated-heart')
      like.children[0].innerText = FULL_HEART
      } else {
        like.children[0].classList.remove('activated-heart')
        like.children[0].innerText = EMPTY_HEART
      }
      console.log("success")
    })
    .catch(function(error){
      errorModal.classList.remove('hidden')
      errorModalMessage.innerText = error
      setTimeout(function(){ errorModal.classList.add('hidden')}, 5000);
      console.log(error)
    })
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
