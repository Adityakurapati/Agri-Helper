import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getServerSession } from '../lib/ServerNavbar';

const inter=Inter( { subsets: [ "latin" ] } );

export const metadata={
        title: {
                default: "Next.js 14 Homepage",
                template: "%s | Next Js 14"
        },
        description: "Just Next",
};

export default async function RootLayout ( { children } )
{
        const session=await getServerSession();
        return (
                <html lang="en">

                        <body className={ inter.className }>
                                <div className="container">
                                        <Navbar session={ session } />
                                        { children }
                                        {/* <Footer /> */ }
                                </div>
                        </body>
                </html>
        );
}
