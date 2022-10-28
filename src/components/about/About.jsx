import React from "react";
import "./about.css";
import ME from "../../assets/MMM1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Complete</small>
            </article>
          </div>

          <p>
            Muhamad Zamzam Alrasyd lahir di Bandung, 21 Desember 2004. Sekolah
            di SMKS AL-ITTIHAD TERPADU Jl.Raya Bandung Km.03 Karang Tengah
            Cianjur. Duduk di kelas 3 SMK jurusan Rekayasa Perangkat Lunak
            (RPL). Basic skill dalam bahasa pemrograman dalam front end, back
            end, dan fullstack.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
