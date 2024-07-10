import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './utils';
import { UserModel } from './model';

const options={
        providers: [
                GithubProvider( {
                        clientId: process.env.GITHUB_CLIENT_ID,
                        clientSecret: process.env.GITHUB_CLIENT_SECRET,
                } ),
                CredentialsProvider
        ],
        callbacks: {
                async signIn ( user, account, profile )
                {
                        console.log( "CALLBACK INFORMATION:" );
                        console.log( user, account, profile );
                        if ( account.provider=='github' )
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
