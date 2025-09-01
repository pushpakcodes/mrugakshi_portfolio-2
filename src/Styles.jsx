import React from "react";

const Styles = () => (
  <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .project-timeline-heading {
        position: absolute;
        top: 15vh;
        right: 2vw;
        color: #E45310;
        font-size: 4vw;
        font-weight: 800;
        line-height: 1.4;
        letter-spacing: 0.01vw;
        font-family: 'Poppins', sans-serif;
        text-align: left;
      }

      .timeline-section {
        position: relative;
        top: 4vh;
        height: calc(100vh - 12vh);
      }

      .vertical-strip {
        position: fixed;
        left: 43.2%;
        top: 0;
        bottom: 0;
        width: 6.9vw;
        height: 100%;
        background-color: #E45310;
        z-index: 0;
        transform: translateX(-50%);
      }

      @keyframes stripColorChange {
        from {
          background-color: #fff;
        }
        to {
          background-color: #E45310;
        }
      }

      .project-number {
        color: #FF554B;
        font-size: 3.5vw;
        font-weight: bold;
        width: 7vw;
        text-align: center;
        position: relative;
        z-index: 2;
        transition: color 0.3s ease;
      }

      .project-number.selected {
        color: white;
      }

      .project-details {
        padding-left: 1.5vw;
        transition: transform 0.3s ease;
        color: #F5F5F5;
        text-align: left;
        width: 100%;
      }

      .project-details.selected {
        color: white;
      }

      .project-item {
        display: flex;
        align-items: center;
        position: relative;
      }

      .project-item:hover .project-details {
        transform: scale(1.02);
      }

      .category-header {
        margin-bottom: 0;
        margin-top: 0.5vw;
        display: flex;
        align-items: flex-start;
        position: relative;
      }

      .category-header h2 {
        color: #E45310;
        font-size: 2.1vw;
        font-weight: 700;
        text-align: left;
        margin-bottom: 0.5vw;
        font-family: 'Poppins', sans-serif;
        margin-left: 7vw;
        padding-left: 1.5vw;
        width: 100%;
        white-space: nowrap;
        overflow: visible;
      }

      /* About Section Styles (Desktop) */
      .about-text {
        width: 100%;
        text-align: center;
        padding: 0 2rem;
      }

      .about-title {
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        color: #E45310;
        margin-top: 7vh;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .about-description {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: #666;
        line-height: 1.5;
        text-align: center;
        padding: 0 2rem;
        margin-bottom: 2rem;
      }

      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 20vh;
        margin-left: 3vw;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
      }

      .contact-item svg {
        font-size: 18px;
        color: #E45310;
      }

      .contact-item:hover {
        color: #E45310;
      }

      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #E45310;
        color: white;
        border: none;
        border-radius: 50%;
        width: 3vw;
        height: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
        z-index: 10;
        font-weight: bold;
        font-size: 2.4vw;
      }

      .nav-button:hover {
        background-color: #e44d00;
      }

      .nav-button.left {
        left: -100px;
      }

      .nav-button.right {
        right: -100px;
      }

      .nav-button svg {
        font-size: 34px;
      }

      .skeleton {
        background: linear-gradient(
          90deg,
          #fdf3ed 25%,
          #fde7da 50%,
          #fdf3ed 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.2s ease-in-out infinite;
        border-radius: 0.5rem;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      /* Content container for scrollable content */
      .content-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      /* Disable main page scroll when a project is selected */
      .project-selected .content-container {
        overflow-y: hidden;
      }

      @media (max-width: 768px) {
        body, .h-screen, .font-sans, .text-gray-800, .bg-[#3F3124] {
          background: #fff;
          color: #222;
          min-height: 100vh;
          height: auto;
          font-size: 4vw;
          overflow-x: hidden;
          overflow-y: auto; /* Allow body scrolling as fallback */
        }

        header, .fixed.w-full.top-0.z-50 {
          position: fixed;
          top: 0;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding: 4.8vw 4.3vw 2.7vw 4.3vw;
          border-bottom: 0.4vw solid #E45310;
          background: #fff;
          z-index: 1000;
        }

        header h1, .text-3xl {
          font-size: 5vw;
          margin-bottom: 0.5vw;
          letter-spacing: 0.01em;
          line-height: 1.1;
        }

        header p, .text-2xl {
          font-size: 3.8vw;
          margin-bottom: 2vw;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .flex.flex-col.items-center.gap-4.text-orange-500.text-xl.mt-1.pr-10 {
          flex-direction: column;
          gap: 2.1vw;
          margin: 0;
          padding: 0;
          align-items: center;
          position: absolute;
          right: 4.8vw;
          top: 5.9vw;
        }

        .flex.flex-col.items-center.gap-4.text-orange-500.text-xl.mt-1.pr-10 a svg {
          font-size: 3.2vw;
        }

        .w-[40%].bg-white.p-[2vh].fixed {
          position: static;
          width: 100%;
          padding: 6.4vw 2.7vw 2.7vw 2.7vw;
          background: #fff;
          box-shadow: none;
          min-height: unset;
          display: block;
          border-radius: 0;
          margin: 0;
        }

        /* Scrollable content container */
        .content-container {
          margin-top: 14vh;
          width: 100%;
          padding-bottom: 0vh;
          box-sizing: border-box;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          height: calc(100vh - 14vh);
        }

        /* About Section Styles (Mobile) */
        .about-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          background: #fff;
          padding: 0.4vw 2.7vw 3.4vw 2.7vw;
          position: relative;
          margin: 0;
          min-height: unset;
        }

        .about-text {
          width: 100%;
          text-align: center;
          padding: 0 2.7vw;
          margin: 0 auto;
        }

        .about-title {
          font-size: 5.2vw;
          margin-top: 2vw;
          margin-bottom: 2.7vw;
          padding: 0;
          font-weight: bold;
          text-align: center;
        }

        .about-description {
          padding: 0 2.7vw;
          font-size: 3.9vw;
          text-align: center;
          line-height: 1.5;
          color: #444;
        }

        .contact-info.ml-8 {
          align-items: flex-start;
          text-align: left;
          margin: 4vw 0 0 2.1vw;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2.7vw;
          color: #444444;
          font-size: 3.4vw;
          font-weight: 300;
          text-align: left;
        }

        .contact-item svg {
          font-size: 4.8vw;
          color: #E45310;
          text-align: left;
        }

        .w-[25%].ml-[40%].overflow-y-scroll {
          width: 100%;
          margin-left: 0;
          position: static;
          background: #3F3124;
          padding: 0;
          box-shadow: none;
          height: auto;
        }

        .project-timeline-heading, .w-[35%].fixed.right-[5vw] {
          display: none;
        }

        .flex.flex-col.py-12 {
          row-gap: 6vw;
          padding: 3.2vw 0;
          margin: 0;
        }

        /* Timeline Area and Strip */
        .timeline-area {
          background-color: #3F3124; /* Dark brown background for mobile timeline */
          padding: 4vw 4.3vw; /* Add padding to the timeline area */
          position: relative; /* Establish positioning context for the pseudo-element */
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          z-index: 1;
        }

        .timeline-area::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: calc(4.3vw + 10vw + 3vw); /* Reduced width for the orange strip: Left padding + reduced project-number width + margin-right of project-number */
          background-color: #E45310; /* Orange strip color */
          z-index: 0; /* Behind the content */
        }

        .timeline-content {
          background: transparent; /* Ensure background is transparent to show ::before */
          color: #F5F5F5;
          padding: 0; /* Remove padding here as it's on timeline-area */
          display: flex;
          flex-direction: row-reverse; /* Change to row-reverse to put numbers on left and heading on right */
          height: auto;
          position: relative;
          gap: 0; /* Adjust gap as needed */
          width: 100%;
          justify-content: space-between;
          align-items: flex-start;
        }

        .project-timeline-heading-mobile {
          color: #E45310;
          font-size: 7vw;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: 0.01em;
          text-align: right;
          margin-bottom: 5vw;
          position: relative;
          z-index: 3;
          width: 35%; /* Adjust width to make space for project numbers */
          padding: 2vw; /* Keep existing padding */
          flex-shrink: 0;
        }

        .project-timeline-heading-mobile p {
          color: #F5F5F5;
          font-size: 3.5vw;
          margin-top: 1vw;
          font-weight: normal;
        }

        .project-timeline-list {
          display: flex;
          flex-direction: column;
          gap: 3.2vw;
          overflow-y: auto;
          overflow-x: hidden;
          height: auto;
          max-height: 50vh;
          padding-right: 2.1vw;
          padding-bottom: 6.4vw;
          position: relative;
          z-index: 2;
          width: 65%;
          -webkit-overflow-scrolling: touch;
          text-align: left;

          /* Hide scrollbar for WebKit (Chrome, Safari, Edge) */
        }
        .project-timeline-list::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for Firefox */
        .project-timeline-list {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }


        .project-item {
          display: flex;
          align-items: center;
          margin-bottom: 8vw;
          position: relative;
        }

        .project-number {
          color: #FF554B;
          font-size: 8vw;
          width: 17vw;
          text-align: left;
          margin-right: 3vw;
          position: relative;
          z-index: 1;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .project-number.selected {
          color: white;
        }

        .project-details {
          padding-left: 0;
          color: #F5F5F5;
          font-size: 5vw;
          font-weight: 500;
          position: relative;
          z-index: 2;
          text-align: left;
          width: 100%;
        }

        .project-details.selected {
          color: white;
        }

        .category-header-mobile {
          margin-bottom: 0;
          margin-top: 0.5vw;
          display: flex;
          align-items: flex-start;
          position: relative;
        }

        .category-header-mobile h2 {
          color: #E45310;
          font-size: 6vw;
          font-weight: 700;
          text-align: left;
          margin-bottom: 0.5vw;
          font-family: 'Poppins', sans-serif;
          margin-left: 17vw;
          padding-left: 0;
          width: 100%;
        }

        .project-details h3 {
          font-size: 4.2vw;
          margin-bottom: 0.8vw;
          font-weight: 600;
        }

        .project-details p {
          font-size: 3.5vw;
          margin-bottom: 0;
          color: #ccc;
        }

        .project-details img {
          width: 12vw;
          height: 8vw;
          margin-bottom: 0.5vw;
          object-fit: contain;
        }

        /* Project Details Section (Mobile) */
        .w-full.h-full.overflow-y-scroll.hide-scrollbar.p-4 {
          position: static;
          width: 100%;
          height: auto;
          overflow-y: visible;
          background: #fff;
          z-index: 200;
          padding: 0 2.7vw;
          border-radius: 0;
          box-shadow: none;
          margin: 0;
          text-align: left;
        }

        .mb-6.mt-6.text-left {
          margin: 1.5vw 0 1.5vw 0;
          text-align: left;
        }

        .flex.items-center.gap-4 {
          gap: 2.7vw;
          justify-content: flex-start;
        }

        .bg-[#E45310].text-white.rounded-full.p-2 {
          width: 9.6vw;
          height: 9.6vw;
          font-size: 3.2vw;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-[#E45310].text-2xl.font-bold {
          font-size: 5.2vw;
          font-weight: bold;
        }

        .flex.flex-wrap.gap-x-10.gap-y-2.text-sm.text-gray-700.font-poppins.mt-4 {
          justify-content: flex-start;
          gap: 1.5vw;
          font-size: 3.4vw;
          margin: 1.5vw 0;
        }

        .min-w-[180px] {
          min-width: unset;
          text-align: left;
        }

        .grid.grid-cols-2.gap-4 {
          display: flex;
          flex-direction: column;
          gap: 2.7vw;
          margin: 0;
          margin-left: 0;
          width: 100%;
          max-height: 40vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .col-span-2.aspect-video.mb-4, .h-[25vh] {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          margin-bottom: 2.7vw;
        }

        .w-full.h-full.rounded-lg.shadow-lg.object-cover {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          border-radius: 1.9vw;
          box-shadow: 0 0.5vw 2.1vw rgba(0,0,0,0.04);
          object-fit: cover;
        }

        .relative.w-full {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
        }

        .fixed.inset-0.z-50.flex.items-center.justify-center {
          align-items: center;
          justify-content: center;
          padding: 0;
          z-index: 300;
        }

        .relative.w-[80vw].max-w-4xl.z-10 {
          width: 100vw;
          max-width: 100vw;
          border-radius: 0;
          margin: 0;
          background: #fff;
          box-shadow: none;
        }

        .nav-button {
          width: 10.7vw;
          height: 10.7vw;
          font-size: 3.2vw;
          top: 50%;
          background: #E45310;
          color: #fff;
          border-radius: 50%;
          z-index: 10;
        }

        .nav-button.left {
          left: 2.7vw;
        }

        .nav-button.right {
          right: 2.7vw;
        }

        .absolute.-top-[5vh].right-0.text-white.text-2xl {
          top: 2.7vw;
          right: 2.7vw;
          font-size: 4vw;
          color: #E45310;
          background: #fff;
          border-radius: 50%;
          width: 9.6vw;
          height: 9.6vw;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .about-row h2 {
          font-weight: bold;
          text-align: center;
          font-size: 4.5vw;
          margin-top: 4.8vw;
          margin-bottom: 2.9vw;
          color: #E45310;
        }

        .main-mobile-layout {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* When a project is selected, fix the timeline area at the bottom */
        .project-selected .timeline-area {
          position: fixed;
          bottom: 0;
          width: 100%;
          z-index: 100;
        }
      }

      @media (max-width: 375px) {
        body, .h-screen, .font-sans, .text-gray-800, .bg-[#3F3124] {
          font-size: 4.3vw;
        }

        header h1, .text-3xl {
          font-size: 5.3vw;
        }

        header p, .text-2xl {
          font-size: 4vw;
        }

        .about-title {
          font-size: 5.5vw;
          margin-top: 1.5vw;
          margin-bottom: 2vw;
        }

        .about-description {
          font-size: 4.1vw;
        }

        .contact-item {
          font-size: 3.6vw;
        }

        .contact-item svg {
          font-size: 5vw;
        }

        .project-number {
          font-size: 5.6vw;
          width: 13vw;
        }

        .project-details {
          font-size: 4.3vw;
        }

        .project-details h3 {
          font-size: 4.8vw;
        }

        .project-details p {
          font-size: 4.1vw;
        }

        .project-details img {
          width: 10vw;
          height: 6vw;
        }

        .nav-button {
          width: 11.2vw;
          height: 11.2vw;
          font-size: 3.5vw;
        }

        .project-timeline-heading-mobile {
          font-size: 4.1vw;
          width: 40%;
        }

        .project-timeline-heading-mobile p {
          font-size: 2.3vw;
        }

        .project-timeline-list {
          max-height: 35vh;
          width: 60%;
        }

        .content-container {
          margin-top: 16vh;
          padding-bottom: 0vh;
          height: calc(100vh - 16vh);
        }

        .grid.grid-cols-2.gap-4 {
          max-height: 30vh;
        }

        .text-[#E45310].text-2xl.font-bold {
          font-size: 5.5vw;
        }

        .flex.flex-wrap.gap-x-10.gap-y-2.text-sm.text-gray-700.font-poppins.mt-4 {
          font-size: 3.6vw;
        }
      }
    `}
  </style>
);

export default Styles;
