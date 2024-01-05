// const Url = 'http://localhost:3000';
const UrlWebType = 'https://space-eye-web-surver.onrender.com';
const token = localStorage.getItem('token');
const usersId = localStorage.getItem('usersId');
// 辨識是否已登入
const userBtn = document.querySelector('#userBtn');
axios.get(UrlWebType + `/600/users/${usersId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    userBtn.children[0].innerText = "車主專區";
    userBtn.children[0].setAttribute('href', './Pages/carOwner.html');
    userBtn.addEventListener('click',e=>{
      window.location.href = './Pages/carOwner.html';
    })
  })
  .catch((error) => {
    console.log(error);
    userBtn.children[0].innerText = "登入 / 註冊";
    userBtn.children[0].setAttribute('href', './Pages/login.html');
    userBtn.addEventListener('click', e => {
      window.location.href = './Pages/login.html';
    })
  });

const btnUp = document.querySelector('[data-btnUp]');
btnUp.addEventListener('click',e => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

// banner搜尋按鈕
const searchBarBtn = document.querySelector('#searchBarBtn');
searchBarBtn.addEventListener('click',e=>{
  window.location.href = './Pages/findSpace.html';
})