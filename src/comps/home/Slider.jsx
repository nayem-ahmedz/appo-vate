import { Carousel } from "react-responsive-carousel";

export default function Slider() {
    const slides = [
        { id: 1, img: '', title: '' },
        { id: 2, img: '', title: '' },
        { id: 3, img: '', title: '' },
    ];
    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            {
                slides.map(slide => <div key={slide.key}>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>)
            }
        </Carousel>
    );
}