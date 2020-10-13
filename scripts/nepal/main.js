import { useCity } from "./cities/cityDataProvider.js"
import { cityList } from './cities/cityList.js'

import { useLandmark } from "./landmarks/landmarkDataProvider.js"
import { landmarkList } from './landmarks/landmarkList.js'

import { useCitizen } from "./citizens/citizenDataProvider.js"
import { citizenList } from './citizens/citizenList.js'

useCitizen()
citizenList()

useLandmark()
landmarkList()

useCity()
cityList()

