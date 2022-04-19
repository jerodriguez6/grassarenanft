import RoadmapAnimation from "../components/RoadmapAnimation";
import RoadmapAnimationXL from "../components/RoadmapAnimationXL"



export default function Roadmap() {
    
    return (
        <section className='roadmap' id="roadMap">
            <div className='container'>
                <div className='roadtitle'>
                    <h1>ROAD</h1>
                    <h1>MAP</h1>
                </div>
                <RoadmapAnimation/>
                <RoadmapAnimationXL/>
                
                <div className='container roadmaplist'>
                </div>
            </div>


        </section>
    );
}
