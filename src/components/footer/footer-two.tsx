import Image from 'next/image';
import Link from 'next/link';
import { RightArrowFour } from '../svg';
import { footerLinks } from '@/data/footer-links';
import logo from '@/assets/img/logo/logo-black.png';
import FooterSocial from './footer-social';

export default function FooterTwo() {
   return (
      <footer>
         <div className="tp-footer-2">
            <div className="tp-footer-main pt-70 pb-55">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="tp-footer-widget tp-footer-2-col-1 mb-30">
                           <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="logo" style={{height:"auto"}} />
                              </Link>
                           </div>
                           <div className="tp-footer-widget-content">
                              <p>Your personalized AI mentor for every field. Transform your learning journey with intelligent, adaptive education technology.</p>
                           </div>
                           <div className="tp-footer-bottom-social mb-20">
                              <FooterSocial />
                           </div>
                         
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-2 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">PRODUCT</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_one.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-3 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">COMPANY</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_two.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-3 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">RESOURCES</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_three.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="tp-footer-widget tp-footer-2-col-3 mb-30">
                           <h4 className="tp-footer-widget-title mb-15">LEGAL</h4>
                           <div className="tp-footer-widget-link">
                              <ul>
                                 {footerLinks.link_four.map((link) => (
                                    <li key={link.id}>
                                       <Link href={link.link}>{link.title}</Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-footer-bottom">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-6 col-md-7">
                        <div className="tp-footer-copyright text-start">
                           <span>© {new Date().getFullYear()} IntelliPath AI. All rights reserved.</span>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-5">
                        <div className="tp-footer-bottom-info text-end">
                           <span>Built with 💜 by annexlogics</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
