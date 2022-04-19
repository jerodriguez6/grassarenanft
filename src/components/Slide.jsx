
export default function Slide({tittle, subtittle, imageShow}) {
  return (
    <div className="carrouselDiv">
        <img src={imageShow} width="800rem" height="500rem"/>
        <h3>{tittle}</h3>
        <h1>{subtittle}</h1>
    </div>
  )
}
