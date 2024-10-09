import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-50">
        <button className="btn btn-secondary">Breaking News</button>
        <Marquee pauseOnHover={true} speed={150}>
  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
</Marquee>
    </div>
  )
}

export default BreakingNews