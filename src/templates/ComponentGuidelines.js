import React from 'react';
import slugify from 'slugify';

import Utils from '../components/Utils';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import NextPrevious from '../components/NextPrevious';
import PageTabs from '../components/PageTabs';
import Main from '../components/Main';

const ComponentGuidelines = ({ pageContext, children, location, Title }) => {
  const { frontmatter = {}, relativePagePath, titleType } = pageContext;
  const { tabs, title, theme, description, keywords } = frontmatter;

  // let gatsby handle prefixing
  const slug = pathPrefix
    ? location.pathname.replace(pathPrefix, '')
    : location.pathname;

  const getCurrentTab = () => {
    if (!tabs) return '';
    return (
      slug.split('/').filter(Boolean).slice(-1)[0] ||
      slugify(tabs[0], { lower: true })
    );
  };

  const currentTab = getCurrentTab();

  return (
    <Layout
      tabs={EXAMPLES, GUIDELINES, CODE}
      homepage={false}
      theme={theme}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
    >
      <PageHeader title={Title ? <Title /> : title} label="label" tabs={tabs} />
      {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      <Main padded>
        {children}
      </Main>
      <NextPrevious
        pageContext={pageContext}
        location={location}
        slug={slug}
        tabs={tabs}
        currentTab={currentTab}
      />
      <Utils />
    </Layout>
  );
};

export default ComponentGuidelines;
