import CategorySelection from "./onboarding-categories-selection/onboarding-categories"
import InstagramAuth from "./onboarding-instagram-auth"

const SlideSelector = ({currentSlide}) => {
    if(currentSlide===1)
        return <InstagramAuth/>
    else if(currentSlide===2)
        return <CategorySelection/>
    else if(currentSlide===3)
        return <></>
}

export default SlideSelector