import React from 'react';
import PropTypes from 'prop-types';
import { Row, Grid, Column } from '../Grid';
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from './Footer.module.scss';

const Footer = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;
  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column colLg={2} colMd={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content buildTime={site.buildTime} />
          </Column>
        </Row>
        <Row>
          <Column colLg={3}>
            <Logo />
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

const AppDLogo = () => (
  <svg
    className={logo}
    width="152"
    height="20"
    xmlns="http://www.w3.org/2000/svg">
      <path d="M34.46 14.706h1.545l-4.077-9.47h-1.584l-4.077 9.47h1.545l.857-1.989h4.921zm-1.402-3.369h-3.844l1.922-4.505zm8.424-4.721h2.752c2.39 0 2.403 3.788 0 3.788h-2.752zm2.752 5.181c4.35-.027 4.337-6.575 0-6.575-1.389 0-2.817.014-4.207.014v9.47h.589c.478 0 .866-.404.866-.903v-2.006zm8.84-5.181h2.753c2.389 0 2.402 3.788 0 3.788h-2.753zm2.753 5.181c4.35-.027 4.337-6.575 0-6.575-1.39 0-2.818.014-4.207.014v9.47h.588c.478 0 .866-.404.866-.903v-2.006zm7.385-6.561v9.47h3.441c3.181 0 4.61-2.422 4.558-4.816-.04-2.34-1.455-4.654-4.558-4.654zm1.441 1.447h2c2.143 0 3.077 1.597 3.116 3.193.04 1.664-.896 3.369-3.116 3.369h-2zM75.77 5.236h-1.727v.068l3.506 5.52v3.882h.588c.479 0 .866-.404.866-.903v-2.98l3.61-5.52v-.067H80.86l-2.584 4.18zm11.98 0h-1.116v9.47h.601c.479 0 .866-.404.866-.903v-5.78l5.155 6.683h1.104v-9.47h-.588c-.479 0-.866.404-.866.902v5.835zm18.818 9.47h1.545l-4.077-9.47h-1.584l-4.078 9.47h1.546l.857-1.989h4.92l.87 1.989zm-1.403-3.369h-3.843l1.922-4.505zm14.878 3.382h.588c.478 0 .866-.404.866-.902V5.25h-1.688l-2.986 4.437-3-4.437h-1.688v9.47h.589c.478 0 .865-.405.865-.903V7.455l3.052 4.477h.311l3.09-4.477v7.264zm31.525-8.157c-.766-1.272-2.078-1.597-3.389-1.597-1.636 0-3.519.758-3.506 2.72 0 2.029 1.714 2.502 3.52 2.76 1.272.175 2.323.527 2.323 1.555 0 1.19-1.207 1.57-2.298 1.57-1.052 0-2.181-.407-2.83-1.556l-1.091.757c.831 1.596 2.168 2.151 3.908 2.151 1.896 0 3.753-.798 3.766-2.922 0-2.124-1.78-2.665-3.649-2.935-1.194-.176-2.207-.433-2.207-1.353 0-.907.883-1.434 2.103-1.434.948.013 1.818.405 2.246 1.055zm-25.029-.424v8.568h.575c.478 0 .866-.404.866-.903V5.236h-.575c-.479 0-.866.404-.866.902zm10.641 7.296c-1.836 0-3.324-1.55-3.324-3.463s1.488-3.463 3.324-3.463c.918 0 1.748.388 2.35 1.015l.99-1.033a4.615 4.615 0 0 0-3.34-1.443c-2.61 0-4.726 2.204-4.726 4.924s2.116 4.924 4.726 4.924a4.615 4.615 0 0 0 3.34-1.444l-.99-1.032a3.247 3.247 0 0 1-2.35 1.015zM7.507 17.542L2.19 5.982A6.807 6.807 0 0 0 .1 10.923c0 3.698 2.877 6.696 6.427 6.696.333 0 .661-.026.981-.077zM5.34 4.343c.385-.075.78-.116 1.186-.116 3.55 0 6.427 2.998 6.427 6.696a6.797 6.797 0 0 1-2.245 5.083l1.58 3.434c2.565-1.887 4.241-4.997 4.241-8.517C16.53 5.167 12.051.501 6.526.501A9.63 9.63 0 0 0 3.76.908z"  fill="#ccd2d7"/>
  </svg>
);

const DefaultContent = () => (
  <p>
    Shadow this content by importing the theme Footer and supplying your own
    props.
  </p>
);

Footer.defaultProps = {
  links: [
    firstCol: { href: 'emailto:andrew.hock@appdyanmics.com', linkText: 'Questions, Comments, Feedback?' },
    secondCol: { href: 'http://slack.com', linkText: '#Slack Channel' }],
  Content: DefaultContent,
  Logo: AppDLogo,
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

export default Footer;
