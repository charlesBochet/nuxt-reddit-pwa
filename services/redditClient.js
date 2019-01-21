import axios from 'axios'

export async function getNewPosts(subReddit) {
  try {
    let { data } = await axios.get(`https://www.reddit.com/r/${subReddit}/new.json?sort=new`)
    return data.data.children.map((item) => (item.data))
  } catch (error) {
    handleApiError(error)
  }
}

export async function getComments(subReddit, postPath) {
  try {
    let { data } = await axios.get(`https://www.reddit.com/r/${subReddit}/comments/
      ${postPath}/.json`)
    return data.map((item) => {
      return item.data.children.map((comment) => (comment.data))
    })
  } catch (error) {
    handleApiError(error)
  }
}

function handleApiError(error) {
  console.log('Something very bad happens')
}
