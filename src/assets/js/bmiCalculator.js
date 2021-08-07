const calculateMetricBMI = (weight, height) => {
  let result
  result = weight / ((height/100) * (height/100))

  return result.toFixed(2);
}

const getBMIClassification = (value) => {
  if (value < 18.5) {
    return "Underweight"
  } else if (value < 25) {
    return "Normal weight"
  } else if (value < 30) {
    return "Overweight"
  } else if (value < 35) {
    return "Obsesity class 1"
  } else if (value < 40.1) {
    return "Obsesity class 2"
  } else {
    return "Extreme Obsesity class 3"
  }
}