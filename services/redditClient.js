import axios from 'axios'

export async function getNewListings(subReddit) {
  try {
    let { data } = await axios.get(`https://www.reddit.com/r/${subReddit}/new.json?sort=new`)
    console.log(data)
  } catch (err) {
    console.log('Something very bad happens')
  }
}

export async function getComments(subReddit, postPath) {
  try {
    let { data } = await axios.get(`https://www.reddit.com/r/${subReddit}/comments/
      ${postPath}/.json`)
    console.log(data)
  } catch (err) {
    console.log('Something very bad happens')
  }}
