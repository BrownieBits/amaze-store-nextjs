import { useStore } from '../src/store';
import Nav from './components/Navigation/nav';
import './globals.css';

const getStore = async () => {
  const res = await fetch(
    'https://commerce.teespring.com/v1/stores?slug=moriah-elizabeth'
  );
  return res.json();
};
const getTheme = async () => {
  const res = await fetch(
    'https://kxqd7cf966.execute-api.us-west-1.amazonaws.com/dev/themes?siteKey=moriah-elizabeth'
  );
  return res.json();
};
const getStuff = async () => {
  const url_base =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://shiny-kringle-256047.netlify.app/';
  const res = await fetch(`${url_base}/api/hello`);
  return res.json();
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await getStore();
  const theme = await getTheme();
  const stuff = await getStuff();
  console.log(stuff);
  useStore.setState({
    name: store.name,
    slug: store.slug,
    logo: theme.content.header.logo.replace(
      '{{assetPath}}',
      '//premium-storefronts.s3.amazonaws.com/storefronts/moriah-elizabeth/assets'
    ),
    banner: theme.content.heroBanner.containerBg.replace(
      '{{assetPath}}',
      '//premium-storefronts.s3.amazonaws.com/storefronts/moriah-elizabeth/assets'
    ),
  });
  return (
    <html lang="en">
      <head />
      <body>
        <Nav />
        <div>{stuff.name}</div>
        {children}
      </body>
    </html>
  );
}
