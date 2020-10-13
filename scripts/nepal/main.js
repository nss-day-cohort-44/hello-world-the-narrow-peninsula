import { useCity } from "./cities/cityDataProvider.js"
import { cityList } from './cities/cityList.js'

import { useLandmark } from "./landmarks/landmarkDataProvider.js"
import { landmarkList } from './landmarks/landmarkList.js'


useLandmark()
landmarkList()

useCity()
cityList()

