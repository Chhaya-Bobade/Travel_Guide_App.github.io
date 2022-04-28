import React from "react";
import styled from "styled-components";
import avatarImage from "./assets/avatarImage.jpeg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          The perfect combination- lone travelling , excellent organisation and the best of experiences , thank you .
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Amol Kadam</h4>
              <span>bangalore</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Most relaxing holiday we have ever had. We definitely didn’t want to leave and would absolutely return to the same resort
          </p>
          <div className="info">
            <img src={pic2} alt="" />
            <div className="details">
              <h4>Shrishti Bansal</h4>
              <span>pune</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          A compelling mix of city , hills , safari and beach interwoven with local cultural , scenic and culinary experience .
          </p>
          <div className="info">
            <img src={pic3} alt="" />
            <div className="details">
              <h4>Vikram Nayak</h4>
              <span>delhi</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
          width:3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;