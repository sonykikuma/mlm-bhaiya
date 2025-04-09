import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ayurveda = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Mr. Shiva Soni</h1>
      <h4 className="text-center text-muted mb-5">
        Working in Ayurveda (Since 2017)
      </h4>

      <section className="mb-4">
        <h3>Mission</h3>
        <p>Healing → 1 Crore People → Health, Wealth, Happiness</p>
      </section>

      <section className="mb-4">
        <h3>Education & Expertise</h3>
        <ul>
          <li>M.Sc Bio Science & Motivational Speaker</li>
          <li>
            Trainer in Health Awareness (BSF, CRPF, State Police, Indian
            Farmers)
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>Awareness & Reach</h3>
        <p>Aiming to reach 1 lakh people – “All is well”</p>
      </section>

      <section className="mb-4">
        <h3>Media & Training</h3>
        <p>Pics, Videos, and Training Sessions:</p>
        <div className="row">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="border rounded p-5 text-center">
                  Image {idx + 1}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mb-4">
        <h3>Our Mentors</h3>
        <div className="row">
          {["M/F", "Kind", "Name", "Town/Sector"].map((label, idx) => (
            <div key={idx} className="col-md-3 mb-3">
              <div className="border rounded p-3 text-center">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h3>Connect with Us</h3>
        <p>Phone: 9713672855</p>
        <p>
          Address: 7/41 Indraprasth Colony, Kendrapada <br />
          Office: Beside Jagdev Hotel, Pattamundai Chowk Square
        </p>
      </section>
    </div>
  );
};

export default Ayurveda;
