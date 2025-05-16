import { Page, Content, Header } from '@backstage/core-components';
import {
  HomePageStarredEntities,
  HomePageToolkit,
  HomePageTopVisited,
  HomePageRecentlyVisited,
  HomePageRandomJoke,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
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

const HomeHeader = () => {
  let lang = ["English"]
  return (
    <Stack spacing={1} direction={"column"}>
      Home
      <Typography variant="body2" color="inherit" style={{paddingTop: "10px"}}>
        <WelcomeTitle language={lang} />
      </Typography>
    </Stack>
  )
};

export const HomePage = () => {
    return (
        <SearchContextProvider>
            <Page themeId="home">
                <Header title={<HomeHeader />} />
                <Content>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid container item xs={12}>
                            <Grid item xs={4} container spacing={2} direction="column">
                                <Grid item>
                                    <HomePageRecentlyVisited />
                                </Grid>
                                <Grid item>
                                    <HomePageTopVisited />
                                </Grid>
                                <Grid item>
                                    <HomePageRandomJoke />
                                </Grid>
                            </Grid>

                            <Grid item xs={8} container spacing={2} direction="column">
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
