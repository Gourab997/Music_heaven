import React from "react";
import pic from "../../images/about.svg";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className='join-us aboutbanner'>
        <div className='text-bar'>
          <p className='fs-1 about-head '>
            {" "}
            <span className='fontText' style={{}}>
              {" "}
              About Us <i class='fas fa-seedling'></i>
            </span>{" "}
          </p>
        </div>
        <img src={pic} alt='' />
      </div>
      <div>
        <div class='origin-story container my-5'>
          <h3 class='text-center' style={{ color: "#074e8c" }}>
            Origin Story
          </h3>
          <div className='my-5 origin-text'>
            <p>
              Long before the advent of recorded music or live radio
              transmissions came reproduced sheet music, allowing those able to
              read music and play an instrument to recreate the most popular
              compositions of the day. The first machine-printed music appeared
              around 1473 – about 20 years after the invention of the printing
              press – effectively setting in motion the beginnings of a music
              industry that was about more than just performers, events and
              instruments. Composers could now create pieces intended for
              amateur musicians to reproduce, and popular composers’ fame could
              spread much faster and in a more tangible way than before. By the
              19th Century, the music industry was largely composed of sheet
              music reproduction.
            </p>
            <p>
              It’s somewhat surprising to think that the first iteration of the
              record player – the phonograph – was invented in 1877 by Thomas
              Edison, and that people were visiting ‘phonograph parlours’ in the
              1890s, which were a rudimentary equivalent of a jukebox.
              Poor-sounding records made from brittle, scratchy shellac became
              popular in the first few decades of the 20th Century – but it
              wasn’t until the more durable vinyl records were introduced in the
              1930s that the format started to become seriously popular and a
              big money-spinner.
            </p>
            <p>
              Vinyl remained the dominant format until the late 1970s, when the
              sound quality of cassette tapes had improved sufficiently to allow
              them to rival records. ABBA’s ‘The Visitors’ became the first
              commercially released music compact disc in 1981, and by the early
              1990s, CDs had become the dominant format.
            </p>
          </div>
        </div>
      </div>

      <div className='container '>
        <h1 className='text-center mt-5'>Course plan: </h1>
        <ul>
          <li className='m-3 p-4'>
            <h3>Finish On Time</h3>
            <p>
              We'll teach you what music are and how to use them while making
              your photos. Also, we'll learn more about composition and will
              review many photo examples.
            </p>
          </li>
          <li className='m-3 p-4'>
            <h3>Provide Good Mentor</h3>
            <p>
              Good mentors are enthusiastic people, enjoying the role they play
              in helping others achieve their goals. ... While considering a
              mentor, look for someone who is enthusiastic, a good fit,
              respectful of others and a respected expert in their field
            </p>
          </li>
          <li className='m-3 p-4'>
            <h3>Making Content Plan</h3>
            <p>
              If you want to be musician, it's very important to promote
              yourself online, and we'll teach you how to choose the right
              content and post regularly.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
