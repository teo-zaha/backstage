import { Page, Content, Header } from '@backstage/core-components';
import {
  HomePageStarredEntities,
  HomePageToolkit,
  HomePageTopVisited,
  HomePageRecentlyVisited,
  HomePageRandomJoke,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { TemplateBackstageLogoIcon } from '@backstage/plugin-home';

export const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

export const tools = [
  {
    url: 'https://backstage.io/docs',
    label: 'Docs',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage',
    label: 'GitHub',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md',
    label: 'Contributing',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://backstage.io/plugins',
    label: 'Plugins Directory',
    icon: <TemplateBackstageLogoIcon />,
  },
  {
    url: 'https://github.com/backstage/backstage/issues/new/choose',
    label: 'Submit New Issue',
    icon: <TemplateBackstageLogoIcon />,
  },
];

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

export const HomePage = () => {
    let lang = ["English"]

    return (
        <SearchContextProvider>
            <Page themeId="home">
                <Header title={<WelcomeTitle language={lang} />} />
                <Content>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid container item xs={12}>
                            <Grid item xs={3} container spacing={2} direction="column">
                                <Grid item>
                                    <HomePageTopVisited />
                                </Grid>
                                <Grid item>
                                    <HomePageRecentlyVisited />
                                </Grid>
                                <Grid item>
                                    <HomePageRandomJoke />
                                </Grid>
                            </Grid>

                            <Grid item xs={9} container spacing={2} direction="column">
                                <Grid item>
                                    <HomePageToolkit tools={tools} />
                                </Grid>
                                <Grid item>
                                    <HomePageStarredEntities />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Content>
            </Page>
        </SearchContextProvider>
    );
};
