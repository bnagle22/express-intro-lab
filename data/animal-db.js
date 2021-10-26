const animals = [
  {text: 'Gecko', isPet: true, _id: 253875},
  {text: 'Leopard', isPet: false, _id: 284938},
  {text: 'Shark', isPet: false, _id: 278942},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)) {
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, animals)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}