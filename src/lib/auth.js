import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './utils';
import { UserModel } from './model';
import bcrypt from 'bcryptjs'
const login=async ( credentials ) =>
{
        try
        {
                await connectToDB();
                const user=await UserModel.findOne( { username: credentials.username } )
                if ( !user )
                {
                        return { error: "Wrong Credentials" };
                }
                const isPasswordCorrect=await bcrypt.compare( credentials.password, user.password );

                if ( !isPasswordCorrect )
                {
                        return { error: "Invalid Password " };
                }

                return user;
        } catch ( err )
        {
                console.log( err );
                return { error: "Failed To Login" };
        }
}
const options={
        providers: [
                GithubProvider( {
                        clientId: process.env.GITHUB_CLIENT_ID,
                        clientSecret: process.env.GITHUB_CLIENT_SECRET,
                } ),
                CredentialsProvider( {
                        async authorize ( credentials )
                        {
                                try
                                {
                                        const user=await login( credentials );
                                        return user;
                                } catch ( err )
                                {
                                        return null;
                                }
                        }
                } )
        ],
        callbacks: {
                async signIn ( user, account, profile )
                {
                        console.log( "CALLBACK INFORMATION:" );
                        console.log( user, account, profile );
                        if ( account?.provider=='github' )
                        {
                                connectToDB();
                                try
                                {
                                        const user=UserModel.findOne( { email: profile.email } );
                                        if ( !user )
                                        {
                                                const newUser=new UserModel( {
                                                        username: profile.login
                                                        , email: profile.email,
                                                        image: profile.avatar_url,

                                                } );
                                                await newUser.save();
                                        }
                                } catch ( err )
                                {
                                        console.log( err );

                                        return false;
                                }
                        }
                        return true;
                }
        }
};

export const { handlers: { GET, POST }, auth, signIn, signOut }=NextAuth( options );
