// Old BMI Formula:  weight(kg)/height(m)^2
// New BMI Formula: 1.3 * weight(kg)/height(m)
const calculateMetricBMI = (weight, height) => {
  let result
  result = 1.3*weight / (Math.pow((height/100), 2.5))

  return result;
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