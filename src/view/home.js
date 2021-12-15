import {
  logout,
  currentUser,
  readData,
  userDocRef,
  getUserDoc,
  updateUserDoc,
} from '../firebase/firebase.js';

import { template } from './post.js';

import { newPost, functionNewPost } from './newPost.js';

export const Home = () => {
  const divElement = document.createElement('div');
  divElement.classList.add('container-home');
  divElement.innerHTML = ` 
  <div class='header-home'>
    <img id="photoUser" class="photoHome" width="100px">
    <div class="header-text">
      <h>Hello,</h>
      <p id="infoUser"></p>
    </div>
  </div>
  <button id="btn-newPost" style="display:none"> Add New Post </button>
  
  <p id="aboutP"></p>
 <div id="showPost">
 </div>
 <section class="modalNewPost" style="display: none">
      <div class="modalDivPost"> 
      <div class="modalContainer-NewPost">
      </div>
      </div>
  </section>
  `;

  return document.getElementById('container').appendChild(divElement);
};

export const FunctionsHome = () => {
  // autentificando usuario logueado
  const userCurrent = currentUser().currentUser;
  const userID = userCurrent.uid;

  async function profileInfo() {
    const docRef = userDocRef('usuarios', userID);
    const docSnap = await getUserDoc(docRef);

    if (docSnap.exists()) {
      const userInfo = docSnap.data();
      if (userInfo.name == null) {
        await updateUserDoc(docRef, {
          name: 'Developer',
        });
      }
      const info = document.getElementById('infoUser');
      info.innerHTML = `${userInfo.name}`;
      document.getElementById('photoUser').src = `${userInfo.photo}`;
    }

    console.log(docSnap.data());
  }

  profileInfo();

  // LogOut
  window.addEventListener('click', (e) => {
    const btnOut = e.target.id;
    if (btnOut === 'out') {
      logout()
        .then(() => {
          console.log('log out');
          window.location.hash = '#/';
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (btnOut === 'logout-mob') {
      logout()
        .then(() => {
          console.log('log out');
          window.location.hash = '#/';
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  // Crear nuevo post
  document.getElementById('btn-newPost').addEventListener('click', () => {
    newPost();
    document.querySelector('.modalNewPost').style.display = 'flex';
    functionNewPost();
  });

  document.getElementById('btn-post-mobile').addEventListener('click', () => {
    newPost();
    document.querySelector('.modalNewPost').style.display = 'flex';
    functionNewPost();
  });

  // window.addEventListener('click', (e) => {
  //   const btnNewPost = e.target;
  //   if (btnNewPost.id === 'btn-newPost') {
  //     newPost();
  //     document.querySelector('.modalNewPost').style.display = 'flex';
  //     functionNewPost();
  //   } else if (btnNewPost.id === 'btn-post-mobile') {
  //     newPost();
  //     document.querySelector('.modalNewPost').style.display = 'flex';
  //     functionNewPost();
  //   }
};
