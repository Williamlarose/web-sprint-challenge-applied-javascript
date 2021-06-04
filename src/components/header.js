const Header = (title, date, temp) => {

  const head = document.createElement('div')
  const span = document.createElement('span')
  const Title = document.createElement('h1')
  const span2 = document.createElement('span')

  head.classList.add('header')
  span.classList.add('date')
  span2.classList.add('temp')

  head.appendChild(span)
  head.appendChild(Title)
  head.appendChild(span2)

  span.textContent = date
  Title.textContent = title
  span2.textContent = temp
  return head
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
const header = document.querySelector('div.header-container')

const headerAppender = (selector) => {

  const com = Header('Lambada Times', 'june 7 2021', 'Hot')
  header.appendChild(com)

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
