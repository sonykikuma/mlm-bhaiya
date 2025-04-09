import React from "react";
import Header from "./Header";

const DetailPage = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h2 className="text-center text-success mb-4">Mission Ayurveda</h2>

        <section className="mb-4">
          <h4>📅 Started in 2017</h4>
          <p>
            Mission to heal people and bring Health, Wealth & Happiness to 1 Cr+
            individuals through awareness and training.
          </p>
        </section>

        <section className="mb-4">
          <h4>🎯 Awareness & Training</h4>
          <p>
            Conducted for Indian Armed Forces, BSF, CRPF, State Police, and
            Indian Farmers. Awareness reached 1 Lakh+ people.
          </p>
        </section>

        <section className="mb-4">
          <h4>🎥 Our Media</h4>
          <div className="row text-center">
            <div className="col">Pics</div>
            <div className="col">Videos</div>
            <div className="col">Training</div>
            <div className="col">Mentors</div>
          </div>
        </section>

        <section className="mb-4">
          <h4>👤 Self Info</h4>
          <p>
            Comes from a family background rooted in values. Always aims to help
            others. Inspired by home mentors.
          </p>
        </section>

        <section>
          <h4>🧭 Our Self Missions</h4>
          <ol>
            <li>Natural Home - Desi Style</li>
            <li>Organic Farm House</li>
            <li>Transport (Car/Bus/Cargo)</li>
            <li>Ayurveda Hospitality (India & Abroad)</li>
            <li>Free Education/Learning</li>
            <li>Human Goal Setting</li>
            <li>Life Journey</li>
            <li>Facilities</li>
            <li>Query & Support</li>
            <li>Problem Handling</li>
          </ol>
        </section>
        <section className="mb-5">
          <h4 className="text-primary">🧾 Conclusion</h4>
          <p>
            Our journey is about selfless service and raising awareness about
            holistic healing, traditional values, and sustainable living.
            Through training, guidance, and education, we aim to build a
            community that thrives on harmony, health, and happiness. The
            mission continues with the support of people like you—curious, kind,
            and committed to making a difference.
          </p>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
