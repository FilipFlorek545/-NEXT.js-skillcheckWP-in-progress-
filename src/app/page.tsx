import Image from "next/image";
import {ProductBox} from "@/app/ui/productBox";


export default function Home() {
  return (
    <main>
      <section className="wide">
        <div className="wide_top">
          <div className='classyHeader'>
            <span>UNLEASHING</span>
            <span>DIGITAL</span>
            <span>WONDERS</span>
            <span>FOR</span>
          </div>
          <div></div>
        </div>
        <div className="wide_bottom">
          <div>
            {/*<Image></Image>*/}
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
              dictum eget congue urna malesuada suscipit mollis neque nam sem pulvinar
              maecenas vulputate nunc mus mus convallis eleifend ex risus nullam.
            </p>
            <div>
              <p>GET IN TOUCH</p>
              {/*<Image></Image>*/}
            </div>
          </div>
          <div className="tagBlocks">
            <div>THIS</div>
            <div>THAT</div>
            {/*<div><Image></Image></div>*/}
            <div>ALSO THIS</div>
            <div>ALSO</div>
            <div>ALSO THAT</div>
            <div>AND THIS</div>
            <div>AND THAT</div>
            {/*<div><Image></Image></div>*/}
          </div>
        </div>
      </section>
      <section className="wide white_bg">
        <h5 id="cases">CASES</h5>
        <div className="section_contents">
          <h2>
            <span>Lorem ipsum dolor sit </span><br/>
            <span>amet, consectetur adipiscing <span>elit mauris</span></span><br/>
            <span><span>et urna</span><span>egestas</span></span>
          </h2>
          <div className="products">
            <div className="big_scale">
              <ProductBox name={'Alpha'} description={'This is an amazing description of our Alpha product.'} />
              <ProductBox name={'Omega'} description={'Check out this outstanding Omega tech we developed'} />
            </div>
            <div className="small_scale">
              <ProductBox name={'Sigma'} description={'Sigma, because simplicity is the best.'} />
              <ProductBox name={'Zeta'} description={'Zeta, a completely new way to see the world.'} />
              <ProductBox name={'Epsilon'} description={'Our answer to the new trends.'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
