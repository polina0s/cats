class Card {
  createCard(src) {
    this.element = document.createElement('div');
    this.element.classList.add('card');

    this.element.innerHTML = `
    <img src='${src}' class='card-img-top' alt='cat' />
    <div class='card-body'>
      <a href='#' class='btn btn-dark'>
        See cat
      </a>
    </div>    
    `;
  }
}

// <div class="card" style="width: 18rem">
//  <img src="./pics/frog.png" class="card-img-top" alt="cat" />
//  <div class="card-body">
//    <a href="#" class="btn btn-dark">
//      See cat
//    </a>
//  </div>
// </div>
