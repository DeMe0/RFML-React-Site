import React from "react";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import { Fab } from "@mui/material";

const Docs = () => {
  return (
    <div id="docs">
      <div id="gettingStarted">
        <h1 id="title">React Federated Module Loader</h1>
        <div id="gettingStartedFlexbox">
          <h2 className="gettingStarted">Getting Started</h2>
        </div>
        <h3>Installation</h3>
        <p>
          You can install <code>react-federated-module-loader</code> with either
          yarn or npm.
        </p>
        <br />
        <pre>
          <code className="node">
            {`npm install --save react-federated-module-loader # npm\n`}
            {`yarn add react-federated-module-loader # yarn`}
          </code>
        </pre>
      </div>
      <div id="basicUsage">
        <h2>Basic Usage</h2>
        <h3>What this is used for</h3>
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
        <h3>Who this is for</h3>
        <p>Anybody who ...</p>
        <ul>
          <li>
            Wants to make use of remotely hosted code inside a project that
            currently uses webpack 4
          </li>
        </ul>
        <h3>Why you would use it</h3>
        <ul>
          <li>
            you want to keep your logic separate from your webpack 4 project as
            you approach a micro-frontend architecture
          </li>
          <li>
            you have a few common utilities that you use across many of your
            projects and you'd like to manage them all in one place and still
            have them be accessible to all of your projects, without having to
            set up Module Federation in all your projects
          </li>
          <li>
            you want to manage all the user facing content or assets in one
            place and still have them be accessible across all of your projects,
            without having to set up Module Federation in all your projects
          </li>
          <li>
            you are experimenting with using Module Federation for
            micro-frontends, and you are taking a 'strangler pattern' approach,
            and you do not yet know if you want to update your current host/app
            shell project to webpack 5
          </li>
        </ul>
        <h3>What this is NOT used for</h3>
        <p>todo</p>
        <h3>Implementation</h3>
        <p>
          This package supplies a single react hook,{" "}
          <code>useFederatedModule</code> and it's implementation can be found
          below.
        </p>
        <p>In your host webpack 4.x package</p>
        <pre>
          <code className="language-js">
            {`import React from 'react'\n`}
            {`import { useFederatedModule } from 'react-federated-module-loader'\n`}
            {`\n`}
            {`const App = (props) => {\n`}
            {`\t/** url: string; the location of your hosted remoteEntry.js file */\n\n`}
            {`\tconst url = 'http:/localhost:3001/remoteEntry.js';\n\n`}
            {`\t/**\n`}
            {`\t * scope: string; this corresponds to the 'name' of the remote webpack bundle\n`}
            {`\t * i.e. the value of the 'name' key in your ModuleFederationPlugin configuration\n`}
            {`\t */\n`}
            {`\tconst scope = 'myRemoteBundleName';\n\n`}
            {`\t/** module: string; the name of the remote module you are consuming */\n`}
            {`\tconst moduleName = './MyModule';\n\n`}
            {`\tconst {\n`}
            {`\t\tscriptReady,\n`}
            {`\t\tscriptFailed,\n`}
            {`\t\terror,\n`}
            {`\t\tisLoading,\n`}
            {`\t\tdata,\n`}
            {`\t} = useFederatedModule(url, scope, moduleName);\n\n`}
            {`\tif (scriptFailed || error) {\n`}
            {`\t\t// handle error state if remote isnt available\n`}
            {`\t}\n\n`}
            {`\tif (isLoading) {\n`}
            {`\t\treturn <span>Loading...</span>\n`}
            {`\t}\n\n`}
            {`\treturn (\n`}
            {`\t\t<div>\n`}
            {`\t\t\t{/** the presumption is the remote module has such properties */}\n`}
            {`\t\t\t{data.pageContent.home.title}\n`}
            {`\t\t</div>\n`}
            {`\t)\n`}
            {`}`}
          </code>
        </pre>
        <p>
          In the remote Module Federation federated package's webpack.config.js
        </p>
        <pre>
          <code className="language-js">
            {`const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");\n`}
            {`const deps = require("./package.json").dependencies;\n`}
            {`module.exports = {\n`}
            {`...\n`}
            {`\tdevServer: {\n`}
            {`\t\tport: 3001,\n`}
            {`\t\tapiHistoryFallback: true,\n`}
            {`\t}\n`}
            {`...\n`}
            {`\tnew ModuleFederationPlugin({\n`}
            {`\t\tname: 'myRemoteBundleName',\n`}
            {`\t\tfilename: 'remoteEntry.js',\n`}
            {`\t\tremotes: {},\n`}
            {`\t\texposes: {\n`}
            {`\t\t\t'./MyModule': 'path/to/that/module'\n`}
            {`\t\t},\n`}
            {`\t\tshared: {\n`}
            {`\t\t\t...deps\n`}
            {`\t\t}\n`}
            {`\t})\n`}
            {`...\n`}
            {`}`}
          </code>
        </pre>
        <h4>Arguments</h4>
        <ol>
          <li>url: string; the location of your hosted remoteEntry.js file</li>
          <li>
            scope: string; this corresponds to the 'name' of the remote webpack
            bundle
          </li>
          <li>
            module: string; the name of the remote module you are consuming
          </li>
          <li>options?: UseFederatedModuleOptions</li>
          <li>
            <ol>
              <li>
                This is an object that allows you to configure certain
                properties of the hook.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div id="advancedUsage">
        <h2>Advanced Usage</h2>
        <h3>Options</h3>
        <h3>But wait, I'm a typescript developer...</h3>
        <p>
          Hell yeah you are. We thought of you. <code>useFederatedModule</code>{" "}
          is a generic function that allows you to pass a type to it, which is
          used to provide a type guard to the resolution of the promise. So you
          can reliably type the data you're consuming. It looks as follows:
        </p>
        <pre>
          <code className="language-js">
            {`import React from 'react'\n`}
            {`import { useFederatedModule } from 'react-federated-module-loader'\n\n`}
            {`interface FederatedUtilityModule {\n`}
            {`\tmyUtilityFunction: (x: number, y: number) => number;\n`}
            {`}\n\n`}
            {`const App = (props) => {\n`}
            {`\t...\n`}
            {`\tconst {\n`}
            {`\t\tscriptReady,\n`}
            {`\t\tscriptFailed,\n`}
            {`\t\terror,\n`}
            {`\t\tisLoading,\n`}
            {`\t\tdata\n`}
            {`\t} = useFederatedModule<FederatedUtilityModule>(url, scope, moduleName);\n\n`}
            {`\tif (scriptFailed || error) {\n`}
            {`\t\t// handle error state if remote isnt available\n`}
            {`\t}\n\n`}
            {`\tif (isLoading) {\n`}
            {`\t\treturn <span>Loading...</span>\n`}
            {`\t}\n\n`}
            {`\tconst { myUtilityFunction } = data;\n\n`}
            {`\treturn (\n`}
            {`\t\t<div>\n`}
            {`\t\t\t{myUtilityFunction(3, 5)}\n`}
            {`\t\t</div>\n`}
            {`\t)\n`}
            {`}\n`}
          </code>
        </pre>
        <h4>Patterns</h4>
        <h5>Federated Dictionary</h5>
        <p>
          This is an expansion of the backend "Service Dictionary" concept
          offered by Luca Mezzalira in 'Building Microfrontends'.
        </p>
        <p>todo</p>
        <h5>Page Hydration Patterns</h5>
      </div>
      <div id="inspiration">
        <h2>Inspiration</h2>
        <p>
          <em>Module Federation</em>{" "}
          <a
            href="https://webpack.js.org/concepts/module-federation/"
            rel="nofollow"
          >
            !docs
          </a>
        </p>
        <p>
          Module Federation is one of the most promising emerging technologies
          in the frontend landscape and if you are unfamiliar with Module
          Federation, I highly recommend browsing the documentation mentioned
          above, or going even further and reading some of the literature tagged
          in the appendix. This package is intended to be used in conjunction
          with microfrontends/projects that use Module Federation, and is
          supposed to provide ease of use for developers who want to begin
          experimenting with remote hosted code from inside an existing project
          without the hassle of setting up a bulk of the logic that is necessary
          to use it from a webpack 4 project, or who doesn't want to go through
          the hassle of migrating that project to webpack 5.
        </p>
        <h3>Credits & Funding</h3>
        <p>
          This package leans largely on the work of Jack Herrington and Zach
          Jackson, who provided the implementations for the{" "}
          <code>useDynamicScript</code> hook that the{" "}
          <code>useFederatedModule</code> hook relies on for appending the
          remoteEntry.js script tag to the document and loading the exposed
          modules. The implementation of appending the loaded module to the
          window object can also be attributed to work they've made available in{" "}
          <a href="https://module-federation.github.io/" rel="nofollow">
            !Practical Module Federation
          </a>
          , which I would recommend to anyone who sees the promise of a cohesive
          microfrontend architecture.
        </p>
        <p>
          You'll noticed there's no funding for this library, and this library
          will never ask for funding. I just want Module Federation to be
          available to all, with minimal effort, and maximum ease of use. If
          you're feeling particularly spendy, I'd once again suggest purchasing
          the above book.
        </p>
        <h3>Appendix</h3>
        <h5>Learn More About Module Federation & Microfrontends</h5>
        <p id="appendixLinks">
          <em>Module Federation Docs</em>{" "}
          <a
            href="https://webpack.js.org/concepts/module-federation/"
            rel="nofollow"
          >
            !docs
          </a>
          <br />
          <em>Module Federation Youtube Playlist</em>{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLNqp92_EXZBLr7p7hn6IYa1YPNs4yJ1t1"
            rel="nofollow"
          >
            !youtube
          </a>
          <br />
          <em>Building Microfrontends</em>{" "}
          <a
            href="https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/"
            rel="nofollow"
          >
            !link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Docs;
