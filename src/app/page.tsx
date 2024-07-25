import Image from "next/image";


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
    </main>
  );
}
