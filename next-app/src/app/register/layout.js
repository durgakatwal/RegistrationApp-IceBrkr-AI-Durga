export const metadata = {
    title: 'Register | IceBrkr AI',
    description: 'Fill out the quick registration form to join IceBrkr AI. It’s fast, secure, and powered by Supabase.',
    keywords: ['IceBrkr AI Register', 'User Signup', 'AI Form', 'Supabase'],
    openGraph: {
      title: 'Register | IceBrkr AI',
      description: 'Join the AI revolution with IceBrkr AI registration.',
      url: 'https://your-vercel-site.vercel.app/register',  // Replace with your live URL
      siteName: 'IceBrkr AI',
      images: [
        {
          url: '/og-image.png', // Example image for open graph
          width: 1200,
          height: 630,
          alt: 'Register at IceBrkr AI',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
  
  export default function RegisterLayout({ children }) {
    return (
      <div>
        <header>
          {/* Optional: Include a header for the registration section */}
          <h1>Register</h1>
        </header>
        <main>
          {children}  {/* This is where the page content (like the registration form) will go */}
        </main>
      </div>
    );
  }
  