import { useStore } from '../src/store';
import Nav from './components/Navigation/nav';
import './globals.css';

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
  const stuff = await getStuff();
  console.log(stuff);
  useStore.setState({
    name: stuff.name,
    slug: stuff.slug,
    logo: stuff.logo,
    banner: stuff.banner,
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
