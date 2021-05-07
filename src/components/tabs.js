import axios from 'axios'
const Tabs = (topics) => {

  const Topics = document.createElement('div')
  const java = document.createElement('div')
  const boot = document.createElement('div')
  const tech = document.createElement('div')
  const jqu = document.createElement('div')
  const node = document.createElement('div')

  Topics.classList.add('topics')
  java.classList.add('tab')
  boot.classList.add('tab')
  tech.classList.add('tab')
  jqu.classList.add('tab')
  node.classList.add('tab')

  Topics.appendChild(java)
  Topics.appendChild(boot)
  Topics.appendChild(tech)
  Topics.appendChild(jqu)
  Topics.appendChild(node)

  java.textContent = topics.topics[0]
  boot.textContent = topics.topics[1]
  tech.textContent = topics.topics[2]
  jqu.textContent = topics.topics[3]
  node.textContent = topics.topics[4]

  return Topics
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}
console.log(axios.get(`https://lambda-times-api.herokuapp.com/topics`))
const tabhead = document.querySelector('div.tabs-container')


const tabsAppender = (selector) => {

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(function (yo) {
      const tab = Tabs(yo.data)
      tabhead.appendChild(tab)
    }
    )
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
