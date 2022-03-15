import React from "react";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link, Fab } from "@mui/material";

const Home = () => {
  return (
    <div id="home">
      <div>
        <h1 id="intro">
          Load remote JS modules from a host app that does not use webpack 5!
        </h1>
        <h2 id="blurb">
          Improve utility across your micro-frontend structures.
        </h2>
        <Fab variant="extended" href="/docs" id="getStartedButton">
          <ArticleTwoToneIcon sx={{ mr: 1 }} />
          Get Started
        </Fab>
      </div>
      <div id="basicUsage">
        <div id="basicUsageFlexbox">
          <h2>Basic Usage</h2>
        </div>
        <h3>What this is used for?</h3>
        <p>
          This is used to load remote javascript modules from a host application
          that does not yet use Webpack 5.
          <br />
          <br />
          Module Federation provides a unique opportunity to more effectively
          construct your frontend architecture, or rather microfrontend
          architecture, and get the most reuse out of your code. The concept of
          microfrontends has been gaining a lot of traction, and while sharing
          components from one repository to another is not entirely a novel
          concept, Module Federation introduces some awesome new capabilities to
          expand well beyond that. A phenomenal and promising aspect of Module
          Federation is the ability to share any valid javascript* code that can
          be bundled by webpack, which dramatically expands the breadth of what
          you can reuse across repositories and how you can begin to organize
          your FE app.
          <br />
          <br />
          <em>
            *Most things that webpack can bundle safely, with the help of
            loaders, can be federated through Module Federation
          </em>
        </p>
      </div>
      <footer id="footer">
        <Link href="https://github.com/nicholasgalante1997">
          <GitHubIcon />
        </Link>
        <Link>
          <LogoDevIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/nicholas-galante-1963041a2/">
          <LinkedInIcon />
        </Link>
      </footer>
    </div>
  );
};

export default Home;
