const categoryColorMap = new Map()
import labels from "./labels"

categoryColorMap.set(labels.productReviews, 'orange')
categoryColorMap.set(labels.opinion, 'green')
categoryColorMap.set(labels.guide, 'purple')

const getCategoryColor = (category) => {
   return categoryColorMap.get(category)
}

export default getCategoryColor;