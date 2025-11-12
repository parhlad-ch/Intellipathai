import Link from "next/link";
import Image from "next/image";
import shape_line_1 from '@/assets/img/unlerline/banner-2-svg-1.svg';
import thumb_2 from '@/assets/img/banner/banner-2-thumb-2.png';

export default function ProPlanBanner() {
  return (
     <section className="banner-area pb-60 pt-60">
    <div className="container">
       <div className="row align-items-center justify-content-center">
    <div className="col-lg-10">
      <div className="tp-banner-sm-2-wrap tp-banner-sm-2-bg-2 wow fadeInUp" data-wow-delay=".3s">
        <h3 className="tp-banner-sm-2-title">All Career Tools Included in <br/> 
          <span>Pro Plan 
            <Image className="tp-underline-shape-11 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src={shape_line_1} alt="shape-line"/> 
          </span>
        </h3>
        <p>Get unlimited access to all career tools plus exclusive features like cover <br/>letter generation, LinkedIn profile optimization, and personalized career coaching.</p>
        <div className="tp-banner-sm-2-btn">
          <Link href="/membership-plans">Upgrade to Pro</Link>
        </div>
        <div className="tp-banner-sm-2-shape-1">
          <Image src={thumb_2} alt="thumb" style={{height:'auto'}}/> 
        </div>
      </div>
    </div>
     </div>
      </div>
    </section>
  );
}
