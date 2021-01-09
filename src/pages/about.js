import React, { Fragment } from 'react';
import PageHead from '../components/page-head';
import Box from '../components/box';
import Media from '../components/media';

const headerProps = {
  title: 'About Me',
  description: 'About me! (Basically a CV / LinkedIn Profile)'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <div className='container p-3'>

        <div className='columns'>
          <div className='column is-one-quarter-desktop is-one-third'>
            <Box noPadding>
              <img src='/images/boi-v2.jpg' />
              <div className='px-4 pb-4'>
                <h1 className='title is-3'>Spencer Newton</h1>
                <hr />
                <h2 className='subtitle is-5'>
                  🎓 M.Phys Space Science and Robotics
                </h2>
                <h2 className='subtitle is-5'>👨‍💻 Software Developer</h2>
              </div>
            </Box>
            <Box>
              <h1 className='title'>Skills</h1>
              <hr />
              <h2 className='subtitle has-text-info'>Recent</h2>
              <ul>
                <li>
                  React, Node, Javascript
                </li>
                <li>
                  HTML, CSS, SASS
                </li>
                <li>
                  SQL, MongoDB, Unix
                </li>
                <li>
                  CMS Systems (Content Stack)
                </li>
                <li>
                  CI / CD Systems (Heroku, Team City)
                </li>
                <li>
                  PaaS Systems (Cloud Foundry)
                </li>
              </ul>
              <h2 className='subtitle has-text-info'>
                History
              </h2>
              <ul>
                <li>
                  C#, .Net, Unit
                </li>
                <li>
                  C, C++, Java
                </li>
              </ul>
            </Box>
            <Box>
              <h1 className='title'>Interests</h1>
              <hr />
              <h2 className='subtitle has-text-info'>
                Professional
              </h2>
              <ul>
                <li>
                  Artificial Intelligence
                </li>
                <li>
                  Graphics Programming
                </li>
                <li>
                  Game Development
                </li>
                <li>
                  Game Design
                </li>
              </ul>
              <hr />
              <h2 className='subtitle has-text-info'>Personal</h2>
              <ul>
                <li>
                  Video Games
                </li>
                <li>
                  Music (Drumming & Piano)
                </li>
                <li>
                  Reading
                </li>
                <li>
                  Bouldering
                </li>
                <li>
                  Jogging
                </li>
                <li>
                  Calisthenics
                </li>
              </ul>
            </Box>
          </div>
          <div className='column is-three-quarters-desktop is-two-thirds'>
            <Box>
              <div className='content'>
                <h1 className='title'>Profile</h1>
                <hr />
                <p>
                  A highly focused and dedicated Master of Physics and Computer Science graduate (2:1) with skills in programming, maths, and physics. Has an analytical and logical way of thinking, enjoys the aspect of problem-solving with others using modern technology, and is keen to apply new development techniques in real-world applications. Started career employed at Credit Suisse in Switzerland, developing complex financial software to handle accounts and loans for UHNWI. Currently employed as a Web Developer at Sky, developing web applications to help customers troubleshoot their issues digitally instead of through call centers.</p>
                <p>
                  Pursues interest in programming to create applications as a hobby, including video games. In the past has developed a mobile-based castle-defence game using Unity and C# with friends from University. Assisted in building a small planetary rover for the physics department at university, which was used to test space mission instrumentation such as camera systems and robotic arms. Has used specialist knowledge in both programming and physics to plan and complete complex tasks with others, such as to undertake physics experiments and develop software.
                </p>
              </div>
            </Box>
            <Box>
              <h1 className='title'>Experience</h1>
              <hr />
              <Media side={{ imgSrc: '/icons/sky-logo-small-rgb-128x128.png' }} head={{title: 'Web Developer', titleExtra: '2018 - Present', subtitle: 'Sky'}}>
                <ul>
                  <li>Full stack web development with React, Node, Javascript.</li>
                  <li>Developed systems to aid a variety of different &apos;expert users&apos; (e.g. Call centre agents, engineers, sales staff) within Sky in accessing help content and performing their role.</li>
                  <li>Implemented employee authentication for said &apos;expert users&apos; with Microsoft Azure Active Directory.</li>
                  <li>Developed REST APIs to store &apos;Expert User&apos; details using postgresql (e.g. New notifications, bookmarks, survey results).</li>
                  <li>Worked in an Agile environment across multiple teams (Scrum / Kanban).</li>
                  <li>Relied upon to investigate and solve production issues and bugs.</li>
                </ul>
              </Media>
              <hr />
              <Media side={{ imgSrc: '/icons/credit-suisse-logo-256x256.png' }} head={{title: 'Junior .NET Developer', titleExtra: '2017 - 2018',  subtitle: 'Credit Suisse'}}>
                <ul>
                  <li>Developed complex financial software using different technologies: C#, WCF, Excel, and SQL.</li>
                  <li>Worked on software provided by an external software company, and worked with the external team to request new features and report issues with the software.</li>
                  <li>Conducted basic maintenance of server-side applications.</li>
                  <li>Troubleshooted production server problems with the support team.</li>
                  <li>Developed software with a large team of co-workers using the Scrum agile methodology.</li>
                  <li>Communicated with colleagues in different locales and cultures, including Switzerland, Poland, Singapore, and China.</li>
                  <li>Collaborated with developers and business analysts from a variety of different teams to implement new features with strict deadlines.</li>
                  <li>Carefully handled confidential data that could not leave Switzerland or the Bank.</li>
                </ul>
              </Media>
              <hr />

              <Media side={{ imgSrc: '/icons/fdm-logo-256x256.png' }} head={{title: 'Junior Software Developer', titleExtra: '2016 - 2018', subtitle: 'FDM Group'}}>
                <p className='mb-1'>
                  The FDM Group Academy consists of 3 - 4 months of training, then 2 years of contractual based work at various different clients (Credit Suisse and Sky). The training courses that I partook in taught the following modules:
                </p>
                <ul>
                  <li>Professional Skills</li>
                  <li>SQL</li>
                  <li>UNIX</li>
                  <li>Excel / VBA</li>
                  <li>Web App Design</li>
                  <li>Software Design and Methodologies</li>
                  <li>Essential .NET and C#</li>
                  <li>Data Access</li>
                  <li>Web Programming, Severs, and AJAX</li>
                  <li>Windows Communication Foundation (WCF)</li>
                  <li>Windows Presentation Foundation (WPF)</li>
                </ul>
              </Media>
              <hr />

            </Box>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
