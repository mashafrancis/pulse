import './styles.css';
import { Toolbar as CMSToolbar } from '@pulse/cms/components/toolbar';
import { DesignSystemProvider } from '@pulse/design-system';
import { fonts } from '@pulse/design-system/lib/fonts';
import { cn } from '@pulse/design-system/lib/utils';
import { Toolbar } from '@pulse/feature-flags/components/toolbar';
import { getDictionary } from '@pulse/internationalization';
import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang="en"
      className={cn(fonts, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <body>
        <DesignSystemProvider>
          <Header dictionary={dictionary} />
          {children}
          <Footer />
        </DesignSystemProvider>
        <Toolbar />
        <CMSToolbar />
      </body>
    </html>
  );
};

export default RootLayout;
