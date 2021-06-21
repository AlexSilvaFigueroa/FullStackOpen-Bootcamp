export const handleContent = (data) => {
  const [ dataCollection ] = data
  return dataCollection
}

export const handleCourseCollector = (exercises) => {
  let valuesCollection = []
  exercises.map((x) => (
    valuesCollection.push(x.exercises))
  )
  return valuesCollection
}

