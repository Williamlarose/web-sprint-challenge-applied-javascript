import axios from 'axios'
const Card = (article) => {
  const card = document.createElement('div')
  const headlin = document.createElement('div')
  const author = document.createElement('div')
  const imgcont = document.createElement('div')
  const img = document.createElement('img')
  const span = document.createElement('span')

  card.classList.add('card')
  headlin.classList.add('headline')
  author.classList.add('author')
  imgcont.classList.add('img-container')

  card.appendChild(headlin)
  card.appendChild(author)
  author.appendChild(imgcont)
  author.appendChild(span)
  imgcont.appendChild(img)

  headlin.textContent = article.headline
  span.textContent = article.authorName
  img.src = article.authorPhoto


  return card


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
const cardhead = document.querySelector('div.cards-container')
console.log(axios.get(`https://lambda-times-api.herokuapp.com/articles`))
const cardAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(function (yo) {
      const boot = yo.data.articles.bootstrap
      const java = yo.data.articles.javascript
      const tech = yo.data.articles.technology
      const jq = yo.data.articles.jquery
      const node = yo.data.articles.node
      node.map(pro => {
        const nodeDiv = Card(pro)
        cardhead.appendChild(nodeDiv)
      })
      jq.map(pro => {
        const jqDiv = Card(pro)
        cardhead.appendChild(jqDiv)
      })
      tech.map(pro => {
        const techDiv = Card(pro)
        cardhead.appendChild(techDiv)
      })
      java.map(pro => {
        const javaDiv = Card(pro)
        cardhead.appendChild(javaDiv)
      })

      boot.map(pro => {
        const hey = Card(pro)
        cardhead.appendChild(hey)
      })
    });



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
