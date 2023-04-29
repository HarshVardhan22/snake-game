import CategorySelection from "./onboarding-categories-selection/onboarding-categories"
import InstagramAuth from "./onboarding-instagram-auth"

const SlideSelector = ({currentSlide, setCurrentSlideCount}) => {
    if(currentSlide===1)
        return <InstagramAuth onButtonClick={()=>setCurrentSlideCount(prev => prev + 1)}/>
    else if(currentSlide===2)
        return <CategorySelection onBackButtonClick={()=>setCurrentSlideCount(prev => prev - 1)} onNextButtonClick={()=>{}}/>
    else if(currentSlide===3)
        return <></>
}

export default SlideSelector