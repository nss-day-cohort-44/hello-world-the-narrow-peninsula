import { useCity } from "./cities/cityDataProvider.js"
import { cityList } from "./cities/cityList.js"
import { useCitizen } from "./citizens/citizendataprovider.js"
import { citizenList } from "./citizens/citizenList.js"
import { useLandmark } from "./landmarks/landmarkDataProvider.js"
import { landmarkList } from "./landmarks/landmarkList.js"

useCity()
cityList()


useCitizen()
citizenList()


useLandmark()
landmarkList()