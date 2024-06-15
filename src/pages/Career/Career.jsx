import React from "react";
import "./Career.scss";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/footer/Footer";
import ContactForm from "../../component/ContactForm/ContactForm";
import HoverCard from "../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Career = () => {
  return (
    <section className="Career_w">
      <Navigation />

      <div className="Carerr_c">
        <div className="CarerrHeader">
        <div className="contactPageMainHeader">
          <span className="contactPageHeaderText1">
          Join Our Team at Stigmata
          </span>
          <span className="contactPageHeaderText2">
            {/* Let's have a discussion!! */}
          </span>
          <div className="contactPageMainSocialContainer">
            {/* <FiPhoneCall />
            <IoMailOutline />
            <TiMessages /> */}
          </div>
        </div>
        </div>
        <div className="JoinContent_c">
          <span className="CareerTitel">Join Our Team at Stigmata</span>
          <span className="CareerTitel2">Why Stigmata?</span>
          <span className="CareerDesText">
            At <span>Stigmata</span>, we are passionate about revolutionizing in
            the software development domain with innovative solutions and
            cutting-edge technology. Our team is our greatest asset, and we are
            committed to fostering a dynamic, inclusive, and inspiring work
            environment where every member can thrive and grow.
          </span>
          <br />
          <span className="CareerTitel2">Our Culture</span>
          <span className="CareerTitel2">We believe in:</span>
          <span className="CareerDesText">
            <span>Innovation:</span> Encouraging creative thinking and
            problem-solving.
            <br />
            <br />
            <span>Collaboration:</span> Working together to achieve common
            goals.
            <br />
            <br />
            <span>Growth: </span>Providing opportunities for professional
            development and career advancement.
            <br />
            <br />
            <span>Inclusivity:</span> Embracing diversity and promoting a
            culture of respect and equality.
            <br />
            <br />
            <span>Excellence:</span> Striving for the highest standards in
            everything we do.
            <br />
            <br />
            <span>Benefits of Working with Us</span>
            <br />
            <br />
            <span>Competitive Salary:</span> We offer a market-competitive
            compensation package.
            <br />
            <br />
            <span>Health & Wellness:</span> Comprehensive health insurance plans
            and wellness programs.
            <br />
            <br />
            <span>Work-Life Balance:</span> Flexible working hours and remote
            work options.
            <br />
            <br />
            <span>Professional Development:</span> Access to training,
            workshops, and mentorship programs.
            <br />
            <br />
            <span>Team Activities:</span> Regular team-building events and
            social activities.
          </span>
          <br />
          <br />
          <br />
          <br />
          <span className="CareerTitel2">How to Apply</span>
          <span className="CareerDesText">
            Ready to take the next step in your career ? Send your resume and a
            cover letter to <a href="">jerome@stigmatatech.com </a>& <a href="">jerome@stigmata.co.in</a> with
            the job title in the subject line. We can’t wait to hear from you!
          </span>
          Internship Opportunities We also offer internship programs for
          students and recent graduates. If you are eager to gain hands-on
          experience and learn from industry experts, apply for our internship
          positions by emailing jerome@stigmatatech.com & jerome@stigmata.co.in
          with your resume and a brief introduction. Stay Connected Follow us on
          https://www.linkedin.com/in/jerome-melkisidak-970b635b to stay updated
          on our latest job openings and company news.
          ________________________________________ We look forward to welcoming
          you to the Stigmata family!
          <br />
        </div>
        <div className="JoinContent_c">
            <div className="JoinContent_c1">
                <div className="JoinContent_c1Left"></div>
                <div className="JoinContent_c1right"></div>

            </div>
            <div className="JoinContent_c2">
            <div className="JoinContent_c2Left"></div>
            <div className="JoinContent_c2right"></div>
            </div>
            <div className="JoinContent_c3">
            <div className="JoinContent_c3Left"></div>
            <div className="JoinContent_c4right"></div>
            </div>


        </div>
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Career;
