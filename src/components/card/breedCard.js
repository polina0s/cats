export class BreedCard {
  constructor({
    url,
    name,
    wiki,
    adaptibility,
    description,
    childFriendly,
    temperament,
    dogFriendly,
    health,
    strangerFriendly,
    intelligence,
    lifeSpan,
    origin,
    socialNeeds,
  }) {
    this.url = url;
    this.name = name;
    this.wiki = wiki;
    this.adaptibility = adaptibility;
    this.description = description;
    this.childFriendly = childFriendly;
    this.temperament = temperament;
    this.dogFriendly = dogFriendly;
    this.health = health;
    this.strangerFriendly = strangerFriendly;
    this.intelligence = intelligence;
    this.lifeSpan = lifeSpan;
    this.origin = origin;
    this.socialNeeds = socialNeeds;

    this.createCatCard();
  }

  createCatCard() {
    this.element = document.createElement('div');
    this.element.style = 'max-width: 1120px; margin: 0 auto';

    this.element.innerHTML = `
    <div class="card mb-4">
      <div class="card-header bg-info-subtle"> <b>${this.name}</b> </div>
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${
            this.url
          }" style="height: 100%; object-fit: contain" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h6 class="card-title">${this.description}</h5>
            <p class="card-text"><b>Temperament:</b> ${this.temperament}</p>
            <p class="card-text"><b>Life span:</b> ${this.lifeSpan} years</p>
            <p class="card-text"><b>Origin:</b> ${this.origin}</p>
            <a href="${
              this.wiki
            }" class="card-link link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><b>Wikipedia</b></a>
            <ul class="list-group mt-3 mb-4">
              <li class="list-group-item"><b>adaptibility</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.adaptibility
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>social needs</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.socialNeeds
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>child friendly</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.childFriendly
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>dog friendly</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.dogFriendly
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>stranger friendly</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.strangerFriendly
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>health issues</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.health
                  }%"></div>
                </div>
              </li>
              <li class="list-group-item"><b>intelligence</b>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info" style="width: ${
                    20 * this.intelligence
                  }%"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>  
    </div>
    `;
  }
}

/* 
<ul class="list-group">
  <li class="list-group-item">Temperament: ${this.temperament}</li>
  <li class="list-group-item">Life span: ${this.lifeSpan}</li>
  <li class="list-group-item">Origin: ${this.origin}</li>
  <li class="list-group-item">
    <a href="${this.wiki}" class="card-link">Wikipedia</a>
  </li>
  <li class="list-group-item">adaptibility
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.adaptibility
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">social needs
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.socialNeeds
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">child friendly
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.childFriendly
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">dog friendly
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.dogFriendly
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">stranger friendly
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.strangerFriendly
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">health issues
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.health
      }%"></div>
    </div>
  </li>
  <li class="list-group-item">intelligence
    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-info" style="width: ${
      20 * this.intelligence
      }%"></div>
    </div>
  </li>
</ul>




<div>
              <p class="card-text">adaptability</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.adaptibility
                }%"></div>
              </div>
            </div>
            <div>
              <p class="card-text">social needs</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.socialNeeds
                }%"></div>
              </div>  
            </div>
            <div>
              <p class="card-text">child friendly</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.childFriendly
                }%"></div>
              </div>  
            </div>
            <div>
              <p class="card-text">dog friendly</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.dogFriendly
                }%"></div>
              </div>  
            </div>
            <div>
              <p class="card-text">stranger friendly</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.strangerFriendly
                }%"></div>
              </div>  
            </div>
            <div>
              <p class="card-text">health issues</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.health
                }%"></div>
              </div>  
            </div>
            <div>
              <p class="card-text">intelligence</p>
              <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style="width: ${
                  20 * this.intelligence
                }%"></div>
              </div>  
            </div>

*/
