const users = ['Pearl', 'RD'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <a href="val.html" class="btn"><span>${curElem}</span></a>
        `);
    })
};


userIcons();
