const casinoList = document.getElementById('casino-list');
const loadMoreBtn = document.getElementById('load-more');
const allCasinos = document.getElementById('all-casinos');

const casinos = [
  {
    title: 'Sports Interaction Casino Review',
    bonuses: [
      {
        title: '20 Free Spins',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      },
      {
        title: '200% First deposit bonus + 250 FS',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/sports_interaction_casino.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: true,
    rating: 4.4
  },
  {
    title: '21 Dukes Casino Review',
    bonuses: [
       {
          title: '20 Free Spins',
          games: 'Slots, Keno, Scratch, Cards, Bingo',
        },
        {
          title: '200% First deposit bonus + 250 FS',
          games: 'Slots, Keno, Scratch, Cards, Bingo',
        }
    ],
    imgSrc: 'assets/img/21_dukes_moons.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: false,
    rating: 3.6
  },
  {
    title: 'AC Casino Review',
    bonuses: [
      {
        title: '50 Free Spins',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      },
      {
        title: '200% First deposit bonus + 250 FS',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/ac_casino.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: true,
    rating: 3.2
  },
  {
    title: 'All Irish Casino Review',
    bonuses: [
      {
        title: '100% First deposit bonus + 70 FS',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/all_irish.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: false,
    rating: 4.9
  },
  {
    title: 'All Star Games Casino Review',
    bonuses: [
      {
        title: '20 Free Spins',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      },
      {
        title: '200% First deposit bonus + 250 FS',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/sports_interaction_casino.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: false,
    rating: 4.2
  },
  {
    title: 'All Star Slots Casino Review',
    bonuses: [
      {
        title: '40 Free Spins',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      },
      {
        title: '100% First deposit bonus + 250 FS',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/21_dukes_moons.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: true,
    rating: 4.4
  },
  {
    title: 'VIP Stakes Casino',
    bonuses: [
      {
        title: '50 Free Spins',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      },
      {
        title: '200% First deposit bonus',
        games: 'Slots, Keno, Scratch, Cards, Bingo',
      }
    ],
    imgSrc: 'assets/img/ac_casino.png',
    countryImg: 'assets/img/Flag_of_the_United_States.png',
    isNew: false,
    rating: 2.2
  },
];

let startIndex = 0;
const chunkSize = 4;

allCasinos.textContent = `${casinos.length} Casinos`;
loadMoreBtn.textContent = `Load More Casinos (+${casinos.length - chunkSize})`

function renderCasinos(start, end) {
  for (let i = start; i < end; i++) {
    const casino = casinos[i];

    const casinoCard = document.createElement('div');
    casinoCard.classList.add('casino-card');

    const imgBlock = document.createElement('div');
    imgBlock.classList.add('block', 'grow-1');
    casinoCard.appendChild(imgBlock);
    const casinoImage = document.createElement('img');
    casinoImage.classList.add('card-img');
    casinoImage.src = casino.imgSrc;
    imgBlock.appendChild(casinoImage);

    const titleBlock = document.createElement('div');
    titleBlock.classList.add('block', 'grow-2');
    casinoCard.appendChild(titleBlock);

    if (casino.isNew) {
      const newText = document.createElement('span');
      newText.classList.add('new');
      newText.textContent = 'NEW'
      titleBlock.appendChild(newText);
    }

    const casinoTitle = document.createElement('span');
    casinoTitle.classList.add('casino-title');
    casinoTitle.textContent = casino.title;
    titleBlock.appendChild(casinoTitle);

    const starBlock = document.createElement('span');
    starBlock.classList.add('star-block');
    const countryImg = document.createElement('img');
    countryImg.classList.add('flag');
    countryImg.src = casino.countryImg;
    starBlock.appendChild(countryImg);
    const rating = document.createElement('span');
    rating.classList.add('rating');
    rating.textContent = casino.rating;
    starBlock.appendChild(rating);

    if (casino.rating >= 1) {
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img');
        star.classList.add('star');
        if (i <= Math.round(casino.rating)) {
          star.src = 'assets/img/star_rounded.png';
        } else {
          star.src = 'assets/img/star_rounded_gray.png';
        }
        starBlock.appendChild(star);
      }
    }

    titleBlock.appendChild(starBlock);

    const bonusesBlock = document.createElement('div');
    bonusesBlock.classList.add('block', 'grow-2');
    casino.bonuses.forEach((bonus, i) => {
      const bonusItem = document.createElement('span');
      bonusItem.classList.add('bonus-item');
      bonusItem.textContent = bonus.title;
      bonusesBlock.appendChild(bonusItem);

      bonusItem.onclick = () => {
        for (let openedModal of document.getElementsByClassName('modal')) {
          openedModal.remove();
        }
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.insertAdjacentHTML('afterbegin', `
          <div class="modal-content">
            <span id="close-${i}" class="close-btn">&times;</span>
            <div class="modal-title">20 Free Spins at 21 Dukes Casino</div>
            <div id="copy-code" class="copy-code">
              <img src="assets/img/check.png">
              Code copied to clipboard.
              <div class="up"></div>
            </div>
            <div id="welcome" class="welcome">WELCOME</div>
            <div class="modal-block">
              <div class="modal-block-item">
                <div class="modal-block-item-title">Games allowed:</div>
                <div>${bonus.games}</div>
              </div>
              <div class="modal-block-item">
                <span class="modal-block-item-title">Max cash out:</span>
                <span>$100</span>
              </div>
              <div class="modal-block-item">
                <span class="modal-block-item-title">Min. deposit:</span>
                <span class="free">FREE</span>
              </div>
            </div>
          </div>
        `);

        bonusItem.appendChild(modal);
        const closeBtn = document.getElementById(`close-${i}`);
        const copyCode = document.getElementById('copy-code');
        const welcomeBtn = document.getElementById('welcome');
        welcomeBtn.onclick = (e) => {
          e.stopPropagation();
          copyCode.style.display = 'block';
        }
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          bonusItem.removeChild(modal);
        });
      }
    });
    casinoCard.appendChild(bonusesBlock);

    const visitBtnBlock = document.createElement('div');
    visitBtnBlock.classList.add('block', 'grow-1');
    const visitBtn = document.createElement('button');
    visitBtn.classList.add('visit-btn');
    visitBtn.textContent = 'VISIT';
    visitBtnBlock.appendChild(visitBtn);
    casinoCard.appendChild(visitBtnBlock);

    casinoList.appendChild(casinoCard);
  }
}

function loadMoreCasinos() {
  const nextIndex = startIndex + chunkSize;
  const endIndex = Math.min(nextIndex, casinos.length);

  renderCasinos(startIndex, endIndex);

  startIndex = nextIndex;
  loadMoreBtn.textContent = `Load More Casinos (+${casinos.length - startIndex})`;

  if (startIndex >= casinos.length) {
    loadMoreBtn.style.display = 'none';
  }
}

renderCasinos(startIndex, chunkSize);

loadMoreBtn.addEventListener('click', loadMoreCasinos);
startIndex +=chunkSize;

if (startIndex >= casinos.length) {
  loadMoreBtn.style.display = 'none';
}
